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
    class="md:max-w-13rem md:h-16rem max-w-7rem h-11rem p-2 shadow-none"
    @click="goToCardPreview(wish.id)"
  >
    <template #header>
      <div class="relative">
        <div
          class="flex align-items-center justify-content-center  border-round-3xl md:h-12rem md:w-12rem w-6rem h-6rem p-0 rel surface-100 "
        >
          <img
            alt="user header"
            :src="wish.img"
            class="border-round-3xl max-h-full max-w-full"
          >
        </div>

        <div
          v-if="wish.fulfilled"
          class="z-1 absolute bottom-0 right-0 mr-2rem"
        >
          <i class="pi pi-check text-1xl p-2 bg-primary border-circle" />
        </div>
        <div
          v-else-if="wish.reserve"
          class="z-1 absolute bottom-0 right-0 mr-2rem"
        >
          <i class="pi pi-lock text-1xl p-2 bg-primary border-circle" />
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

<style scoped lang="scss">
:deep(.p-card-body) {
  padding: 0;
}

.two-lines {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>
