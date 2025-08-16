import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { editEmailSchema } from '../../features/userValidation'
import showIcon from '../../assets/icons/eye-icon.svg'
import { useEffect, useState } from 'react'
import CredentialInput from './CredentialInput'
import Button from '../Button/Button'
import { Link, useNavigate } from 'react-router-dom'
import { PATHS } from '../../paths'
import fetchChangeEmail from '../../api/useFetchChangeEmail'
import CustomToaster from '../CustomToaster/CustomToaster'

const EditEmailForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const { mutate: changeEmail, isSuccess } = fetchChangeEmail()
  const navigate = useNavigate()
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
    const allValues = getValues()
    changeEmail(allValues)
  }

  useEffect(() => {
    isSuccess && navigate(PATHS.PROFILE.profile)
  }, [isSuccess])

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
        name="current_email"
        error={errors.current_email}
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
          error={errors.password}
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
      <CustomToaster />
    </form>
  )
}

export default EditEmailForm
