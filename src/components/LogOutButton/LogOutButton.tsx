import { logout } from '../../api/logout'
import Button from '../Button/Button'

const LogOutButton = () => {
  return <Button className="min-w-btn-small" text="Вихід" onClick={logout} />
}

export default LogOutButton
