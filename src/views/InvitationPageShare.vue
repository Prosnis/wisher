<script setup lang="ts">
import WiNavbar from '@/components/WiNavbar.vue'
import { getInvitationImageUrl } from '@/services/GetUserInvitation'
import { getUserLink } from '@/services/GetUserLink'
import { getAuth } from 'firebase/auth'
import { onMounted, ref } from 'vue'

const invitationImageUrl = ref<string | null>(null)
const uid = ref<string | null>(null)
const userLinkToCopy = ref<string | null>(null)
const auth = getAuth()
const buttonText = ref<string>('Скопировать ссылку')
const URL = import.meta.env.VITE_API_URL

async function copyInvitationLink() {
  const combinedText = `${invitationImageUrl.value}\n${userLinkToCopy.value}`
  await navigator.clipboard.writeText(combinedText)
  buttonText.value = 'Скопировано!'
}

function smoothLoad(event: Event) {
  const eventTarget = event.target as HTMLImageElement
  eventTarget.classList.add('loaded')
}

onMounted(async () => {
  const currentUser = auth.currentUser
  if (currentUser) {
    uid.value = currentUser.uid
    try {
      invitationImageUrl.value = await getInvitationImageUrl()
      userLinkToCopy.value = `Посмотреть и зарезервировать подарок можно тут: ${await getUserLink()}`
    }
    catch (error) {
      console.error('Ошибка при загрузке данных:', error)
    }
  }
  else {
    console.log('Пользователь не авторизован')
  }
})
</script>

<template>
  <WiNavbar />
  <div>
    <div :class="[invitationImageUrl ? 'invitation__container' : 'invitation__container skeleton-loader']">
      <img
        v-if="invitationImageUrl"
        :src="invitationImageUrl"
        alt="Изображение пригласительного"
        class="invitation__image"
        loading="lazy"
        @load="smoothLoad"
      >
      <div class="invitation__links">
        <a
          target="_blank"
          :href="`https://vk.com/share.php?url=${encodeURIComponent(invitationImageUrl)}&title=${encodeURIComponent(`Посмотреть и зарезервировать подарок можно тут: https://${URL}/user/${uid}`)}`"
        >
          <img
            src="@/components/icons/svg/vk.svg"
            alt="Вконтакте"
          >
        </a>
        <a
          target="_blank"
          :href="`https://t.me/share/url?url=${encodeURIComponent(invitationImageUrl)}&text=${encodeURIComponent(`Посмотреть и зарезервировать подарок можно тут: https://${URL}/user/${uid}`)}`"
        >
          <img
            src="@/components/icons/svg/tg.svg"
            alt="Телеграмм"
          >
        </a>
        <button
          class="invitation__btn"
          @click="copyInvitationLink"
        >
          {{ buttonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.invitation__links {
  display: flex;
  gap: 10px;
}

.invitation__btn {
  margin: 0;
  display: flex;
  align-items: center;
  padding: 10px;
  margin: auto;
  font-weight: 600;
  border-radius: 10px;
  border: none;
  border: 3px solid var(--color-primary);
  background-color: var(--color-accent);
  color: white;
  cursor: pointer;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  font-size: 16px;
}

.invitation__btn:active {
  transform: translateY(2px);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
}

.invitation__container {
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 900px;
  min-height: 750px;
  align-items: center;
  margin: auto;
  padding: 20px;
  transition: opacity 0.3s ease;
  background-color: var(--color-secondary);
}

.invitation__image {
  opacity: 0;
  margin-bottom: 20px;
  width: 820px;
  min-height: 700px;
  transition: opacity 0.5s ease;
}

.invitation__image.loaded {
  opacity: 1;
}
</style>
