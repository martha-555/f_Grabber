import { API_ENDPOINTS } from '../paths'
import { TUserRequest } from '../types/user'
import { axiosClient } from './axiosClient'

// Function to register a new user
export async function register(userInfo: TUserRequest) {
  try {
    const response = await axiosClient.post(API_ENDPOINTS.AUTH.register, userInfo, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.data
  } catch (error) {
    throw error
  }
}
