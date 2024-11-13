<script setup>
import { images } from '@/components/constants/inivationImages'
import path from '@/components/constants/pathes'
import NavBar from '@/components/WiNavbar.vue'
import WISpinner from '@/components/WISpinner.vue'
import { getUserData } from '@/services/GetUserData'
import { getAuth } from 'firebase/auth'
import { doc, getFirestore, updateDoc } from 'firebase/firestore'
import { getDownloadURL, getStorage, ref as storageRef, uploadBytes } from 'firebase/storage'
import html2canvas from 'html2canvas'
import QRCode from 'qrcode'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router';

const db = getFirestore()
const qrCodeDataUrl = ref(null)
const title = ref('')
const date = ref('')
const description = ref('')
const signature = ref('')
const selectedImage = ref(images[0])
const auth = getAuth()
const userProfileUrl = ref('')
const currentUser = ref({})
const file = ref(null)
const router = useRouter();
const isActive = ref(false)


const storage = getStorage()

async function generateQrCode(url) {
  try {
    return await QRCode.toDataURL(url, { width: 110, margin: 1, color: { dark: '#ffffff', light: '#000000' } })
  }
  catch (error) {
    console.error('Ошибка генерации QR-кода:', error)
    return null
  }
}

function selectImage(image) {
  selectedImage.value = image
}

async function uploadImage(file, path) {
  const byteCharacters = atob(file.split(',')[1])
  const byteArray = new Uint8Array(byteCharacters.length)

  for (let i = 0; i < byteCharacters.length; i++) {
    byteArray[i] = byteCharacters.charCodeAt(i)
  }

  const blob = new Blob([byteArray], { type: 'image/png' })
  const fileRef = storageRef(storage, path)
  await uploadBytes(fileRef, blob)
  return await getDownloadURL(fileRef)
}


async function saveInvitationToDB(file) {
  const currentUser = auth.currentUser
  isActive.value = true
  try {
    const userDocRef = doc(db, 'users', currentUser.uid)
    const invitationImage = await uploadImage(file, `invitations/${currentUser.uid}`)
    await updateDoc(userDocRef, { invitationImage })
  } catch (error) {
    console.log('Ошибка при загрузке профиля:', error)
  } finally {
    isActive.value = false
  }
}

async function saveCardAsImage() {
  const card = document.getElementById('card')
  try {
    const canvas = await html2canvas(card)
    const imageDataUrl = canvas.toDataURL('image/png')
    file.value = imageDataUrl
    await saveInvitationToDB(imageDataUrl)
    goToInvitationPage()
  } catch (error) {
    console.error('Ошибка при сохранении изображения:', error)
  }
}

function goToInvitationPage() {
  const currentUser = auth.currentUser;

  if (currentUser) {
    const uid = currentUser.uid;
    router.push({ path: `${path.invitationCard}/${uid}` });
  } else {
    console.error('Пользователь не авторизован');
  }
}



onMounted(async () => {
  const uid = auth.currentUser.uid
  const { user: userData } = await getUserData(uid)
  currentUser.value = userData
  userProfileUrl.value = `https://prosnis.github.io/wisher/user/${uid}`
  qrCodeDataUrl.value = await generateQrCode(userProfileUrl.value)
})
</script>

<template>
  <NavBar />
  <div class="invitation__wrapper">
    <div v-if="isActive" class="profile__spinner"></div>
    <div class="form">
      <label for="title"> Заголовок
        <input id="title" v-model="title" class="form__input" type="text" maxlength="50" placeholder="День рождение!">
      </label>
      <label for="date"> Дата
        <input id="date" v-model="date" class="form__input" type="date">
      </label>
      <label for="description"> Описание
        <textarea id="description" v-model="description" class="form__input form__input--description" type="text"
          maxlength="300"
          placeholder="Приглашаю вас отпраздновать мой день рождения в замечательном баре «Дырявый котел», который находится по адресу Косой переулок, 1." />
      </label>
      <label for="signature"> Подпись
        <input id="signature" v-model="signature" class="form__input" type="text" maxlength="20"
          placeholder="Tom Riddle">
      </label>

      <div class="form__picture">
        <ul class="form__picture__list">
          <li v-for="(image, index) in images" :key="index" class="picture__item"
            :class="[{ 'picture__item--selected': selectedImage.includes(image) }]" @click="selectImage(image)">
            <img class="item__image" :src="image" alt="">
          </li>
        </ul>
      </div>
    </div>

    <div id="card" class="invitation">
      <div class="invitation__info">
        <ul class="info__list">
          <li class="info__list__item info__list__item-title">

            <h1 v-if="!title">День рождение!</h1>
            <h1 v-else>{{ title }}</h1>
          </li>
          <li class="info__list__item info__list__item-date">
            <span v-if="!date"> {{ new Date().toLocaleDateString() }}</span>
            <span v-else>{{ date }}</span>
          </li>
          <li class="info__list__item info__list__item-description">
            <span v-if="!description">Приглашаю вас отпраздновать мой день рождения в замечательном баре «Дырявый
              котел», который находится по адресу Косой переулок, 1.</span>
            <span v-else> {{ description }}</span>
          </li>
          <li class="info__list__item info__list__item-signature">
            <span v-if="!signature"> Tom Riddle</span>
            <span v-else>{{ signature }}</span>
          </li>
        </ul>
      </div>
      <div class="invitation__img">
        <img class="card__image" :src="selectedImage" alt="">
      </div>

      <div class="invitation__qr">
        <span class="qr__info">Сканируйте QR-код, чтобы ознакомиться со списком подарков.</span>
        <WISpinner v-if="!qrCodeDataUrl" />
        <img v-else :src="qrCodeDataUrl" alt="QR Code">
        <!-- <div class="qr__user--link">
            <span class="qr__user--name">{{ currentUser.displayName }}</span>
            <span>{{ userProfileUrl }}</span>
          </div> -->
      </div>

    </div>
    <button @click="saveCardAsImage" :disabled="isActive">
      Сохранить как изображение
    </button>
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
    border-radius: 50px 50px 0 0;
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
}

.picture__item--selected {
  border: 2px solid black;
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
  border: 1px solid black;
  padding: 30px;
  width: 400px;
}

.form label {
  flex: 0 0 150px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.form input,
textarea {
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

.info__list__item-title h1 {
  margin: 0
}

.info__list__item-date {
  color: rgb(28, 215, 221);
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
  border: 1px solid black;
  width: 900px;
  height: 700px;
  display: grid;
  align-items: center;
  grid-template-columns: 2fr 2fr;
  grid-template-rows: auto 0.5fr;
  grid-template-areas:
    "info img"
    "qr qr";
}

.invitation__wrapper {
  display: flex;
  position: relative;
  border: 1px solid black;
  max-width: 1300px;
  margin: auto;
  min-height: 50vh;
  padding: 20px;
  border-radius: 50px;
  gap: 20px;
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
}

.info__list__item {
  word-break: break-word;
  white-space: normal;
}
</style>