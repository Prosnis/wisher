<script setup lang="ts">
import type { Badge } from '@/types/interfaces/user'
import type { User as FirebaseUser } from 'firebase/auth'

import WiNavbar from '@/components/WiNavbar.vue'
import { BADGES } from '@/constants/badges'
import { useProfileStore } from '@/stores/WiProfileStore'
import { getAuth } from 'firebase/auth'
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore'
import { Button } from 'primevue'
import { onMounted, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const auth = getAuth()
const route = useRoute()
const router = useRouter()
const db = getFirestore()

const profileStore = useProfileStore()

const loading = ref<boolean>(false)

const currentUser = ref<FirebaseUser | null>(null)
const { getProfileData } = profileStore

interface FormData {
  name: string
  about: string | ''
  badges: Badge[]
}
const formData = reactive<FormData>({
  name: profileStore.user?.displayName || '',
  about: profileStore.user?.about || '',
  badges: profileStore.user?.badges || [],
})

const isBadgePicked = (badge: Badge): boolean => {
  return formData.badges.some(pickedBadge => pickedBadge.name === badge.name)
}
const badgePicker = (badge: Badge): void => {
  const index = formData.badges.findIndex(item => item.name === badge.name)
  if (index !== -1) {
    formData.badges.splice(index, 1)
  }
  else {
    formData.badges.push(badge)
  }
}

const saveProfile = async () => {
  loading.value = true
  if (auth.currentUser) {
    currentUser.value = auth.currentUser
    const uid: string = currentUser.value.uid
    const userDocRef = doc(db, 'users', uid)
    const userSnapshot = await getDoc(userDocRef)
    const userData = userSnapshot.exists() ? userSnapshot.data() : {}
    const updates = {
      displayName: formData.name !== '' ? formData.name : (currentUser.value.displayName || userData.displayName),
      about: formData.about !== '' ? formData.about : userData.about,
      badges: formData.badges,
    }
    try {
      await updateDoc(userDocRef, updates)
      console.log('Профиль успешно обновлен')
    }
    catch (error) {
      console.error('Ошибка при обновлении профиля:', error)
    }
    finally {
      loading.value = false
    }
    router.back()
  }
}

onMounted(async () => {
  const uid = route.params.uid as string
  await getProfileData(uid)
  formData.badges = [...profileStore.badges]
})
</script>

<template>
  <WiNavbar />
  <div class="form__wrapper">
    <div
      v-if="loading"
      class="profile__spinner"
    />
    <form
      class="form"
      @submit.prevent="saveProfile"
    >
      <h1 class="form__title">
        Редактировать профиль
      </h1>
      <ul class="form__list">
        <li class="form__list__item">
          <label
            class="form__list__label"
            for="name"
          >Имя:</label>
          <input
            id="name"
            v-model="formData.name"
            class="form__list__input"
            type="text"
          >
        </li>
        <li class="form__list__item">
          <label
            class="form__list__label"
            for="about"
          >Краткая информация:</label>
          <textarea
            id="about"
            v-model="formData.about"
            class="form__list__textarea"
          />
        </li>
        <li class="form__list__item">
          <label
            class="form__list__label"
            for=""
          >Выберите интересы:</label>
          <div class="form__badge__wrapper">
            <div
              v-for="(badge, index) in BADGES"
              :key="index"
              :class="[isBadgePicked(badge) ? 'form__badge__picked' : 'form__badge']"
              :style="{
                backgroundColor: isBadgePicked(badge) ? '#0817ecb9' : badge.BgColor,
                color: isBadgePicked(badge) ? '#f0f0f0' : '#818c99',
              }"
              @click="badgePicker(badge)"
            >
              {{ badge.name }}
            </div>
          </div>
        </li>
      </ul>
      <div class="form__buttons">
        <Button
          type="submit"
          label="Сохранить"
          icon="pi pi-check"
          icon-pos="right"
        />
      </div>
    </form>
  </div>
</template>

<style scoped>
.form__title {
  color: var(--color-text-secondary);
}

.profile__spinner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  --color: #f8f8dfaf;
  background: linear-gradient(90deg, var(--color) 25%, transparent 50%, var(--color) 75%);
  background-size: 200% 100%;
  /* border-radius: 50px 50px 0 0; */
  animation: loading 1.5s infinite;
  z-index: 1;
  opacity: 0.8;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }

  100% {
    background-position: -200% 0;
  }
}

.form__buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.form__wrapper {
  position: relative;
  max-width: 800px;
  margin: auto;
}

.form {
  display: flex;
  flex-direction: column;
  background-color: var(--color-secondary);
  color: white;
  margin: auto;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}

.form__badge__wrapper {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
}

.form__badge__picked {
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  cursor: pointer;
  display: flex;
  align-items: center;
  white-space: nowrap;
  flex: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.form__badge {
  cursor: pointer;
  display: flex;
  align-items: center;
  white-space: nowrap;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.form__list {
  list-style: none;
  padding: 0;
}

.form__list__item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.form__list__label {
  flex: 0 0 150px;
  margin-right: 10px;
  color: var(--color-text-primary);
}

.form__list__input,
.form__list__textarea,
.form__badge {
  flex: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.form__list__textarea {
  resize: none;
  min-height: 80px;
}

.form__button {
  border: none;
  background-color: var(--color-background-light);
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  font-size: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 35px;
  margin: 20px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.form__button:hover {
  background-color: var(--color-accent);
  color: var(--color-secondary);
}
</style>
