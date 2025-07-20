<script setup lang="ts">
import type { User } from '@/types/interfaces/user'

import WiMiniProfileCard from '@/components/WiMiniProfileCard.vue'
import { getSubscribeList } from '@/services/GetSubsList'
// import { useUserStore } from '@/stores/WiUserStore'
import { useProfileStore } from '@/stores/WiProfileStore'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const subscribeList = ref<User[] | []>([])
const loading = ref<boolean>(false)
// const userStore = useUserStore()

const route = useRoute()
const profileStore = useProfileStore()
const { getProfileData } = profileStore

const fetchSubscribeList = async () => {
  try {
    loading.value = true
    if (profileStore.user && profileStore.user.subscribe) {
      subscribeList.value = await getSubscribeList(profileStore.user.subscribe)
    }
    else {
      subscribeList.value = []
    }
  }
  catch (err) {
    console.error('Ошибка при получении списка подписок:', err)
    subscribeList.value = []
  }
  finally {
    loading.value = false
  }
}

onMounted(async () => {
  const uid = route.params.uid as string
  await getProfileData(uid)
  fetchSubscribeList()
})
</script>

<template>
  <div
    v-if="subscribeList.length > 0"
    class="subs"
  >
    <WiMiniProfileCard :users="subscribeList" />
  </div>

  <div
    v-else
    class="empty"
  >
    <img
      class="empty__image"
      src="@/components/icons/empty.png"
      alt="Иконка пустого списка: здесь пока нет элементов"
    >
    <span>Здесь пока пусто...</span>
  </div>
</template>

<style scoped>
.empty {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
}

.empty__image {
  width: 200px;
}
</style>
