<script setup lang="ts">
import WiCardCreate from '@/components/WiCards/WiCardCreate.vue'
import WiCardCreateButton from './WiCardCreateButton.vue'
import { useProfileStore } from '@/stores/WiProfileStore'
import { computed, onMounted, ref } from 'vue'

import { useRoute, useRouter } from 'vue-router'
import { profile } from 'console'

const props = defineProps({
  wishType: {
    type: String,
    default: 'wishes',
  },
  cardCreateButton:{
    type: Boolean,
    default: true
  }
})
const route = useRoute()
const router = useRouter()

const profileStore = useProfileStore()
const skeleton = ref<boolean>(false)
const { getProfileData } = profileStore

const currentWishes = computed(() => {
  switch (props.wishType) {
    case 'reservedWishes':
      return profileStore.reservedWishes
    case 'fulfilledWishes':
      return profileStore.fulfilledWishes
    default:
      return profileStore.wishes
  }
})

onMounted(async () => {
  try {
    skeleton.value = true
    const uid = route.params.uid as string
    await getProfileData(uid)
  }
  catch (err) {
    console.log(err)
  }
  finally {
    skeleton.value = false
  }
})
</script>

<template>
  <div>
    <section class="wishes__list">
      <div v-if="profileStore.hasEditPermission" class="flex gap-2 justify-content-center flex-column">
      </div>

      <div v-if="profileStore.user" class="whishes__cards">


        <WiCardCreateButton v-if="cardCreateButton"/>

        <WiCardCreate v-for="wish in currentWishes" :key="wish.id" :wish="wish" :user-img="profileStore.user.photoUrl"
          :user-name="profileStore.user.displayName" />
      </div>

      <div v-if="currentWishes.length === 0 && !profileStore.hasEditPermission" class="empty">
        <img class="empty__image" src="@/components/icons/empty.png"
          alt="Иконка пустого списка: здесь пока нет элементов">
        <span>Здесь пока пусто...</span>
      </div>
    </section>
  </div>
</template>

<style scoped>
.empty__image {
  width: 200px;
}

.empty {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  color: var(--color-text-secondary);
}

.whishes__title {
  color: white;
}

.wishes__empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  font-size: 20px;
  color: rgb(3, 3, 3);
}

.wishes__empty--phrase {
  color: white;
}

.wishes__empty--img {
  width: 300px;
}

.whishes__cards {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
