import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { doc, getFirestore, onSnapshot } from 'firebase/firestore'
import { defineStore } from 'pinia'
import { ref } from 'vue'

const auth = getAuth()
const db = getFirestore()

export const useUserStore = defineStore('user', () => {
  const userUID = ref(null)
  const user = ref(null)
  let unsubscribe = null

  const subscribeToUserData = (uid) => {
    if (unsubscribe) {
      unsubscribe()
    }

    const userDocRef = doc(db, 'users', uid)
    unsubscribe = onSnapshot(userDocRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        user.value = docSnapshot.data()
      }
      else {
        user.value = null
      }
    })
  }

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      userUID.value = currentUser.uid
      subscribeToUserData(currentUser.uid)
    }
    else {
      userUID.value = null
      user.value = null
      if (unsubscribe) {
        unsubscribe()
        unsubscribe = null
      }
    }
  })

  return { userUID, user }
})
