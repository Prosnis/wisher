export interface Wish {
  photoUrl: any
  displayName: any
  badge?: Badge[] | null
  date?: string
  description?: string
  fulfilled?: boolean
  hover?: boolean
  id: string
  img?: string | null
  link?: string | null
  name: string
  price?: number | null
  reserve?: string | null
  userId: string
}

export interface Badge {
  BgColor: string
  name: string
  color: string
}
