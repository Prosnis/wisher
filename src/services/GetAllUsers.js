import { collection, getDocs, getFirestore } from 'firebase/firestore'

const db = getFirestore()

export async function getAllUsers() {
  try {
    const usersCollection = collection(db, 'users')
    const usersSnapshot = await getDocs(usersCollection)

    const users = usersSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }))

    return users
  }
  catch (error) {
    console.error('Ошибка при получении пользователей:', error)
    return []
  }
}
