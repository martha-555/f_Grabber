import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

const Section = ({ children, className }: Props) => {
  return <section className={`flex flex-col gap-[1.5rem] ${className}`}>{children}</section>
}

export default Section
