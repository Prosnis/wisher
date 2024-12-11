<script setup>
import WiCardCreate from '@/components/WiCards/WiCardCreate.vue'
import WiNavbar from '@/components/WiNavbar.vue'
import { getAllWishes } from '@/services/GetAllWishes'
import { getUserData } from '@/services/GetUserData'
import { onMounted, ref } from 'vue'

const wishes = ref(null)

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
  }
  catch (error) {
    console.error('Ошибка загрузки данных:', error)
  }
})
</script>

<template>
  <WiNavbar />
  <div class="cards__wrapper">
    <WiCardCreate
      v-for="wish in wishes"
      :key="wish.id"
      :wish="wish"
      :user-img="wish.userData?.photoUrl"
      :user-name="wish.userData?.displayName"
    />
  </div>
</template>

<style scoped>
.cards__wrapper{
  max-width: 1300px;
  margin: auto;
  min-height: 85vh;
  padding: 20px;
  background-color: #111827;
  border-radius: 10px;
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
