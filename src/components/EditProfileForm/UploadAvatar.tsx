import { useEffect, useRef, useState } from 'react'
import defaultProfileAvatar from '../../assets/images/defaultProfileAvatar.svg'
import editIcon from '../../assets/images/editIcon.svg'
import PhotoButton from './PhotoButton'

type UploadAvatarProps = {
  uploadedPhoto?: string | File
  onChange: (file: File) => void
  error?: string
  userPhoto: string
}

const UploadAvatar = ({ uploadedPhoto, onChange, error, userPhoto }: UploadAvatarProps) => {
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
    if (uploadedPhoto instanceof File) {
      const url = URL.createObjectURL(uploadedPhoto)
      setPreview(url)

      return () => URL.revokeObjectURL(url)
    } else if (typeof uploadedPhoto === 'string') {
      setPreview(uploadedPhoto)
    } else {
      setPreview(null)
    }
  }, [uploadedPhoto])

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
        className="relative mx-auto h-[175px] w-[175px] active:scale-95"
        onClick={() => inputRef.current?.click()}
      >
        {preview && !error ? (
          <img
            src={preview}
            alt="User avatar"
            className="h-full w-full rounded-[20px] object-cover object-[50%_20%]"
          />
        ) : (
          (userPhoto && (
            <img
              src={userPhoto}
              alt="Initial avatar"
              className="h-full w-full rounded-[20px] object-cover object-[50%_20%]"
            />
          )) || (
            <div className="flex h-[173px] w-[173px] items-center justify-center rounded-[20px] bg-[#F7F7F7]">
              <img className="h-[92.11px] w-[78.8px]" src={defaultProfileAvatar} alt="" />
            </div>
          )
        )}
        <img className="absolute right-[-2rem] top-[7.6rem]" src={editIcon} alt="" />
        {error && <div className="text-red-500">{error}</div>}
      </div>
      <div className="flex flex-col">
        <PhotoButton text="Завантажити фото" onClick={() => inputRef.current?.click()} />
        <PhotoButton text="Видалити фото" />
      </div>
    </div>
  )
}

export default UploadAvatar
