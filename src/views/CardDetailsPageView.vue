<script setup>
import WiBackButton from '@/components/WiBackButton.vue'
import WiCardMenu from '@/components/WiCards/WiCardMenu.vue'
import NavBar from '@/components/WiNavbar.vue'
import WISpinner from '@/components/WISpinner.vue'
import { getUserData } from '@/services/GetUserData'
import { useCardStore } from '@/stores/WiCardStore'
import { getAuth } from 'firebase/auth'
import { doc, getFirestore, updateDoc } from 'firebase/firestore'
import { onMounted, ref, watch } from 'vue'
import { ContentLoader } from 'vue-content-loader'
import { useRoute } from 'vue-router'

const db = getFirestore()
const auth = getAuth()
const route = useRoute()
const spinner = ref(false)

const cardStore = useCardStore()
const { getCardData } = cardStore

watch(cardStore.card, (newCard) => {
  if (newCard.reserve) {
    cardStore.blockSelfReserve = cardStore.currentUser.uid !== newCard.userId
    console.log(cardStore.blockSelfReserve = cardStore.currentUser.uid !== newCard.userId)
  }
  else {
    cardStore.blockSelfReserve = true
  }
})

async function toggleReserve() {
  cardStore.hasEditPermission = true
  try {
    spinner.value = true
    const currentUser = auth.currentUser
    const userData = await getUserData(currentUser.uid)

    if (cardStore.isReserved && cardStore.reservedBy === currentUser.uid) {
      await updateDoc(doc(db, 'wishes', cardStore.card.id), { reserve: '' })
      cardStore.reservedBy = ''
      cardStore.isReserved = false
      cardStore.reservedUser = {}
    }
    else if (!cardStore.isReserved) {
      await updateDoc(doc(db, 'wishes', cardStore.card.id), { reserve: auth.currentUser.uid })
      cardStore.reservedBy = currentUser.uid
      cardStore.isReserved = true
      cardStore.reservedUser = userData.user
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
    await getCardData(route.params.uid)
  }
  catch (err) {
    console.error('не удалось загрузить данные карточки:', err)
  }
})
</script>

<template>
  <NavBar />
  <div class="card">
    <WiBackButton class="card__back__button" />

    <ContentLoader
      v-if="cardStore.isLoading"
      viewBox="0 0 1000 700"
      :speed="2"
      primary-color="#f5f7fa"
      secondary-color="#c9c5c5"
    >
      <rect
        x="0"
        y="0"
        rx="10"
        ry="10"
        width="1000"
        height="700"
      />
    </ContentLoader>

    <div v-else>
      <div class="card__user__info">
        <div class="card__user__wrapper">
          <div class="card__img-wrapper--avatar">
            <img
              class="card__image  card__image--user"
              :src="cardStore.user.photoUrl"
              alt=""
            >
          </div>
          <router-link
            :to="{ name: 'UserProfile', params: { uid: cardStore.user.uid } }"
            class="card__user-name"
          >
            {{ cardStore.user.displayName }}
          </router-link>
          <span
            v-if="cardStore.card.link"
            class="card__user__link-title"
          >
            поделился ссылкой
            <a
              :href="cardStore.card.link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <font-awesome-icon :icon="['fas', 'up-right-from-square']" />
            </a>
          </span>
          <span v-else>не указал ссылку</span>
        </div>

        <div class="card__menu">
          <WiCardMenu v-if="!cardStore.blockSelfReserve" />
        </div>
      </div>
      <div class="card__wrapper">
        <div class="card__images">
          <div class="card__description">
            <div class="card__img__wrapper--description">
              <img
                class="card__image  card__image--description"
                :src="cardStore.card.img"
                alt=""
              >
            </div>
          </div>

          <div class="card__links">
            <h3 class="card__links__title">
              Найти на маркетплейсах
            </h3>
            <div class="card__links-wrapper">
              <div class="card__links--item">
                <a
                  :href="`https://www.ozon.ru/search/?from_global=true&text=${encodeURIComponent(cardStore.card.name)}`"
                  target="_blank"
                ><img
                  class="card__image card__links--img"
                  src="@/components/icons/ozon.png"
                  alt=""
                ></a>
              </div>
              <div class="card__links--item">
                <a
                  :href="`https://www.wildberries.ru/catalog/0/search.aspx?search=${encodeURIComponent(cardStore.card.name)}`"
                  target="_blank"
                ><img
                  class="card__image card__links--img"
                  src="@/components/icons/wb.png"
                  alt=""
                ></a>
              </div>
              <div class="card__links--item">
                <a
                  :href="`https://market.yandex.ru/search?text=${encodeURIComponent(cardStore.card.name)}`"
                  target="_blank"
                ><img
                  class="card__image card__links--img"
                  src="@/components/icons/ym.png"
                  alt=""
                ></a>
              </div>
            </div>
          </div>
        </div>

        <div class="card__description__info">
          <div class="card__description__user">
            <h1 class="user__title">
              {{ cardStore.card.name }}
            </h1>
            <span class="user__description">{{ cardStore.card.description }}</span>
          </div>

          <WISpinner
            v-if="spinner"
            class="card__spinner"
          />

          <div
            v-else
            class="card__description--actions"
          >
            <div
              v-if="cardStore.isReserved"
              class="card__description--reserved"
            >
              <button
                v-if="cardStore.hasEditPermission"
                class="card__button card__button-free"
                @click="toggleReserve"
              >
                отказаться
              </button>
              <div>
                <img
                  class="card__description--stamp"
                  src="@/components/icons/reserved.png"
                  alt=""
                >
              </div>
              <span class="card__reserved__text">Зарезервировано пользователем
                <router-link
                  :to="{ name: 'UserProfile', params: { uid: cardStore.reservedUser.uid } }"
                  class="card__user-name"
                >
                  {{ cardStore.reservedUser.displayName }}
                </router-link>
              </span>
            </div>

            <div
              v-else-if="!cardStore.isReserved && auth.currentUser && !cardStore.card.fulfilled"
              class="card__description--reserved"
            >
              <button
                v-if="cardStore.blockSelfReserve"
                class="card__button card__button-reserved"
                @click="toggleReserve"
              >
                зарезервировать
              </button>
              <span
                v-if="cardStore.blockSelfReserve"
                class="card__reserved__text"
              >Pарезервируйте этот подарок, если
                хотите его подарить.</span>
            </div>
            <div
              v-else-if="!auth.currentUser"
              class="card__reserved__text"
            >
              <span>Для бронирования желаний нужно зарегистрироваться</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
</style>
