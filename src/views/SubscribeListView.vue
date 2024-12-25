<script setup>
import path from '@/components/constants/pathes'
import { getUserData } from '@/services/GetUserData'
import { useUserStore } from '@/stores/WiUserStore'
import { doc, getFirestore, updateDoc } from 'firebase/firestore'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const db = getFirestore()
const userStore = useUserStore()
const subscribeMap = ref(new Map())
const subscribeList = ref([])
const router = useRouter()

async function getSubscribeList(subList) {
  const result = await Promise.all(
    subList.map(async (item) => {
      if (subscribeMap.value.has(item)) {
        console.log('cached')
        return subscribeMap.value.get(item)
      }

      const { user: userData } = await getUserData(item)
      subscribeMap.value.set(item, userData)
      console.log('new')
      return userData
    }),
  )

  subscribeList.value = result
}

async function toUserPage(userId) {
  try {
    await router.push(`${path.user}/${userId}`)
    console.log(`${path.user}/${userId}`)
    window.location.reload()
  }
  catch (err) {
    console.log(err)
  }
}

async function unSubscribe(uid) {
  const index = subscribeList.value.findIndex(item => item.uid === uid)
  if (index !== -1) {
    subscribeList.value.splice(index, 1)
    const updatedSubscribeList = subscribeList.value.map(item => item.uid)
    const userDocRef = doc(db, 'users', route.params.uid)
    try {
      await updateDoc(userDocRef, { subscribe: updatedSubscribeList })
    }
    catch (error) {
      console.error('err', error)
    }
  }
}

onMounted(async () => {
  await getSubscribeList(userStore.user.subscribe)
  console.log(subscribeList.value)
})
</script>

<template>
  <div
    v-if="subscribeList.length > 0"
    class="subscribe__wrapper"
  >
    <ul class="subscribe__list">
      <li
        v-for="user in subscribeList"
        :key="user.uid"
        class="subscribe__item"
        @click="toUserPage(user.uid)"
      >
        <div class="subscribe__item__wrapper">
          <img
            class="subscribe__item__avatar"
            :src="user.photoUrl"
            alt=""
          >
          <span class="subscribe__item__title">{{ user.displayName }}</span>
        </div>
        <div>
          <button @click.stop="unSubscribe(user.uid)">
            otpiska
          </button>
        </div>
      </li>
    </ul>
  </div>
  <div
    v-else
    class="empty"
  >
    <img
      class="empty__image"
      src="@/components/icons/empty.png"
      alt=""
    >
    <span>Здесь пока пусто...</span>
  </div>
</template>

 <style scoped>
 .empty__image{
    width: 200px;
 }
.empty{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    color: var(--color-text-secondary);
}

.subscribe__item__title {
    font-size: 18px;
    color: var(--color-text-secondary);
}

.subscribe__item__avatar {
    border: solid 1px var(--color-accent);
    border-radius: 50%;
    width: 60px;
    height: 60px;
}

.subscribe__wrapper {
    width: 1000px;
    padding: 20px;
}

.subscribe__list {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    cursor: pointer;
}

.subscribe__item__wrapper {
    display: flex;
    align-items: center;
    gap: 20px;
}

.subscribe__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-radius: 10px;
    cursor: pointer;
    background-color: var(--color-background-light);
}
</style>
