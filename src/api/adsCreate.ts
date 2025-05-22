import { useMutation } from '@tanstack/react-query'
import useBackendRequest from '../hooks/useBackendRequest'
import { API_ENDPOINTS } from '../paths'
import { TAdsCreate } from '../types/adsTypes'

const useAdsCreate = () => {
  const fetchLogin = useBackendRequest()

  return useMutation({
    mutationFn: async (data: TAdsCreate) =>
      await fetchLogin({ path: API_ENDPOINTS.ADS.create, method: 'POST', data }),
  })
}

export default useAdsCreate
