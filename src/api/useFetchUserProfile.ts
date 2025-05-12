import { useQuery } from '@tanstack/react-query'
import useBackendRequest from '../hooks/useBackendRequest'
import { API_ENDPOINTS } from '../paths'
import { TUserProfile } from '../types/types'

const useFetchUserProfile = () => {
  const fetchUserData = useBackendRequest()

  return useQuery({
    queryKey: ['profile'],
    queryFn: () => fetchUserData<TUserProfile>({ path: API_ENDPOINTS.PROFILE.get, method: 'GET' }),
    retry: false,
  })
}

export default useFetchUserProfile
