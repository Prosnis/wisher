export interface User {
  about?: string
  badges?: Badge[] | null
  createdAt?: Timestamp
  displayName: string
  email: string | null
  invitationImage?: string | null
  photoUrl?: string | null
  subscribe?: string[] | null
  uid: string
  wallpaperUrl?: string | null
}

export interface Badge {
  BgColor: string
  name: string
  color: string
}

export interface Timestamp {
  nanoseconds: number
  seconds: number
}
