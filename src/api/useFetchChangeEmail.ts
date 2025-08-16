import { useMutation, useQueryClient } from '@tanstack/react-query'
import useBackendRequest from '../hooks/useBackendRequest'
import { TEditUserEmail } from '../types/types'
import { API_ENDPOINTS } from '../paths'
import { AxiosError } from 'axios'
import toast from 'react-hot-toast'

const useFetchChangeEmail = () => {
  const backendRequest = useBackendRequest()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: TEditUserEmail) =>
      backendRequest<void, TEditUserEmail>({
        path: API_ENDPOINTS.EMAIL.change,
        method: 'POST',
        data,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['profile'],
      })
    },
    onError: (error: AxiosError) => {
      const values = [...Object.values(error.message)]
      const messages = values.map((item) =>
        item.includes('This email is already in use.')
          ? 'Новий email вже використовується'
          : 'Неправильний поточний email або пароль',
      )
      const parseMessages = new Set(messages)
      parseMessages.forEach((error) => toast.error(error))
    },
  })
}

export default useFetchChangeEmail
