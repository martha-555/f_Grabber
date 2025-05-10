import { QueryClient, useQuery } from '@tanstack/react-query'
import { EditProfileForm } from '../components'
import useBackendRequest from '../hooks/useBackendRequest'

const EditProfile = () => {
  const queryClient = new QueryClient()
  const fetchUserProfile = useBackendRequest()

  const { data } = useQuery({
    queryKey: ['profile'],
    queryFn: () => fetchUserProfile({ path: '/api/profile/', method: 'GET' }),
    initialData: () => queryClient.getQueryData(['profile']), // "Підглядаємо" в кеш
  })

  return (
    <div>
      <EditProfileForm user={data} />
    </div>
  )
}

export default EditProfile
