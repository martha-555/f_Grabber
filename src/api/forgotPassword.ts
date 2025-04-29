import { useMutation } from '@tanstack/react-query'
import useBackendRequest from '../hooks/useBackendRequest'
import { API_ENDPOINTS } from '../paths'
import { TForgotPasswordRequest } from '../types/authTypes'

const useForgotPassword = () => {
  const request = useBackendRequest()

  return useMutation({
    mutationFn: async (data: TForgotPasswordRequest) => {
      const response = await request({
        path: API_ENDPOINTS.PASSWORD.forgot,
        method: 'POST',
        data,
      })

      return response as TForgotPasswordRequest
    },
  })
}

export default useForgotPassword
