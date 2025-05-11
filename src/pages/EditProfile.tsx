import { useQuery } from '@tanstack/react-query'
import { EditProfileForm } from '../components'
import useBackendRequest from '../hooks/useBackendRequest'
import { TUserProfile } from '../types/types'

const EditProfile = () => {
  const fetchUserProfile = useBackendRequest()

  const { data } = useQuery({
    queryKey: ['profile'],
    queryFn: () => fetchUserProfile<TUserProfile>({ path: '/api/profile/', method: 'GET' }),
  })

  return <div>{data && <EditProfileForm user={data} />}</div>
}

export default EditProfile
