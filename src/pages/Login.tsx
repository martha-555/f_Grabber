import React from 'react'
import { LoginForm } from '../components'

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
  return (
    <div className="flex flex-col items-center justify-center pt-[3%]">
      <LoginForm />
    </div>
  )
}

export default Login
