import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

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

    try {
      const response: AxiosResponse<T> = await api.request(config)
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
