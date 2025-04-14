<script setup lang="ts">
import type { User } from '@/types/interfaces/user'

import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';

import { PATHS } from '@/constants/paths'
import { useRouter } from 'vue-router'


interface Props {
  users: User[]
}
defineProps<Props>()

const router = useRouter()

async function toUserPage(userId: string) {
  try {
    await router.push(`${PATHS.USER.PROFILE}/${userId}`)
  }
  catch (err) {
    console.error('Ошибка при переходе:', err)
  }
}
</script>

<template>
  <!-- <div class="users__wrapper">
    <div class="users__items">
      <div
        v-for="user in users"
        :key="user.uid"
        class="mini__profile"
        @click="toUserPage(user.uid)"
      >
        <div class="mini__profile__wallpaper">
          <img
            class="profile__img profile__img--wallpaper"
            :src="user.wallpaperUrl"
            alt="Обложка профиля"
          >
        </div>
        <div class="mini__profile__avatar">
          <img
            class="profile__img profile__img--avatar"
            :src="user.photoUrl"
            alt="Аватар профиля"
          >
        </div>
        <div class="mini__profile__info">
          <h3 class="mini__profile--title">
            {{ user.displayName }}
          </h3>
          <span class="mini__profile--description">открыть профиль</span>
        </div>
      </div>
    </div>
  </div> -->

  
<AvatarGroup>
    <Avatar 
        v-for="user in users"
        :key="user.uid"
        :image="user.photoUrl"
        @click="toUserPage(user.uid)"
        shape="circle"
        size="large"
         />
</AvatarGroup>


</template>

<style scoped>
.users__items {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
}

.users__wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.hover {
  width: 100%;
  height: 100%;
  --color: #131e36;
  background: linear-gradient(90deg, var(--color) 5%, transparent 50%, var(--color) 75%);
  background-size: 200% 100%;
  animation: loading 3s infinite;
  cursor: pointer;
  box-sizing: border-box;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }

  100% {
    background-position: -200% 0;
  }
}

.mini__profile--title {
  margin: 0;
  margin-bottom: 10px;
  color: white;
}

.mini__profile--description {
  color: var(--color-background-light);
}

.mini__profile__wallpaper {
  width: 400px;
  height: 100px;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
}

.profile__img--wallpaper {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.mini__profile__avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin: -40px auto 10px;
  z-index: 1;
  background-color: white;
}

.profile__img--avatar {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.mini__profile {
  background-color: #111827;
  border-radius: 10px;
  width: 250px;
  text-align: center;
  height: 220px;
  overflow: hidden;
  cursor: pointer;
}
</style>
