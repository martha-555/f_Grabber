import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import useApi from '../../hooks/useApi'

interface RegisterFormProps {}

const schema = z
  .object({
    name: z.string().nonempty("Ім'я є обов'язковим"),
    email: z
      .string()
      .nonempty("Електронна пошта є обов'язковою")
      .email('Некоректна електронна пошта'),
    password: z
      .string()
      .nonempty("Пароль є обов'язковим")
      .min(6, 'Пароль має містити щонайменше 6 символів'),
    confirmPassword: z.string().nonempty("Підтвердження паролю є обов'язковим"),
  })
  .superRefine((data, ctx) => {
    if (data.confirmPassword !== data.password) {
      ctx.addIssue({
        code: 'custom',
        path: ['confirmPassword'],
        message: 'Паролі не збігаються',
      })
    }
  })

type FormData = z.infer<typeof schema>

const RegisterForm: React.FC<RegisterFormProps> = ({}) => {
  const { data, error, loading, register: registerUser } = useApi()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit: SubmitHandler<FormData> = (data) => {
    registerUser({ email: data.email, password: data.password, name: data.name })
  }

  useEffect(() => {
    if (!error) {
      reset()
    }
  }, [data, reset])

  const password = watch('password')

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="auth-register-form">
      <h1 className="text-center font-medium text-3xl mb-7">Реєстрація</h1>
      <section className="auth-register-form-section">
        <input
          type="text"
          {...register('name')}
          id="register-name"
          className="input-text"
          placeholder="Ім'я"
        />
        {errors.name && <p className="error-text">{errors.name.message}</p>}
      </section>
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
        <input
          type="password"
          {...register('confirmPassword')}
          id="register-confirm-password"
          className="input-text"
          placeholder="Підтвердження паролю"
        />
        {errors.confirmPassword && <p className="error-text">{errors.confirmPassword.message}</p>}
      </section>
      <section className="auth-register-form-section">
        <a href="/login" className="text-xs">
          Вже є акаунт? Увійти
        </a>
      </section>
      <button type="submit" className="button">
        Зареєструватися
      </button>
    </form>
  )
}

export default RegisterForm
