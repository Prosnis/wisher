<script setup lang="ts">
import type { Wish } from '@/types/interfaces/wish'
import WiCardCreate from '@/components/WiCards/WiCardCreate.vue'
import WiContentLoader from '@/components/WiContentLoader.vue'
import { getAllWishes } from '@/services/GetAllWishes'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const allWishes = ref<Wish[]>([])
const fillteredWishes = ref<Wish[]>([])
const loading = ref<boolean>(false)

onMounted(async () => {
  try {
    loading.value = true
    allWishes.value = await getAllWishes()
    fillteredWishes.value = allWishes.value.filter(elem => elem.reserve === route.params.uid)
  }
  catch (err) {
    console.log(err)
  }
  finally {
    loading.value = false
  }
})
</script>

<template>
  <WiContentLoader
    v-if="loading"
    :width="1300"
    :height="360"
  />
  <div
    v-else-if="fillteredWishes.length > 0"
    class="reserved"
  >
    <WiCardCreate
      v-for="wish in fillteredWishes"
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
</template>

<style lang="scss" scoped>
@use '@/styles/_colors' as color;

.empty__image {
  width: 200px;
}

.empty {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  padding: 50px;
  color: color.$color-text-secondary;
}

.reserved {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  flex-wrap: wrap;
}
</style>
