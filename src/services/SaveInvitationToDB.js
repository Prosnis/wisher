import { getAuth } from 'firebase/auth'
import { doc, getFirestore, updateDoc } from 'firebase/firestore'
import { getDownloadURL, getStorage, ref as storageRef, uploadBytes } from 'firebase/storage'

const db = getFirestore()
const storage = getStorage()
const auth = getAuth()

export async function saveInvitationToDB(file) {
  const currentUser = auth.currentUser
  try {
    const userDocRef = doc(db, 'users', currentUser.uid)
    const invitationImage = await uploadImage(file, `invitations/${currentUser.uid}`)
    await updateDoc(userDocRef, { invitationImage })
  }
  catch (error) {
    console.log('Ошибка при загрузке профиля:', error)
  }
}

async function uploadImage(file, path) {
  const byteCharacters = atob(file.split(',')[1])
  const byteArray = new Uint8Array(byteCharacters.length)

  for (let i = 0; i < byteCharacters.length; i++) {
    byteArray[i] = byteCharacters.charCodeAt(i)
  }

  const blob = new Blob([byteArray], { type: 'image/png' })
  const fileRef = storageRef(storage, path)
  await uploadBytes(fileRef, blob)
  return await getDownloadURL(fileRef)
}
