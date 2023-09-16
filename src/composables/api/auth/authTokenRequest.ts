import type { AuthTokenPayload, AuthTokenResponse } from '~/@types'

type UseLoginProps = AuthTokenPayload

export async function authTokenRequest({
  refreshToken,
}: UseLoginProps) {
  return useApiFetch<AuthTokenPayload>('/api/v1/auth/refresh-token').post({
    refreshToken,
  }).json<AuthTokenResponse>()
}
