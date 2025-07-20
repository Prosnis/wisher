<script setup lang="ts">
import { PATHS } from '@/constants/paths'
import { useProfileStore } from '@/stores/WiProfileStore'
import Card from 'primevue/card'

const profileStore = useProfileStore()
</script>

<template>
  <router-link
    v-if="profileStore.hasEditPermission"
    :to="PATHS.CARDS.ADD"
    class="link"
  >
    <Card
      class="md:w-13rem md:h-16rem w-10rem h-13rem p-2 shadow-none cursor-pointer"
    >
      <template #header>
        <div class="relative">
          <div
            class="flex align-items-center justify-content-center border-round-3xl md:h-12rem md:w-12rem w-9rem h-9rem p-0 bg-gray-100"
          >
            <i class="pi pi-plus text-4xl text-gray-400" />
          </div>
        </div>
      </template>
      <template #footer>
        <div class="md:text-base text-xs text-center text-gray-500">
          Добавить желание
        </div>
      </template>
    </Card>
  </router-link>
</template>

<style scoped>
:deep(.p-card-body) {
  padding: 0;
}

.link{
  text-decoration: none;
}
</style>
