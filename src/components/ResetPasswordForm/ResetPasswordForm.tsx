import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useParams, useNavigate } from 'react-router-dom'
import { PATHS } from '../../paths'
import useResetPassword from '../../api/resetPassword'
import Button from '../Button/Button'
import { resetPasswordSchema } from '../../features/userValidation'
import { z } from 'zod'

type ResetFormData = z.infer<typeof resetPasswordSchema>

const defaultValues: ResetFormData = {
  password: '',
  confirmPassword: '',
}

const ResetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ResetFormData>({
    defaultValues,
    resolver: zodResolver(resetPasswordSchema),
  })

  const { token, uid } = useParams<{ token: string; uid: string }>()

  const navigate = useNavigate()

  const { mutate: resetPassword, status } = useResetPassword()

  const onSubmit: SubmitHandler<ResetFormData> = (data) => {
    if (!token || !uid) {
      console.log('Токен або UID відсутній')

      return
    }

    resetPassword(
      { password: data.password, uid, token },
      {
        onSuccess: () => {
          reset()
          navigate(PATHS.AUTH.login)
        },
        onError: (error) => {
          console.error('Reset password error:', error)
        },
      },
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-[400px]">
      <div className="flex flex-col gap-4 p-5">
        <h1 className="text-center text-h3">Відновлення паролю</h1>
        <div className="mb-8 flex flex-col gap-4">
          <input
            type="password"
            id="reset-password"
            className="input-text"
            placeholder="Пароль"
            {...register('password')}
          />
          {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
          <input
            type="password"
            id="reset-confirm-password"
            className="input-text"
            placeholder="Підтвердження паролю"
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && (
            <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>
          )}
        </div>
        <Button text="Відправити" type="submit" disabled={status === 'pending'} />
      </div>
    </form>
  )
}

export default ResetPasswordForm
