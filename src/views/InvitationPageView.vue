<script setup>
import { images } from '@/components/constants/inivationImages'
import path from '@/components/constants/pathes'
import NavBar from '@/components/WiNavbar.vue'
import WISpinner from '@/components/WISpinner.vue'
import { generateQrCode } from '@/services/GetQRCode'
import { getUserData } from '@/services/GetUserData'
import { saveInvitationToDB } from '@/services/SaveInvitationToDB'
import { getAuth } from 'firebase/auth'
import html2canvas from 'html2canvas'
import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const qrCodeDataUrl = ref(null)
const selectedImage = ref(images[0])
const auth = getAuth()
const userProfileUrl = ref('')
const currentUser = ref({})
const file = ref(null)
const router = useRouter()
const isActive = ref(false)
const guest = ref(false)

const form = reactive({
  title: '',
  date: '',
  description: '',
  signature: '',
})

function selectImage(image) {
  selectedImage.value = image
}

async function saveCardAsImage() {
  const card = document.getElementById('card')
  try {
    isActive.value = true
    const canvas = await html2canvas(card)
    const imageDataUrl = canvas.toDataURL('image/png')
    file.value = imageDataUrl
    await saveInvitationToDB(imageDataUrl)
    goToInvitationPage()
  }
  catch (error) {
    console.error('Ошибка при сохранении изображения:', error)
  }
  finally {
    isActive.value = false
  }
}

function goToInvitationPage() {
  const currentUser = auth.currentUser

  if (currentUser) {
    const uid = currentUser.uid
    router.push({ path: `${path.invitationCard}/${uid}` })
  }
  else {
    console.error('goToInvitationPage')
  }
}

onMounted(async () => {
  if (!auth.currentUser) {
    guest.value = true
  }
  else {
    const uid = auth.currentUser.uid
    const { user: userData } = await getUserData(uid)
    currentUser.value = userData
    userProfileUrl.value = `https://prosnis.github.io/wisher/user/${uid}`
    qrCodeDataUrl.value = await generateQrCode(userProfileUrl.value)
  }
})
</script>

