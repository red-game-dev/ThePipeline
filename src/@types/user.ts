export interface UserProfile {
  id: number
  email: string
  name: string
  role: 'customer' | 'admin'
  avatar: string
}

export interface UserProfileResponse extends UserProfile {
  password: string
}
