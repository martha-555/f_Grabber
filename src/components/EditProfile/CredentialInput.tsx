import { FieldError, UseFormRegister } from 'react-hook-form'
import errorIcon from '../../assets/icons/exclamation-icon.svg'

type Props = {
  register: UseFormRegister<any>
  visiblePassword?: boolean
  error?: FieldError
  name: 'email' | 'new_email' | 'password' | 'confirm_password' | 'new_password' | 'old_password'
  placeholder: string
  className?: string
  type?: string
}

const CredentialInput = ({
  register,
  visiblePassword = false,
  error,
  name,
  placeholder,
  className,
  type,
}: Props) => {
  return (
    <>
      <input
        disabled={false}
        {...register(name, { required: true })}
        placeholder={placeholder}
        className={`input-text ${className} ${error ? 'border-error-default' : ''}`}
        type={visiblePassword ? 'text' : type}
      />
      {error && (
        <>
          <span className="error-text ml-5 self-start text-xs">{error.message}</span>
          <img
            className="absolute right-[40px] top-[13px] h-[1.13rem] w-[1.13rem]"
            src={errorIcon}
          />
        </>
      )}
    </>
  )
}

export default CredentialInput
