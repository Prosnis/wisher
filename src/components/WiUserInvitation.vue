<script setup>
import { getInvitationImageUrl } from '@/services/GetUserInvitation'
import { onMounted, ref } from 'vue'
import WiNavbar from './WiNavbar.vue'

const invitationImageUrl = ref(null)

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
      alt="Invitation Image"
    >
    <p v-else>
      Приглашение не найдено или недоступно
    </p>
  </div>
</template>

<style scoped></style>
