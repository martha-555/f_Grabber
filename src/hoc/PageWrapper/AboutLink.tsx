import { Link } from 'react-router-dom'

type Props = {
  link?: string
  text: string
  className?: string
}

const AboutLink = ({ link = '#', text, className }: Props) => {
  return (
    <p>
      <Link className={className} to={link}>
        {text}
      </Link>
    </p>
  )
}

export default AboutLink
