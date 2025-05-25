import { FieldError, UseFormRegister } from 'react-hook-form'
import errorIcon from '../../assets/images/errorIcon.svg'

type Props = {
  register: UseFormRegister<any>
  visiblePassword: boolean
  error?: FieldError
  name: string
  placeholder: string
}

const PasswordInput = ({ register, visiblePassword, error, name, placeholder }: Props) => {
  return (
    <>
      <input
        {...register(name, { required: true })}
        placeholder={placeholder}
        className="relative rounded-[100px] bg-[#F7F7F7] p-4 pl-[30px] placeholder-[#4D4D4D]"
        type={visiblePassword ? 'text' : 'password'}
      />
      {error && (
        <>
          <span className="text-red-500">
            {error.message?.split(`\n`).map((item, index) => <div key={index}>{item}</div>)}
          </span>
          <img
            className="absolute right-[70px] top-[17px] h-[1.13rem] w-[1.13rem]"
            src={errorIcon}
          />
        </>
      )}
    </>
  )
}

export default PasswordInput
