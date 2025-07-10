<script setup lang="ts">
import type { Wish } from '@/types/interfaces/wish'
import { PATHS } from '@/constants/paths'
import Card from 'primevue/card'

import { useRouter } from 'vue-router'

interface Props {
  wish: Wish
}

defineProps<Props>()

const router = useRouter()

async function goToCardPreview(wishID: string) {
  try {
    await router.push(`${PATHS.CARDS.SINGLE}/${wishID}`)
    console.log('Navigation succeeded!')
  }
  catch (err) {
    console.log('Card not allowed', err)
  }
}
</script>

<template>
  <Card
    v-if="wish"
    class="md:w-13rem md:h-16rem w-10rem h-13rem p-2 shadow-none card"
    @click="goToCardPreview(wish.id)"
  >
    <template #header>
      <div class="relative ">
        <div
          class="flex align-items-center justify-content-center  border-round-3xl md:h-12rem md:w-12rem w-9rem h-9rem p-0 rel"
        >
          <img
            alt="user header"
            :src="wish.img"
            class="border-round-2xl max-h-full max-w-full img"
          >
        </div>

        <div
          v-if="wish.fulfilled"
          class=" z-1 absolute bottom-0 right-0 mr-2rem"
        >
          <i class="pi pi-check icon icon-ful" />
        </div>
        <div
          v-else-if="wish.reserve"
          class="z-1 absolute bottom-0 right-0 mr-2rem"
        >
          <i class="pi pi-lock icon  icon-res" />
        </div>
      </div>
    </template>
    <template #footer>
      <div class="two-lines md:text-base text-xs text-center">
        {{ wish.name }}
      </div>
    </template>
  </Card>
</template>

<style lang="scss" scoped>
@use '@/styles/colors';
@use '@/styles/mixins';

.card{
  cursor: pointer;
}

:deep(.p-card-body) {
  padding: 0;
}

.icon{
  font-size: 20px;
  border-radius: 50%;
  padding: 8px;
  color: white;
}

.icon-ful {
background-color: $color-background-blue;
}

.icon-res {
 background-color: $color-background-pink
}

.two-lines {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}


</style>
