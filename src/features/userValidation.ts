// userSchemas.ts
import { z } from 'zod'

export const baseUserSchema = z.object({
  first_name: z
    .string()
    .nonempty("Ім'я є обов'язковим")
    .regex(/^[^\d!@#$%^&*()_+=<>?/\\]+$/, "Ім'я не має містити цифр чи спецсимволів")
    .min(2, 'Імʼя повинно містити щонайменше 2 літери')
    .max(30, 'Максимум 30 символів'),
  last_name: z
    .string()
    .nonempty("Прізвище є обов'язковим")
    .regex(/^[^\d!@#$%^&*()_+=<>?/\\]+$/, 'Прізвище не має містити цифр чи спецсимволів')
    .min(2, 'Прізвище повинно містити щонайменше 2 літери')
    .max(30, 'Максимум 30 символів'),
  phone_number: z
    .string()
    .nonempty("Номер телефону є обов'язковим")
    .regex(/^\+380\d{9}$/, 'Номер телефону має бути у форматі +380XXXXXXXXX'),
  email: z
    .string()
    .nonempty("Електронна пошта є обов'язковою")
    .email('Некоректна електронна пошта'),
})

export const registerSchema = baseUserSchema
  .extend({
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

export const LoginSchema = z.object({
  email: z.string().email('Невірний формат електронної пошти'),
  password: z.string().min(6, 'Пароль має містити щонайменше 6 символів'),
})

export const resetPasswordSchema = z
  .object({
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

export const editProfileSchema = baseUserSchema.extend({
  avatar: z
    .union([z.string().url(), z.instanceof(File)])
    .optional()
    .refine(
      (file) => !file || typeof file === 'string' || file.size < 5_000_000,
      'Файл має бути менше 5MB',
    )
    .refine(
      (file) =>
        !file || typeof file === 'string' || ['image/jpeg', 'image/png'].includes(file.type),
      'Тільки JPEG/PNG',
    ),
  location: z
    .string()
    .nonempty('Введіть локацію')
    .regex(/^[^\d!@#$%^&*()_+=<>?/\\]+$/, 'Локація не має містити цифр чи спецсимволів'),
})
