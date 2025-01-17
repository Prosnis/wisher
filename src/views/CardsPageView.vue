<script setup>
import WiCardCreate from '@/components/WiCards/WiCardCreate.vue'
import WiContentLoader from '@/components/WiContentLoader.vue'
import WiNavbar from '@/components/WiNavbar.vue'
import { badgeAll } from '@/services/BadgeForSearch'
import { getAllWishes } from '@/services/GetAllWishes'
import { badges } from '@/services/UserBadgesStore'
import { computed, onMounted, onUnmounted, ref } from 'vue'

const wishes = ref(null)
const pickedbadge = ref([])
const filteredWishes = ref([])
const loading = ref(false)

const currentPage = ref(1)
const itemsPerPage = 10

const paginatedWishes = computed(() => {
  return filteredWishes.value.slice(0, currentPage.value * itemsPerPage)
})

function handleScroll() {
  const bottomOffset = 10
  const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - bottomOffset

  if (isBottom && paginatedWishes.value.length < filteredWishes.value.length) {
    currentPage.value += 1
  }
}

function isBadgePicked(badge) {
  return pickedbadge.value.some(pickedBadge => pickedBadge.name === badge.name)
}

function badgePicker(badge) {
  const index = pickedbadge.value.findIndex(item => item.name === badge.name)
  if (index === -1) {
    pickedbadge.value = [badge]
  }
}

function badgesFilter(badge) {
  try {
    loading.value = true
    if (badge.name === 'Все категории') {
      filteredWishes.value = wishes.value
    }
    else {
      filteredWishes.value = wishes.value.filter(item => item.badge.some(el => el.name === badge.name))
    }
  }
  finally {
    loading.value = false
  }
}

onMounted(async () => {
  try {
    window.addEventListener('scroll', handleScroll)
    loading.value = true
    const rawWishes = await getAllWishes()
    const wishesWithUserData = await Promise.all(
      rawWishes.map(async (wish) => {
        return { ...wish }
      }),
    )
    wishes.value = wishesWithUserData
    badgePicker(badgeAll[0])
    badgesFilter(badgeAll[0])
  }
  catch (error) {
    console.error('Ошибка загрузки данных:', error)
  }
  finally {
    loading.value = false
  }
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <WiNavbar />
  <div class="cards">
    <div class="cards__nav">
      <ul class="cards__list">
        <li
          v-for="(badge, index) in [...badges, ...badgeAll]"
          :key="index"
          class="cards__item"
          :style="{
            backgroundColor: isBadgePicked(badge) ? '#0817ecb9' : '#f5f7fa',
            color: isBadgePicked(badge) ? '#f0f0f0' : '#0817ecb9',
          }"
          @click="[badgePicker(badge), badgesFilter(badge)]"
        >
          {{ badge.name }}
        </li>
      </ul>
    </div>
    <WiContentLoader
      v-if="loading"
      class="cards__wrapper"
      :width="1300"
      :height="600"
    />

    <div
      v-else-if="filteredWishes.length && !loading"
      class="cards__wrapper"
    >
      <WiCardCreate
        v-for="wish in paginatedWishes"
        :key="wish.id"
        :wish="wish"
        :user-img="wish.userData?.photoUrl"
        :user-name="wish.userData?.displayName"
      />
    </div>

    <div
      v-else-if="filteredWishes.length === 0"
      class="empty"
    >
      <img
        class="empty__image"
        src="@/components/icons/empty.png"
        alt=""
      >
      <span>Здесь пока пусто...</span>
    </div>
  </div>
</template>

<style scoped>
.cards__nav {
  background-color: var(--color-secondary);
  border-radius: 10px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  margin-bottom: 20px;
}

.empty__image {
  width: 350px;
}

.empty {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: var(--color-text-secondary);
  background-color: var(--color-secondary);
  border-radius: 10px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  margin-bottom: 20px;
  min-height: 80vh;
}

.cards__item {
  text-align: center;
  padding: 8px;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
}

.cards__list {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding: 20px;
  justify-content: center;
}

.cards {
  max-width: 1300px;
  margin: auto;
  min-height: 85vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.cards__wrapper {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  background-color: var(--color-secondary);
  border-radius: 10px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  padding: 20px;
  min-height: 70vh;
}

.form__badge__picked {
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  cursor: pointer;
  display: flex;
  align-items: center;
  white-space: nowrap;
  flex: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.form__badge {
  cursor: pointer;
  display: flex;
  align-items: center;
  white-space: nowrap;
  transition: background-color 0.3s ease, color 0.3s ease;
}
</style>
