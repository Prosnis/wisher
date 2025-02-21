import type { User } from '@/types/interfaces/user'
import type { Wish } from '@/types/interfaces/wish'

export interface CardStoreState {
  isLoading: boolean
  currentUserUid: string | null
  isReserved: boolean
  reservedBy: string | null
  user: User | null
  isOwner: boolean
  reservedUser: User | null
  isReservedUser: boolean
  card: Wish | null
}
