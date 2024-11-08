<script setup>
import { images } from '@/components/constants/inivationImages'
import NavBar from '@/components/NavBar.vue'
import { getUserData } from '@/services/GetUserData'
import { getAuth } from 'firebase/auth'
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore'
import html2canvas from 'html2canvas'
import QRCode from 'qrcode'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
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

async function generateQrCode(url) {
  try {
    return await QRCode.toDataURL(url, { width: 110, margin: 1, color: { dark: '#ffffff', light: '#000000' } })
  }
  catch (error) {
    console.error('Ошибка генерации QR-кода:', error)
    return null
  }
}

onMounted(async () => {
  const uid = auth.currentUser.uid
  const { user: userData } = await getUserData(uid)
  currentUser.value = userData
  userProfileUrl.value = `/wisher/user/${uid}`
  qrCodeDataUrl.value = await generateQrCode(userProfileUrl.value)
})

function selectImage(image) {
  selectedImage.value = image
}

async function saveImageToUser(imageDataUrl, userId) {
  try {
    const userRef = doc(db, 'users', userId)
    const userDoc = await getDoc(userRef)
    if (userDoc.exists()) {
      const user = userDoc.data()
      const updatedInvitations = user.invitations || []

      updatedInvitations.push(imageDataUrl)

      await updateDoc(userRef, {
        invitations: updatedInvitations,
      })
    }
    else {
      console.error('пользователь не найден')
    }
  }
  catch (error) {
    console.error('err', error)
  }
}

async function saveCardAsImage() {
  const card = document.getElementById('card')
  html2canvas(card).then(async (canvas) => {
    const imageDataUrl = canvas.toDataURL('image/png')

    const uid = auth.currentUser.uid
    await saveImageToUser(imageDataUrl, uid)

    const link = document.createElement('a')
    link.href = imageDataUrl
    link.download = 'invitation.png'
    link.click()
    // router.push(`/invitations/${uid}`)
  })
}
</script>

<template>
  <NavBar />
  <div class="invitation__wrapper">
    <div class="form">
      <label for="title"> Заголовок
        <input
          id="title"
          v-model="title"
          class="form__input"
          type="text"
        >
      </label>
      <label for="date"> Дата
        <input
          id="date"
          v-model="date"
          class="form__input"
          type="date"
        >
      </label>
      <label for="description"> Описание
        <textarea
          id="description"
          v-model="description"
          class="form__input form__input--description"
          type="text"
        />
      </label>
      <label for="signature"> Подпись
        <input
          id="signature"
          v-model="signature"
          class="form__input"
          type="text"
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
    </div>

    <div
      id="card"
      class="invitation"
    >
      <div class="invitation__info">
        <ul class="info__list">
          <li class="info__list__item info__list__item-title">
            <h1>{{ title }}</h1>
          </li>
          <li class="info__list__item info__list__item-date">
            {{ date }}
          </li>
          <li class="info__list__item info__list__item-description">
            {{ description }}
          </li>
          <li class="info__list__item info__list__item-signature">
            {{ signature }}
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
        <span class="qr__info">Сканируйте QR-код, чтобы ознакомиться со списком подарков.</span>
        <img
          v-if="qrCodeDataUrl"
          :src="qrCodeDataUrl"
          alt="QR Code"
        >
        <div class="qr__user--link">
          <span class="qr__user--name">{{ currentUser.displayName }}</span>
          <span>{{ userProfileUrl }}</span>
        </div>
      </div>
    </div>
    <button @click="saveCardAsImage">
      Сохранить как изображение
    </button>
  </div>
</template>

<style scoped>
.qr__user--link{
    display: flex;
    flex-direction: column;
}
.qr__user--name{
    font-size: 20px;
}
/* .qr__user--photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.qr__user__photo--wrapper {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
} */

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
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
        "info img"
        "qr qr";
}

.invitation__wrapper {
    display: flex;
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
    background-color: aliceblue;
}

.info__list__item {
    word-break: break-word;
    white-space: normal;
}
</style>
