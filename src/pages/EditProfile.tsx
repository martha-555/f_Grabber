import { EditProfileForm } from '../components'
import useFetchUserProfile from '../api/useFetchUserProfile'

const EditProfile = () => {
  const { data } = useFetchUserProfile()

  return <div>{data && <EditProfileForm user={data} />}</div>
}

export default EditProfile
