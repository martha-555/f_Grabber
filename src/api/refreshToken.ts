import { API_ENDPOINTS } from '../paths'
import { axiosClient } from './axiosClient'

// Function to refresh the authentication token
export async function refreshToken() {
  const response = await axiosClient.post(API_ENDPOINTS.AUTH.refreshToken, {
    withCredentials: true,
  })

  return {
    data: response.data,
    status: response.status,
  }
}
