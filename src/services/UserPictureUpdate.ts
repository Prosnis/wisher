import { getAuth } from 'firebase/auth'
import { doc, getFirestore, updateDoc } from 'firebase/firestore'
import { getDownloadURL, getStorage, ref as storageRef, uploadBytes } from 'firebase/storage'

const db = getFirestore()
const storage = getStorage()
const auth = getAuth()

function dataURLToBlob(dataURL: string): Blob {
  const parts = dataURL.split(';base64,')
  const mimeType = parts[0].split(':')[1]
  const base64Data = atob(parts[1])

  const byteArrays = []
  for (let offset = 0; offset < base64Data.length; offset += 512) {
    const slice = base64Data.slice(offset, offset + 512)
    const byteNumbers = Array.from({ length: slice.length }) // wtf

    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i)
    }

    byteArrays.push(new Uint8Array(byteNumbers))
  }

  return new Blob(byteArrays, { type: mimeType })
}

async function uploadImage(dataURL: string, path: string): Promise<string> {
  try {
    const blob = dataURLToBlob(dataURL)
    const fileRef = storageRef(storage, path)
    await uploadBytes(fileRef, blob)
    return await getDownloadURL(fileRef)
  }
  catch (error) {
    console.error('Ошибка при загрузке файла:', error)
    throw new Error('Ошибка при загрузке файла')
  }
}

// export async function uploadUserPictures(wallpaperFile: string | null, avatarFile: string | null
// ) {
//   const currentUser = auth.currentUser;
//   if (!currentUser) {
//     console.error('Пользователь не авторизован');
//     return;
//   }

//   const userDocRef = doc(db, 'users', currentUser.uid);
//   const updates: { photoUrl?: string; wallpaperUrl?: string } = {};

//   try {
//     if (avatarFile) {
//       updates.photoUrl = await uploadImage(avatarFile, `avatars/${currentUser.uid}`);
//     }

//     if (wallpaperFile) {
//       updates.wallpaperUrl = await uploadImage(wallpaperFile, `wallpapers/${currentUser.uid}`);
//     }

//     await updateDoc(userDocRef, updates);
//     console.log('Профиль успешно обновлен');
//     return updates;
//   } catch (error) {
//     console.error('Ошибка при загрузке профиля:', error);
//   }
// }

export async function uploadUserPictures(data) {
  const currentUser = auth.currentUser
  if (!currentUser) {
    console.error('Пользователь не авторизован')
    return
  }

  const userDocRef = doc(db, 'users', currentUser.uid)
  console.log(currentUser, 'currentUser')
  const updates: { photoUrl?: string, wallpaperUrl?: string } = {}

  try {
    if (data.profilePhoto.value) {
      if (data.profilePhoto.type === 'file') {
        updates.photoUrl = await uploadImage(data.profilePhoto.value, `avatars/${currentUser.uid}`)
      }
      else {
        updates.photoUrl = data.profilePhoto.value
      }
    }

    if (data.wallpaper.value) {
      if (data.wallpaper.type === 'file') {
        updates.photoUrl = await uploadImage(data.wallpaper.value, `wallpapers/${currentUser.uid}`)
      }
      else {
        updates.wallpaperUrl = data.wallpaper.value
      }
    }

    await updateDoc(userDocRef, updates)
    console.log('Профиль успешно обновлен')
    return updates
  }
  catch (error) {
    console.error('Ошибка при загрузке профиля:', error)
  }
}
