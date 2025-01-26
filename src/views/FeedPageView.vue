<script setup>
import WiCardCreate from '@/components/WiCards/WiCardCreate.vue'
import WiContentLoader from '@/components/WiContentLoader.vue'
import NavBar from '@/components/WiNavbar.vue'
import { PATHS } from '@/constants/paths'
import { getAllWishes } from '@/services/GetAllWishes'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const wishes = ref([{}])
const router = useRouter()
const loading = ref(false)

const wishesPerPage = 8
const currentPage = ref(0)

const isTransitioning = ref(false)

function hoverEnter(event) {
  event.target.classList.add('hover')
}

function hoverLeft(event) {
  event.target.classList.remove('hover')
}

const totalPages = computed(() => Math.ceil(wishes.value.length / wishesPerPage))

function nextPage() {
  isTransitioning.value = true
  setTimeout(() => {
    currentPage.value = (currentPage.value + 1) % totalPages.value
    isTransitioning.value = false
  }, 500)
}

let intervalId

const paginatedUsers = computed(() => {
  const start = currentPage.value * wishesPerPage
  const end = start + wishesPerPage
  return wishes.value.slice(start, end)
})

onMounted(async () => {
  try {
    loading.value = true
    wishes.value = (await getAllWishes()).filter(t => t.fulfilled === true)
    intervalId = setInterval(nextPage, 5000)
  }
  catch (err) {
    console.log(err)
  }
  finally {
    loading.value = false
  }
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <NavBar />
  <div class="feed__container">
    <div class="feed__wrapper">
      <div class="feed__actions">
        <div
          class="feed__item feed__item--login"
          @mouseenter="hoverEnter"
          @mouseleave="hoverLeft"
          @click="router.push(PATHS.AUTH.REGISTER)"
        >
          <h2 class="item__title">
            Присоединиться
          </h2>
          <span class="item__subtitle">Зарегистрируйтесь, чтобы создать свой список желаний.</span>
          <font-awesome-icon
            class="feed__icon feed__icon-arrow"
            :icon="['fas', 'angles-right']"
          />
        </div>

        <div
          class="feed__item feed__item--search "
          @mouseenter="hoverEnter"
          @mouseleave="hoverLeft"
          @click="router.push(PATHS.CARDS.MAIN)"
        >
          <h2 class="item__title">
            Идеи подарков
          </h2>
          <span class="item__subtitle">Откройте для себя желания пользователей, которые разделяют ваши интересы!</span>
          <font-awesome-icon
            class="feed__icon feed__icon-arrow"
            :icon="['fas', 'angles-right']"
          />
        </div>

        <div
          class="feed__item feed__item--invitation "
          @mouseenter="hoverEnter"
          @mouseleave="hoverLeft"
          @click="router.push(PATHS.CARDS.INVITATION_CREATE)"
        >
          <h2 class="item__title">
            Cоздать приглашение
          </h2>
          <span class="item__subtitle">Удобная онлайн-открытка для ваших друзей!</span>
          <font-awesome-icon
            class="feed__icon feed__icon-arrow"
            :icon="['fas', 'angles-right']"
          />
        </div>
      </div>

      <WiContentLoader
        v-if="loading"
        class="feed__wishes"
        :width="960"
        :height="780"
      />

      <div
        v-else
        class="feed__wishes"
      >
        <h1 class="wishes__title">
          Подарки, которые стали реальностью
        </h1>
        <div
          class="wishes__items"
          :class="{ 'fade-out': isTransitioning, 'fade-in': !isTransitioning }"
        >
          <WiCardCreate
            v-for="wish in paginatedUsers"
            :key="wish.id"
            :wish="wish"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.feed__content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.wishes__items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  transition: opacity 0.5s ease-in-out;
}

.wishes__items.fade-out {
  opacity: 0;
}

.wishes__items.fade-in {
  opacity: 1;
}

.wishes__title {
  color: var(--color-accent);
}

.feed__wishes {
  background-color: var(--color-background-light);
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 20px;
}

.feed__actions {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.item__subtitle {
  font-style: italic;
}

.item__title {
  margin: 0;
  margin-bottom: 10px;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }

  100% {
    background-position: -200% 0;
  }
}

.feed__icon {
  font-size: 120px;
  margin-top: auto;
  margin-left: auto;
}

.feed__container {
  max-width: 1300px;
  margin: auto;
  min-height: 85vh;
  background-color: var(--color-secondary);
  border-radius: 10px;
}

.feed__wrapper {
  display: flex;
  gap: 20px;
  padding: 20px;
}

.feed__item {
  background-color: var(--color-background-light);
  border-radius: 10px;
  color: var(--color-text-secondary);
  padding: 20px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  overflow: inherit;
  width: 200px;
  height: 220px;
}

.feed__item:hover {
  color: var(--color-accent);
}

.feed__item--users {
  background-color: var(--color-background-light);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
