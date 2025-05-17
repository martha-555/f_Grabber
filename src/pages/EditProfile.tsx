import { EditProfileForm } from '../components'
import userProfileStore from '../store/userProfileStore'

const EditProfile = () => {
  const user = userProfileStore()

  return <div>{user && <EditProfileForm user={user.userInfo} />}</div>
}

export default EditProfile
