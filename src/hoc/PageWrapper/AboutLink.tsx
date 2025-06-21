type Props = {
  link?: string
  text: string
  className?: string
}

const AboutLink = ({ link = '#', text, className }: Props) => {
  return (
    <p>
      <a className={className} href={link}>
        {text}
      </a>
    </p>
  )
}

export default AboutLink
