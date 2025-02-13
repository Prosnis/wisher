<script setup>
import WiCardCreate from '@/components/WiCards/WiCardCreate.vue'
import WiNavbar from '@/components/WiNavbar.vue'
import { getAllWishes } from '@/services/GetAllWishes'
import { getUserData } from '@/services/GetUserData'
import { badges } from '@/services/UserBadgesStore'
import { onMounted, ref } from 'vue'

const wishes = ref(null)
const pickedbadge = ref([])
const filteredWishes = ref([])

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
  filteredWishes.value = wishes.value.filter(item => item.badge.some(el => el.name === badge.name))
  console.log(badge.name)
  console.log(filteredWishes.value)
}

onMounted(async () => {
  try {
    const rawWishes = await getAllWishes()
    const wishesWithUserData = await Promise.all(
      rawWishes.map(async (wish) => {
        const { user: userData } = await getUserData(wish.userId)
        return { ...wish, userData }
      }),
    )
    wishes.value = wishesWithUserData
    filteredWishes.value = wishesWithUserData
  }
  catch (error) {
    console.error('Ошибка загрузки данных:', error)
  }
})
</script>

<template>
  <WiNavbar />
  <div class="cards">
    <div class="cards__nav">
      <ul class="cards__list">
        <li
          v-for="(badge, index) in badges"
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
    <div class="cards__wrapper">
      <WiCardCreate
        v-for="wish in filteredWishes"
        :key="wish.id"
        :wish="wish"
        :user-img="wish.userData?.photoUrl"
        :user-name="wish.userData?.displayName"
      />
    </div>
  </div>
</template>

<style scoped>
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
  padding: 20px;
  background-color: var(--color-secondary);
  border-radius: 10px;
}

.cards__wrapper {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
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
