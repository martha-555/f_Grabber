import { routes } from './routes/routes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useEffect } from 'react'
import userProfileStore, { initialState } from './store/userProfileStore'
import useFetchUserProfile from './api/useFetchUserProfile'

export default function App() {
  const routers = createBrowserRouter(routes)

  const setUserProfile = userProfileStore((state) => state.setUserProfile)
  const userProfileInStore = userProfileStore.getState()

  const { data: userData, error, status } = useFetchUserProfile()

  useEffect(() => {
    if (status === 'pending') {
      setUserProfile({ ...userProfileInStore, isLoggedIn: false, isLoading: true, isError: false })
    } else if (userData) {
      setUserProfile({ ...userData, isLoggedIn: true, isLoading: false, isError: false })
    } else if (error) {
      setUserProfile({ ...initialState, isLoggedIn: false, isLoading: false, isError: true })
    }
  }, [status, userData, error, setUserProfile, userProfileInStore])

  return <RouterProvider router={routers} />
}
