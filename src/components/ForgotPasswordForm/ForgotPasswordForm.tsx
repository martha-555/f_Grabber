import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '../../paths'
import useForgotPassword from '../../api/forgotPassword'
import Button from '../Button/Button'
import { LoginSchema } from '../../features/userValidation'

const emailSchema = LoginSchema.pick({ email: true })
type EmailFormData = z.infer<typeof emailSchema>

const defaultValues: EmailFormData = {
  email: '',
}

const ForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EmailFormData>({
    defaultValues,
    resolver: zodResolver(emailSchema),
  })

  const navigate = useNavigate()
  const { mutate: sendResetEmail, status } = useForgotPassword()

  const onSubmit: SubmitHandler<EmailFormData> = (data) => {
    sendResetEmail(data, {
      onSuccess: () => {
        reset()
        navigate(PATHS.HOME)
      },
      onError: (error) => {
        console.error('Forgot password error:', error)
      },
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-[400px]">
      <div className="flex flex-col p-5">
        <div className="mb-20 flex flex-col gap-4">
          <h1 className="text-center text-h3">Відновлення паролю</h1>
          <p>
            Введіть email, з яким ви реєструвалися. Ми надішлемо вам інструкції з відновлення
            паролю.
          </p>
        </div>
        <div className="mb-8 flex flex-col gap-4">
          <label htmlFor="email" className="text-d1">
            Куди вам надіслати код?
          </label>
          <input
            type="email"
            id="email"
            className="input-text"
            placeholder="Електронна пошта"
            {...register('email')}
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
        </div>
        <Button text="Відправити" type="submit" disabled={status === 'pending'} />
      </div>
    </form>
  )
}

export default ForgotPasswordForm
