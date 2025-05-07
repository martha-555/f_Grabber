import { useMutation } from '@tanstack/react-query'
import useBackendRequest from '../hooks/useBackendRequest'
import { API_ENDPOINTS } from '../paths'
import { TLoginCredentialsRequest } from '../types/authTypes'
import { TUserProfile } from '../types/types'

const useLogin = () => {
  const fetchLogin = useBackendRequest()

  return useMutation({
    mutationFn: async (data: TLoginCredentialsRequest) => {
      const response = await fetchLogin({ path: API_ENDPOINTS.AUTH.login, method: 'POST', data })

      return response as TUserProfile
    },
  })
}

export default useLogin
