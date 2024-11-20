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

  const getProfileData = async (uid) => {
    try {
      skeletonLoad.value = true
      profileUID.value = uid

      const { user: userData } = await getUserData(profileUID.value)

      if (userData) {
        user.value = userData
        badges.value = userData.badges || []
        hasEditPermission.value = userStore.userUID === profileUID.value
      }
    }
    catch (err) {
      console.log(err, 'Не удалось получить данные профиля.')
    }
    finally {
      skeletonLoad.value = false
    }
  }
  return { profileUID, user, badges, hasEditPermission, skeletonLoad, getProfileData }
})
