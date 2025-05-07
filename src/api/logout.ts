import { useMutation } from '@tanstack/react-query'
import useBackendRequest from '../hooks/useBackendRequest'
import { API_ENDPOINTS } from '../paths'

const useLogout = () => {
  const fetchLogout = useBackendRequest()

  return useMutation({
    mutationFn: () => fetchLogout({ path: API_ENDPOINTS.AUTH.logout, method: 'POST' }),
  })
}

export default useLogout
