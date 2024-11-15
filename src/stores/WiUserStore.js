import { getAuth } from 'firebase/auth'
import { defineStore } from 'pinia'
import { ref } from 'vue'

const auth = getAuth()

export const useUserStore = defineStore('user', () => {
  const userUID = ref(null)
  userUID.value = auth.currentUser.uid
  return { userUID }
})
