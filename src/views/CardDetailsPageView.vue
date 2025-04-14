<script setup lang="ts">
import WiBackButton from '@/components/WiBackButton.vue'
import WiCardMenu from '@/components/WiCards/WiCardMenu.vue'
import NavBar from '@/components/WiNavbar.vue'
import WISpinner from '@/components/WISpinner.vue'
import { getUserData } from '@/services/GetUserData'
import { useCardStore } from '@/stores/WiCardStore'
import { getAuth } from 'firebase/auth'
import { doc, getFirestore, updateDoc } from 'firebase/firestore'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import Card from 'primevue/card';
import Button from 'primevue/button'
import Avatar from 'primevue/avatar';
import Menu from 'primevue/menu';

const db = getFirestore()
const auth = getAuth()
const route = useRoute()
const spinner = ref<boolean>(false)

const cardStore = useCardStore()
const { getCardData } = cardStore


const menu = ref();
const items = ref([

      {
        label: 'Выполнено',
        icon: 'pi pi-check-circle',
        comand: ()=> toggleFulfill
      },
      {
        label: 'Удалить',
        icon: 'pi pi-trash'
      }
]);

const toggle = (event) => {
  menu.value.toggle(event);
};



const hideButton = computed(() => !cardStore.isOwner)
const enableForReserve = computed(() => !cardStore.isReserved && auth.currentUser && !cardStore.card?.fulfilled)
const fulfilled = computed(() => cardStore.card?.fulfilled ?? false)
const guestMessage = computed(() => !auth.currentUser)
const cardName = computed(() => cardStore.card?.name ?? '')

async function toggleFulfill(newStatus: boolean): Promise<void> {
  if (!cardStore.card) {
    console.error('Карточка не загружена')
    return
  }
  try {
    const cardRef = doc(db, 'wishes', cardStore.card.id)
    await updateDoc(cardRef, { fulfilled: newStatus })

    cardStore.card.fulfilled = newStatus
  }
  catch (error) {
    console.error('Ошибка при изменении статуса fulfilled', error)
  }
}

async function toggleReserve() {
  if (!cardStore.card) {
    console.error('Карточка не загружена')
    return
  }
  try {
    cardStore.isReservedUser = true
    spinner.value = true
    const CURRENT_USER = auth.currentUser
    if (!CURRENT_USER) {
      cardStore.isReservedUser = false
      return
    }
    const USER_DATA = await getUserData(CURRENT_USER.uid)

    if (cardStore.isReserved && cardStore.reservedBy === CURRENT_USER.uid) {
      await updateDoc(doc(db, 'wishes', cardStore.card.id), { reserve: '' })
      cardStore.reservedBy = ''
      cardStore.isReserved = false
      cardStore.reservedUser = null
    }
    else if (!cardStore.isReserved) {
      await updateDoc(doc(db, 'wishes', cardStore.card.id), { reserve: CURRENT_USER.uid })
      cardStore.reservedBy = CURRENT_USER.uid
      cardStore.isReserved = true
      cardStore.reservedUser = USER_DATA.user
    }
  }
  catch (err) {
    console.log(err, 'Ошибка при резерве карточки')
  }
  finally {
    spinner.value = false
  }
}
onMounted(async () => {
  try {
    const UID = route.params.uid as string
    await getCardData(UID)
  }
  catch (err) {
    console.error('не удалось загрузить данные карточки:', err)
  }
})
</script>

