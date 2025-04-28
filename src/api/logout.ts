import { API_ENDPOINTS } from '../paths'
import { axiosClient } from './axiosClient'

// Function to log out the user
export async function logout() {
  await axiosClient.post(API_ENDPOINTS.AUTH.logout, { withCredentials: true })
  return null
}
