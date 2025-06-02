import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { passwordSchema } from '../features/userValidation'
import { TChangePassword } from '../types/authTypes'
import showIcon from '../assets/images/showPassword.svg'
import { useEffect, useState } from 'react'
import useFetchChangePassword from '../api/useFetchChangePassword'
import { Button, CustomToaster, PasswordInput } from '../components'

const ChangeUserPassword = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isDirty, isValid },
  } = useForm<TChangePassword>({
    resolver: zodResolver(passwordSchema),
    mode: 'onChange',
  })

  const { mutate: fetchSubmitData, isSuccess } = useFetchChangePassword()
  const [visiblePassword, setVisiblePassword] = useState({
    old_password: false,
    new_password: false,
    confirm_password: false,
  })

  const onSubmit = () => {
    const { old_password, new_password } = getValues()
    fetchSubmitData({ old_password, new_password })
  }

  useEffect(() => {
    const isVisible = Object.values(visiblePassword).some(Boolean)

    if (isVisible) {
      const timer = setTimeout(() => {
        setVisiblePassword({
          old_password: false,
          new_password: false,
          confirm_password: false,
        })
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [visiblePassword])

  return (
    <>
      <div className="ml-[7.5rem] mt-[4.937rem] w-[51.94%]">
        <h1 className="mb-[3.937rem] p-2.5 text-px32 font-medium">Редагувати пароль</h1>
        <form className="flex flex-col gap-10" onSubmit={handleSubmit(onSubmit)}>
          <div className="relative flex flex-col">
            <PasswordInput
              register={register}
              name="old_password"
              placeholder="Старий пароль"
              error={errors?.old_password}
              visiblePassword={visiblePassword.old_password}
            />
            <img
              onClick={() =>
                setVisiblePassword((prev) => ({ ...prev, old_password: !prev.old_password }))
              }
              className="absolute right-8 top-5"
              src={showIcon}
            />
          </div>
          <div className="relative flex flex-col">
            <PasswordInput
              register={register}
              name="new_password"
              placeholder="Новий пароль"
              error={errors.new_password}
              visiblePassword={visiblePassword.new_password}
            />
            <img
              onClick={() =>
                setVisiblePassword((prev) => ({
                  ...prev,
                  new_password: !prev.new_password,
                }))
              }
              className="absolute right-8 top-5"
              src={showIcon}
            />
          </div>
          <div className="relative flex flex-col">
            <PasswordInput
              register={register}
              name="confirm_password"
              placeholder="Повторити новий пароль"
              error={errors.confirm_password}
              visiblePassword={visiblePassword.confirm_password}
            />
            <img
              onClick={() =>
                setVisiblePassword((prev) => ({
                  ...prev,
                  confirm_password: !prev.confirm_password,
                }))
              }
              className="absolute right-8 top-5"
              src={showIcon}
            />
          </div>
          <div className="flex justify-end">
            <div className="w-[33.957%]">
              <Button
                type="submit"
                disabled={!isDirty || !isValid || isSuccess}
                className="custom-button w-profile-button"
              >
                Зберегти зміни
              </Button>
            </div>
          </div>
        </form>
        <CustomToaster id="change_password" />
      </div>
    </>
  )
}

export default ChangeUserPassword
