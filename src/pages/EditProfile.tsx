import { EditProfileForm } from '../components'
import useFetchUserProfile from '../api/fetchUserProfile'

const EditProfile = () => {
  const { data } = useFetchUserProfile()

  return <div>{data && <EditProfileForm user={data} />}</div>
}

export default EditProfile
