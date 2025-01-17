<script setup>
import path from '@/components/constants/pathes'
import { logout } from '@/services/logOut'
import { useUserStore } from '@/stores/WiUserStore'
import { getAuth } from 'firebase/auth'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
const auth = getAuth()

async function toUserPage() {
  const userPagePath = `${path.user}/${userStore.userUID}`
  if (route.path !== userPagePath) {
    await router.push(userPagePath)
  }
}
</script>

<template>
  <nav class="nav">
    <div>
      <router-link
        :to="path.feed"
        class="nav__logo"
      >
        <span>вишер</span>
      </router-link>
    </div>

    <router-link
      v-if="!auth.currentUser"
      :to="path.register"
      class="user"
    >
      <span class="nav__login__text">вход/регистрация<font-awesome-icon :icon="['fas', 'right-to-bracket']" /></span>
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
        <div class="user__info">
          <img
            class="user__img"
            :src="userStore.user.photoUrl"
            alt=""
          >
          <span class="user__name"> {{ userStore.user.displayName }}</span>
        </div>

        <button
          class="nav__button"
          @click="logout()"
        >
          <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav__button {
  border: none;
  background-color: var(--color-secondary);
  font-size: 16px;
  display: flex;
  gap: 10px;
  cursor: pointer;
  padding: 5px;
  font-style: italic;
  font-weight: 600;
  color: var(--color-accent);
}

.nav__login {
  text-decoration: none;
}

.nav__login__text {
  display: flex;
  gap: 10px;
  font-style: italic;
  font-weight: 600;
  color: var(--color-accent);
}

.user__name {
  font-size: 20px;
  color: var(--color-accent);
}

.user {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.user__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.user__info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  padding: 5px;
}

.user__img {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid var(--color-accent)
}

.nav {
  display: flex;
  justify-content: space-between;
  background-color: var(--color-secondary);
  height: 50px;
  margin-bottom: 20px;
  max-width: 1300px;
  margin: 0px auto 20px auto;
  border-radius: 0px 0px 10px 10px;
}

.nav__logo,
.user {
  padding: 0px 20px 0px 20px;
}

.nav__logo {
  font-size: 35px;
  margin: auto;
  color: var(--color-accent);
  text-decoration: none;
}
</style>
