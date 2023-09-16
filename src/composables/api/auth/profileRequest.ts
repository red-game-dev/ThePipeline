import type { UserProfileResponse } from '~/@types'

export async function profileRequest() {
  return useApiFetch('/api/v1/auth/profile').get().json<UserProfileResponse>()
}
