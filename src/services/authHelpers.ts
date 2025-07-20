import type { User } from 'firebase/auth'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export function getCurrentUser(): Promise<User | null> {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      getAuth(),
      (user) => {
        unsubscribe()
        resolve(user)
      },
      reject,
    )
  })
}
