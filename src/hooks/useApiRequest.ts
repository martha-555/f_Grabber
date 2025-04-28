import { useState } from 'react'

// Generic hook for API calls
export function useApiRequest<T>() {
  const [data, setData] = useState<T | null>(null) // State to store API response data
  const [error, setError] = useState<string | null>(null) // State to store error messages
  const [loading, setLoading] = useState<boolean>(false) // State to track loading status
  const [statusCode, setStatusCode] = useState<number | null>(null) // State to store HTTP status code

  // Function to execute the API call
  const execute = async (apiMethod: () => Promise<T>) => {
    setLoading(true) // Set loading to true before the API call
    try {
      const response = await apiMethod() // Execute the API method
      setData(response) // Set the response data
      setStatusCode(200) // Set status code to 200 on success
      setError(null) // Clear any previous errors
    } catch (error: any) {
      setError(error instanceof Error ? error.message : 'Unknown error')
      setStatusCode(error.response?.status || null) // Set status code from error response
      setData(null) // Clear data on error
    } finally {
      setLoading(false) // Set loading to false after the API call
    }
  }

  return { data, error, loading, statusCode, execute } // Return state and execute function
}
