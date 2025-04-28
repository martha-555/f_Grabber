import { API_ENDPOINTS } from '../paths'
import { TUserRequest } from '../types/user'
import { axiosClient } from './axiosClient'

export async function register(userInfo: TUserRequest) {
  const response = await axiosClient.post(API_ENDPOINTS.AUTH.register, userInfo, {
    withCredentials: true,
  })
  return response.data
}
