<script setup lang="ts">
import WiNavbar from '@/components/WiNavbar.vue'
import WiUserSettingForm from '@/components/WiUserSettingForm.vue'
import { useProfileStore } from '@/stores/WiProfileStore'
import { onMounted, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const profileStore = useProfileStore()
const isLoading = ref(false)
const { getProfileData } = profileStore

const formData = reactive({
  name: '',
  about: '',
  wallpaper: '',
  profilePhoto: '',
  birthday: '',
})

onMounted(async () => {
  try {
    const uid = route.params.uid as string
    await getProfileData(uid)

    if (profileStore.user) {
      formData.name = profileStore.user.displayName || ''
      formData.about = profileStore.user.about || ''
      formData.wallpaper = profileStore.user.wallpaperUrl || ''
      formData.profilePhoto = profileStore.user.photoUrl || ''
      formData.birthday = timestampToDate(profileStore.user.birthday) || ''
    }
  }
  catch (error) {
    console.error('Ошибка загрузки профиля:', error)
  }
  finally {
    isLoading.value = false
  }

  function timestampToDate(timestamp) {
    if (!timestamp)
      return null
    if (typeof timestamp.toDate === 'function') {
      return timestamp.toDate()
    }
    return null
  }
})
</script>

<template>
  <WiNavbar />
  <main v-if="formData.name" class="w-full p-3">
    <div class="min-h-full min-w-full border-round-3xl p-3 bg ">
      <div class="wrapper ">

          <section class="bg-white border-round  h-full overflow-hidden mb-2 shadow-1 max-w-25rem m-auto">
            <div class=" bg-white relative">
              <div class="w-full h-8rem md:h-12rem border-round ">
                <img :src="formData.wallpaper" alt="Обложка профиля" class="w-full h-full img ">
              </div>
              <div class="overflow-hidden border-circle w-6rem h-6rem md:w-8rem md:h-8rem avatar">
                <img :src="formData.profilePhoto" alt="Обложка профиля" class="img">
              </div>
            </div>

            <div class="p-2">
              <div class="flex justify-content-center flex-column align-items-center">
                <p class="text-xl md:text-3xl font-semibold m-0  text-blue-500">
                  {{
                    formData.name }}
                </p>
              </div>
            </div>

          </section>
          <section class="max-w-25rem m-auto bg-white p-3 shadow-1 border-round-sm">
            <WiUserSettingForm v-model="formData" />
          </section>
        </div>
      </div>
    </main>
</template>

<style scoped lang="scss">
.wrapper {
  max-width: 1600px;
  margin: auto;
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
