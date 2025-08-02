import { useMutation, useQueryClient } from '@tanstack/react-query'
import { TSubmitUserData } from '../types/types'
import { API_ENDPOINTS } from '../paths'
import useBackendRequest from '../hooks/useBackendRequest'

const useSubmitUserData = () => {
  const fetchUserData = useBackendRequest()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: TSubmitUserData) =>
      fetchUserData<void, TSubmitUserData>({
        data,
        method: 'PATCH',
        path: API_ENDPOINTS.PROFILE.patch,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['profile'],
      })
    },
  })
}

export default useSubmitUserData
