<script setup>
import path from '@/components/constants/pathes'
import { logout } from '@/services/logOut'
import { useUserStore } from '@/stores/WiUserStore'
import { getAuth } from 'firebase/auth'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const userStore = useUserStore()

async function toUserPage() {
  await router.push(`${path.user}/${userStore.userUID}`)
  window.location.reload()
}

const userLink = ref(null)
const auth = getAuth()
onMounted(async () => {
  if (auth.currentUser) {
    userLink.value = await auth.currentUser.uid
  }
})
</script>

<template>
  <nav class="nav">
    <div class="nav__empty" />
    <router-link
      v-if="userLink"
      :to="path.feed"
      class="nav__logo"
    >
      <span>wisher</span>
    </router-link>
    <router-link
      v-if="!auth.currentUser"
      class="user"
      :to="path.register"
    >
      <span>войти</span>
    </router-link>
    <div
      v-else
      class="user"
      @click="toUserPage"
    >
      <div
        v-if="userStore.user"
        class="user__wrapper"
      >
        <img
          class="user__img"
          :src="userStore.user.photoUrl"
          alt=""
        >
        <span class="user__name"> {{ userStore.user.displayName }}</span>
        <button @click="logout()">
          выйти
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.user__name {}

.user {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer
}

.user__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.user__img {
  width: 35px;
  border-radius: 50%;
  border: 1px solid black
}

.nav {
  display: flex;
  justify-content: space-between;
  background-color: var(--color-secondary);
  height: 60px;
  margin-bottom: 20px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  width: 100%; /* Контейнер занимает всю ширину */
}

.nav__empty,
.nav__logo,
.user {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav__logo {
  font-size: 40px;
  margin: auto;
  font-family: "Hachi Maru Pop", serif;
  color: var(--color-accent);
  text-decoration: none;
}
</style>
