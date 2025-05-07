import Button from '../Button/Button'
import userProfileStore from '../../store/userProfileStore'
import useLogout from '../../api/logout'

const LogOutButton = () => {
  const resetUserProfile = userProfileStore((state) => state.resetUserProfile)

  const { mutate: logout } = useLogout()

  const handleLogOut = () => {
    logout(undefined, {
      onSuccess: () => {
        resetUserProfile()
      },
      onError: (error) => {
        console.error('Logout failed:', error)
      },
    })
  }

  return <Button className="min-w-btn-small" text="Вихід" onClick={handleLogOut} />
}

export default LogOutButton
