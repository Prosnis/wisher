<script setup lang="ts">
import {PATHS} from '@/constants/paths'
import { getUserSubscriptions, updateUserSubscriptions } from '@/services/FireBaseSubscribe'
import { getAuth } from 'firebase/auth'
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const auth = getAuth()
const route = useRoute()
const router = useRouter()

const userSubscribe = ref<string[]>([])
const currentUserUid = ref('')
const isSubscribed = ref(false)

const isSelfSubscribe = computed(() => currentUserUid.value !== route.params.uid)
const buttonInfo = computed(() => ({
  label: isSubscribed.value ? 'Отписаться' : 'Подписаться',
  icon: isSubscribed.value ? 'pi pi-heart-fill' : 'pi pi-heart'
}))

async function initSubscriptions() {
  const user = auth.currentUser
  if (!user) return
  currentUserUid.value = user.uid
  try {
    userSubscribe.value = await getUserSubscriptions(user.uid)
    const targetUid = typeof route.params.uid === 'string' ? route.params.uid : ''
    isSubscribed.value = userSubscribe.value.includes(targetUid)
  } catch (error) {
    console.error('Ошибка загрузки подписок:', error)
  }
}

async function toggleSubscription() {
  const targetUid = typeof route.params.uid === 'string' ? route.params.uid : ''
    if (!auth.currentUser) {
    console.warn('Пользователь не авторизован')
    router.push(PATHS.AUTH.REGISTER)
    return
  }
  const index = userSubscribe.value.indexOf(targetUid)
  if (index !== -1) {
    userSubscribe.value.splice(index, 1)
    isSubscribed.value = false
  } else {
    userSubscribe.value.push(targetUid)
    isSubscribed.value = true
  }
  try {
    await updateUserSubscriptions(currentUserUid.value, userSubscribe.value)
  } catch (error) {
    console.error('Ошибка при обновлении подписки:', error)
  }
}

onMounted(() => {
  initSubscriptions()
})
</script>


<template>
  <button class="button"
  v-if="isSelfSubscribe"
  @click="toggleSubscription">
  <i :class="buttonInfo.icon"></i> {{ buttonInfo.label}}</button>
</template>

<style scoped lang="scss">
.button {
  background-color: inherit;
  border: none;
  color: white;
  font-size: 20px;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
</style>
