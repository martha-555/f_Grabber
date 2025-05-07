import React, { ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '../../paths'
import userProfileStore from '../../store/userProfileStore'

type TPrivateRouteProps = {
  children: ReactNode
}

const PrivateRoute: React.FC<TPrivateRouteProps> = ({ children }) => {
  const navigate = useNavigate()
  const isLoggedIn = userProfileStore((state) => state.isLoggedIn)
  const isLoading = userProfileStore((state) => state.isLoading)

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      navigate(PATHS.AUTH.login, { replace: true })
    }
  }, [isLoggedIn, isLoading, navigate])

  // Нічого не рендеримо, поки не визначено статус авторизації
  if (!isLoggedIn) {
    return null
  }

  // Рендеримо дочірній компонент, якщо авторизовано
  return <>{children}</>
}

export default PrivateRoute
