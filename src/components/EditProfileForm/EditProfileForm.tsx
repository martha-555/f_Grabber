import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { editProfileSchema } from '../../features/userValidation'
import { User } from '../../types/types'

import UploadAvatar from '../UploadAvatar/UploadAvatar'

type Props = {
  user: User
}

const EditProfileForm = ({ user }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({ resolver: zodResolver(editProfileSchema) })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  const handleClick = () => {
    setIsOpen(true)
  }

  const currentFile = watch('avatar')

  // Обробник для файлу
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setValue('avatar', e.target.files[0], { shouldValidate: true })
    }
  }

  return (
    <>
      <div className="max-h-[100vh]">
        <button onClick={handleClick} className="rounded-xl border bg-gray-300 p-[10]">
          Редагувати профіль
        </button>
        {isOpen && (
          <form
            className="fixed absolute right-[24%] top-[25%] flex h-[50%] w-[50%] flex-col gap-10 border bg-gray-200 p-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <UploadAvatar
              initialAvatar={user.avatar} // Тепер приймає File, string або null/undefined
              onChange={(file) => setValue('avatar', file, { shouldValidate: true })}
              error={errors.avatar?.message}
            />
            <input
              className="border"
              defaultValue={user.first_name}
              {...register('first_name', { required: true })}
              placeholder="Ім'я"
            />
            {errors.first_name && <span>{errors.first_name.message}</span>}
            <input
              className="border"
              defaultValue={user.last_name}
              {...register('last_name', { required: true })}
              placeholder="Прізвище"
            />
            {errors.last_name && <span>{errors.last_name.message}</span>}

            <input
              className="border"
              defaultValue={user.email}
              {...register('email', { required: true })}
              placeholder="Email"
            />
            {errors.email && <span>{errors.email.message}</span>}
            <div>
              <button className="mr-10 rounded-xl border bg-gray-300 p-[10]" type="submit">
                Зберегти
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-xl border bg-gray-300 p-[10]"
              >
                Скасувати
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  )
}

export default EditProfileForm
