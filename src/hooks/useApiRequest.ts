import { useState } from 'react'
import { handleAxiosError } from '../api/errorHandler'
import { AxiosError } from 'axios'

// Generic hook for API calls
export function useApiRequest<T>() {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [statusCode, setStatusCode] = useState<number | null>(null)

  const execute = async (apiMethod: () => Promise<{ data: T; status: number }>) => {
    setLoading(true)
    setError(null)
    setStatusCode(null)

    try {
      const result = await apiMethod()

      setData(result.data)
      setStatusCode(result.status)

    } catch (err: unknown) {
      const axiosError = err as AxiosError

      // Виклик глобального хендлера помилок
      handleAxiosError(axiosError)

      // Локальне збереження статусу
      const status = axiosError?.response?.status || null
      const message =
        (axiosError?.response?.data as { message?: string })?.message ||
        axiosError?.message ||
        'Unknown error'

      setStatusCode(status)
      setError(message)
      setData(null)
    } finally {
      setLoading(false)
    }
  }

  return { data, error, loading, statusCode, execute }
}
