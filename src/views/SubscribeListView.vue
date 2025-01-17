<script setup>
import WiContentLoader from '@/components/WiContentLoader.vue'
import WiMiniProfileCard from '@/components/WiMiniProfileCard.vue'
import { getSubscribeList } from '@/services/GetSubsList'
import { useUserStore } from '@/stores/WiUserStore'
import { onMounted, ref } from 'vue'

const userStore = useUserStore()
const subscribeList = ref([])
const loading = ref(false)

onMounted(async () => {
  try {
    loading.value = true
    subscribeList.value = await getSubscribeList(userStore.user.subscribe)
    console.log(userStore.user.subscribe, 'store')
  }
  catch (err) {
    console.log(err)
  }
  finally {
    loading.value = false
  }
})
</script>

<template>
  <WiContentLoader
    v-if="loading"
    :width="1300"
    :height="260"
  />

  <div
    v-else-if="subscribeList.length > 0 && !loading"
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
      alt="empty__image"
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

.subs {
  padding: 20px;
}

.empty__image {
  width: 200px;
}
</style>
