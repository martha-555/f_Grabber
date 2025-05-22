import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { passwordSchema } from '../features/userValidation'
import { TChangePassword } from '../types/authTypes'
import hideIcon from '../assets/images/hidePassword.svg'
import showIcon from '../assets/images/showPassword.svg'
import { useEffect, useState } from 'react'
import useFetchChangePassword from '../api/useFetchChangePassword'
import { Toaster } from 'react-hot-toast'

const ChangeUserPassword = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<TChangePassword>({
    resolver: zodResolver(passwordSchema),
    mode: 'onChange',
  })

  const { mutate: fetchSubmitData } = useFetchChangePassword()
  const [visiblePassword, setVisiblePassword] = useState({
    old_password: false,
    new_password: false,
  })

  const onSubmit = () => {
    const data = getValues()
    fetchSubmitData(data)
  }

  useEffect(() => {
    const isVisible = Object.values(visiblePassword).some(Boolean)

    if (isVisible) {
      const timer = setTimeout(() => {
        setVisiblePassword({
          old_password: false,
          new_password: false,
        })
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [visiblePassword])

  return (
    <>
      <div className="mt-9">
        <form className="m-auto flex w-[50%] flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="relative flex flex-col">
            <input
              {...register('old_password', { required: true })}
              placeholder="Поточний пароль"
              className="border border-black"
              type={visiblePassword.old_password ? 'text' : 'password'}
            />
            {errors && <span className="text-red-500">{errors.old_password?.message}</span>}
            <img
              onClick={() =>
                setVisiblePassword((prev) => ({ ...prev, old_password: !prev.old_password }))
              }
              className="absolute right-1 top-2"
              src={visiblePassword.old_password ? showIcon : hideIcon}
              alt=""
            />
          </div>
          <div className="relative flex flex-col">
            <input
              {...register('new_password', { required: true })}
              placeholder="Новий пароль"
              className="border border-black"
              type={visiblePassword.new_password ? 'text' : 'password'}
            />
            {errors && <span className="text-red-500">{errors.new_password?.message}</span>}
            <img
              onClick={() =>
                setVisiblePassword((prev) => ({
                  ...prev,
                  new_password: !prev.new_password,
                }))
              }
              className="absolute right-1 top-2"
              src={visiblePassword.new_password ? showIcon : hideIcon}
            />
          </div>
          <button>Змінити</button>
        </form>
        <Toaster
          position="bottom-center"
          toastOptions={{
            id: 'change_password',
            className:
              '!bg-[#FFFFFF] !text-[1.5rem]  text-[#000000] rounded-[100px] flex flex-row-reverse !max-w-none !w-fit !whitespace-nowrap px-[1.25rem] py-[0.625rem]',
          }}
        />
      </div>
    </>
  )
}

export default ChangeUserPassword
