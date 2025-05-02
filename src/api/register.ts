import { API_ENDPOINTS } from '../paths'
import {TRegisterCredentialsRequest  } from '../types/user'
import { axiosClient } from './axiosClient'

export async function register(userInfo: TRegisterCredentialsRequest) {
  const response = await axiosClient.post(API_ENDPOINTS.AUTH.register, userInfo, {
    withCredentials: true,
  })

  return {
    data: response.data,
    status: response.status,
  }
}
