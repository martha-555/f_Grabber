import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { HttpMethod } from '../types/types'

type Params<D> = {
  path: string
  method?: HttpMethod
  data?: D
}

const backendURL = import.meta.env.VITE_API_URL

const api = axios.create({
  baseURL: backendURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

const useBackendRequest = () => {
  const request = async <T = any, D = any>({
    path,
    method = 'GET',
    data,
  }: Params<D>): Promise<T> => {
    const config: AxiosRequestConfig<D> = {
      url: path,
      method,
      data,
    }

    const response: AxiosResponse<T> = await api.request(config)

    if (response.status < 200 || response.status >= 300) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return response.data
  }

  return request
}

export default useBackendRequest
