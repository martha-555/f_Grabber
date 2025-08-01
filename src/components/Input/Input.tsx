import { UseFormRegister, FieldError } from 'react-hook-form'
import ErrorIcon from '../../assets/icons/exclamation-icon.svg?react'

type Props = {
  type?: string
  placeholder?: string
  name: string
  register: UseFormRegister<any>
  error?: FieldError
  className?: string
}

const Input = ({
  type = 'text',
  placeholder,
  name,
  register,
  error,
  className,
  ...rest
}: Props) => {
  return (
    <div className="relative w-full">
      <div className="relative flex items-center">
        <input
          id={name}
          {...register(name)}
          {...rest}
          type={type}
          placeholder={placeholder}
          className={`w-full rounded-[20px] border bg-transparent px-4 py-2 pr-10 text-primary-50 outline-none transition duration-200 ${
            error ? 'border-error-default' : 'border-primary-50'
          } ${className}`}
        />
        {error && (
          <div className="pointer-events-none absolute right-3 flex h-full items-center">
            <ErrorIcon aria-label="Помилка" className="text-error-default" width={20} height={20} />
          </div>
        )}
      </div>
      {error && <span className="mt-1 block text-b3 text-error-default">{error.message}</span>}
    </div>
  )
}

export default Input
