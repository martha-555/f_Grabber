// errorHandler.ts
import { AxiosError } from 'axios'

export function handleAxiosError(error: AxiosError) {
  if (error.response) {
    console.error('Server responded with an error:', error.response)
    // тут можна, наприклад, показувати тост повідомлення
  } else if (error.request) {
    console.error('No response from server:', error.request)
  } else {
    console.error('Request setup error:', error.message)
  }
}
