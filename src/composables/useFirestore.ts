import { collection, getDocs, getFirestore } from 'firebase/firestore'

const db = getFirestore()

export function useFireStore() {
  const getAlldata = async <T>(collectionName: string): Promise<T[]> => {
    try {
      const collectionRef = collection(db, collectionName)
      const snapshot = await getDocs(collectionRef)
      return snapshot.docs.map(doc => ({ ...doc.data() as T }))
    }
    catch (error) {
      console.log(`Ошибка при получении ${collectionName}`, error)
      return []
    }
  }

  return { getAlldata }
}
