import { useMutation } from '@tanstack/react-query'
import useBackendRequest from '../hooks/useBackendRequest'
import { API_ENDPOINTS } from '../paths'
import toast from 'react-hot-toast'
import { ApiError } from '../types/types'
import { TChangePasswordRequest } from '../types/authTypes'

const useFetchChangePassword = () => {
  const backendRequest = useBackendRequest()

  return useMutation({
    mutationFn: (data: TChangePasswordRequest) =>
      backendRequest<void, TChangePasswordRequest>({
        path: API_ENDPOINTS.PASSWORD.change,
        method: 'POST',
        data,
      }),
    onSuccess: () => {
      toast.success('Пароль успішно змінено', {
        id: 'change_password',
      })
    },
    onError: (error: ApiError) => {
      if (error?.status == 400) {
        toast.error('Схоже, ви ввели неправильний поточний пароль', {
          id: 'change_password',
        })
      } else {
        toast.error('Невідома помилка', {
          id: 'change_password',
        })
      }
    },
  })
}

export default useFetchChangePassword
