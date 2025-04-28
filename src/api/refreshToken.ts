import { API_ENDPOINTS } from '../paths'
import { axiosClient } from './axiosClient'

// Function to refresh the authentication token
export async function refreshToken(token: string) {
  const response = await axiosClient.post(
    API_ENDPOINTS.AUTH.refreshToken,
    { token },
    { withCredentials: true },
  )
  return response.data
}
