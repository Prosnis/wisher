<script setup lang="ts">
import type { Wish } from '@/types/interfaces/wish'
import defaultImage from '@/components/icons/box.jpg'
import WiNavbar from '@/components/WiNavbar.vue'
import { useProfileStore } from '@/stores/WiProfileStore'
import { getAuth } from 'firebase/auth'
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import Button from 'primevue/button'
import { onMounted, reactive, useId } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute();
const router = useRouter()
const db = getFirestore()
const auth = getAuth()
const id = useId()
const profileStore = useProfileStore()
const { addWish } = profileStore

interface Form {
  img: string,
  name: string,
  description: string,
  date: string,
  link: string,
}


const form = reactive<Form>({
  img: '',
  name: '',
  description: '',
  date: new Date().toLocaleDateString(),
  link: '',
})


function clearForm() {
  Object.assign(form, {
    img: '',
    name: '',
    description: '',
    date: '',
    link: '',
  })
}

function createCardData(form: Form): Wish {
  const user = auth.currentUser
  if (!user) throw new Error('Пользователь не авторизирован')
  return {
    id: id,
    userId: user.uid,
    img: form.img || defaultImage,
    name: form.name,
    hover: false,
    description: form.description || 'Описание отсутствует. ',
    date: form.date || new Date().toLocaleDateString(),
    link: form.link,
    reserve: '',
    fulfilled: false,
  }
}

async function CreateCard(): Promise<void> {

  try {
    const newCard = createCardData(form)
    await setDoc(doc(db, 'wishes', newCard.id), newCard)
    addWish(newCard)
    clearForm()
    router.go(-1)
  }
  catch (err) {
    console.log(err, 'Ошибка при создании карточки')
  }
}

function previewCard(event: Event): void {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]

  const reader = new FileReader()
  reader.onload = (e: ProgressEvent<FileReader>) => {
    const result = e.target?.result
    if (typeof result === 'string') {
      form.img = result
    }
  }
  reader.readAsDataURL(file as Blob)
}


onMounted(() => {
  const { title, image, link } = route.query
  if (typeof title === 'string') form.name = title
  if (typeof image === 'string') form.img = image
  if (typeof link === 'string') form.link = link
})
</script>

<template>
  <WiNavbar />
  <div class="card-form">

    <form @submit.prevent="CreateCard" class="card-form__form">
      <ul class="card-form__list">
        <li class="card-form__item">
          <label class="card-form__label" for="name">Название:</label>
          <input id="name" v-model="form.name" class="card-form__input" type="text" maxlength="200">
        </li>
        <li class="card-form__item">
          <label class="card-form__label" for="description">Описание</label>
          <textarea id="description" v-model="form.description" class="card-form__textarea" type="text"
            maxlength="100"></textarea>
        </li>
        <li class="card-form__item">
          <label class="card-form__label" for="link">Ссылка на товар</label>
          <input id="link" v-model="form.link" class="card-form__input" type="text" maxlength="200">
        </li>
      </ul>
      <div class="card-form__button">
        <Button v-if="profileStore?.user" type="submit">
          Добавить
        </Button>
        <div v-else class="card-form__clue">
          <p>Добавление желания доступно после авторизации</p>
        </div>
      </div>
    </form>



    <div class="card-form__preview">

      <div class="card-form__card-preview">

        <label class="card-form__upload-label" for="file-input">

          <div v-if="form.img" class="card-form__image-wrapper">
            <img :src="form.img" alt="Изображение карточки желания" class="card__image card-form__image">
          </div>
          <font-awesome-icon v-else class="card-form__upload-icon" :icon="['fas', 'plus']" />
          <input id="file-input" class="card-form__file-input" type="file" @change="previewCard($event)">

        </label>

        <h3 class="card-form__title">
          {{ form.name }}
        </h3>
      </div>
    </div>

    <div class="card-form__app">
      <p class="card-form__app-text">
        💡 Не хотите заполнять форму вручную? <br>
        Установите <a href="#" class="card-form__app-link">наше расширение для браузера</a> — добавляйте товары из
        маркетплейсов в вишлист одним нажатием.
      </p>
    </div>

  </div>




</template>

<style scoped lang="scss">
@use '@/styles/colors';
@use '@/styles/mixins';


.card-form {

  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 20px;
  width: 1100px;
  grid-template-areas:
    "form preview"
    "form preview"
    "app app";

  @include mobile {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    width: auto;
    grid-template-areas:
      "form"
      "preview"
      "app";
  }



  &__form {
    grid-area: form;

    background-color: $color-background-grey;
    border-radius: 20px;
    padding: 30px;

  }

  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__clue {
    opacity: 0.7;
  }

  &__list {
    list-style-type: none;
    padding: 0;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__label {
    flex: 0 0 150px;
    color: var(--color-text-primary);
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__input,
  &__textarea {
    height: 25px;
    margin-bottom: 10px;
    width: 300px;
    border: 1px solid #818c99;
    border-radius: 5px;
    transition: border 0.3s ease;
    padding: 5px;

    @include mobile {
      width: 100%;
    }
  }

  &__textarea {
    resize: none;
    min-height: 80px;
  }




  &__preview {
    grid-area: preview;
    border-radius: 10px;
    display: flex;
    justify-content: center;

    background-color: $color-background-grey;
    border-radius: 20px;
    padding: 20px;
  }

  &__card-preview {
    width: 210px;
    height: 256px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    overflow: hidden;
    padding: 8px;
    background-color: $color-background-white;
  }

  &__upload-label {
    width: 100%;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    flex-direction: column;
  }

  &__image-wrapper {
    width: 192px;
    height: 192px;
    border-radius: 10px;
    overflow: hidden;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__upload-icon {
    font-size: 100px;
    color: rgb(236, 233, 233);
    transition: color 0.3s;
  }

  &__file-input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    position: absolute;
    overflow: hidden;
    z-index: -1;
  }

  &__title {
    margin: 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    height: 48px;
    font-size: 16px;
    color: #334155;
    font-weight: 500;
    text-align: center;
  }

  &__app {
    grid-area: app;

    background-color: $color-background-blue;
    border-radius: 20px;
    padding: 30px;

    &-text {
      color: $color-text;
      font-size: 18px;
      line-height: 1.5;
    }
  }
}
</style>
