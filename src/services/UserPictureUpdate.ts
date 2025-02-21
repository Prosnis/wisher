import type { User } from '@/types/interfaces/user'

import { getAuth } from 'firebase/auth'
import { doc, getFirestore, updateDoc } from 'firebase/firestore'
import { getDownloadURL, getStorage, ref as storageRef, uploadBytes } from 'firebase/storage'

const db = getFirestore()
const storage = getStorage()
const auth = getAuth()

async function uploadImage(file: Blob | Uint8Array | ArrayBuffer, path: string): Promise<string> {
  try {
    const fileRef = storageRef(storage, path)
    await uploadBytes(fileRef, file)
    const downloadUrl = await getDownloadURL(fileRef)
    return downloadUrl
  }
  catch (error) {
    console.log(error)
    throw new Error('Ошибка при загрузке файла:')
  }
}

export async function saveProfile(user: User, wallpaperFile: string | null, avatarFile: string | null) {
  loading.value = true

  const currentUser = auth.currentUser
  const userDocRef = doc(db, 'users', currentUser.uid)
  const updates = {}

  try {
    if (avatarFile.value) {
      const photoUrl = await uploadImage(avatarFile.value, `avatars/${currentUser.uid}`)
      updates.photoUrl = photoUrl
      user.photoUrl = photoUrl
    }
    if (wallpaperFile.value) {
      const wallpaperUrl = await uploadImage(wallpaperFile.value, `wallpapers/${currentUser.uid}`)
      updates.wallpaperUrl = wallpaperUrl
      user.wallpaperUrl = wallpaperUrl
    }
    await updateDoc(userDocRef, updates)
    console.log('Профиль успешно обновлен')
    return { avatarUrl: updates.photoUrl, wallpaperUrl: updates.wallpaperUrl }
  }
  catch (error) {
    console.log('ошибка при загрузке профиля,', error)
  }
  finally {
    loading.value = false
  }
}
