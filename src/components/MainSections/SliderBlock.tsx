import { Link } from 'react-router-dom'
type Props = Record<
  'sliderImg' | 'path' | 'primaryText' | 'primaryText2' | 'secondaryText' | 'buttonText',
  string
>

const SliderBlock = ({
  sliderImg,
  path,
  primaryText,
  primaryText2,
  secondaryText,
  buttonText,
}: Props) => {
  return (
    <div
      className="flex h-[400px] items-end justify-around rounded-[20px] bg-cover bg-center pb-[48px]"
      style={{ backgroundImage: `url(${sliderImg})` }}
    >
      <div className="text-primary-50">
        <p className="mb-4 text-h31">
          {primaryText} <br /> {primaryText2}
        </p>
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
