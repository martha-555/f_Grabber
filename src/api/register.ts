import { useMutation } from '@tanstack/react-query'
import useBackendRequest from '../hooks/useBackendRequest'
import { API_ENDPOINTS } from '../paths'
import { TRegisterCredentialsRequest } from '../types/authTypes'
import { TUserProfile } from '../types/types'

const useRegister = () => {
  const fetchRegister = useBackendRequest()

  return useMutation({
    mutationFn: async (data: TRegisterCredentialsRequest) => {
      const response = await fetchRegister({
        path: API_ENDPOINTS.AUTH.register,
        method: 'POST',
        data,
      })

      return response as TUserProfile
    },
  })
}

export default useRegister
