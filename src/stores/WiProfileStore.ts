import type { Badge, User } from '@/types/interfaces/user'
import type { Wish } from '@/types/interfaces/wish'

import { getAllWishes } from '@/services/GetAllWishes'
import { getUserData } from '@/services/GetUserData'
import { useUserStore } from '@/stores/WiUserStore'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useProfileStore = defineStore('profile', () => {
  const userStore = useUserStore()

  const user = ref<User | null>(null)
  const profileUID = ref<string>('')
  const badges = ref<Badge[]>([])
  const wishes = ref<Wish[]>([])
  const allWishes = ref<Wish[]>([])

  const fulfilledWishes = computed(() => {
    wishes.value.filter(item => item.fulfilled)
  })

  const reservedWishes = computed(() =>
    allWishes.value.filter(elem => elem.reserve === profileUID.value)
  )

  const hasEditPermission = computed(() => 
    userStore.userUID === profileUID.value
  )

  const skeletonLoad = ref<boolean>(true)

  const addWish = (cardData: Wish): void => {
    wishes.value.push(cardData)
  }

  const getProfileData = async (uid: string): Promise<void> => {
    try {
      skeletonLoad.value = true
      profileUID.value = uid

      const { user: userData, wishes: userWishes } = await getUserData(profileUID.value)
      allWishes.value = await getAllWishes()

      if (userData) {
        user.value = userData
        badges.value = userData.badges || []
      }
      if (userWishes) {
        wishes.value = userWishes
      }
    }
    catch (err) {
      console.log(err, 'Не удалось получить данные профиля.')
    }
    finally {
      skeletonLoad.value = false
    }
  }
  return { profileUID, user, wishes, badges, hasEditPermission, skeletonLoad, getProfileData, addWish, fulfilledWishes, reservedWishes }
})
