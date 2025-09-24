import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useNavigate } from 'react-router-dom'
import { PATHS } from '../../paths'
import useLogin from '../../api/login'
import { LoginSchema } from '../../features/userValidation'
import userProfileStore from '../../store/userProfileStore'
import Button from '../Button/Button'

interface LoginFormProps {}

type FormData = z.infer<typeof LoginSchema>

const defaultValues: FormData = {
  email: '',
  password: '',
}

const LoginForm: React.FC<LoginFormProps> = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues,
    resolver: zodResolver(LoginSchema),
  })

  const setUserProfile = userProfileStore((state) => state.setUserProfile)

  const navigate = useNavigate()

  const { mutate: login, status } = useLogin()

  const onSubmit: SubmitHandler<FormData> = (data) => {
    login(data, {
      onSuccess: (response) => {
        setUserProfile({
          userInfo: { ...response },
          isLoggedIn: true,
          isError: false,
          isLoading: false,
        })
        reset()
        navigate(PATHS.PROFILE.profile)
      },
      onError: (error) => {
        console.error('Login error:', error)
      },
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="auth-register-form">
      <h1 className="mb-7 text-center text-3xl font-medium">Увійти в акаунт</h1>
      <section className="auth-register-form-section">
        <label className={`w-full ${errors.email ? 'warning-icon-for-input' : ''}`}>
          <input
            type="email"
            {...register('email')}
            id="register-email"
            className={`input-text ${errors.email ? 'border-error-default' : ''}`}
            placeholder="Електронна пошта"
          />
        </label>
      </section>
      <section className="auth-register-form-section">
        <label className={`w-full ${errors.password ? 'warning-icon-for-input' : ''}`}>
          <input
            type="password"
            {...register('password')}
            id="register-password"
            className={`input-text ${errors.password ? 'border-error-default' : ''}`}
            placeholder="Пароль"
          />
        </label>
      </section>
      <section className="auth-register-form-section">
        {errors.email && (
          <p className="error-text ml-5 self-start text-xs">{errors.email.message}</p>
        )}
        {errors.password && (
          <p className="error-text ml-5 self-start text-xs">{errors.password.message}</p>
        )}
      </section>
      <section className="auth-register-form-section">
        <Link to={PATHS.PASSWORD.forgot} className="mb-6 ml-5 mt-3 self-start underline">
          Забули пароль?
        </Link>
      </section>
      {/* Кнопка для відправки форми */}
      <Button
        disabled={status === 'pending'}
        type="submit"
        text="Увійти в акаунт"
        className="py-2"
      />
      <p className="flex justify-center text-b4">
        Немає аккаунту?{' '}
        <Link to={PATHS.AUTH.register} className="ml-2 underline">
          Зареєструватися
        </Link>
      </p>
    </form>
  )
}

export default LoginForm
