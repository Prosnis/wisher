<script setup lang="ts">
import type { Badge, Wish } from '@/types/interfaces/wish'

import WiCardCreate from '@/components/WiCards/WiCardCreate.vue'
import WiNavbar from '@/components/WiNavbar.vue'
import { BADGE_ALL, BADGES } from '@/constants/badges'
import { getAllWishes } from '@/services/GetAllWishes'
import { computed, onMounted, onUnmounted, ref } from 'vue'

const wishes = ref<Wish[]>([])
const pickedbadge = ref<Badge[]>([])
const filteredWishes = ref<Wish[]>([])
const loading = ref<boolean>(false)

const currentPage = ref<number>(1)
const itemsPerPage: number = 10
const combinedBadges = computed(() => [...BADGES, ...BADGE_ALL])

const paginatedWishes = computed(() => {
  return filteredWishes.value.slice(0, currentPage.value * itemsPerPage) as Wish[]
})

function processScroll() {
  const bottomOffset = 10
  const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - bottomOffset

  if (isBottom && paginatedWishes.value.length < filteredWishes.value.length) {
    currentPage.value += 1
  }
}

function isBadgePicked(badge: Badge): boolean {
  return pickedbadge.value.some((pickedBadge: Badge) => pickedBadge.name === badge.name)
}

function badgePicker(badge: Badge): void {
  const index = pickedbadge.value.findIndex((item: Badge) => item.name === badge.name)
  if (index === -1) {
    pickedbadge.value = [badge]
  }
}

function badgesFilter(badge: Badge): void {
  try {
    loading.value = true
    if (badge.name === 'Все категории') {
      filteredWishes.value = wishes.value
    }
    else {
      filteredWishes.value = wishes.value.filter((item: Wish) => item.badge?.some((el: Badge) => el.name === badge.name))
    }
  }
  finally {
    loading.value = false
  }
}

onMounted(async () => {
  try {
    window.addEventListener('scroll', processScroll)
    loading.value = true
    wishes.value = await getAllWishes()
    badgePicker(BADGE_ALL[0])
    badgesFilter(BADGE_ALL[0])
  }
  catch (error) {
    console.error('Ошибка загрузки данных:', error)
  }
  finally {
    loading.value = false
  }
})
onUnmounted(() => {
  window.removeEventListener('scroll', processScroll)
})
</script>

<template>
  <WiNavbar />
  <div class="cards">
    <div class="cards__nav">
      <ul class="cards__list">
        <li
          v-for="(badge, index) in combinedBadges"
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


    <div
      v-if="filteredWishes.length"
      class="cards__wrapper"
    >
      <WiCardCreate
        v-for="wish in paginatedWishes"
        :key="wish.id"
        :wish="wish"
      />
    </div>

    <div
      v-else
      class="empty"
    >
      <img
        class="empty__image"
        src="@/components/icons/empty.png"
        alt="Иконка пустого списка: здесь пока нет элементов"
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
