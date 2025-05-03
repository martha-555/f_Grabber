interface ProfileFieldProps {
  text: string
  data: string
}

const ProfileField = ({ text, data }: ProfileFieldProps) => {
  return (
    <div className="flex justify-between p-[0.625rem]">
      <p className="text-[#4D4D4D]">{text}</p>
      <p>{data}</p>
    </div>
  )
}

export default ProfileField
