<script setup lang="ts">
import WiNavbar from '@/components/WiNavbar.vue'
import WiUserWishes from '@/components/WiUser/WiUserWishes.vue'

import { useProfileStore } from '@/stores/WiProfileStore'

import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const str = 'reservedWishes'
const route = useRoute()
const profileStore = useProfileStore()
const { getProfileData } = profileStore

onMounted(async () => {
  const uid = route.params.uid as string
  await getProfileData(uid)
})
</script>

<template>
  <WiNavbar />
  <div class="gifts__nav">
    <h1 class="gifts__title">
      Зарезервированные подарки
    </h1>
    <router-link
      class="gifts__back-link"
      :to="{ name: 'UserProfile', params: { uid: route.params.uid } }"
    >
      @{{
        profileStore.user?.displayName }}
    </router-link>
  </div>
  <div class="gifts">
    <WiUserWishes
      :wish-type="str"
      :card-create-button="false"
    />
  </div>
</template>

<style scoped lang="scss">
.gifts {
    border-radius: 20px;
    padding: 20px;
    min-height: calc(100vh - 100px);
    background-color: $color-background-grey;

    &__nav {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    &__back-link {
        color: white;
        font-size: 26px;
        font-style: italic;
    }
}
</style>
