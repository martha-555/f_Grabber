type Props = {
  text: string
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}
const ProfileButton = ({ text, disabled, onClick, type = 'button' }: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className="text-px16 flex-2 my-[6.75rem] rounded-[20px] bg-[#2D336B] px-[3.687rem] py-[0.625rem] text-[#F8F8F8] active:scale-95 disabled:transform-none disabled:border-gray-300 disabled:bg-gray-300 disabled:active:scale-100"
    >
      {text}
    </button>
  )
}
export default ProfileButton
