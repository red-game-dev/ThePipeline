import type { LoginPayload, LoginResponse } from '~/@types'

type UseLoginProps = LoginPayload

export async function loginRequest({
  email, password,
}: UseLoginProps) {
  return useApiFetch<LoginPayload>('/api/v1/auth/login').post({
    email,
    password,
  }).json<LoginResponse>()
}
