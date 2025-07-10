<script setup lang="ts">
import UiSkeleton from '@/components/Ui/UiSkeleton.vue'
import NavBar from '@/components/WiNavbar.vue'
import WISpinner from '@/components/WISpinner.vue'
import { getUserData } from '@/services/GetUserData'
import { useCardStore } from '@/stores/WiCardStore'
import { getAuth } from 'firebase/auth'
import { doc, getFirestore, updateDoc, deleteDoc } from 'firebase/firestore'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Menu from 'primevue/menu'

import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const db = getFirestore()
const auth = getAuth()
const router = useRouter()
const route = useRoute()
const spinner = ref<boolean>(false)
const isLoading = ref(false)

const cardStore = useCardStore()
const { getCardData } = cardStore

async function deleteCard() {
  try {
    const cardRef = doc(db, 'wishes', cardStore.card.id as string)
    await deleteDoc(cardRef)
    console.log(`карточка id: ${cardStore.card.id} удалена.`)
  }
  catch (error) {
    console.error('Ошибка при удалении карточки', error)
  }
  router.go(-1)
}

const menu = ref()
const items = ref([
  {
    label: 'Выполнено',
    icon: 'pi pi-check-circle',
    command: () => toggleFulfill(),
  },
  {
    label: 'Удалить',
    icon: 'pi pi-trash',
    command: () => deleteCard(),
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

async function toggleFulfill(): Promise<void> {

  try {
    console.log(cardStore.card.id)
    const cardRef = doc(db, 'wishes', cardStore.card.id)
    await updateDoc(cardRef, { fulfilled: !cardStore.card.fulfilled })

    cardStore.card.fulfilled = !cardStore.card.fulfilled

    router.go(-1)
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
    isLoading.value = true
    const UID = route.params.uid as string
    await getCardData(UID)
  }
  catch (err) {
    console.error('не удалось загрузить данные карточки:', err)
  }
  finally {
    isLoading.value = false
  }
})
</script>

<template>
  <NavBar />
  <UiSkeleton :isLoading="isLoading" class="">

    <div class="card">

      <section class="card__header">


        <div class="card__user">
          <router-link :to="{ name: 'UserProfile', params: { uid: cardStore.user?.uid } }"
            class="card__user-name card__user">
            <div class="card__avatar">
              <img class="card__avatar-img" :src="cardStore.user?.photoUrl" alt="user face">
            </div>
            {{ cardStore.user?.displayName }}
          </router-link>
        </div>

        <div class="card__menu" v-if="cardStore.isOwner">
          <Button type="button" icon="pi pi-ellipsis-v" aria-haspopup="true" aria-controls="overlay_menu"
            class="card__menu-button" @click="toggle" />
          <Menu id="overlay_menu" ref="menu" :model="items" :popup="true" />
        </div>

      </section>

      <section class="card__image">
        <div class="card__image-wrapper">
          <img :src="cardStore.card?.img || '@/components/icons/box.png'" alt="Изображение желания"
            class="card__image-pic">
        </div>

        <div class="card__shop-link">
          <a :href="cardStore.card?.link" class="card__shop-link-text">
            перейти в магазин
          </a>
          <i class="pi pi-arrow-up-right" />
        </div>
      </section>

      <section class="card__info">

        <div class="card__name">
          <span>
            {{ cardStore.card?.name }}
          </span>
        </div>

        <div class="card__description">
          {{ cardStore.card?.description }}
        </div>
      </section>

      <section class="card__actions">

        <div v-if="guestMessage">
          <span class="text-gray-400">Для бронирования желаний нужно зарегистрироваться.</span>
        </div>


        <div v-else class="card__actions-wrapper">

          <div v-if="!cardStore.isOwner" class="card__reserve">

            <div v-if="fulfilled" class="card__fullfield">
              <span class="card__fullfield-text">Желание исполнено</span>
              <font-awesome-icon :icon="['fas', 'check']" class="card__fullfield-icon" />
            </div>

            <div v-else>

              <div v-if="cardStore.isReserved" class="card__reserved">
                <Button v-if="cardStore.isReservedUser" label="Отказаться" @click="toggleReserve" />
                <span class="card__reserved-user">
                  Зарезервировано пользователем
                  <router-link :to="{ name: 'UserProfile', params: { uid: cardStore.reservedUser?.uid } }"
                    class="card__reserved-user-link">@{{ cardStore.reservedUser?.displayName }}
                  </router-link>
                </span>
              </div>

              <div v-else class="card__unreserved">
                <Button v-if="hideButton" label="Зарезервировать" @click="toggleReserve" />
                <span class="card__unreserved-text">Зарезервируйте этот подарок, если хотите его подарить.</span>
              </div>

            </div>

          </div>

          <div v-if="cardStore.isReserved && cardStore.isOwner" class="card__reserved">
            <Button v-if="cardStore.isReservedUser" label="Отказаться" @click="toggleReserve" />
            <span class="card__reserved-user">
              Зарезервировано пользователем
              <router-link :to="{ name: 'UserProfile', params: { uid: cardStore.reservedUser?.uid } }"
                class="card__reserved-user-link">@{{ cardStore.reservedUser?.displayName }}
              </router-link>
            </span>
          </div>


        </div>
      </section>



    </div>
  </UiSkeleton>

</template>



<style scoped lang="scss">
@use '@/styles/colors';
@use '@/styles/mixins';

.card {
  color: white;
  background-color: $color-background-grey;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  width: 1100px;
  margin: auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px 1fr 1fr;
  gap: 0px 0px;
  gap: 20px;
  grid-template-areas:
    "header header"
    "image description"
    "image actions";

  @include mobile {
    padding: 10px;
    width: auto;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      "header"
      "description"
      "image"
      "actions";
  }


  &__header {
    grid-area: header;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
  }

  &__user {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;

    &-name {
      font-size: 1.3rem;
      font-weight: 600;
      color: white;
      text-decoration: none
    }

  }


  &__avatar {
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 50%;

    &-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }



  &__menu-button {
    background-color: inherit;
    border: none;
  }

  &__image {
    grid-area: image;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    &-wrapper {
      width: 500px;
      height: 500px;
      border-radius: 20px;
      overflow: hidden;

      @include mobile {
        width: 350px;
        height: 350px;
      }
    }

    &-pic {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

  }

  &__shop-link {
    background-color: black;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    width: 500px;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;

    @include mobile {
      width: 350px;
    }

    &-text {
      color: white;
      text-decoration: none;
      font-size: 20px;
    }
  }

  &__info {
    grid-area: description;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__name {
    font-size: 32px;
    font-weight: 600;

    @include mobile {
      font-size: 18px;
    }
  }

  &__actions {
    grid-area: actions;
  }

  &__fullfield {
    font-size: 1.2rem;
    opacity: 0.6;

    &-text {
      margin-right: 10px;
    }
  }

  &__reserved {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 10px;

    &-user {
      align-self: center;


      &-link {
        text-decoration: none;
        font-weight: 600;
        color: white;
      }
    }



  }

  &__unreserved {
    display: flex;
    flex-direction: column;
    gap: 10px;

    &-text {
      align-self: center;
    }
  }
}
</style>