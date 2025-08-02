import { useMutation } from '@tanstack/react-query'
import useBackendRequest from '../hooks/useBackendRequest'
import { API_ENDPOINTS } from '../paths'

type UseLogoutOptions = {
  onSuccess?: () => void
}

const useLogout = (options?: UseLogoutOptions) => {
  const fetchLogout = useBackendRequest()

  return useMutation({
    mutationFn: () => fetchLogout({ path: API_ENDPOINTS.AUTH.logout, method: 'POST' }),
    onSuccess: options?.onSuccess,
  })
}

export default useLogout
