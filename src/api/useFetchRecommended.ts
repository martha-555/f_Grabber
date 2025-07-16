import { useQuery } from '@tanstack/react-query'
import useBackendRequest from '../hooks/useBackendRequest'
import { AdType } from '../types/productTypes'
import { API_ENDPOINTS } from '../paths'

const useFetchRecommended = () => {
  const fetchAds = useBackendRequest()

  return useQuery({
    queryKey: ['recommended-ads'],
    queryFn: () =>
      fetchAds<AdType[]>({
        path: API_ENDPOINTS.ADS.recommendations,
        method: 'GET',
      }),
    retry: 1,
  })
}

export default useFetchRecommended
