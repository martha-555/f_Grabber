export type HttpMethod = 'GET' | 'POST' | 'DELETE'

export type TUserProfile = {
  date_joined?: Date
  email: string
  first_name: string
  id?: number
  last_name: string
  location?: string
  phone_number: string
  user_photo?: File | string
}
