import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
type Props = {
  sliderImg: string
  path: string
  primaryText: ReactNode
  secondaryText: string
  buttonText: string
}

const SliderBlock = ({ sliderImg, path, primaryText, secondaryText, buttonText }: Props) => {
  return (
    <div
      className="flex h-[400px] items-end justify-around rounded-[20px] bg-cover bg-center pb-[48px]"
      style={{ backgroundImage: `url(${sliderImg})` }}
    >
      <div className="text-primary-50">
        <p className="text-h31 mb-4">{primaryText}</p>
        <p className="text-b3">{secondaryText}</p>
      </div>
      <div>
        <Link to={path}>
          <button className="light-button">{buttonText}</button>
        </Link>
      </div>
    </div>
  )
}

export default SliderBlock
