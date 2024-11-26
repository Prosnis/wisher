<!-- eslint-disable antfu/top-level-function -->
<script setup>
import WiNavbar from '@/components/WiNavbar.vue'
import { badges } from '@/services/UserBadgesStore'
import { useProfileStore } from '@/stores/WiProfileStore'
import { getAuth } from 'firebase/auth'
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore'
import { storeToRefs } from 'pinia'
import { onMounted, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const auth = getAuth()
const route = useRoute()
const router = useRouter()
const profileStore = useProfileStore()
const db = getFirestore()
const loading = ref(false)

const currentUser = ref(null)
const { user, badges: userBadges, skeletonLoad } = storeToRefs(profileStore)
const { getProfileData } = profileStore

const formData = reactive({
  name: '',
  about: '',
  badges: [],
})

const isBadgePicked = (badge) => {
  return formData.badges.some(pickedBadge => pickedBadge.name === badge.name)
}
const badgePicker = (badge) => {
  const index = formData.badges.findIndex(item => item.name === badge.name)
  if (index !== -1) {
    formData.badges.splice(index, 1)
  }
  else {
    formData.badges.push(badge)
  }
}

const saveDecline = () => {
  router.back()
}

const saveProfile = async () => {
  loading.value = true
  currentUser.value = auth.currentUser
  const userDocRef = doc(db, 'users', currentUser.value.uid)
  const userSnapshot = await getDoc(userDocRef)
  const userData = userSnapshot.exists() ? userSnapshot.data() : {}
  const updates = {
    displayName: formData.name !== '' ? formData.name : (currentUser.value.displayName || userData.displayName),
    about: formData.about !== '' ? formData.about : (currentUser.value.about || userData.about),
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

onMounted(async () => {
  await getProfileData(route.params.uid)
  formData.badges = [...userBadges.value]
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
      v-if="userBadges"
      class="form"
      @submit.prevent="saveProfile"
    >
      <h1>Редактировать профиль</h1>
      <ul class="form__list">
        <li>
          <label for="name">Имя:</label>
          <input
            id="name"
            v-model="formData.name"
            type="text"
          >
        </li>
        <li>
          <label for="about">Краткая информация:</label>
          <textarea
            id="about"
            v-model="formData.about"
            name=""
          />
        </li>
        <li>
          <label for="">Выберите интересы:</label>
          <div class="form__badge__wrapper">
            <div
              v-for="(badge, index) in badges"
              :key="index"
              class="form__badge"
              :style="{
                backgroundColor: isBadgePicked(badge) ? '#ffd859' : badge.BgColor,
                color: isBadgePicked(badge) ? 'black' : badge.color,
              }"
              @click="badgePicker(badge)"
            >
              {{ badge.name }}
            </div>
          </div>
        </li>
      </ul>
      <div class="form__buttons">
        <button
          class="form__button form__button--decline"
          type="button"
          @click="saveDecline"
        >
          отмена
        </button>
        <button class="form__button form__button--save">
          сохранить изменения
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
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

.form__wrapper{
    position: relative;
    max-width: 700px;
    margin: auto;
}

.form {
    display: flex;
    flex-direction: column;
    background-color: #111827;
    color: white;
    margin: auto;
    padding: 50px;
    border-radius: 10px;
}

.form__badge__wrapper {
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
}

.form__badge {
    cursor: pointer;
}

.modal-content h1 {
    margin: 0;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
}

.form__list {
    list-style: none;
    padding: 0;
}

.form__list li {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}

.form__list label {
    flex: 0 0 150px;
    margin-right: 10px;
}

.form__list input,
.form__list textarea,
.form__list div {
    flex: 1;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}

.form__list textarea {
    resize: none;
    min-height: 80px;
}

.form__button {
    display: flex;
    align-items: center;
    padding: 10px;
    font-weight: 600;
    border-radius: 10px;
    border: 3px solid #0d121b;
    background-color: #0d121b;
    color: white;
    cursor: pointer;
    transition: border 0.3s ease, background-color 0.3s ease;
}

.form__button--save:hover {
    border: 3px solid #ffd859;
}

.form__button--decline:hover {
    border: 3px solid #f12525;
}
</style>
