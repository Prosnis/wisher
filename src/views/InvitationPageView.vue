<script setup lang='ts'>
import NavBar from '@/components/WiNavbar.vue'
import WISpinner from '@/components/WISpinner.vue'
import { INVITATION_IMAGES } from '@/constants/inivationImages'
import { PATHS } from '@/constants/paths'
import { generateQrCode } from '@/services/GetQRCode'
import { saveInvitationToDB } from '@/services/SaveInvitationToDB'
import { getAuth } from 'firebase/auth'
import html2canvas from 'html2canvas'
import { computed, onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import Button from 'primevue/button'
import testQR from './testQR.vue'

import QrcodeVue from 'vue-qrcode'
import DGisTest from './DGisTest.vue'

const qrCodeDataUrl = ref<string | null>(null)
const selectedImage = ref<string>(INVITATION_IMAGES[0])
const userProfileUrl = ref<string | null>(null)
const currentUserUid = ref<string | null>(null)
const guest = ref<boolean>(false)
const isActive = ref<boolean>(false)
const file = ref<string | null>(null)

const mapContainer = ref(null)

const auth = getAuth()
const router = useRouter()

const URL: string = import.meta.env.VITE_API_URL

interface Form {
  title: string
  date: string
  description: string
  signature: string
}

const form: Form = reactive({
  title: '',
  date: '',
  description: '',
  signature: '',
})

function selectImage(image: string): void {
  selectedImage.value = image
}

async function saveCardAsImage(): Promise<void> {
  const card = document.getElementById('cardHidden') as HTMLElement | null
  try {
    isActive.value = true
    const canvas = await html2canvas(card as HTMLCanvasElement)
    const imageDataUrl = canvas.toDataURL('image/png')
    file.value = imageDataUrl
    await saveInvitationToDB(imageDataUrl)
    routeToShare()
  }
  catch (error) {
    console.error('Ошибка при сохранении изображения:', error)
  }
  finally {
    isActive.value = false
  }
}

function routeToShare(): void {
  if (auth.currentUser) {
    router.push({ path: `${PATHS.CARDS.INVITATION_CREATE}/${currentUserUid.value}` })
  }
  else {
    console.error('Пользователь не авторизован')
  }
}
const isLoading = computed(() => !qrCodeDataUrl.value && !guest.value)

onMounted(async () => {
  if (!auth.currentUser) {
    guest.value = true
  }
  else {
    currentUserUid.value = auth.currentUser.uid
    userProfileUrl.value = `https://${URL}/user/${currentUserUid.value}`
    qrCodeDataUrl.value = await generateQrCode(userProfileUrl.value)
  }

})
</script>

<template>
  <NavBar />

  <div class="invitation">
    <div class="invitation__form">

      <label class="invitation__label" for="title"> Заголовок
        <input id="title" v-model="form.title" class="invitation__input" type="text" maxlength="50"
          placeholder="Название мероприятия">
      </label>

      <label class="invitation__label" for="date"> Дата
        <input id="date" v-model="form.date" class="invitation__input" type="date">
      </label>

      <label class="invitation__label" for="description"> Описание
        <textarea id="description" v-model="form.description" class="invitation__input invitation__input--description"
          type="text" maxlength="300" placeholder="Описание"></textarea>
      </label>

      <label class="invitation__label" for="signature"> Подпись
        <input id="signature" v-model="form.signature" class="invitation__input" type="text" maxlength="20"
          placeholder="Подпись">
      </label>

      <ul class="invitation__picture-list">
        <li v-for="(image, index) in INVITATION_IMAGES" :key="index" class="invitation__picture-item"
          :class="[{ 'invitation__picture-item--selected': selectedImage.includes(image) }]"
          @click="selectImage(image)">
          <img class="invitation__image" :src="image" alt="Изображение для пригласительного">
        </li>
      </ul>

      <Button v-if="qrCodeDataUrl" :disabled="isActive" class="invitation__button" @click="saveCardAsImage">
        Сохранить и поделиться
      </Button>
    </div>




    <div id="card" class="invitation__preview">
      <div class="invitation__info">

        <ul class="invitation__info-list">

          <li class="invitation__title-item">
            <h1 class="invitation__title">
              {{ form.title || 'День рождения!' }}
            </h1>
          </li>

          <li class="invitation__date-item">
            <span class="invitation__date">
              {{ form.date || new Date().toLocaleDateString() }}
            </span>
          </li>

          <li class="invitation__description-item">
            <span class="invitation__description">
              {{ form.description || 'Приглашаю вас отпраздновать мой день рождения в замечательном баре «Дырявыйкотел»,который находится по адресу Косой переулок, 1.' }}
            </span>
          </li>

          <li class="invitation__signature-item">
            <span class="invitation__signature">
              {{ form.signature || 'Tom Riddle' }}
            </span>
          </li>

        </ul>

      </div>

      <div class="invitation__preview-img-wrapper">
        <img class="invitation__preview-img" :src="selectedImage" alt="Изображение для пригласительного">
      </div>

      <div class="invitation__qr">
        <template v-if="qrCodeDataUrl">
          <span class="invitation__qr-info">
            Отсканируйте QR-код, чтобы ознакомиться со списком подарков.
          </span>
          <testQR url="https://wishme.dev/u/123" />
        </template>

        <WISpinner v-else-if="isLoading" />

        <span v-else class="invitation__qr-info">
          После регистрации тут будет QR-код на ваш вишлсит и возможность отправить приглашение.
        </span>
      </div>
    </div>
    <div ref="mapContainer" style="width: 100%; height: 250px;"></div>
  </div>

  <!-- ВНИМАНИЕ: скрытый рендер-блок для генерации картинки -->
  <div id="cardHidden" class="invitation__preview"
    style="width: 1000px; height: 700px; position: absolute; top: -9999px; left: -9999px;">
    <div class="invitation__info">
      <ul class="invitation__info-list">
        <li class="invitation__title-item">
          <h1 class="invitation__title">
            {{ form.title || 'День рождения!' }}
          </h1>
        </li>
        <li class="invitation__date-item">
          <span class="invitation__date">
            {{ form.date || new Date().toLocaleDateString() }}
          </span>
        </li>
        <li class="invitation__description-item">
          <span class="invitation__description">
            {{ form.description || 'Приглашаю вас отпраздновать мой день рождения в замечательном баре «Дырявый котел»,который находится по адресу Косой переулок, 1.' }}
          </span>
        </li>
        <li class="invitation__signature-item">
          <span class="invitation__signature">
            {{ form.signature || 'Tom Riddle' }}
          </span>
        </li>
      </ul>
    </div>

    <div class="invitation__preview-img-wrapper">
      <img class="invitation__preview-img" :src="selectedImage" alt="Изображение для пригласительного" />
    </div>

    <div class="invitation__qr">
      <span class="invitation__qr-info">
        Отсканируйте QR-код, чтобы ознакомиться со списком подарков.
      </span>
      <testQR :url="`https://wishme.dev/u/123`" />
    </div>
  </div>


</template>

<style scoped lang="scss">
@use '@/styles/mixins';
@use '@/styles/colors';

.invitation {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
    "form preview";
  gap: 20px;

  @include mobile {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      "preview"
      "form";
  }


  &__form {
    grid-area: form;
    padding: 10px;
    background: white;
    border-radius: 20px;
  }

  &__label {
    flex: 0 0 150px;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }

  &__input {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;

    transition: border-color 0.3s ease;

    &:focus {
      border-color: #334155;
      outline: none;
    }
  }

  &__input--description {
    height: 100px;
    resize: none;
  }

  &__picture-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
  }

  &__picture-item {
    width: 100px;
    height: 100px;
    border-radius: 20px;
    overflow: hidden;


    &--selected {
      border: 2px solid black;
    }
  }

  &__image {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  &__button {
    width: 100%;
    height: 50px;
    color: white;
    font-weight: 600;
    border-radius: 20px;
  }

  &__preview {
    grid-area: preview;
    background: $color-background-blue;
    height: 700px;
    width: 690px;
    display: grid;
    align-items: center;
    grid-template-columns: 2fr 2fr;
    grid-template-rows: auto 0.5fr;
    overflow: hidden;
    grid-template-areas:
      "info img"
      "qr qr";

        @include mobile {
    width: 400px;
    height: 400px;
  }
  }

  &__info {
    grid-area: info;
  }

  &__info-list {
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

  &__date {
    font-size: 35px;
    color: white;
  }

  &__title {
    font-size: 40px;
    color: white;
    font-weight: 600;
  }

  &__signature {
    font-size: 20px;
    color: white;
    font-weight: 600;
    font-style: italic;
  }

  &__preview-img-wrapper {
    grid-area: img;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  &__preview-img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

  &__qr {
    grid-area: qr;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    gap: 20px;
    flex-wrap: wrap;
    height: 200px;
    background: $color-background-pink;
  }

  &__qr-info {
    width: 200px;
    color: white;
    font-weight: 600;
    letter-spacing: 2px;
  }

}
</style>
