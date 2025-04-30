import React from 'react'
import { RegisterForm } from '../components'

interface RegisterProps {}

const Register: React.FC<RegisterProps> = ({}) => {
  return (
    <div className="flex flex-col items-center justify-center pt-[3%]">
      <RegisterForm />
    </div>
  )
}

export default Register
