<script setup lang="ts">
import WiNavbar from '@/components/WiNavbar.vue'
import { getInvitationImageUrl } from '@/services/GetUserInvitation'
import { onMounted, ref } from 'vue'

const invitationImageUrl = ref<string | null>(null)

onMounted(async () => {
  invitationImageUrl.value = await getInvitationImageUrl()
})
</script>

<template>
  <WiNavbar />
  <div>
    <img
      v-if="invitationImageUrl"
      :src="invitationImageUrl"
      alt="Изображение пригласительного"
    >
    <p v-else>
      Приглашение не найдено или недоступно
    </p>
  </div>
</template>

<style scoped></style>
