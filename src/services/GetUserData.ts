import type { User } from '@/types/interfaces/user'
import type { Wish } from '@/types/interfaces/wish'
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'

const db = getFirestore()

export async function getUserData(uid: string): Promise<{ user: User | null, wishes: Wish[] }> {
  try {
    const userDoc = await getDoc(doc(db, 'users', uid))
    const userData = userDoc.exists() ? (userDoc.data() as User) : null

    if (!userData) {
      console.error('Пользователь не найден!')
      return { user: null, wishes: [] }
    }

    const wishesQuery = query(collection(db, 'wishes'), where('userId', '==', uid))
    const wishesSnapshot = await getDocs(wishesQuery)
    const userWishes = wishesSnapshot.docs.map(doc => ({ ...doc.data() as Wish }))

    return { user: userData, wishes: userWishes }
  }
  catch (error: any) {
    console.error('Ошибка при получении данных пользователя', error)
    return { user: null, wishes: [] }
  }
}
