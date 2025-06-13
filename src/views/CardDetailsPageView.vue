<script setup lang="ts">
import NavBar from '@/components/WiNavbar.vue'
import WISpinner from '@/components/WISpinner.vue'
import { getUserData } from '@/services/GetUserData'
import { useCardStore } from '@/stores/WiCardStore'
import { getAuth } from 'firebase/auth'
import { doc, getFirestore, updateDoc } from 'firebase/firestore'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'

import Menu from 'primevue/menu'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const db = getFirestore()
const auth = getAuth()
const route = useRoute()
const spinner = ref<boolean>(false)

const cardStore = useCardStore()
const { getCardData } = cardStore

const menu = ref()
const items = ref([

  {
    label: 'Выполнено',
    icon: 'pi pi-check-circle',
    comand: () => toggleFulfill,
  },
  {
    label: 'Удалить',
    icon: 'pi pi-trash',
  },
])

const toggle = (event) => {
  menu.value.toggle(event)
}

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

<template>
  <NavBar />
  <div
    v-if="cardStore"
    class="p-4 bg-white border-round w-12 md:w-10 mx-auto"
  >
    <div class="grid">
      <!-- Блок с информацией о пользователе -->
      <div class="col-12 flex align-items-center justify-content-between mb-4">
        <div class="flex align-items-center gap-3">
          <Avatar
            :image="cardStore.user?.photoUrl || '@/components/icons/avatar.png'"
            shape="circle"
            size="large"
          />
          <router-link
            :to="{ name: 'UserProfile', params: { uid: cardStore.user?.uid } }"
            class="text-xl font-bold"
          >
            {{ cardStore.user?.displayName }}
          </router-link>
        </div>

        <!-- <WiCardMenu v-if="cardStore.isOwner && cardStore.card" :card="cardStore.card" @toggle-fulfill="toggleFulfill" />
          -->

        <div class="card flex justify-center">
          <Button
            type="button"
            icon="pi pi-ellipsis-v"
            aria-haspopup="true"
            aria-controls="overlay_menu"
            class="bg-white border-none text-primary"
            @click="toggle"
          />
          <Menu
            id="overlay_menu"
            ref="menu"
            :model="items"
            :popup="true"
          />
        </div>
      </div>

      <!-- Основной контент -->
      <div class="col-12 md:col-6 ">
        <div class="flex flex-column">
          <div class="border-round overflow-hidden flex">
            <img
              :src="cardStore.card?.img || '@/components/icons/box.png'"
              alt="Изображение желания"
              class="w-10 mx-auto mb-4 border-round"
            >
          </div>

          <div class="mx-auto surface-100 p-3 border-round w-10 text-center">
            <span class="font-semibold">Найти на маркетплейсах</span>
            <div class="flex justify-content-center gap-3 p-2">
              <a
                class=" flex align-items-center gap-2"
                :href="`https://www.ozon.ru/search/?from_global=true&text=${encodeURIComponent(cardName)}`"
                target="_blank"
              ><img
                src="@/components/icons/ozon.png"
                alt="Ozon"
                class="w-3rem"
              ></a>
              <a
                class="flex align-items-center gap-2"
                :href="`https://www.wildberries.ru/catalog/0/search.aspx?search=${encodeURIComponent(cardName)}`"
                target="_blank"
              >
                <img
                  src="@/components/icons/wb.png"
                  alt="Wildberries"
                  class="w-3rem"
                ></a>
              <a
                class="flex align-items-center gap-2"
                :href="`https://market.yandex.ru/search?text=${encodeURIComponent(cardName)}`"
                target="_blank"
              >
                <img
                  src="@/components/icons/ym.png"
                  alt="Yandex Market"
                  class="w-3rem"
                >
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Описание и действия -->
      <div class="col-12 md:col-6">
        <div class="flex flex-column gap-4">
          <div>
            <h1 class="text-lg md:text-2xl font-bold mb-2">
              {{ cardStore.card?.name }}
            </h1>
            <p class="text-gray-700 ">
              {{ cardStore.card?.description }}
            </p>
          </div>

          <WISpinner v-if="spinner" />

          <div
            v-else
            class="flex flex-column gap-3"
          >
            <!-- Зарезервировано -->
            <div
              v-if="cardStore.isReserved"
              class="bg-green-100 p-4 border-round"
            >
              <div class="flex align-items-center gap-3">
                <Button
                  v-if="cardStore.isReservedUser"
                  label="Отказаться"
                  @click="toggleReserve"
                />
                <span class="text-gray-700">
                  Зарезервировано пользователем
                  <router-link
                    :to="{ name: 'UserProfile', params: { uid: cardStore.reservedUser?.uid } }"
                    class="font-bold"
                  >
                    {{ cardStore.reservedUser?.displayName }}
                  </router-link>
                </span>
              </div>
            </div>

            <!-- Доступно для резерва -->
            <div
              v-else-if="enableForReserve"
              class="border-1 p-4 border-round border-primary-500"
            >
              <div class="flex flex-column gap-2">
                <Button
                  v-if="hideButton"
                  label="Зарезервировать"
                  @click="toggleReserve"
                />
                <span class="text-gray-700">Зарезервируйте этот подарок, если хотите его подарить.</span>
              </div>
            </div>

            <!-- Исполнено -->
            <div
              v-else-if="fulfilled"
              class="surface-100 p-4 border-round"
            >
              <div class="flex align-items-center gap-2">
                <span class="text-green-700 font-bold">Исполнено</span>
                <font-awesome-icon
                  :icon="['fas', 'check']"
                  class="text-green-700"
                />
              </div>
            </div>

            <!-- Сообщение для гостей -->
            <div
              v-else-if="guestMessage"
              class="bg-gray-100 p-4 border-round"
            >
              <span class="text-gray-700">Для бронирования желаний нужно зарегистрироваться</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
