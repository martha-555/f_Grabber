import axios from 'axios'
import { handleAxiosError } from './errorHandler'

function createAxiosClient(baseURL: string) {
  if (!baseURL) {
    throw new Error('Base URL is not defined')
  }

  const client = axios.create({ baseURL })

  client.interceptors.response.use(
    (response) => response,
    (error) => {
      handleAxiosError(error)
      return Promise.reject(error)
    },
  )

  return client
}

export const axiosClient = createAxiosClient(import.meta.env.VITE_API_URL)
