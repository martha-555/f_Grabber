import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { HttpMethod } from '../types/types'

type Params<Data> = {
  path: string
  method?: HttpMethod
  data?: Data
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
  const request = async <Response, Data = void>({
    path,
    method = 'GET',
    data,
  }: Params<Data>): Promise<Response> => {
    const config: AxiosRequestConfig<Data> = {
      url: path,
      method,
      data,
    }

    const response: AxiosResponse<Response> = await api.request(config)

    return response.data
  }

  return request
}

export default useBackendRequest
