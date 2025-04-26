import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import useApi from '../../hooks/useApi'
import { Link } from 'react-router-dom'
import { PATHS } from '../../paths'

interface LoginFormProps {}

const schema = z.object({
  email: z.string().email('Невірний формат електронної пошти'),
  password: z.string().min(6, 'Пароль має містити щонайменше 6 символів'),
})

type FormData = z.infer<typeof schema>

const defaultValues: FormData = {
  email: '',
  password: '',
}

const LoginForm: React.FC<LoginFormProps> = ({}) => {
  const { error, loading, login } = useApi()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues,
    resolver: zodResolver(schema),
  })

  const onSubmit: SubmitHandler<FormData> = (data) => {
    login(data)

    if (!error) {
      reset()
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="auth-register-form">
      <h1 className="text-center font-medium text-3xl mb-7">Увійти</h1>
      <section className="auth-register-form-section">
        <input
          type="email"
          {...register('email')}
          id="register-email"
          className="input-text"
          placeholder="Електронна пошта"
        />
        {errors.email && <p className="error-text">{errors.email.message}</p>}
      </section>

      <section className="auth-register-form-section">
        <input
          type="password"
          {...register('password')}
          id="register-password"
          className="input-text"
          placeholder="Пароль"
        />
        {errors.password && <p className="error-text">{errors.password.message}</p>}
      </section>

      <section className="auth-register-form-section">
        <Link to="#" className="text-xs">
          Забули пароль?
        </Link>
        <Link to={PATHS.register} className="text-xs">
          Немає аккаунту? Зареєструватися
        </Link>
      </section>
      <section className="auth-register-form-section"></section>

      <button type="submit" className="button" disabled={loading}>
        Увійти
      </button>
    </form>
  )
}

export default LoginForm
