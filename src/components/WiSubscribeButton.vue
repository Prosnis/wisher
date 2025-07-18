<script setup lang="ts">
import { getAuth } from 'firebase/auth'
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const auth = getAuth()
const db = getFirestore()

const userSubscribe = ref<string[]>([])
const currentUserUid = ref<string>('')
const isSubscribed = ref<boolean>(false)

const isSelfSubscribe = computed(() => {
  return currentUserUid.value === route.params.uid
})

const buttonLabel = computed(() => {
  return isSubscribed.value ? 'Отписаться' : 'Подписаться'
})
const buttonIcon = computed(() => {
  return isSubscribed.value ? 'pi pi-heart-fill' : 'pi pi-heart'
})

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
  <button class="button" v-if="!isSelfSubscribe" @click="subscribe"> <i :class="buttonIcon"></i> {{ buttonLabel
    }}</button>
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
