import { FC } from 'react'

interface BtnProps {
  text: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

const Button: FC<BtnProps> = ({ text, onClick, type = 'button', className = '' }) => {
  return (
    <button onClick={onClick} className={`button ${className}`} type={type}>
      {text}
    </button>
  )
}

export default Button
