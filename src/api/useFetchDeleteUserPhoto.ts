import { useMutation, useQueryClient } from '@tanstack/react-query'
import useBackendRequest from '../hooks/useBackendRequest'
import { API_ENDPOINTS } from '../paths'
import toast from 'react-hot-toast'

const useFetchDeleteUserPhoto = () => {
  const request = useBackendRequest()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => request({ path: API_ENDPOINTS.PROFILE.deleteUserPhoto, method: 'DELETE' }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['profile'] })
      toast.success('Фото успішно видалено', {
        id: 'delete-user-photo',
      })
    },
  })
}

export default useFetchDeleteUserPhoto
