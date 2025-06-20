<script setup>
import defaultImage from '@/components/icons/box.jpg'

import WiNavbar from '@/components/WiNavbar.vue'
import { PATHS } from '@/constants/paths'
import { classifiedHobbies } from '@/services/GetCardHobby'
import { YandexParser } from '@/services/GetFromYandex'
import { useProfileStore } from '@/stores/WiProfileStore'
import { getAuth } from 'firebase/auth'
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import { reactive, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'

const route = useRoute();
const router = useRouter()
const db = getFirestore()
const auth = getAuth()

const loading = ref(false)
const urlToparse = ref('')
const formToggle = ref(true)
const error = ref(false)
const toggleText = ref('Заполнить вручную')
const disabledForm = ref(false)

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
  date: new Date().toLocaleDateString(),
  link: '',
  badge: [],
})

async function parseFromYndex() {
  try {
    disabledForm.value = true
    loading.value = true
    const url = urlToparse.value
    const result = await YandexParser(url)
    form.img = result.image
    form.name = result.title
    form.link = urlToparse.value
    formToggler()
    error.value = false
    categories.value = await classifiedHobbies(form.name)
  }
  catch (err) {
    console.log('parseFromYandex', err)
    error.value = true
  }
  finally {
    disabledForm.value = false
    loading.value = false
  }
}

function clearForm() {
  Object.assign(form, {
    img: '',
    name: '',
    description: '',
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
    date: form.date || new Date().toLocaleDateString(),
    link: form.link,
    reserve: '',
    fulfilled: false,
  }
}

function toUserPage() {
  router.push(`${PATHS.USER.PROFILE}/${auth.currentUser.uid}`)
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

onMounted(() => {
       form.name = route.query.title;
       form.img = route.query.image;
       form.link = route.query.link;
    });
</script>

<template>
  <main class="w-full h-screen p-3">
    <div class="min-h-full min-w-full border-round-3xl p-3 bg ">
      <div class="wrapper">
        <WiNavbar />

        <div class="container">
          <div class="grid">
            <div class="col-12 bg-white shadow-1 border-round-sm flex flex-column align-items-center justify-content-center p-3">
              <span class="font-bold mb-4">Найти товар на <a
                href="https://market.yandex.ru/"
                target="_blank"
                class="text-primary"
              >Яндекс Маркет</a></span>
              <InputText
                id="parseLink"
                v-model="urlToparse"
                type="text"
                placeholder="Ссылка на товар"
                class="w-full mb-4"
              />
              <Button @click.prevent.stop="parseFromYndex">
                Создать желание по ссылке
              </Button>
              <p class="text-400">
                * На данный момент создать желание по ссылке доступно только с Яндекс Маркет.
              </p>
            </div>
            <div class="col-12">
              <form>
                <fieldset />
              </form>
            </div>
          </div>

          <form @submit.prevent="CreateCard">
            <fieldset
              :disabled="disabledForm"
              class="form fieldset"
            >
              <div
                class="form__input__group"
                :disabled="disabledForm"
              >
                <ul class="form__list">
                  <li class="form__list__item">
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
                      maxlength="80"
                      @change="classifiedHobbies(form.name)"
                    >
                  </li>
                  <li class="form__list__item">
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
                  <li class="form__list__item">
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
                </ul>
              </div>

              <div class="form__preview">
                <div class="form__preview__card">
                  <label
                    class="card__label card__label--file"
                    for="file-input"
                  >
                    <img
                      v-if="form.img"
                      :src="form.img"
                      alt="Изображение карточки желания"
                      class="card__image"
                    >
                    <font-awesome-icon
                      v-else
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
                </div>
                <button class="form__button--add">
                  добавить
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.wrapper {
  max-width: 1600px;
  margin: auto;
}

.bg {
  background-image: url('@/components/icons/bg.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.fieldset {
  border: none;
  padding: 0;
  margin: 0;
  min-width: 0;
}

.form__badge__spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 20px;
}

.form__badge__item {
  border: 1px solid var(--color-accent);
  padding: 10px;
  border-radius: 10px;
  margin-top: auto;
}

.badge__icon--loading {
  color: var(--color-accent);
  font-size: 100px;
  opacity: 0.8;
}

.form__badge__wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding: 10px;
}

.form__badge__picked {
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  cursor: pointer;
  display: flex;
  align-items: center;
  white-space: nowrap;
  padding: 5px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
  font-size: 16px;
  font-weight: 600;
}

.form__badge {
  cursor: pointer;
  display: flex;
  align-items: center;
  white-space: nowrap;
  transition: background-color 0.3s ease, color 0.3s ease;
  padding: 5px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
}

.parser__error {
  color: red;
  font-size: 14px;
}

.parser__error--visible {
  height: 15px;
  visibility: hidden;
}

.parser__title--link {
  color: var(--color-accent);
}

.parser__title {
  font-weight: 600;
}

.container {
  max-width: 900px;
  margin: auto;
}

.parser {
  border-radius: 10px;
  width: 100%;
  background-color: var(--color-secondary);
  height: 150px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 20px;
}

.parser__input {
  width: 400px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid var(--color-text-secondary);
  outline: none;
}

.parser__input:focus {
  border: 1px solid var(--color-accent);
}

.parser__button {
  width: 408px;
  height: 30px;
  border: none;
  border: 3px solid var(--color-primary);
  background-color: var(--color-accent);
  color: var(--color-background);
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  font-size: 18px;
}

.parser__button:active {
  transform: translateY(2px);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
}

.form {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
}

.form__list {
  list-style-type: none;
  padding: 0;
}

.form__list__item {
  display: flex;
  align-items: center;
  gap: 20px;
}

.form__input__group {
  width: 420px;
  height: 500px;
  background-color: var(--color-secondary);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
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

.form__preview {
  background-color: var(--color-secondary);
  padding: 20px;
  width: 420px;
  height: 500px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.form__button--add {
  height: 30px;
  border: none;
  border: 3px solid var(--color-primary);
  background-color: var(--color-accent);
  color: var(--color-background);
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}

.form__button--add:active {
  transform: translateY(2px);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
}

.form__input,
.form__textarea {
  height: 25px;
  margin-bottom: 10px;
  width: 300px;
  border: 1px solid #818c99;
  border-radius: 5px;
  transition: border 0.3s ease;
  padding: 5px;
}

.form__input:focus,
.form__textarea:focus {
  border: 1px solid #0817ecb9;
  outline: none;
}

.form__textarea {
  resize: none;
  min-height: 80px;
}

.form__label {
  flex: 0 0 150px;
  color: var(--color-text-primary);
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
  height: 300px;
  object-fit: cover;
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
