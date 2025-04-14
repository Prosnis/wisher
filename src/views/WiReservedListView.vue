<script setup lang="ts">
import type { Wish } from '@/types/interfaces/wish'

import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';

import WiCardCreate from '@/components/WiCards/WiCardCreate.vue'
import { getAllWishes } from '@/services/GetAllWishes'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'


const route = useRoute()
const allWishes = ref<Wish[]>([])
const filteredWishes = ref<Wish[]>([])
const loading = ref<boolean>(false)
const wishesToView = ref([])
const otherWishes = ref(null)


onMounted(async () => {
  try {
    loading.value = true
    allWishes.value = await getAllWishes()
    filteredWishes.value = allWishes.value.filter(elem => elem.reserve === route.params.uid)
    console.log(route.params.uid)
    wishesToView.value = filteredWishes.value.slice(0, 3)
    otherWishes.value = `+${filteredWishes.value.length - wishesToView.value.length}`
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



    <AvatarGroup>
      <Avatar v-for="wish in wishesToView" :key="wish.uid" :image="wish.img" shape="circle" size="large"
        class="border-300" />
      <Avatar v-if="filteredWishes.length > 3" :label="otherWishes" shape="circle" size="large" />
    </AvatarGroup>


  <!-- <div v-else class="empty">
    <img class="empty__image" src="@/components/icons/empty.png" alt="Иконка пустого списка: здесь пока нет элементов">
    <span>Здесь пока пусто...</span>
  </div> -->


</template>

<style lang="scss" scoped>
@use '@/styles/_colors' as color;

.img {
  object-fit: contain;
}


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

// .reserved {
//   display: flex;
//   justify-content: center;
//   gap: 20px;
//   padding: 20px;
//   flex-wrap: wrap;
// }</style>
