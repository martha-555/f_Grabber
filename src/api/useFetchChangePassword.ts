import { useMutation } from '@tanstack/react-query'
import useBackendRequest from '../hooks/useBackendRequest'
import { TChangePassword } from '../types/authTypes'
import { API_ENDPOINTS } from '../paths'
import toast from 'react-hot-toast'
import { ApiError } from '../types/types'

const useFetchChangePassword = () => {
  const backendRequest = useBackendRequest()

  return useMutation({
    mutationFn: (data: TChangePassword) =>
      backendRequest<void, TChangePassword>({
        path: API_ENDPOINTS.PASSWORD.change,
        method: 'POST',
        data,
      }),
    onSuccess: () => {
      toast.success('Пароль успішно змінено', {
        id: 'change_password',
        duration: 2000,
      })
    },
    onError: (error: ApiError) => {
      if (error?.status == 400) {
        toast.error('Схоже, ви ввели неправильний поточний пароль', {
          id: 'change_password',
          duration: 2000,
        })
      } else {
        toast.error('Невідома помилка', {
          id: 'change_password',
          duration: 2000,
        })
      }
    },
  })
}

export default useFetchChangePassword
