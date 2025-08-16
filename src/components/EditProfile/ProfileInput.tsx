import { UseFormRegister, FieldError } from 'react-hook-form'

type Props = {
  labelText: string
  data?: string | ''
  register?: UseFormRegister<any>
  name: string
  error?: FieldError
  inputType: string
  placeholder?: string
  disabled?: boolean
}

const ProfileInput = ({
  data,
  labelText,
  name,
  register,
  error,
  inputType,
  placeholder,
  disabled = false,
}: Props) => {
  return (
    <div className="flex flex-col justify-between rounded-[20px]">
      <label className="pb-2 pt-8 text-b3 text-grey-800" htmlFor={data}>
        {labelText}
      </label>
      <input
        disabled={disabled}
        placeholder={placeholder}
        type={inputType}
        id={data}
        onClick={(e: React.MouseEvent<HTMLInputElement>) => {
          const target = e.target as HTMLInputElement
          target.select()
        }}
        className={`input-text w-[799px] ${error && 'border-error-default'}`}
        defaultValue={data}
        {...(register && { ...register(name, { required: true }) })}
      />
      {error && <span className="text-error-default">{error.message}</span>}
    </div>
  )
}

export default ProfileInput
