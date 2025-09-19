import { FieldError, UseFormRegister } from 'react-hook-form'
import errorIcon from '../../assets/icons/exclamation-icon.svg'
import showIcon from '../../assets/icons/eye-icon.svg'
import { useState } from 'react'

type Props = {
  register: UseFormRegister<any>
  error?: FieldError
  name:
    | 'current_email'
    | 'new_email'
    | 'email'
    | 'password'
    | 'confirm_password'
    | 'new_password'
    | 'old_password'
  placeholder: string
  className?: string
  type?: string
}

const CredentialInput = ({ register, error, name, placeholder, className, type }: Props) => {
  const [showPassword, setShowPassword] = useState(false)

  const isPassword = type === 'password'
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type

  return (
    <div className="relative">
      <input
        disabled={false}
        {...register(name, { required: true })}
        placeholder={placeholder}
        className={`input-text ${className} ${error && 'border-error-default'}`}
        type={inputType}
      />
      {error && <span className="error-text ml-5 self-start text-xs">{error.message}</span>}
      {isPassword &&
        (error ? (
          <img
            className="absolute right-3 top-[13px] h-[1.13rem] w-[1.13rem]"
            src={errorIcon}
            alt="error"
          />
        ) : (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-[13px]"
          >
            <img src={showIcon} alt="toggle password" className="h-[1.13rem] w-[1.13rem]" />
          </button>
        ))}

      {!isPassword && error && (
        <img
          className="absolute right-3 top-[13px] h-[1.13rem] w-[1.13rem]"
          src={errorIcon}
          alt="error"
        />
      )}
    </div>
  )
}

export default CredentialInput
