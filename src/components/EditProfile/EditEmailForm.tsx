import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { editEmailSchema } from '../../features/userValidation'
import showIcon from '../../assets/icons/eye-icon.svg'
import { useEffect, useState } from 'react'
import CredentialInput from './CredentialInput'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import { PATHS } from '../../paths'

const EditEmailForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(editEmailSchema),
    mode: 'onChange',
  })

  const onSubmit = () => {
    const data = getValues()
    console.log({ data })
  }

  useEffect(() => {
    if (showPassword) {
      const timer = setTimeout(() => {
        setShowPassword(false)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [showPassword])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="auth-register-form">
      <CredentialInput
        register={register}
        type="email"
        name="email"
        error={errors.email}
        placeholder="Введіть поточний e-mail"
      />
      <CredentialInput
        register={register}
        type="email"
        className="mb-4"
        name="new_email"
        error={errors.new_email}
        placeholder="Введіть новий e-mail"
      />
      <div className="relative">
        <CredentialInput
          register={register}
          visiblePassword={showPassword}
          className="mb-8"
          name="password"
          type="password"
          placeholder="Введіть пароль"
        />
        <img
          onClick={() => setShowPassword(true)}
          className="absolute right-[15px] top-[15px]"
          src={showIcon}
        />
      </div>
      <Link to={PATHS.PASSWORD.forgot} className="ml-2 text-grey-500 underline">
        Забули пароль?
      </Link>
      <div className="flex gap-10">
        <Link className="m-auto" to={PATHS.PROFILE.profile}>
          <p className="ml-2 text-grey-500 underline">Відмінити зміни</p>
        </Link>
        <Button disabled={!isValid} className="custom-button m-0 w-[203px] flex-1" type="submit">
          Зберегти зміни
        </Button>
      </div>
    </form>
  )
}

export default EditEmailForm
