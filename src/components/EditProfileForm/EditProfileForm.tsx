import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { editProfileSchema } from '../../features/userValidation'
import { TUserProfile } from '../../types/types'
import UploadAvatar from '../UploadAvatar/UploadAvatar'
import ProfileInput from '../ProfileInput/ProfileInput'

import defaultProfileAvatar from '../../assets/images/defaultProfileAvatar.svg'

type Props = {
  user: TUserProfile
}

const EditProfileForm = ({ user }: Props) => {
  const initialValues = {
    first_name: user?.first_name,
    last_name: user?.last_name,
    email: user?.email,
    phone_number: user?.phone_number,
    location: user?.location || '',
    avatar: user?.avatar || defaultProfileAvatar,
  }

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { isValid, isDirty, errors },
  } = useForm({
    resolver: zodResolver(editProfileSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: initialValues,
  })

  const editUserData = watch()

  const onSubmit = () => {
    const isDataChanged = JSON.stringify(editUserData) !== JSON.stringify(initialValues)
    console.log({ isDataChanged })
    console.log({ editUserData })
    console.log({ initialValues })

    if (isDataChanged) {
      console.log('є зміни')
    }
  }

  return (
    <>
      {user && (
        <div className="mt-[6.44rem]">
          <div className="ml-[9.37rem] p-[0.625rem] text-px32 font-medium">Редагувати профіль</div>
          <form className="mx-auto mt-[5.37rem] max-w-[74.86%]" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-[3.19rem]">
              <div className="rounded-[20px] px-[2.06rem] pt-5 shadow-blur">
                <UploadAvatar
                  initialAvatar={user.avatar}
                  onChange={(file) => setValue('avatar', file, { shouldValidate: true })}
                  error={errors.avatar?.message}
                />
              </div>
              <div className="flex flex-1 flex-col gap-[2.5rem] rounded-[20px] p-5 shadow-blur">
                <div className="mb-[2.5rem] ml-[1.25rem] mt-[1.25rem] p-[0.625rem] text-px24 font-medium">
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
            </div>
            <div className="mx-auto mb-[5.06rem] mt-[5.37rem] flex w-[49.44%] gap-[12.75rem]">
              <button
                onClick={() => reset()}
                className="flex-1 rounded-[20px] border border-[#2D336B] px-[3.69rem] py-[0.625rem] text-[#2D336B] active:scale-95"
              >
                Відмінити зміни
              </button>
              <button
                className="flex-1 rounded-[20px] border border-[#2D336B] bg-[#2D336B] px-[3.69rem] py-[0.625rem] text-[#F8F8F8] active:scale-95 disabled:transform-none disabled:border-gray-300 disabled:bg-gray-300 disabled:active:scale-100"
                type="submit"
                disabled={!isDirty || !isValid}
              >
                Зберегти зміни
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

export default EditProfileForm
