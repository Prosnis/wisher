import { collection, getDocs, getFirestore } from 'firebase/firestore'

const db = getFirestore()

export async function getAllWishes() {
  try {
    const wishesCollection = collection(db, 'wishes')
    const wishesSnapshot = await getDocs(wishesCollection)

    const wishes = wishesSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }))

    return wishes
  }
  catch (error) {
    console.error('Ошибка при получении пользователей:', error)
    return []
  }
}
