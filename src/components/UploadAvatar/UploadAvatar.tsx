import { useEffect, useRef, useState } from 'react'
import defaultProfileAvatar from '../../assets/images/defaultProfileAvatar.svg'
import editIcon from '../../assets/images/editIcon.svg'

type UploadAvatarProps = {
  initialAvatar?: string | File
  onChange: (file: File) => void
  error?: string
}

const UploadAvatar = ({ initialAvatar, onChange, error }: UploadAvatarProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [preview, setPreview] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file) {
      preview && URL.revokeObjectURL(preview)
      const url = URL.createObjectURL(file)
      setPreview(url)
      onChange(file)
    }
  }

  useEffect(() => {
    if (initialAvatar instanceof File) {
      const url = URL.createObjectURL(initialAvatar)
      setPreview(url)

      return () => URL.revokeObjectURL(url)
    } else if (typeof initialAvatar === 'string') {
      setPreview(initialAvatar)
    } else {
      setPreview(null)
    }
  }, [initialAvatar])

  return (
    <div className="avatar-upload">
      <input
        type="file"
        ref={inputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
      <div
        className="relative mx-auto h-[173px] w-[173px] active:scale-95"
        onClick={() => inputRef.current?.click()}
      >
        {preview && !error ? (
          <img
            src={preview}
            alt="User avatar"
            className="h-full w-full rounded-[20px] object-cover object-[50%_20%]"
          />
        ) : (
          (initialAvatar && (
            <img
              src={initialAvatar as string}
              alt="Initial avatar"
              className="h-full w-full rounded-[20px] object-cover object-[50%_20%]"
            />
          )) || (
            <div className="flex h-[173px] w-[173px] items-center justify-center rounded-[20px] bg-[#F7F7F7]">
              <img className="h-[92.11px] w-[78.8px]" src={defaultProfileAvatar} alt="" />
            </div>
          )
        )}
        <img className="absolute right-[-2rem] top-[8rem]" src={editIcon} alt="" />
      </div>

      {error && <div className="text-red-500">{error}</div>}
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="mt-[1.44rem] rounded-[100px] border-0.5 border-[#2D336B] px-[1.81rem] py-[0.625rem] text-[#2D336B] hover:bg-[#2D336B] hover:text-white active:scale-95"
      >
        Завантажити фото
      </button>
    </div>
  )
}

export default UploadAvatar
