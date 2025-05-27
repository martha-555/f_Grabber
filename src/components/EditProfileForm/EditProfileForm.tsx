import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { editProfileSchema } from '../../features/userValidation'
import { TUserProfile } from '../../types/types'
import UploadAvatar from '../UploadAvatar/UploadAvatar'
import ProfileInput from '../ProfileInput/ProfileInput'
import submitUserData from '../../api/useSubmitUserData'
import submitUserPhoto from '../../api/useSubmitUserPhoto'
import defaultProfileAvatar from '../../assets/images/defaultProfileAvatar.svg'
import toast, { Toaster } from 'react-hot-toast'
import { useEffect } from 'react'

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
    user_photo:
      typeof user?.user_photo === 'string' || user?.user_photo instanceof File
        ? user.user_photo
        : user?.user_photo || defaultProfileAvatar,
  }

  const profileMutation = submitUserData()
  const photoMutation = submitUserPhoto()

  const resetForm = () => {
    reset({
      ...initialValues,
      user_photo: user?.user_photo,
    })
  }

  const {
    register,
    handleSubmit,
    control,
    getValues,
    reset,
    resetField,
    formState: { dirtyFields, errors },
  } = useForm<TUserProfile>({
    resolver: zodResolver(editProfileSchema),
    mode: 'onChange',
    defaultValues: initialValues,
  })

  const onSubmit = async () => {
    const allValues = getValues()
    const { user_photo, ...data } = allValues
    const { user_photo: avatar, ...userData } = initialValues
    const isDataChanged = JSON.stringify(data) !== JSON.stringify(userData)
    const isPhotoChanged = !(avatar as string).includes((user_photo as File).name)
    const noChanges = !isDataChanged && !isPhotoChanged

    if (isDataChanged) {
      await profileMutation.mutateAsync(data)
    }

    if (user_photo instanceof File && isPhotoChanged) await photoMutation.mutateAsync(user_photo)

    if (noChanges) {
      toast.error('Змін не виявлено', {
        id: 'profile-editor-toasts',
        duration: 2000,
      })
    }
  }

  const isDirtyData = Object.keys(dirtyFields).some(
    (field) => field !== 'user_photo' || !errors.user_photo,
  )
  const canSubmit =
    isDirtyData && Object.keys(errors).filter((key) => key !== 'user_photo').length === 0

  useEffect(() => {
    if (errors.user_photo) {
      const timer = setTimeout(() => resetField('user_photo'), 3000)

      return () => clearTimeout(timer)
    }
  }, [errors])

  return (
    <>
      {user && (
        <div className="mt-[6.44rem]">
          <div className="ml-[9.37rem] p-[0.625rem] text-px32 font-medium">Редагувати профіль</div>
          <form className="mx-auto mt-[5.37rem] max-w-[74.86%]" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-[3.19rem]">
              <div className="rounded-[20px] px-[2.06rem] pt-5 shadow-blur">
                <Controller
                  name="user_photo"
                  control={control}
                  render={({ field }) => (
                    <UploadAvatar
                      uploadedPhoto={field.value}
                      onChange={(file) => field.onChange(file)}
                      error={errors.user_photo?.message}
                      userPhoto={user.user_photo as string}
                    />
                  )}
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
                  inputType="text"
                />
                <ProfileInput
                  data={user.last_name}
                  labelText="Прізвище"
                  name="last_name"
                  register={register}
                  error={errors.last_name}
                  inputType="text"
                />
                <ProfileInput
                  data={user.email}
                  labelText="Email"
                  name="email"
                  register={register}
                  error={errors.email}
                  inputType="email"
                />
                <ProfileInput
                  data={user.phone_number}
                  labelText="Номер телефону"
                  name="phone_number"
                  register={register}
                  error={errors.phone_number}
                  inputType="tel"
                  placeholder="+380"
                />
                <ProfileInput
                  data={user.location || ''}
                  labelText="Місцезнаходження"
                  name="location"
                  register={register}
                  error={errors.location}
                  inputType="text"
                />
              </div>
            </div>
            <div className="mx-auto mb-[5.06rem] mt-[5.37rem] flex w-[49.44%] gap-[12.75rem]">
              <button
                onClick={() => resetForm()}
                className="flex-1 rounded-[20px] border border-[#2D336B] px-[3.69rem] py-[0.625rem] text-[#2D336B] active:scale-95"
              >
                Відмінити зміни
              </button>
              <button
                className="flex-1 rounded-[20px] border border-[#2D336B] bg-[#2D336B] px-[3.69rem] py-[0.625rem] text-[#F8F8F8] active:scale-95 disabled:transform-none disabled:border-gray-300 disabled:bg-gray-300 disabled:active:scale-100"
                type="submit"
                disabled={!canSubmit}
              >
                Зберегти зміни
              </button>
            </div>
          </form>
        </div>
      )}
      <Toaster
        position="bottom-center"
        toastOptions={{
          id: 'profile-editor-toasts',
          className:
            '!bg-[#FFFFFF] !text-[1.5rem]  text-[#000000] rounded-[100px] flex flex-row-reverse !max-w-none !w-fit !whitespace-nowrap px-[1.25rem] py-[0.625rem]',
        }}
      />
    </>
  )
}

export default EditProfileForm
