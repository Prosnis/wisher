import type { Wish } from '@/types/interfaces/wish'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const db = getFirestore()

export async function getAllWishes(): Promise<Wish[]> {
  try {
    const wishesCollection = collection(db, 'wishes')
    const wishesSnapshot = await getDocs(wishesCollection)
    const wishes = wishesSnapshot.docs.map(doc => ({ ...doc.data() as Wish }))
    return wishes
  }
  catch (error) {
    console.error('Ошибка при получении желаний:', error)
    return []
  }
}
