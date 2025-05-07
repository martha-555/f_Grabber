import React, { ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '../../paths'

type TPrivateRouteProps = {
  children: ReactNode
}

const PrivateRoute: React.FC<TPrivateRouteProps> = ({ children }) => {
  const navigate = useNavigate()
  const isAuthenticated = false
  useEffect(() => {
    if (!isAuthenticated) {
      navigate(PATHS.AUTH.login, { replace: true })
    }
  }, [isAuthenticated, navigate])

  // Нічого не рендеримо, поки не визначено статус авторизації
  if (!isAuthenticated) {
    return null
  }

  // Рендеримо дочірній компонент, якщо авторизовано
  return <>{children}</>
}

export default PrivateRoute
