<script setup>
import WiCardCreate from '@/components/WiCards/WiCardCreate.vue'
import { getAllWishes } from '@/services/GetAllWishes'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const allWishes = ref([])
const fillteredWishes = ref([])

onMounted(async () => {
  allWishes.value = await getAllWishes()
  fillteredWishes.value = allWishes.value.filter(elem => elem.reserve === route.params.uid)
})
</script>

<template>
  <div>
    <div
      v-if="fillteredWishes.length > 0"
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
        alt=""
      >
      <span>Здесь пока пусто...</span>
    </div>
  </div>
</template>

<style scoped>
 .empty__image{
    width: 200px;
 }
.empty{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    color: var(--color-text-secondary);
}
.reserved {
    display: flex;
    gap: 20px;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: center;
}
</style>
