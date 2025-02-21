import type { User } from '@/types/interfaces/user'
import type { Wish } from '@/types/interfaces/wish'

import { getUserData } from '@/services/GetUserData'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCardStore = defineStore('card', () => {
  const user = ref<User | null>(null)
  const currentUserUid = ref<string | null>(null)
  const reservedUser = ref<User | null>(null)

  const card = ref<Wish | null>(null)

  const isLoading = ref<boolean>(true)

  const isOwner = ref<boolean>(false)
  const isReservedUser = ref<boolean>(false)

  const reservedBy = ref<string>('')
  const isReserved = ref<boolean>(false)

  const db = getFirestore()
  const auth = getAuth()

  onAuthStateChanged(auth, (userCredential) => {
    if (userCredential) {
      currentUserUid.value = userCredential.uid
    }
    else {
      currentUserUid.value = null
    }
  })

  const getCardData = async (cardId: string): Promise<void> => {
    try {
      isLoading.value = true

      const USER_DOC = await getDoc(doc(db, 'wishes', cardId))
      const CARD_DATA = USER_DOC.exists() ? USER_DOC.data() : null

      if (CARD_DATA) {
        card.value = CARD_DATA as Wish
        reservedBy.value = card.value.reserve || ''
        isReserved.value = !!card.value.reserve

        const userData = await getUserData(card.value.userId)
        user.value = userData.user

        if (card.value.reserve) {
          const reservedUserData = await getUserData(card.value.reserve)
          reservedUser.value = reservedUserData.user
        }

        if (currentUserUid.value) {
          isOwner.value = currentUserUid.value === card.value.userId
          isReservedUser.value = currentUserUid.value === card.value.reserve
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
  return { isLoading, currentUserUid, isReserved, reservedBy, user, isOwner, reservedUser, isReservedUser, card, getCardData }
})
