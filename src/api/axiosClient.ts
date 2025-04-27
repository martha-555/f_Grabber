import axios from 'axios'

// Function to create an Axios client with a base URL and interceptors
function createAxiosClient(baseURL: string) {
  const client = axios.create({
    baseURL,
  })

  // Add a response interceptor to handle errors globally
  client.interceptors.response.use(
    (response) => response, // Pass the response as is
    (error) => {
      console.error('Error in response:', error) // Log the error
      return Promise.reject(error) // Reject the promise with the error
    },
  )

  return client
}

export const axiosClient = createAxiosClient(import.meta.env.VITE_API_URL)
