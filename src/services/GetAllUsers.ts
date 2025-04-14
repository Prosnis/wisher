import type { User } from '@/types/interfaces/user'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const db = getFirestore()

export async function getAllUsers(): Promise<User[]> {
  try {
    const usersCollection = collection(db, 'users')
    const usersSnapshot = await getDocs(usersCollection)
    const users = usersSnapshot.docs.map(doc => ({ ...doc.data() as User }))
    return users
  }
  catch (error) {
    console.error('Ошибка при получении пользователей:', error)
    return []
  }
}


// import type { User } from '@/types/interfaces/user'
// import { useFireStore } from '@/composables/useFirestore'

// export async function getAllUsers(): Promise<User[]> {
//   const { getAll } = useFireStore()
//   return await getAll<User>('users')
// }