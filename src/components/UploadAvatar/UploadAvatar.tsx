import { useEffect, useRef, useState } from 'react'
import defaultProfileAvatar from '../../assets/images/defaultProfileAvatar.svg'

type UploadAvatarProps = {
  initialAvatar?: string | File | null // Додаємо File до типів
  onChange: (file: File) => void
  error?: string
}

const UploadAvatar = ({ initialAvatar, onChange, error }: UploadAvatarProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [preview, setPreview] = useState<string | null>(null)

  // Обробляємо різні типи initialAvatar
  useEffect(() => {
    if (initialAvatar instanceof File) {
      const url = URL.createObjectURL(initialAvatar)
      setPreview(url)

      return () => URL.revokeObjectURL(url)
    } else {
      setPreview(initialAvatar || null)
    }
  }, [initialAvatar])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    console.log({ file })

    if (file) {
      // Спочатку очищаємо попередній URL, якщо він існує
      preview && URL.revokeObjectURL(preview)
      const url = URL.createObjectURL(file)
      setPreview(url)
      onChange(file)
    }
  }

  return (
    <div className="avatar-upload">
      <input
        type="file"
        ref={inputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
      <div onClick={() => inputRef.current?.click()}>
        {preview ? (
          <img src={preview} alt="User avatar" className="w-[31.45%]" />
        ) : (
          <img src={defaultProfileAvatar} alt="Default avatar" className="default-avatar" />
        )}
      </div>

      {error && <div className="error">{error}</div>}
    </div>
  )
}

export default UploadAvatar
