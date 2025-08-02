import { useQuery } from '@tanstack/react-query'
import useBackendRequest from '../hooks/useBackendRequest'
import { AdType } from '../types/productTypes.ts'
import { API_ENDPOINTS } from '../paths'

const useFavorites = () => {
  const fetchUserData = useBackendRequest()

  return useQuery({
    queryKey: ['favorites'],
    queryFn: () =>
      fetchUserData<AdType[]>({
        path: API_ENDPOINTS.ADS.getFavorites,
        method: 'GET',
      }),
  })
}

export default useFavorites
