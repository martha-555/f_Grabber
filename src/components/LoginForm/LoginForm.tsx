import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useApiRequest } from '../../hooks/useApiRequest'
import { Link } from 'react-router-dom'
import { PATHS } from '../../paths'
import { login } from '../../api/login'

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
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues,
    resolver: zodResolver(schema),
  })

  const { error, loading, execute } = useApiRequest()

  // Виклик reset при успішній реєстрації
  useEffect(() => {
    if (!error) {
      reset()
    }
  }, [error, reset])

  const onSubmit: SubmitHandler<FormData> = (data) => {
    execute(() => login({ email: data.email.toLowerCase(), password: data.password })) // Pass login function to execute
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
        <Link to={PATHS.AUTH.register} className="text-xs">
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
