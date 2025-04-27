import { API_ENDPOINTS } from '../paths'
import { axiosClient } from './axiosClient'

// Function to fetch the current user's profile
export async function getProfile() {
  const response = await axiosClient.get(API_ENDPOINTS.PROFILE.get, { withCredentials: true })
  return response.data
}
