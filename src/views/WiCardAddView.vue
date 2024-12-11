<script setup>
import path from '@/components/constants/pathes'
import defaultImage from '@/components/icons/box.jpg'
import WiNavbar from '@/components/WiNavbar.vue'
import { classifyText } from '@/services/GetCardHobbi'
import { YandexParser } from '@/services/GetFromYandex'
import { badges } from '@/services/UserBadgesStore'
import { useProfileStore } from '@/stores/WiProfileStore'
import { getAuth } from 'firebase/auth'
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const db = getFirestore()
const auth = getAuth()

const loading = ref(false)
const urlToparse = ref('')
const formToggle = ref(true)
const error = ref(false)
const toggleText = ref('Заполнить вручную')

const categories = ref([])

const profileStore = useProfileStore()
const { addWish } = profileStore

function formToggler() {
  formToggle.value = !formToggle.value
  toggleText.value = formToggle.value ? 'Заполнить вручную' : 'Создать из ссылки'
}

const form = reactive({
  img: '',
  name: '',
  description: '',
  price: '',
  date: new Date().toLocaleDateString(),
  link: '',
})

async function parseFromYndex() {
  try {
    loading.value = true
    const url = urlToparse.value
    const result = await YandexParser(url)
    form.img = result.image
    form.name = result.title
    form.description = result.description
    form.link = result.link
    form.price = result.price
    formToggler()
  }
  catch (err) {
    console.log('parseFromYandex', err)
    error.value = true
  }
  finally {
    loading.value = false
  }
}

function formatPrice(value) {
  if (!value)
    return ''
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
  }).format(value)
}

function clearForm() {
  Object.assign(form, {
    img: '',
    name: '',
    description: '',
    price: '',
    date: '',
    link: '',
  })
}

function createCardData(form) {
  return {
    id: crypto.randomUUID(),
    userId: auth.currentUser.uid,
    img: form.img || defaultImage,
    name: form.name,
    hover: false,
    description: form.description || 'Описание отсутствует. ',
    price: form.price || 0,
    date: form.date || new Date().toLocaleDateString(),
    link: form.link,
    reserve: '',
  }
}

function toUserPage() {
  router.push(`${path.user}/${auth.currentUser.uid}`)
}

async function CreateCard() {
  const newCard = createCardData(form)

  try {
    await setDoc(doc(db, 'wishes', newCard.id), newCard)
    addWish(newCard)
    clearForm()
    toUserPage()
  }
  catch (err) {
    console.log(err, 'Ошибка при создании карточки')
  }
}

function previewCard(event) {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      form.img = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

async function classifiedHobbies(cardName) {
  try {
    const result = await classifyText(cardName)
    categories.value = badges.filter(badge =>
      result.some(res => badge.name.includes(res.label)),
    )
  }
  catch (error) {
    console.error(error)
    categories.value = []
  }
}
</script>

<template>
  <WiNavbar />
  <form
    class="form"
    @submit.prevent="CreateCard"
  >
    <h1 class="form__title">
      Добавить желание
    </h1>
    <button
      class="form__btn form__btn--toggle"
      @click.prevent.stop="formToggler"
    >
      {{ toggleText }}
    </button>

    <div
      v-if="loading"
      class="form__create--byLink profile__spinner"
    />

    <div
      v-if="formToggle"
      class="form__create--byLink"
    >
      <h2 class="form__create__tittle">
        Используйте ссылку на товар в <span class="form__create__span"> <a
          class="form__span--link"
          target="_blank"
          href="https://market.yandex.ru/"
        > Яндекс Маркет</a></span>
      </h2>
      <input
        id="link"
        v-model="urlToparse"
        class="form__input--byLink"
        type="text"
        maxlength="200"
        required
      >
      <button
        class="form__btn form__btn--byLink"
        @click.prevent.stop="parseFromYndex"
      >
        Найти товар <font-awesome-icon
          class="form__icon form__icon--byLink"
          :icon="['fas', 'arrow-right']"
        />
      </button>
      <span v-if="error">К сожалению, произошла ошибка. Пожалуйста, проверьте ссылку или заполните карточку <ins
        class="form__create__error"
        @click.prevent.stop="formToggler"
      >вручную</ins></span>
    </div>

    <div
      v-else
      class="form__wrapper"
    >
      <ul class="form__list">
        <li>
          <label
            class="form__label"
            for="name"
          >Название:</label>
          <input
            id="name"
            v-model="form.name"
            class="form__input"
            type="text"
            required
            maxlength="30"
            @change="classifiedHobbies(form.name)"
          >
        </li>
        <li>
          <label
            class="form__label"
            for="description"
          >Описание</label>
          <textarea
            id="description"
            v-model="form.description"
            class="form__textarea"
            type="text"
            maxlength="100"
          />
        </li>
        <li>
          <label
            class="form__label"
            for="price"
          >Цена</label>
          <input
            id="price"
            v-model="form.price"
            class="form__input"
            type="number"
            maxlength="100"
            oninput="this.value = this.value.slice(0, 10)"
          >
        </li>
        <li>
          <label
            class="form__label"
            for="link"
          >Ссылка на товар</label>
          <input
            id="link"
            v-model="form.link"
            class="form__input"
            type="text"
            maxlength="200"
          >
        </li>

        <div
          v-for="(badge, index) in categories"
          :key="index"
          class="form__badge"
          :style="{
            backgroundColor: badge.BgColor,
            color: badge.color,
          }"
        >
          {{ badge.name }}
        </div>
      </ul>

      <div class="form__preview__card">
        <label
          class="card__label card__label--file"
          for="file-input"
        >
          <img
            v-if="form.img"
            :src="form.img"
            alt=""
            class="card__image"
          >
          <font-awesome-icon
            v-if="!form.img"
            class="card__icon--file"
            :icon="['fas', 'file-image']"
          />
          <input
            id="file-input"
            class="card__input card__input--file"
            type="file"
            @change="previewCard($event)"
          >
        </label>
        <h3 class="card__title">
          {{ form.name }}
        </h3>
        <p class="card__price">
          {{ formatPrice(form.price) }}
        </p>
      </div>
    </div>
    <button
      v-if="!formToggle"
      class="form__btn form__btn--add"
    >
      добавить
    </button>
  </form>
