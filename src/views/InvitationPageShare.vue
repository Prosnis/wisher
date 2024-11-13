<template>
  <WiNavbar />
  <div>
    <div v-if="!invitationImageUrl" class="invitation__container skeleton-loader"></div>
    <div v-else class="invitation__container">
      <img :src="invitationImageUrl" alt="Invitation Image" class="invitation__image" loading="lazy">
      <span>Поделиться</span>
      <div class="invitation__links">
        <a
          :href="`https://vk.com/share.php?url=${encodeURIComponent(invitationImageUrl)}&title=${encodeURIComponent('Посмотреть и зарезервировать подарок можно тут: https://prosnis.github.io/wisher/user/' + uid)}`">
          <img src="@/components/icons/svg/vk.svg" alt="">
        </a>
        <a
          :href="`https://t.me/share/url?url=${encodeURIComponent(invitationImageUrl)}&text=${encodeURIComponent('Посмотреть и зарезервировать подарок можно тут: https://prosnis.github.io/wisher/user/' + uid)}`">
          <img src="@/components/icons/svg/tg.svg" alt="">
        </a>
        <button @click="copyLink">
          {{ buttonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import WiNavbar from '@/components/WiNavbar.vue';
import { getInvitationImageUrl } from '@/services/GetUserInvitation';
import { getUserLink } from '@/services/GetUserLink';
import { getAuth } from 'firebase/auth';
import { onMounted, ref } from 'vue';

const invitationImageUrl = ref(null);
const uid = ref(null)
const userLinkToCopy = ref(null)
const auth = getAuth()
const buttonText = ref('Скопировать ссылку')


async function copyLink() {
  const combinedText = `${invitationImageUrl.value}\n${userLinkToCopy.value}`;
  await navigator.clipboard.writeText(combinedText)
  buttonText.value = 'Скопировано!'
}

onMounted(async () => {
  invitationImageUrl.value = await getInvitationImageUrl();
  uid.value = auth.currentUser.uid
  userLinkToCopy.value = `Посмотреть и зарезервировать подарок можно тут: ${await getUserLink()}`
});
</script>




<style scoped>
.skeleton-loader {
  height: 600px;
  --color: #f0f2f5;
  background-repeat: no-repeat;
  animation: fade 1s linear infinite alternate;
  margin-bottom: 50px;

  background-image:
    radial-gradient(circle 25px, var(--color) 100%, transparent 0%),
    radial-gradient(circle 25px, var(--color) 100%, transparent 0%),
    linear-gradient(var(--color) 700px, transparent 0%);

  background-size:
    100px 100px,
    100px 100px,
    600px 660px;

  background-position:
    600px 700px,
    670px 700px,
    400px 35px;
}

@keyframes fade {
  from {
    opacity: 0.6;
  }

  to {
    opacity: 1;
  }
}

.invitation__container {
  border-radius: 50px;
  box-shadow: 0px 10px 40px rgba(126, 155, 189, 0.6);
  display: flex;
  flex-direction: column;
  width: 1300px;
  min-height: 750px;
  align-items: center;
  padding: 50px;
  margin: auto;
  transition: opacity 0.3s ease;
}

.invitation__image {
  width: 600px;
  min-height: 700px;
  transition: opacity 0.3s ease;
}
</style>