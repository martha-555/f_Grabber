import { useMutation, useQueryClient } from '@tanstack/react-query'
import useBackendRequest from '../hooks/useBackendRequest'
import { API_ENDPOINTS } from '../paths'

const useSubmitUserPhoto = () => {
  const fetchUserData = useBackendRequest()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (photo: File | string) => {
      const formData = new FormData()
      formData.append('image', photo)

      return fetchUserData<void, FormData>({
        data: formData,
        method: 'POST',
        path: API_ENDPOINTS.PROFILE.uploadProfilePhoto,
        contentType: 'multipart/form-data',
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['profile'],
      })
    },
  })
}

export default useSubmitUserPhoto