</template>

<style scoped>
.form__badge {
  cursor: pointer;
  display: flex;
  align-items: center;
  white-space: nowrap;
}

.form__create__error {
  color: #ffd859;
  cursor: pointer;
}

.form__span--link {
  color: #ffd859;
}

.form__create--Bylink {
  display: flex;
  flex-direction: column;
  border: #ffd859 1px solid;
  padding: 10px;
  border-radius: 10px;
  gap: 20px;

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

.card__title {
  padding: 2px;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  background-color: #161f32;
  padding: 50px;
  width: 800px;
  overflow: hidden;
  position: relative;
  height: 650px;

  border-radius: 10px;
  max-width: 1000px;
  margin: 40px auto;
  background-color: #111827
}

.user__info--date {
  font-size: 15px;
}

.user__info--info {
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 20px;
}

.card__label--file {
  width: 100%;
  border: 1px solid #ccc;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-direction: column;
  gap: 20px;
}

.card__image {
  width: 100%;
  border: 1px solid #ccc;
  height: 300px;
  object-fit: cover;
}

.card__user__info {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: auto;
  padding: 5px;
}

.user__info--avatarImg {
  border: 1px solid black;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.card__price {
  position: absolute;
  z-index: 1;
  right: 5%;
  top: 5%;
  background-color: rgb(2, 1, 1);
  padding: 2px;
  font-weight: 600;
  margin: 0;
}

.form__preview__card {
  position: relative;
  width: 280px;
  height: 450px;
  border: 2px solid #ccc;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
  overflow: hidden;
}

.form__wrapper {
  display: flex;
  gap: 50px;
  align-items: center;
}

.form__list li {
  display: flex;
  align-items: center;
  gap: 20px;
}

.form__input,
.form__textarea {
  height: 25px;
  margin-bottom: 10px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form__textarea {
  resize: none;
  min-height: 80px;
}

.form__label {
  flex: 0 0 150px;
}

.form__list {
  list-style-type: none;
  padding: 0;
}

.card__icon--file {
  font-size: 100px;
  color: rgb(236, 233, 233);
  transition: color 0.3s;
}

.card__input--file {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
}

.form__btn {
  margin: 0;
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 10px;
  font-weight: 600;
  border-radius: 10px;
  border: 3px solid #0d121b;
  background-color: #0d121b;
  color: white;
  cursor: pointer;
  transition: border 0.3s ease, background-color 0.3s ease;
}

.form__btn:hover:not(.form__btn--byLink) {
  border: 3px solid #ffd859;
}

.form__create--byLink {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: auto 0;
}

.form__icon--byLink {
  margin-left: 10px;
}

.form__input--byLink {
  width: 550px;
  height: 30px;
  padding: 10px;
  border-radius: 10px;
}

.form__btn--byLink {
  font-size: 25px;
  width: 580px;
  height: 30px;
  margin: 0;
  padding: 25px;
  display: flex;
  justify-content: center;
  background-color: #ffd859;
  color: #0d121b;
}

.form__create__tittle {
  margin: 0;
}

.form__btn--toggle {}
</style>
