export type HttpMethod = 'GET' | 'POST' | 'DELETE' | 'PATCH'

export type TUserProfile = {
  date_joined?: Date
  email: string
  first_name: string
  id?: number
  last_name: string
  location: string
  phone_number: string
  show_phone?: boolean
  role?: string
  user_photo?: File | string
  description: string
  social_links?: { platform: string; url: string }[]
}

export type TEditUserEmail = {
  current_email: string
  new_email: string
  password: string
}

export type TSubmitUserData = Omit<TUserProfile, 'email'>

export type TEditUserForm = Omit<TUserProfile, 'email' | 'social_links'> & {
  social_links?: string
}

export interface ApiError extends Error {
  status?: number
  isAxiosError?: boolean
  message: string
}

export interface ApiError extends Error {
  status?: number
  isAxiosError?: boolean
  message: string
}
