import { useMutation } from '@tanstack/react-query'
import useBackendRequest from '../hooks/useBackendRequest'
import { API_ENDPOINTS } from '../paths'
import { TAdsCreate } from '../types/adsTypes'
import toast from 'react-hot-toast'
import { ApiError } from '../types/types'

const adsCreate = () => {
  const fetchLogin = useBackendRequest()

  return useMutation({
    mutationFn: async (data: TAdsCreate) =>
      await fetchLogin({ path: API_ENDPOINTS.ADS.create, method: 'POST', data }),
    onSuccess: () => {
      toast.success('Оголошення відправлено на модерацію', {
        id: 'add_ads',
        duration: 2000,
      })
    },
    onError: (error: ApiError) => {
      toast.error(`Невідома помилка ${error}`, {
        id: 'add_ads',
        duration: 2000,
      })
    },
  })
}

export default adsCreate
