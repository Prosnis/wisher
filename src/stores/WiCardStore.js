import { getUserData } from '@/services/GetUserData'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCardStore = defineStore('card', () => {
  const user = ref({})
  const currentUser = ref(null)
  const reservedUser = ref({})

  const card = ref({})

  const isLoading = ref(true)

  const isOwner = ref(false)
  const isReservedUser = ref(false)

  const reservedBy = ref('')
  const isReserved = ref(false)

  const db = getFirestore()
  const auth = getAuth()

  onAuthStateChanged(auth, (userCredential) => {
    if (userCredential) {
      currentUser.value = userCredential
    }
    else {
      currentUser.value = null
    }
  })

  const getCardData = async (cardId) => {
    try {
      isLoading.value = true

      const USER_DOC = await getDoc(doc(db, 'wishes', cardId))
      const CARD_DATA = USER_DOC.exists() ? USER_DOC.data() : null

      if (CARD_DATA) {
        card.value = CARD_DATA
        reservedBy.value = card.value.reserve || ''
        isReserved.value = !!card.value.reserve

        const userData = await getUserData(card.value.userId)
        user.value = userData.user

        if (card.value.reserve) {
          const reservedUserData = await getUserData(card.value.reserve)
          reservedUser.value = reservedUserData.user
        }

        if (currentUser.value) {
          isOwner.value = currentUser.value.uid === card.value.userId
          isReservedUser.value = currentUser.value.uid === card.value.reserve
        }
        else {
          isOwner.value = false
          isReservedUser.value = false
        }
      }
    }
    catch (err) {
      console.log(err, 'wicardstore')
    }
    finally {
      isLoading.value = false
    }
  }
  return { isLoading, currentUser, isReserved, reservedBy, user, isOwner, reservedUser, isReservedUser, card, getCardData }
})
