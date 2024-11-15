<script setup>
import { getAuth } from 'firebase/auth'
import { doc, getFirestore, setDoc } from 'firebase/firestore'

import { ref } from 'vue'

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

const previewImg = ref('')
const previewName = ref('')
const previewDescription = ref('')
const previewPrice = ref('')
const previewDate = ref(new Date().toLocaleDateString())
const previewLink = ref('')

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
  previewName.value = ''
  previewDescription.value = ''
  previewPrice.value = ''
  previewLink.value = ''
  previewImg.value = ''
}

function createCardData(previewImg, previewName, previewDescription, previewPrice, previewDate, previewLink) {
  return {
    id: crypto.randomUUID(),
    userId: auth.currentUser.uid,
    img: previewImg || 'https://media.istockphoto.com/id/1308342088/vector/surprise-gift-box-gift-box-with-red-ribbon-bow-flat-style-element-design-for-giveaway.jpg?s=612x612&w=0&k=20&c=FUOJS2CFbYIqm4R7zfyKUdeS-gMyc3bGlRr1rL7rjQ0=',
    name: previewName,
    hover: false,
    description: previewDescription || 'Описание отсутствует. ',
    price: previewPrice || 0,
    date: previewDate,
    link: previewLink,
    reserve: '',

  }
}

async function CreateCard() {
  const newCard = createCardData(previewImg.value, previewName.value, previewDescription.value, previewPrice.value, previewDate.value, previewLink.value)
  await setDoc(doc(db, 'wishes', newCard.id), newCard)
  emit('handleAddWish', newCard)
  clearForm()
}

function previewCard(event) {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      previewImg.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}
</script>

<template>
  <form
    method="dialog"
    class="form"
    @submit="CreateCard"
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
            v-model="previewName"
            type="text"
            required
          >
        </li>
        <li>
          <label for="description">Описание</label>
          <textarea
            id="description"
            v-model="previewDescription"
            type="text"
          />
        </li>
        <li>
          <label for="price">Цена</label>
          <input
            id="price"
            v-model="previewPrice"
            type="number"
          >
        </li>
        <li>
          <label for="link">Ссылка на товар</label>
          <input
            id="link"
            v-model="previewLink"
            type="text"
          >
        </li>
      </ul>

      <div class="form__preview__card">
        <label
          class="card__label card__label--file"
          for="file-input"
        >
          <img
            v-if="previewImg"
            :src="previewImg"
            alt=""
            class="card__image"
          >
          <font-awesome-icon
            v-if="!previewImg"
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
        <h3 card__title>
          {{ previewName }}
        </h3>
        <p class="card__price">
          {{ formatPrice(previewPrice) }}
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
          <span class="user__info--date">{{ previewDate }}</span>
        </div>
      </div>
    </div>
    <button class="form__btn form__btn--add">
      добавить
    </button>
  </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form__btn--add {
  margin: 0;
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 10px;
  font-weight: 600;
  border-radius: 10px;
  border: none;
  background-color: #464241;
  color: white;
  cursor: pointer;
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
  gap: 40px;
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
  background-color: white;
  padding: 2px;
  font-weight: 600;
}

.form__preview__card {
  position: relative;
  width: 250px;
  height: 400px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
}

.form__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form__list li {
  display: flex;
  align-items: center;
  gap: 20px;
}

.form__list input,
textarea {
  height: 20px;
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
</style>
