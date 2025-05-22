import { useMutation } from '@tanstack/react-query'
import useBackendRequest from '../hooks/useBackendRequest'
import { API_ENDPOINTS } from '../paths'

type TResetPasswordPayload = {
  password: string
  uid: string
  token: string
}

const useResetPassword = () => {
  const request = useBackendRequest()

  return useMutation({
    mutationFn: async (data: TResetPasswordPayload) => {
      await request<
        void,
        {
          uid: string
          token: string
          new_password: string
        }
      >({
        path: API_ENDPOINTS.PASSWORD.reset,
        method: 'POST',
        data: {
          uid: data.uid,
          token: data.token,
          new_password: data.password,
        },
      })
    },
  })
}

export default useResetPassword
