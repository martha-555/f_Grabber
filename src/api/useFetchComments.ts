import { useQuery } from '@tanstack/react-query'
import useBackendRequest from '../hooks/useBackendRequest'
import { API_ENDPOINTS } from '../paths'
import { TCommentAndRating } from '../types/reviewCommentTypes'

const useFetchComments = (id: string) => {
  const fetchComments = useBackendRequest()

  const path = API_ENDPOINTS.ADS.comments.replace('{id}', id)

  return useQuery({
    queryKey: ['comments-product'],
    queryFn: () =>
      fetchComments<TCommentAndRating>({
        path: path,
        method: 'GET',
      }),
    retry: 1,
  })
}

export default useFetchComments
