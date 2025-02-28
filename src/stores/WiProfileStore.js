import { getUserData } from '@/services/GetUserData'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useUserStore } from './WiUserStore'

export const useProfileStore = defineStore('profile', () => {
  const userStore = useUserStore()
  const profileUID = ref(null)
  const user = ref(null)
  const badges = ref(null)
  const hasEditPermission = ref(false)
  const skeletonLoad = ref(true)
  const wishes = ref(null)

  const getProfileData = async (uid) => {
    try {
      skeletonLoad.value = true
      profileUID.value = uid

      const { user: userData, wishes: userWishes } = await getUserData(profileUID.value)

      if (userData) {
        user.value = userData
        badges.value = userData.badges || []
        hasEditPermission.value = userStore.userUID === profileUID.value
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
  return { profileUID, user, wishes, badges, hasEditPermission, skeletonLoad, getProfileData }
})
