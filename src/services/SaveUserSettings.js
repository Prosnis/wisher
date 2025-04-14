import { getAuth } from 'firebase/auth'
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore'

const auth = getAuth()
const db = getFirestore()


export const SaveUserSettings = async (data) => {
    if (auth.currentUser) {
        const currentUser = auth.currentUser
        const uid = currentUser.uid
        const userDocRef = doc(db, 'users', uid)
        const userSnapshot = await getDoc(userDocRef)
        const userData = userSnapshot.exists() ? userSnapshot.data() : {}
        const updates = {
            displayName: data.name !== '' ? data.name : (currentUser.displayName || userData.displayName),
            about: data.about !== '' ? data.about :(currentUser.about || userData.about),
            birthday: data.birthday !== '' ? data.birthday : userData.birthday,
        }
        try {
            await updateDoc(userDocRef, updates)
            console.log('Профиль успешно обновлен')
        }
        catch (error) {
            console.error('Ошибка при обновлении профиля:', error)
        }
    }
}