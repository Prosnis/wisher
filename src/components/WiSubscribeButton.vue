<script setup lang="ts">
// import type { User as FirebaseUser } from 'firebase/auth'

import { getAuth } from 'firebase/auth'
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const auth = getAuth()
const db = getFirestore()

const userSubscribe = ref<string[]>([])
const currentUserUid = ref<string>('')
const isSubscribed = ref<boolean>(false)

async function saveSubscribe() {
  try {
    if (auth.currentUser) {
      const userDocRef = doc(db, 'users', currentUserUid.value)
      await updateDoc(userDocRef, { subscribe: userSubscribe.value })
    }
  }
  catch (error) {
    console.error('Пользователь не авторизирован', error)
  }
}

function subscribe() {
  const uid = route.params.uid as string
  const index = userSubscribe.value.findIndex(item => item === uid)
  if (index !== -1) {
    userSubscribe.value.splice(index, 1)
    isSubscribed.value = false
  }
  else {
    userSubscribe.value.push(uid)
    isSubscribed.value = true
  }
  saveSubscribe()
}

onMounted(async () => {
  if (auth.currentUser) {
    currentUserUid.value = auth.currentUser.uid
    const userDocRef = doc(db, 'users', currentUserUid.value)
    try {
      const docSnapshot = await getDoc(userDocRef)
      if (docSnapshot.exists()) {
        const userData = docSnapshot.data()
        userSubscribe.value = userData.subscribe || []
        const uid = route.params.uid as string
        isSubscribed.value = userSubscribe.value.includes(uid)
      }
    }
    catch (error) {
      console.error('err', error)
    }
  }
})
</script>

<template>
  <button
    class="button__subscribe"
    @click="subscribe"
  >
    <span :class="[isSubscribed ? 'unsubscribe__title' : 'subscribe__title']">
      {{ isSubscribed ? 'Вы подписаны' : 'Подписаться' }}
    </span>
  </button>
</template>

<style>
.subscribe__title{
    color: var(--color-accent);
}
.unsubscribe__title{
    color: var(--color-text-secondary);
}

.button__subscribe{
    border: none;
    background-color: var(--color-background-light);
    padding: 5px;
    cursor: pointer;
    width: 180px;
    border-radius: 10px;
    font-size: 20px;
    display: flex;
    justify-content: space-around;
    height: 35px;
    margin: 20px 20px auto 0px;
}
</style>
