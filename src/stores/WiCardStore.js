import { getUserData } from '@/services/GetUserData'
import { getAuth } from 'firebase/auth'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCardStore = defineStore('card', () => {
  const isLoading = ref(true)
  const currentUser = ref(null)
  const reservedBy = ref('')
  const user = ref({})
  const blockSelfReserve = ref(true)
  const reservedUser = ref({})
  const hasEditPermission = ref(false)
  const card = ref({})
  const db = getFirestore()
  const auth = getAuth()
  const isReserved = ref(false)
  const getCardData = async (cardId) => {
    try {
      isLoading.value = true
      const userDoc = await getDoc(doc(db, 'wishes', cardId))
      const cardData = userDoc.exists() ? userDoc.data() : null
      currentUser.value = auth.currentUser

      if (cardData) {
        card.value = cardData
        reservedBy.value = card.value.reserve || ''
        isReserved.value = !!card.value.reserve

        const userData = await getUserData(card.value.userId)
        user.value = userData.user

        if (currentUser.value.uid === card.value.userId) {
          blockSelfReserve.value = false
        }
      }

      if (card.value.reserve) {
        const reservedUserData = await getUserData(card.value.reserve)
        reservedUser.value = reservedUserData.user
        if (currentUser.value && currentUser.value.uid === reservedUser.value.uid) {
          hasEditPermission.value = true
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
  return { isLoading, currentUser, isReserved, reservedBy, user, blockSelfReserve, reservedUser, hasEditPermission, card, getCardData }
})
