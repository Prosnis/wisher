<script setup>
import { getAuth } from 'firebase/auth'
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const auth = getAuth()
const db = getFirestore()
const userSubscribe = ref([])
const currentUser = ref(null)
const isSubscribed = ref(false)

async function saveSubscribe() {
  const userDocRef = doc(db, 'users', currentUser.value.uid)
  try {
    await updateDoc(userDocRef, { subscribe: userSubscribe.value })
  }
  catch (error) {
    console.error('err', error)
  }
}

function subscribe() {
  const index = userSubscribe.value.findIndex(item => item === route.params.uid)
  if (index !== -1) {
    userSubscribe.value.splice(index, 1)
    isSubscribed.value = false
    console.log('otpiska')
  }
  else {
    userSubscribe.value.push(route.params.uid)
    isSubscribed.value = true
    console.log('podpisan')
  }
  saveSubscribe()
}

onMounted(async () => {
  if (auth.currentUser) {
    currentUser.value = auth.currentUser
    const userDocRef = doc(db, 'users', currentUser.value.uid)
    try {
      const docSnapshot = await getDoc(userDocRef)
      if (docSnapshot.exists()) {
        const userData = docSnapshot.data()
        userSubscribe.value = userData.subscribe || []
        isSubscribed.value = userSubscribe.value.includes(route.params.uid)
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
