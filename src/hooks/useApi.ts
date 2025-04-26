import { useState } from 'react'
import axios from 'axios'
import { API_ENDPOINTS } from '../paths'
import { TUserRequest } from '../types/user'

// Створюємо екземпляр axios з базовим URL, який береться з середовища виконання
const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

// Налаштовуємо перехоплювачі для обробки відповідей
axiosClient.interceptors.response.use(
  (response) => response, // Успішна відповідь повертається без змін
  (error) => {
    console.error('Error in response:', error) // Логування помилки

    return Promise.reject(error) // Відхиляємо обіцянку з помилкою
  },
)

// Хук для роботи з API
export default function useApi() {
  const [data, setData] = useState<any | null>(null)

  const [error, setError] = useState<string | null>(null)

  const [loading, setLoading] = useState<boolean>(false)

  const getMe = async () => {
    setLoading(true)

    try {
      const response = await axiosClient.get(API_ENDPOINTS.getProfile, {
        withCredentials: true,
      })

      setData(response.data)
      setError(null)
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Unknown error')
      setData(null)
    } finally {
      setLoading(false)
    }
  }

  // Функція для авторизації/логіну
  const login = async (credentials: { email: string; password: string }) => {
    setLoading(true)

    try {
      const response = await axiosClient.post(API_ENDPOINTS.login, credentials, {
        withCredentials: true,
      })

      setData(response.data)
      setError(null)
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Unknown error')
      setData(null)
    } finally {
      setLoading(false)
    }
  }

  // Функція для реєстрації
  const register = async (userInfo: TUserRequest) => {
    setLoading(true)

    try {
      const response = await axiosClient.post(API_ENDPOINTS.register, userInfo, {
        withCredentials: true,
      })

      setData(response.data)
      setError(null)
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Unknown error')
      setData(null)
    } finally {
      setLoading(false)
    }
  }

  // Функція для оновлення токена
  const refreshToken = async (token: string) => {
    setLoading(true)

    try {
      const response = await axiosClient.post(
        API_ENDPOINTS.refreshToken,
        { token },
        {
          withCredentials: true,
        },
      )

      setData(response.data)
      setError(null)
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Unknown error')
      setData(null)
    } finally {
      setLoading(false)
    }
  }

  // Функція для виходу з системи
  const logout = async () => {
    setLoading(true)

    try {
      await axiosClient.post(API_ENDPOINTS.logout, { withCredentials: true })
      setData(null)
      setError(null)
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  return { data, error, loading, login, register, refreshToken, logout, getMe }
}