<!-- <template>
  <NavBar />
  <div v-if="cardStore" class="card">
    <WiBackButton class="card__back__button" />

    <div >
      <div class="card__user__info">
        <div class="card__user__wrapper">
          <div class="card__img-wrapper--avatar">
            <img class="card__image  card__image--user"
              :src="cardStore.user?.photoUrl ?? '@/components/icons/avatar.png'" alt="Аватар профиля">
          </div>
          <router-link :to="{ name: 'UserProfile', params: { uid: cardStore.user?.uid } }" class="card__user-name">
            {{ cardStore.user?.displayName }}
          </router-link>
          <span v-if="cardStore.card?.link" class="card__user__link-title">
            поделился ссылкой
            <a :href="cardStore.card?.link" target="_blank" rel="noopener noreferrer">
              <font-awesome-icon :icon="['fas', 'up-right-from-square']" />
            </a>
          </span>
          <span v-else>не указал ссылку</span>
        </div>

        <div v-if="cardStore.isOwner" class="card__menu">
          <WiCardMenu v-if="cardStore.card" :card="cardStore.card" @toggle-fulfill="toggleFulfill" />
        </div>
      </div>

      <div class="card__wrapper">
        <div class="card__images">
          <div class="card__description">
            <div class="card__img__wrapper--description">
              <img class="card__image  card__image--description"
                :src="cardStore.card?.img ?? '@/components/icons/box.png'" alt="Изображение желания">
            </div>
          </div>

          <div class="card__links">
            <h3 class="card__links__title">
              Найти на маркетплейсах
            </h3>
            <div class="card__links-wrapper">
              <div class="card__links--item">
                <a :href="`https://www.ozon.ru/search/?from_global=true&text=${encodeURIComponent(cardName)}`"
                  target="_blank"><img class="card__image card__links--img" src="@/components/icons/ozon.png"
                    alt="ozon"></a>
              </div>
              <div class="card__links--item">
                <a :href="`https://www.wildberries.ru/catalog/0/search.aspx?search=${encodeURIComponent(cardName)}`"
                  target="_blank"><img class="card__image card__links--img" src="@/components/icons/wb.png"
                    alt="Wildverries"></a>
              </div>
              <div class="card__links--item">
                <a :href="`https://market.yandex.ru/search?text=${encodeURIComponent(cardName)}`" target="_blank"><img
                    class="card__image card__links--img" src="@/components/icons/ym.png" alt="yandex market"></a>
              </div>
            </div>
          </div>
        </div>

        <div class="card__description__info">
          <div class="card__description__user">
            <h1 class="user__title">
              {{ cardStore.card?.name }}
            </h1>
            <span class="user__description">{{ cardStore.card?.description }}</span>
          </div>

          <WISpinner v-if="spinner" class="card__spinner" />

          <div v-else class="card__description--actions">
            <div v-if="cardStore.isReserved" class="card__description--reserved">
              <button v-if="cardStore.isReservedUser" class="card__button card__button-free" @click="toggleReserve">
                отказаться
              </button>
              <div>
                <img class="card__description--stamp" src="@/components/icons/reserved.png" alt="Зарезервировано">
              </div>
              <span class="card__reserved__text">Зарезервировано пользователем
                <router-link :to="{ name: 'UserProfile', params: { uid: cardStore.reservedUser?.uid } }"
                  class="card__user-name">
                  {{ cardStore.reservedUser?.displayName }}
                </router-link>
              </span>
            </div>

            <div v-else-if="enableForReserve" class="card__description--reserved">
              <button v-if="hideButton" class="card__button card__button-reserved" @click="toggleReserve">
                зарезервировать
              </button>
              <span v-if="hideButton" class="card__reserved__text">Pарезервируйте этот подарок, если
                хотите его подарить.</span>
            </div>

            <div v-else-if="fulfilled">
              <div class="card__status card__status--fulfilled">
                Исполнено
                <font-awesome-icon :icon="['fas', 'check']" class="card__status--icon" />
              </div>
            </div>

            <div v-else-if="guestMessage" class="card__reserved__text">
              <span>Для бронирования желаний нужно зарегистрироваться</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card__status {
  margin-bottom: 5px;
  color: white;
  padding: 3px;
  border-radius: 5px;
}

.card__status--fulfilled {
  width: 200px;
  margin: auto;
  font-size: 22px;
  text-align: center;
  background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(137, 23, 178, 1) 1%, rgba(251, 17, 37, 0.7455357142857143) 100%, rgba(0, 212, 255, 1) 100%);
}

.card__back__button {
  background-color: var(--color-background-light);
}

.card__reserved__text {
  color: var(--color-text-secondary);
}

.card__user__link-title {
  color: var(--color-text-secondary);
}

.card__links__title {
  color: var(--color-text-secondary);
}

.user__description,
.user__title {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  color: var(--color-text-secondary);
}

.card__description--stamp {
  height: 150px;
}

.card__menu {
  color: white;
  font-size: 20px;
  cursor: pointer;
}

.card__description__comments {
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid rgba(0, 0, 0, 0.384);
  border-radius: 10px;
  padding: 5px;
  box-shadow: 3px 3px 3px rgba(207, 220, 235, 0.6);
}

.card__description--reserved {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #F5F4F4;
}

.action__icon {
  font-size: 25px;
  color: grey;
}

.user__title {
  margin: 0 0 20px 0;
  color: var(--color-text-primary)
}

.card__description__info {
  display: grid;
  gap: 20px;
  padding: 20px;
  color: #F5F4F4;
}

.card__spinner {
  margin: auto;
}

.card__description {
  display: grid;
  justify-content: center;
  text-align: center;
}

.card__images {
  padding: 20px;
}

.card__links {
  display: grid;
  justify-content: center;
  color: #F5F4F4;
}

.card__links-wrapper {
  display: flex;
  justify-content: center;
  gap: 5px;
}

.card__links--item {
  border-radius: 10px;
  width: 50px;
  height: 50px;
  overflow: hidden;
}

.card__user__wrapper {
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #F5F4F4;
}

.card__user__info {
  display: flex;
  justify-content: space-between;
}

.card__wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
}

.card__user-name {
  font-size: 20px;
  font-weight: 600;
  font-style: italic;
  color: var(--color-text-primary)
}

.card__img-wrapper--avatar {
  border-radius: 50%;
  width: 35px;
  height: 35px;
  overflow: hidden;
}

.card__img__wrapper--description {
  border-radius: 10px;
  width: 300px;
  height: 300px;
  overflow: hidden;

}

