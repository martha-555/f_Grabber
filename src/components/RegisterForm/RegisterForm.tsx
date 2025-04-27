import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { PATHS } from '../../paths'
import { Link } from 'react-router-dom'
import { useApiRequest } from '../../hooks/useApiRequest'
import { register as registerUser } from '../../api/register'

// Схема валідації форми за допомогою Zod
const schema = z
  .object({
    first_name: z.string().nonempty("Ім'я є обов'язковим"), // Поле для імені, обов'язкове
    last_name: z.string().nonempty("Прізвище є обов'язковим"), // Поле для прізвища, обов'язкове
    phone_number: z
      .string()
      .nonempty("Номер телефону є обов'язковим") // Поле для номера телефону, обов'язкове
      .regex(/^\+380\d{9}$/, 'Номер телефону має бути у форматі +380XXXXXXXXX'), // Перевірка формату номера
    email: z
      .string()
      .nonempty("Електронна пошта є обов'язковою") // Поле для електронної пошти, обов'язкове
      .email('Некоректна електронна пошта'), // Перевірка формату електронної пошти
    password: z
      .string()
      .nonempty("Пароль є обов'язковим") // Поле для паролю, обов'язкове
      .min(6, 'Пароль має містити щонайменше 6 символів'), // Мінімальна довжина паролю
    confirmPassword: z.string().nonempty("Підтвердження паролю є обов'язковим"), // Поле для підтвердження паролю, обов'язкове
  })
  .superRefine((data, ctx) => {
    // Перевірка, чи збігаються пароль і підтвердження паролю
    if (data.confirmPassword !== data.password) {
      ctx.addIssue({
        code: 'custom',
        path: ['confirmPassword'],
        message: 'Паролі не збігаються', // Повідомлення про помилку
      })
    }
  })

// Тип даних форми, отриманий з схеми
type FormData = z.infer<typeof schema>

const RegisterForm: React.FC = () => {
  // Використання кастомного хука для роботи з API
  const { error, loading, execute } = useApiRequest()
  const {
    register, // Метод для реєстрації полів форми
    handleSubmit, // Метод для обробки відправки форми
    formState: { errors }, // Об'єкт для зберігання помилок валідації
    reset, // Метод для скидання форми
  } = useForm<FormData>({
    resolver: zodResolver(schema), // Підключення схеми валідації
  })

  // Функція для обробки відправки форми
  const onSubmit: SubmitHandler<FormData> = (data) => {
    execute(() =>
      registerUser({
        email: data.email.toLowerCase(),
        password: data.password,
        first_name: data.first_name,
        last_name: data.last_name,
        phone_number: data.phone_number,
      }),
    ) // Виклик функції реєстрації користувача
  }

  // Виклик reset при успішній реєстрації
  useEffect(() => {
    if (!error) {
      reset()
    }
  }, [error, reset])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="auth-register-form">
      <h1 className="text-center font-medium text-3xl mb-7">Реєстрація</h1>
      {/* Поле для введення імені */}
      <section className="auth-register-form-section">
        <input
          type="text"
          {...register('first_name')}
          id="register-name"
          className="input-text"
          placeholder="Ім'я"
        />
        {errors.first_name && <p className="error-text">{errors.first_name.message}</p>}
      </section>
      {/* Поле для введення прізвища */}
      <section className="auth-register-form-section">
        <input
          type="text"
          {...register('last_name')}
          id="register-surname"
          className="input-text"
          placeholder="Прізвище"
        />
        {errors.last_name && <p className="error-text">{errors.last_name.message}</p>}
      </section>
      {/* Поле для введення номера телефону */}
      <section className="auth-register-form-section">
        <input
          type="text"
          {...register('phone_number')}
          id="register-phone"
          className="input-text"
          placeholder="Номер телефону"
        />
        {errors.phone_number && <p className="error-text">{errors.phone_number.message}</p>}
      </section>
      {/* Поле для введення електронної пошти */}
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
      {/* Поле для введення паролю */}
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
      {/* Поле для підтвердження паролю */}
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
      {/* Посилання для переходу на сторінку входу */}
      <section className="auth-register-form-section">
        <Link to={PATHS.AUTH.login} className="text-xs">
          Вже є акаунт? Увійти
        </Link>
      </section>
      {/* Кнопка для відправки форми */}
      <button type="submit" className="button" disabled={loading}>
        Зареєструватися
      </button>
    </form>
  )
}

export default RegisterForm
