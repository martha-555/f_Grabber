import React, { useRef } from 'react'
import { UseFormSetValue, UseFormWatch } from 'react-hook-form'
import { TFormData } from '../../pages/AddProduct'
import imgPlaceholder from '../../assets/icons/photo-icon.svg'

// Описуємо пропси для компонента
interface AdsImageUploaderProps {
  setValue: UseFormSetValue<TFormData>
  watch: UseFormWatch<TFormData>
}

const AdsImageUploader: React.FC<AdsImageUploaderProps> = ({ setValue, watch }) => {
  // Реф для input type="file"
  const fileInputRef = useRef<HTMLInputElement>(null)
  // Отримуємо поточний масив зображень з форми
  const images = watch('images')

  // Обробка додавання файлів
  const handleFiles = (files: FileList | null) => {
    if (!files) return

    const newFiles = Array.from(files) // Перетворюємо FileList у масив
    const currentFiles = watch('images') || [] // Поточні файли

    // Об'єднуємо старі та нові файли, максимум 5
    const combined = [...currentFiles, ...newFiles].slice(0, 5)
    setValue('images', combined, { shouldValidate: true }) // Оновлюємо значення у формі
  }

  // Обробка події drag&drop
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    handleFiles(e.dataTransfer.files)
  }

  // Відкриваємо діалог вибору файлів
  const handleClick = () => {
    fileInputRef.current?.click()
  }

  // Очищення всіх зображень
  const clearImages = () => {
    setValue('images', [], { shouldValidate: true })
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  // Видалення одного зображення за індексом
  const handleRemoveImage = (index: number) => {
    const currentFiles = watch('images') || []
    const updated = [...currentFiles]
    updated.splice(index, 1) // Видаляємо елемент за індексом
    setValue('images', updated, { shouldValidate: true })
  }

  return (
    <div className="rounded-lg border border-dashed p-4 text-center">
      {/* Прев'ю зображень (максимум 5) */}
      <div className="mb-4 flex flex-wrap justify-start gap-2">
        {[...Array(5)].map((_, index) => {
          const image = images[index]

          return (
            <div
              key={index}
              className="relative flex h-28 w-40 items-center justify-center overflow-hidden rounded-lg border bg-slate-300"
            >
              {image ? (
                <>
                  {/* Відображаємо зображення (або url, або File) */}
                  <img
                    src={typeof image === 'string' ? image : URL.createObjectURL(image)}
                    alt="uploaded"
                    className="h-full w-full object-cover"
                  />
                  {/* Кнопка видалення зображення */}
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="absolute right-1 top-1 rounded-full bg-red-600 px-2 text-white"
                  >
                    ×
                  </button>
                </>
              ) : (
                // Плейсхолдер для порожньої "клітинки"
                <div
                  onDrop={handleDrop}
                  onDragOver={(e) => e.preventDefault()}
                  onClick={(e) => {
                    e.stopPropagation()
                    handleClick()
                  }}
                  className="cursor-pointer rounded-lg border border-dashed p-4 text-center"
                >
                  <img src={imgPlaceholder} alt="img" />
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Кнопка очищення всіх зображень */}
      <div className="flex justify-start gap-4">
        {images.length > 0 && (
          <button
            type="button"
            onClick={clearImages}
            className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          >
            Очистити
          </button>
        )}
      </div>

      {/* Прихований input для вибору файлів */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        hidden
        onChange={(e) => handleFiles(e.target.files)}
      />
    </div>
  )
}

export default AdsImageUploader
