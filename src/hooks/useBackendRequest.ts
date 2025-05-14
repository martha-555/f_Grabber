import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { API_ENDPOINTS } from '../paths'

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

type Params<Data> = {
  path: string
  method?: HttpMethod
  data?: Data
  contentType?: string
}

const backendURL = import.meta.env.VITE_API_URL

const api = axios.create({
  baseURL: backendURL,
  withCredentials: true,
})

const useBackendRequest = () => {
  const request = async <Response, Data = void>({
    path,
    method = 'GET',
    data,
    contentType = 'application/json',
  }: Params<Data>): Promise<Response> => {
    const config: AxiosRequestConfig<Data> = {
      url: path,
      method,
      data,
      headers: {
        'Content-Type': contentType,
      },
    }
    api.request({ url: API_ENDPOINTS.AUTH.refreshToken, method: 'POST' })

    try {
      const response: AxiosResponse<Response> = await api.request(config)

      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(`HTTP error! status: ${error.response?.status}, message: ${error.message}`)
      }

      throw error
    }
  }

  return request
}

export default useBackendRequest