<template>
  <NavBar />
  <div class="invitation__wrapper">
    <div
      v-if="isActive"
      class="profile__spinner"
    />
    <div class="form">
      <label
        class="form__label"
        for="title"
      > Заголовок
        <input
          id="title"
          v-model="form.title"
          class="form__input"
          type="text"
          maxlength="50"
          placeholder="День рождения!"
        >
      </label>
      <label
        class="form__label"
        for="date"
      > Дата
        <input
          id="date"
          v-model="form.date"
          class="form__input"
          type="date"
        >
      </label>
      <label
        class="form__label"
        for="description"
      > Описание
        <textarea
          id="description"
          v-model="form.description"
          class="form__input form__input--description"
          type="text"
          maxlength="300"
          placeholder="Приглашаю вас отпраздновать мой день рождения в замечательном баре «Дырявый котел», который находится по адресу Косой переулок, 1."
        />
      </label>
      <label
        class="form__label"
        for="signature"
      > Подпись
        <input
          id="signature"
          v-model="form.signature"
          class="form__input"
          type="text"
          maxlength="20"
          placeholder="Tom Riddle"
        >
      </label>

      <div class="form__picture">
        <ul class="form__picture__list">
          <li
            v-for="(image, index) in images"
            :key="index"
            class="picture__item"
            :class="[{ 'picture__item--selected': selectedImage.includes(image) }]"
            @click="selectImage(image)"
          >
            <img
              class="item__image"
              :src="image"
              alt=""
            >
          </li>
        </ul>
      </div>
      <button
        v-if="qrCodeDataUrl"
        :disabled="isActive"
        class="form__button"
        @click="saveCardAsImage"
      >
        Сохранить и поделиться
      </button>
    </div>

    <div
      id="card"
      class="invitation"
    >
      <div class="invitation__info">
        <ul class="info__list">
          <li class="info__list__item info__list__item-title">
            <h1
              v-if="!form.title"
              class="info__list__item--title"
            >
              День рождения!
            </h1>
            <h1 v-else>
              {{ form.title }}
            </h1>
          </li>
          <li class="info__list__item info__list__item-date">
            <span v-if="!form.date"> {{ new Date().toLocaleDateString() }}</span>
            <span v-else>{{ form.date }}</span>
          </li>
          <li class="info__list__item info__list__item-description">
            <span v-if="!form.description">Приглашаю вас отпраздновать мой день рождения в замечательном баре «Дырявый
              котел», который находится по адресу Косой переулок, 1.</span>
            <span v-else> {{ form.description }}</span>
          </li>
          <li class="info__list__item info__list__item-signature">
            <span v-if="!form.signature"> Tom Riddle</span>
            <span v-else>{{ form.signature }}</span>
          </li>
        </ul>
      </div>
      <div class="invitation__img">
        <img
          class="card__image"
          :src="selectedImage"
          alt=""
        >
      </div>

      <div class="invitation__qr">
        <span
          v-if="qrCodeDataUrl"
          class="qr__info"
        >Сканируйте QR-код, чтобы ознакомиться со списком подарков.</span>
        <WISpinner v-if="!qrCodeDataUrl && !guest" />
        <img
          v-else-if="qrCodeDataUrl"
          :src="qrCodeDataUrl"
          alt="QR Code"
        >
        <span
          v-else
          class="qr__info"
        >После регистрации тут будет QR-код на ваш вишлсит и возможность отправить приглашение.</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form__button {
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

.form__button:active{
  transform: translateY(2px);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
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

.form__input--description {
  resize: none;
}

.qr__user--link {
  display: flex;
  flex-direction: column;
}

.qr__user--name {
  font-size: 20px;
}

.qr__info {
  width: 200px;
  color: white;
  font-weight: 600;
  letter-spacing: 2px;
}

.picture__item--selected {
  border: 2px solid var(--color-accent);
  width: 200px;
}

.form__picture__list {
  list-style-type: none;
  display: flex;
  align-items: center;
  padding: 0;
  gap: 10px;
}

.item__image {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.picture__item {
  width: 80px;
  height: 80px;
  border-radius: 20px;
  overflow: hidden;

}

.form {
  padding: 30px;
  width: 400px;
  background: white;
  /* border-radius: 20px; */
}

.form__label {
  flex: 0 0 150px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.form__input {
  flex: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  grid-area: info;
}

.invitation__info {
  display: flex;
  justify-content: center;
}

.info__list__item--title {
  margin: 0
}

.info__list__item-date {
  color: var(--color-accent);
  font-weight: 600;
  font-size: 20px;
}

.info__list__item-signature {
  font-weight: 600;
  font-style: italic;
}

.info__list {
  list-style-type: none;
  margin: auto 20px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.invitation {
  width: 100%;
  border: var(--color-accent) 1px solid;
  background: white;
  /* border-radius: 20px; */
  height: 700px;
  display: grid;
  align-items: center;
  grid-template-columns: 2fr 2fr;
  grid-template-rows: auto 0.5fr;
  overflow: hidden;
  grid-template-areas:
    "info img"
    "qr qr";
}

.invitation__wrapper {
  display: flex;
  position: relative;
  max-width: 1300px;
  margin: auto;
  min-height: 50vh;
  gap: 20px;
  background-color: var(--color-background);
}

.invitation__img {
  width: 100%;
  height: 100%px;
  overflow: hidden;
  grid-area: img;
}

.card__image {
  object-fit: contain;
  width: 100%;
  height: 100%;
}

.invitation__qr {
  grid-area: qr;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  gap: 20px;
  flex-wrap: wrap;
  height: 200px;
  /* background: rgb(28, 215, 221); */
  background: var(--color-accent);
}

.info__list__item {
  word-break: break-word;
  white-space: normal;
}
</style>
