import { UseFormRegister, FieldError } from 'react-hook-form'

type Props = {
  labelText: string
  data: string
  register: UseFormRegister<any>
  name: string
  error?: FieldError
}

const ProfileInput = ({ data, labelText, name, register, error }: Props) => {
  return (
    <div className="flex justify-between rounded-[100px] bg-[#F7F7F7] p-[0.625rem]">
      <label className="p-[0.625rem] pl-[1.25rem] text-[#4D4D4D]" htmlFor={data}>
        {labelText}
      </label>
      <input
        id={data}
        className="flex-1 border-none bg-[#F7F7F7] p-[0.625rem] pr-[1.25rem] text-end outline-none"
        defaultValue={data}
        {...register(name, { required: true })}
      />
      {error && <span className="text-red-500">{error.message}</span>}
    </div>
  )
}

export default ProfileInput
