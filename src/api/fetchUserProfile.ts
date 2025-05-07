import { useQuery } from '@tanstack/react-query'
import useBackendRequest from '../hooks/useBackendRequest'
import { API_ENDPOINTS } from '../paths'
import { TUserProfile } from '../types/types'

const useFetchUserProfile = () => {
  const fetchUserProfile = useBackendRequest()

  return useQuery({
    queryKey: ['profile'],
    queryFn: () =>
      fetchUserProfile<TUserProfile>({ path: API_ENDPOINTS.PROFILE.get, method: 'GET' }),
    retry: false,
  })
}

export default useFetchUserProfile
