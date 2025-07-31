import { useQuery } from '@tanstack/react-query'
import useBackendRequest from '../hooks/useBackendRequest'
import { API_ENDPOINTS } from '../paths'
import { ptoductReviewsType } from '../types/ptoductReviewsType'

const useFetchRating = (id: string) => {
  const fetchRating = useBackendRequest()

  const path = API_ENDPOINTS.ADS.rating.replace('{id}', id)

  return useQuery({
    queryKey: ['rating-product'],
    queryFn: () =>
      fetchRating<ptoductReviewsType>({
        path: path,
        method: 'GET',
      }),
    retry: 1,
  })
}

export default useFetchRating
