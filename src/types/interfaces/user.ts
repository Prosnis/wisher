import type { Timestamp } from 'firebase/firestore'

export interface User {
  about?: string
  badges?: Badge[] | null
  createdAt?: Timestamp
  displayName: string
  email: string | null
  invitationImage?: string | null
  photoUrl?: string | null
  subscribe?: string[] | null
  interests?: string | null
  uid: string
  wallpaperUrl?: string | null
  birthday: Timestamp | null
}

export interface Badge {
  BgColor: string
  name: string
  color: string
}
