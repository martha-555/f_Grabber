import { HttpMethod } from '../types/types'

type Params = {
  path: string
  method?: HttpMethod
}

const backendURL = import.meta.env.VITE_API_URL

const useBackendRequest = () => {
  const request = async <T>({ path, method = 'GET' }: Params): Promise<T> => {
    const response = await fetch(`${backendURL}${path}`, {
      method,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return data
  }
  return request
}

export default useBackendRequest
