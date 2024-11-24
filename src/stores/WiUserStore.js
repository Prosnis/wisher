import { getUserData } from '@/services/GetUserData'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { defineStore } from 'pinia'
import { ref } from 'vue'

const auth = getAuth()

export const useUserStore = defineStore('user', () => {
  const userUID = ref(null)
  const user = ref(null)

  const getData = async () => {
    const { user: userData } = await getUserData(userUID.value)
    user.value = userData
  }

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      userUID.value = currentUser.uid
      getData()
    }
    else {
      userUID.value = null
      user.value = null
    }
  })

  return { userUID, user }
})
