import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore'

const db = getFirestore()

export async function getUserSubscriptions(uid: string): Promise<string[]> {
  const userDocRef = doc(db, 'users', uid)
  const docSnapshot = await getDoc(userDocRef)
  if (docSnapshot.exists()) {
    const data = docSnapshot.data()
    return data.subscribe || []
  }
  return []
}

export async function updateUserSubscriptions(uid: string, subscriptions: string[]): Promise<void> {
  const userDocRef = doc(db, 'users', uid)
  await updateDoc(userDocRef, { subscribe: subscriptions })
}
