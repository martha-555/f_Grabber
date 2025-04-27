import { axiosClient } from './axiosClient'
import { API_ENDPOINTS } from '../paths'

// Function to log in a user
export async function login(credentials: { email: string; password: string }) {
  const response = await axiosClient.post(API_ENDPOINTS.AUTH.login, credentials, {
    withCredentials: true,
  })
  return response.data
}
