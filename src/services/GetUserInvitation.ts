import { getAuth } from 'firebase/auth'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { getDownloadURL, getStorage, ref as storageRef } from 'firebase/storage'

const auth = getAuth()
const db = getFirestore()
const storage = getStorage()

export async function getInvitationImageUrl(): Promise<string | null> {
  try {
    const currentUser = auth.currentUser
    if (!currentUser) {
      throw new Error('Пользователь не авторизован')
    }

    const userDocRef = doc(db, 'users', currentUser.uid)
    const userDoc = await getDoc(userDocRef)

    if (!userDoc.exists()) {
      throw new Error('Пользователь не найден')
    }

    const invitationImagePath: string = userDoc.data()?.invitationImage
    if (!invitationImagePath) {
      throw new Error('Путь к изображению приглашения не найден')
    }

    const invitationImageRef = storageRef(storage, invitationImagePath)
    const invitationImageUrl = await getDownloadURL(invitationImageRef)
    console.log(typeof invitationImageUrl)

    return invitationImageUrl
  }
  catch (error) {
    console.error('Ошибка при получении изображения приглашения:', error)
    return null
  }
}
