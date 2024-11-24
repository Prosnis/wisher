<script setup>
import NavBar from '@/components/WiNavbar.vue'
import WISpinner from '@/components/WISpinner.vue'
import { getUserData } from '@/services/GetUserData'
import { getAuth } from 'firebase/auth'
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const db = getFirestore()
const auth = getAuth()
const isLoading = ref(false)

const card = ref({})
const route = useRoute()
const user = ref({})
const hasEditPermission = ref(false)
const spinner = ref(false)
const currentUser = ref(null)
const blockSelfReserve = ref(true)

const isReserved = ref(false)
const reservedBy = ref('')
const reservedUser = ref({})

onMounted(async () => {
  try {
    isLoading.value = true
    const cardId = route.params.uid
    const userDoc = await getDoc(doc(db, 'wishes', cardId))
    const cardData = userDoc.exists() ? userDoc.data() : null
    currentUser.value = auth.currentUser

    if (cardData) {
      card.value = cardData
      reservedBy.value = cardData.reserve || ''
      isReserved.value = !!cardData.reserve

      const userData = await getUserData(cardData.userId)
      user.value = userData.user

      if (currentUser.value.uid === cardData.userId) {
        blockSelfReserve.value = false
      }
    }

    if (cardData.reserve) {
      const reservedUserData = await getUserData(cardData.reserve)
      reservedUser.value = reservedUserData.user
      if (currentUser.value && currentUser.value.uid === reservedUser.value.uid) {
        hasEditPermission.value = true
      }
    }
  }
  catch (err) {
    console.log(err)
  }
  finally {
    isLoading.value = false
  }
})

async function toggleReserve() {
  hasEditPermission.value = true
  try {
    spinner.value = true
    const currentUser = auth.currentUser
    const userData = await getUserData(currentUser.uid)

    if (isReserved.value && reservedBy.value === currentUser.uid) {
      await updateDoc(doc(db, 'wishes', card.value.id), { reserve: '' })
      reservedBy.value = ''
      isReserved.value = false
      reservedUser.value = {}
    }
    else if (!isReserved.value) {
      await updateDoc(doc(db, 'wishes', card.value.id), { reserve: auth.currentUser.uid })
      reservedBy.value = currentUser.uid
      isReserved.value = true
      reservedUser.value = userData.user
    }
  }
  catch (err) {
    console.log(err, 'Ошибка при резерве карточки')
  }
  finally {
    spinner.value = false
  }
}
</script>

<template>
  <NavBar />
  <div class="card">
    <div
      v-show="isLoading"
      class="card__user__info skeleton-loader"
    />
    <div v-show="!isLoading">
      <div class="card__user__info">
        <div class="card__user__wrapper">
          <div class="card__img-wrapper--avatar">
            <img
              class="card__image  card__image--user"
              :src="user.photoUrl"
              alt=""
            >
          </div>
          <router-link
            :to="{ name: 'UserProfile', params: { uid: user.uid } }"
            class="card__user-name"
          >
            {{ user.displayName }}
          </router-link>
          <span v-if="card.link">
            поделился ссылкой
            <a
              :href="card.link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <font-awesome-icon :icon="['fas', 'up-right-from-square']" />
            </a>
          </span>
          <span v-else>не указал ссылку</span>
        </div>
        <div class="card__menu"><font-awesome-icon :icon="['fas', 'ellipsis-vertical']" /></div>
      </div>
      <div class="card__wrapper">
        <div class="card__images">
          <div class="card__description">
            <div class="card__img__wrapper--description">
              <img
                class="card__image  card__image--description"
                :src="card.img"
                alt=""
              >
            </div>
          </div>

          <div class="card__links">
            <h3>Найти на маркетплейсах</h3>
            <div class="card__links-wrapper">
              <div class="card__links--item">
                <a
                  :href="`https://www.ozon.ru/search/?from_global=true&text=${encodeURIComponent(card.name)}`"
                  target="_blank"
                ><img
                  class="card__image card__links--img"
                  src="@/components/icons/ozon.png"
                  alt=""
                ></a>
              </div>
              <div class="card__links--item">
                <a
                  :href="`https://www.wildberries.ru/catalog/0/search.aspx?search=${encodeURIComponent(card.name)}`"
                  target="_blank"
                ><img
                  class="card__image card__links--img"
                  src="@/components/icons/wb.png"
                  alt=""
                ></a>
              </div>
              <div class="card__links--item">
                <a
                  :href="`https://market.yandex.ru/search?text=${encodeURIComponent(card.name)}`"
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
            <h1>{{ card.name }}</h1>
            <span>{{ card.description }}</span>
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
              v-if="isReserved"
              class="card__description--reserved"
            >
              <button
                v-if="hasEditPermission"
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
              <span>Зарезервировано пользователем
                <router-link
                  :to="{ name: 'UserProfile', params: { uid: reservedUser.uid } }"
                  class="card__user-name"
                >
                  {{ reservedUser.displayName }}
                </router-link>
              </span>
            </div>
            <div
              v-else
              class="card__description--reserved"
            >
              <button
                v-if="blockSelfReserve"
                class="card__button card__button-reserved"
                @click="toggleReserve"
              >
                зарезервировать
              </button>
              <span v-if="blockSelfReserve">Pарезервируйте этот подарок, если хотите его подарить.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card__description__user span {
  word-break: break-word; 
  overflow-wrap: break-word; 
  white-space: normal; 
}
.skeleton-loader {
  height: 600px;
  --color: #f0f2f5;
  background-repeat: no-repeat;
  animation: fade 1s linear infinite alternate;
  margin-bottom: 50px;

  background-image:
    radial-gradient(circle 25px, var(--color) 100%, transparent 0%),
    linear-gradient(var(--color) 30px, transparent 0%),
    linear-gradient(var(--color) 300px, transparent 0%),
    linear-gradient(var(--color) 110px, transparent 0%),
    linear-gradient(var(--color) 200px, transparent 0%),
    linear-gradient(var(--color) 200px, transparent 0%),
    linear-gradient(var(--color) 200px, transparent 0%);

  background-size:
    100px 100px,
    250px 60px,
    300px 300px,
    300px 110px,
    350px 110px,
    350px 110px,
    350px 180px;

  background-position:
    0px 0px,
    85px 35px,
    105px 130px,
    105px 450px,
    520px 130px,
    520px 270px,
    520px 380px;
}

.card__description--stamp {
  height: 150px;
}

.card__menu{
  color: white;
  font-size: 20px;
  padding: 30px;
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

.card__description__info h1 {
  margin: 0 0 20px 0;
  color: #F5F4F4;
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

.card__user__wrapper{
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #F5F4F4;
}

.card__user__info{
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
  color: #F5F4F4;
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
  background-color: #111827
}

.card__button {
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

.card__button-free:hover {
  border: 3px solid #ff6459;
}

.card__button-reserved:hover {
  border: 3px solid #75ff59;
}
</style>
