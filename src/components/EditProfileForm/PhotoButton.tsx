type Props = {
  text: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const PhotoButton = ({ text, type = 'button', onClick }: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="mt-[1.44rem] rounded-[100px] border-0.5 border-[#2D336B] px-[1.81rem] py-[0.625rem] text-px12 text-[#2D336B] hover:bg-[#2D336B] hover:text-white active:scale-95"
    >
      {text}
    </button>
  )
}

export default PhotoButton
