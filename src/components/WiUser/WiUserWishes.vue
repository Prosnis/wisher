<script setup lang="ts">
import WiCardCreate from '@/components/WiCards/WiCardCreate.vue'
import { useProfileStore } from '@/stores/WiProfileStore'
import { computed, onMounted, ref } from 'vue'

import { useRoute, useRouter } from 'vue-router'

const props = defineProps({
  wishType: {
    type: String,
    default: 'wishes',
  },
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
      <div
        v-if="profileStore.hasEditPermission"
        class="flex gap-2 justify-content-center flex-column align-items-center"
      >
        <!-- <Button label="Добавить желание" icon="pi pi-arrow-up-right" variant="text" class="text-blue-500"
          iconPos="right" @click="router.push(PATHS.CARDS.ADD)" /> -->
      </div>

      <div
        v-if="profileStore.user"
        class="whishes__cards"
      >
        <WiCardCreate
          v-for="wish in currentWishes"
          :key="wish.id"
          :wish="wish"
          :user-img="profileStore.user.photoUrl"
          :user-name="profileStore.user.displayName"
        />
      </div>

      <div
        v-if="currentWishes.length === 0"
        class="empty"
      >
        <img
          class="empty__image"
          src="@/components/icons/empty.png"
          alt="Иконка пустого списка: здесь пока нет элементов"
        >
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
  gap: 5px;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 100%;
}
</style>
