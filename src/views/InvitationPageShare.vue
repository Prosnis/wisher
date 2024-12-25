<script setup>
import WiNavbar from '@/components/WiNavbar.vue'
import { getInvitationImageUrl } from '@/services/GetUserInvitation'
import { getUserLink } from '@/services/GetUserLink'
import { getAuth } from 'firebase/auth'
import { onMounted, ref } from 'vue'

const invitationImageUrl = ref(null)
const uid = ref(null)
const userLinkToCopy = ref(null)
const auth = getAuth()
const buttonText = ref('Скопировать ссылку')

async function copyLink() {
  const combinedText = `${invitationImageUrl.value}\n${userLinkToCopy.value}`
  await navigator.clipboard.writeText(combinedText)
  buttonText.value = 'Скопировано!'
}

function handleImageLoad(event) {
  event.target.classList.add('loaded')
}

onMounted(async () => {
  invitationImageUrl.value = await getInvitationImageUrl()
  uid.value = auth.currentUser.uid
  userLinkToCopy.value = `Посмотреть и зарезервировать подарок можно тут: ${await getUserLink()}`
})
</script>

<template>
  <WiNavbar />
  <div>
    <div
      v-if="!invitationImageUrl"
      class="invitation__container skeleton-loader"
    />
    <div
      v-else
      class="invitation__container"
    >
      <img
        :src="invitationImageUrl"
        alt="Invitation Image"
        class="invitation__image"
        loading="lazy"
        @load="handleImageLoad"
      >
      <div class="invitation__links">
        <a
          target="_blank"
          :href="`https://vk.com/share.php?url=${encodeURIComponent(invitationImageUrl)}&title=${encodeURIComponent(`Посмотреть и зарезервировать подарок можно тут: https://prosnis.github.io/wisher/user/${uid}`)}`"
        >
          <img
            src="@/components/icons/svg/vk.svg"
            alt=""
          >
        </a>
        <a
          target="_blank"
          :href="`https://t.me/share/url?url=${encodeURIComponent(invitationImageUrl)}&text=${encodeURIComponent(`Посмотреть и зарезервировать подарок можно тут: https://prosnis.github.io/wisher/user/${uid}`)}`"
        >
          <img
            src="@/components/icons/svg/tg.svg"
            alt=""
          >
        </a>
        <button
          class="invitation__btn"
          @click="copyLink"
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
.invitation__btn  {
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

.invitation__btn:active{
  transform: translateY(2px);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
}

.invitation__container {
  border-radius: 10px;
  box-shadow: 0px 10px 40px rgba(126, 155, 189, 0.6);
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
