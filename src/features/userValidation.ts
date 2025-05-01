// userSchemas.ts
import { z } from 'zod'

export const baseUserSchema = z.object({
  first_name: z.string().nonempty("Ім'я є обов'язковим"),
  last_name: z.string().nonempty("Прізвище є обов'язковим"),
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

export const editProfileSchema = baseUserSchema.extend({
  avatar: z
    .instanceof(File)
    .optional()
    .refine((file) => !file || file.size < 5_000_000, 'Файл має бути менше 5MB')
    .refine((file) => !file || ['image/jpeg', 'image/png'].includes(file.type), 'Тільки JPEG/PNG'),
})
