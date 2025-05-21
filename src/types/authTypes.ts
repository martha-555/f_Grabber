export type TRegisterCredentialsRequest = {
  email: string
  password: string
  first_name: string
  last_name: string
  phone_number: string
}

export type TRegisterResponse = {}

export type TLoginCredentialsRequest = {
  email: string
  password: string
}

export type TLoginResponse = {
  message: string
}

export type TForgotPasswordRequest = {
  email: string
}

export type TChangePassword = {
  old_password: string
  new_password: string
}