.card__image {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.card {
  border-radius: 10px;
  max-width: 1000px;
  margin: 40px auto;
  background-color: var(--color-secondary);
  min-height: 580px;
  display: flex;
}

.card__button {
  border: none;
  background-color: var(--color-background-light);
  padding: 5px;
  cursor: pointer;
  width: 180px;
  border-radius: 10px;
  font-size: 20px;
  display: flex;
  justify-content: space-around;
  height: 35px;
  margin: 20px;
}

.card__button:hover {
  background-color: var(--color-background-light);
  color: var(--color-accent);
}
</style> -->


<template>
  <NavBar />
  <div v-if="cardStore" class="p-4 bg-white border-round w-12 md:w-10 mx-auto">

    <div  class="grid">
      <!-- Блок с информацией о пользователе -->
      <div class="col-12 flex align-items-center justify-content-between mb-4">
        <div class="flex align-items-center gap-3">
          <Avatar :image="cardStore.user?.photoUrl || '@/components/icons/avatar.png'" shape="circle" size="large" />
          <router-link :to="{ name: 'UserProfile', params: { uid: cardStore.user?.uid } }" class="text-xl font-bold">
            {{ cardStore.user?.displayName }}
          </router-link>

        </div>

        <!-- <WiCardMenu v-if="cardStore.isOwner && cardStore.card" :card="cardStore.card" @toggle-fulfill="toggleFulfill" />
          -->

        <div class="card flex justify-center">
          <Button type="button" icon="pi pi-ellipsis-v" @click="toggle" aria-haspopup="true"
            aria-controls="overlay_menu" class="bg-white border-none text-primary" />
          <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
        </div>

      </div>






      <!-- Основной контент -->
      <div class="col-12 md:col-6 ">
        <div class="flex flex-column">
          <div class="border-round overflow-hidden flex">
            <img :src="cardStore.card?.img || '@/components/icons/box.png'" alt="Изображение желания"
              class="w-10 mx-auto mb-4 border-round" />
          </div>


          <div class="mx-auto surface-100 p-3 border-round w-10 text-center">
            <span class="font-semibold">Найти на маркетплейсах</span>
            <div class="flex justify-content-center gap-3 p-2">
              <a class=" flex align-items-center gap-2"
                :href="`https://www.ozon.ru/search/?from_global=true&text=${encodeURIComponent(cardName)}`"
                target="_blank"><img src="@/components/icons/ozon.png" alt="Ozon" class="w-3rem" /></a>
              <a class="flex align-items-center gap-2"
                :href="`https://www.wildberries.ru/catalog/0/search.aspx?search=${encodeURIComponent(cardName)}`"
                target="_blank">
                <img src="@/components/icons/wb.png" alt="Wildberries" class="w-3rem" /></a>
              <a class="flex align-items-center gap-2"
                :href="`https://market.yandex.ru/search?text=${encodeURIComponent(cardName)}`" target="_blank">
                <img src="@/components/icons/ym.png" alt="Yandex Market" class="w-3rem" />
              </a>
            </div>
          </div>


        </div>
      </div>

      <!-- Описание и действия -->
      <div class="col-12 md:col-6">
        <div class="flex flex-column gap-4">
          <div>
            <h1 class="text-lg md:text-2xl font-bold mb-2">{{ cardStore.card?.name }}</h1>
            <p class="text-gray-700 ">{{ cardStore.card?.description }}</p>
          </div>

          <WISpinner v-if="spinner" />

          <div v-else class="flex flex-column gap-3">
            <!-- Зарезервировано -->
            <div v-if="cardStore.isReserved" class="bg-green-100 p-4 border-round">
              <div class="flex align-items-center gap-3">
                <Button v-if="cardStore.isReservedUser" label="Отказаться" @click="toggleReserve" />
                <span class="text-gray-700">
                  Зарезервировано пользователем
                  <router-link :to="{ name: 'UserProfile', params: { uid: cardStore.reservedUser?.uid } }"
                    class="font-bold">
                    {{ cardStore.reservedUser?.displayName }}
                  </router-link>
                </span>
              </div>
            </div>

            <!-- Доступно для резерва -->
            <div v-else-if="enableForReserve" class="border-1 p-4 border-round border-primary-500">
              <div class="flex flex-column gap-2">
                <Button v-if="hideButton" label="Зарезервировать" @click="toggleReserve" />
                <span class="text-gray-700">Зарезервируйте этот подарок, если хотите его подарить.</span>
              </div>
            </div>

            <!-- Исполнено -->
            <div v-else-if="fulfilled" class="surface-100 p-4 border-round">
              <div class="flex align-items-center gap-2">
                <span class="text-green-700 font-bold">Исполнено</span>
                <font-awesome-icon :icon="['fas', 'check']" class="text-green-700" />
              </div>
            </div>

            <!-- Сообщение для гостей -->
            <div v-else-if="guestMessage" class="bg-gray-100 p-4 border-round">
              <span class="text-gray-700">Для бронирования желаний нужно зарегистрироваться</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
