export interface LoginResponse {
  access_token: string
  refresh_token: string
}

export interface LoginPayload {
  email: string
  password: string
}

export interface AuthTokenPayload {
  refreshToken: string
}

export type AuthTokenResponse = LoginResponse
