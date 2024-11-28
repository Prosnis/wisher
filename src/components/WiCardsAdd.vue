<script setup>
import { getAuth } from 'firebase/auth'
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import { reactive } from 'vue'
import { STOCK_CARD_PICTURE } from './constants/varribles'

const props = defineProps({
  userImg: {
    type: String,
  },
  userName: {
    type: String,
  },
})

const emit = defineEmits(['handleAddWish', {}])
const db = getFirestore()
const auth = getAuth()

const form = reactive({
  img: '',
  name: '',
  description: '',
  price: '',
  date: getCurrentDate(),
  link: '',
})

function getCurrentDate() {
  return new Date().toLocaleDateString()
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
    date: new Date().toLocaleDateString(),
    link: '',
  })
}

function createCardData(form) {
  return {
    id: crypto.randomUUID(),
    userId: auth.currentUser.uid,
    img: form.img || STOCK_CARD_PICTURE,
    name: form.name,
    hover: false,
    description: form.description || 'Описание отсутствует. ',
    price: form.price || 0,
    date: form.date,
    link: form.link,
    reserve: '',
  }
}

async function CreateCard() {
  const newCard = createCardData(form)

  try {
    await setDoc(doc(db, 'wishes', newCard.id), newCard)
    emit('handleAddWish', newCard)
    clearForm()
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
</script>

<template>
  <form
    class="form"
    @submit.prevent="CreateCard"
  >
    <h1 class="form__title">
      Добавить желание
    </h1>
    <div class="form__wrapper">
      <ul class="form__list">
        <li>
          <label for="name">Название:</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            required
            maxlength="30"
          >
        </li>
        <li>
          <label for="description">Описание</label>
          <textarea
            id="description"
            v-model="form.description"
            type="text"
            maxlength="100"
          />
        </li>
        <li>
          <label for="price">Цена</label>
          <input
            id="price"
            v-model="form.price"
            type="number"
            maxlength="100"
            oninput="this.value = this.value.slice(0, 10)"
          >
        </li>
        <li>
          <label for="link">Ссылка на товар</label>
          <input
            id="link"
            v-model="form.link"
            type="text"
            maxlength="200"
          >
        </li>
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
        <div class="card__user__info">
          <div class="user__info--info">
            <img
              :src="props.userImg"
              alt="User Avatar"
              class="card__img user__info--avatarImg"
            >
            <span v-text="props.userName" />
          </div>
          <span class="user__info--date">{{ form.date }}</span>
        </div>
      </div>
    </div>
    <button class="form__btn form__btn--add">
      добавить
    </button>
  </form>
</template>

<style scoped>
.card__title{
  padding: 2px;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  background-color: #161f32;
  padding: 50px;
  border-radius: 10px;
  border: 1px solid #ffd859;
  background-color: #2E9AFF;
  animation-name: form__animation;
  animation-duration: 1.5s;
  width: 800px;
  overflow: hidden;

}

@keyframes form__animation {
  from {
    width: 800px;
    height: 50px;
    background-color: #F498AD;
  }
  to {
    width: 800px;
    height: 590px;
    background-color: #2E9AFF;
  }
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
}

.form__preview__card h3,
p {
  margin: 0;
}

.card__image {
  width: 100%;
  border: 1px solid #ccc;
  height: 250px;
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
}

.form__preview__card {
  position: relative;
  width: 280px;
  height: 450px;
  border: 1px solid #ccc;
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

.form__list input,
textarea {
  height: 25px;
  margin-bottom: 10px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form__list textarea {
  resize: none;
  min-height: 80px;
}

.form__list label {
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

.form__btn--add {
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

.form__btn--add:hover {
  border: 3px solid #ffd859;
}
</style>
