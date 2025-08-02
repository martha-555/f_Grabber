import Button from '../Button/Button'
import userProfileStore, { initialState } from '../../store/userProfileStore'
import useLogout from '../../api/logout'

const LogOutButton = () => {
  const userProfileInStore = userProfileStore.getState()

  const { mutateAsync: logout } = useLogout()

  const handleLogOut = async () => {
    try {
      await logout()
      userProfileInStore.setUserProfile({
        ...initialState,
        isLoggedIn: false,
        isLoading: false,
        isError: false,
      })
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return <Button className="min-w-btn-small" text="Вихід" onClick={handleLogOut} />
}

export default LogOutButton
