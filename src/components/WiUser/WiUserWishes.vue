<script setup lang="ts">
import WiCardCreate from '@/components/WiCards/WiCardCreate.vue'
import WiCardCreateButton from '@/components/WiUser/WiCardCreateButton.vue'
import { useProfileStore } from '@/stores/WiProfileStore'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const props = withDefaults(defineProps<{
  wishType: string,
  cardCreateButton: boolean,
}>(), {
  wishType: 'wishes',
  cardCreateButton: true
})

const route = useRoute()
const profileStore = useProfileStore()
const { getProfileData } = profileStore

const currentWishes = computed(() => {
  switch (props.wishType) {
    case 'reservedWishes':
      return profileStore.reservedWishes
    case 'userReservedWishes':
      return profileStore.userReservedWishes
    case 'fulfilledWishes':
      return profileStore.fulfilledWishes
    default:
      return profileStore.wishes
  }
})

onMounted(async () => {
  try {
    if (typeof route.params.uid === 'string') {
      await getProfileData(route.params.uid)
    }
  }
  catch (err) {
    console.error('Ошибка при разгрузки профиля', err)
  }
})
</script>

<template>
  <div>


    <section class="wishes-list">
      <div v-if="profileStore.user" class="wishes-list__item">
        <WiCardCreateButton v-if="cardCreateButton" />
        <WiCardCreate v-for="wish in currentWishes" :key="wish.id" :wish="wish" :user-img="profileStore.user.photoUrl"
          :user-name="profileStore.user.displayName" />
      </div>

      <div v-if="currentWishes.length === 0 && !profileStore.hasEditPermission" class="wishes-list__empty">
        <img class="wishes-list__empty-image" src="@/components/icons/empty.png"
          alt="Иконка пустого списка: здесь пока нет элементов">
        <span>Здесь пока пусто...</span>
      </div>
    </section>


  </div>
</template>

<style scoped lang="scss">
.wishes-list {

  &__item {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    font-size: 20px;
    color: rgb(3, 3, 3);

    &-image{
      width: 200px;
    }
  }
}
</style>
