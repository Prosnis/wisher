import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'

const db = getFirestore()

export async function getUserData(uid) {
  const userDoc = await getDoc(doc(db, 'users', uid))
  const userData = userDoc.exists() ? userDoc.data() : null

  if (!userData) {
    console.error('Пользователь не найден!')
    return { user: null, wishes: [] }
  }

  const wishesQuery = query(collection(db, 'wishes'), where('userId', '==', uid))
  const wishesSnapshot = await getDocs(wishesQuery)
  const userWishes = wishesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))

  return { user: userData, wishes: userWishes }
}
