import type { User } from '@/types/interfaces/user'
import type { User as FirebaseUser } from 'firebase/auth'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { doc, getFirestore, onSnapshot } from 'firebase/firestore'
import { defineStore } from 'pinia'
import { ref } from 'vue'

const auth = getAuth()
const db = getFirestore()

export const useUserStore = defineStore('user', () => {
  const userUID = ref<string | null>(null)
  const user = ref<User | null>(null)
  let unsubscribe: (() => void) | null = null

  const subscribeToUserData = (uid: string): void => {
    if (typeof unsubscribe === 'function') {
      unsubscribe()
    }

    const userDocRef = doc(db, 'users', uid)
    unsubscribe = onSnapshot(userDocRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        user.value = docSnapshot.data() as User
      }
      else {
        user.value = null
      }
    })
  }

  onAuthStateChanged(auth, (currentUser: FirebaseUser | null) => {
    if (currentUser) {
      userUID.value = currentUser.uid
      subscribeToUserData(currentUser.uid)
    }
    else {
      userUID.value = null
      user.value = null
      if (typeof unsubscribe === 'function') {
        unsubscribe()
        unsubscribe = null
      }
    }
  })

  return { userUID, user }
})
