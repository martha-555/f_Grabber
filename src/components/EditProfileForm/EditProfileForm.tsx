import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { editProfileSchema } from '../../features/userValidation'
import { User } from '../../types/types'

import UploadAvatar from '../UploadAvatar/UploadAvatar'
import { data } from 'react-router-dom'
import ProfileInput from '../ProfileInput/ProfileInput'

type Props = {
  user: User
}

const EditProfileForm = ({ user }: Props) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({ resolver: zodResolver(editProfileSchema) })

  const currentFile = watch('avatar')

  // Обробник для файлу
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setValue('avatar', e.target.files[0], { shouldValidate: true })
    }
  }
  console.log({ user })
  const onSubmit = () => {
    console.log(555)
  }

  return (
    <>
      {user && (
        <div className="mt-[6.44rem]">
          <div className="text-px32 ml-[9.37rem] p-[0.625rem] font-medium">Редагувати профіль</div>
          <form
            className="mx-auto mt-[5.37rem] flex max-w-[74.86%]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <UploadAvatar
              initialAvatar={user.avatar} // Тепер приймає File, string або null/undefined
              onChange={(file) => setValue('avatar', file, { shouldValidate: true })}
              error={errors.avatar?.message}
            />
            <div className="flex flex-1 flex-col gap-[2.5rem] p-5">
              <div className="text-px24 mb-[2.5rem] ml-[1.25rem] mt-[1.25rem] p-[0.625rem] font-medium">
                Персональна інформація
              </div>
              <ProfileInput
                data={user.first_name}
                labelText="Ім'я"
                name="first_name"
                register={register}
                error={errors.first_name}
              />
              <ProfileInput
                data={user.last_name}
                labelText="Прізвище"
                name="last_name"
                register={register}
                error={errors.last_name}
              />
              <ProfileInput
                data={user.email}
                labelText="Email"
                name="email"
                register={register}
                error={errors.email}
              />
              <ProfileInput
                data={user.phone_number}
                labelText="Номер телефону"
                name="phone_number"
                register={register}
                error={errors.phone_number}
              />
              <ProfileInput
                data={user.location || ''}
                labelText="Місцезнаходження"
                name="location"
                register={register}
              />
            </div>
          </form>
          <button className="mr-10 rounded-xl border bg-gray-300 p-[10]" type="submit">
            Зберегти
          </button>
        </div>
      )}
    </>
  )
}

export default EditProfileForm
