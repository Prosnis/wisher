<script setup lang="ts">
import WiCardCreate from '@/components/WiCards/WiCardCreate.vue'
import WiContentLoader from '@/components/WiContentLoader.vue'
import { PATHS } from '@/constants/paths'
import { useProfileStore } from '@/stores/WiProfileStore'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const profileStore = useProfileStore()

const skeleton = ref<boolean>(false)

const { getProfileData } = profileStore

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
  <WiContentLoader
    v-if="skeleton"
    :width="1300"
    :height="400"
    class="skeleton__wishes"
  />

  <div v-else>
    <section class="wishes__list">
      <div
        v-if="profileStore.hasEditPermission"
        class="wishes__buttons"
      >
        <button
          class="wishes__button"
          @click="router.push(PATHS.CARDS.ADD)"
        >
          Добавить желание
        </button>
        <button
          class="wishes__button"
          @click="router.push(PATHS.CARDS.INVITATION_CREATE)"
        >
          Создать приглашение
        </button>
        <button
          class="wishes__button"
          @click="router.push(PATHS.CARDS.MAIN)"
        >
          Желания пользователей
        </button>
      </div>
      <div class="whishes__cards" v-if="profileStore.user">
        <WiCardCreate
          v-for="wish in profileStore.wishes"
          :key="wish.id"
          :wish="wish"
          :user-img="profileStore.user.photoUrl"
          :user-name="profileStore.user.displayName"
        />
      </div>
      <div
        v-if="profileStore.wishes.length === 0"
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
.wishes__buttons {
  display: flex;
  justify-content: center;
}

.wishes__button {
  margin: 0;
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 10px;
  font-weight: 600;
  border-radius: 10px;
  border: 3px solid var(--color-primary);
  background-color: var(--color-primary);
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: border 0.3s ease, background-color 0.3s ease;
  width: 300px;
  justify-content: center;
  font-size: 16px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.wishes__button:hover {
  background-color: var(--color-background-light);
  color: var(--color-accent);
}

.skeleton__wishes {
  width: 1300px;
  height: 400px;
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
  color: var(--color-text-secondary);
}

.whishes__buttons__wrapper {
  display: flex;
  gap: 20px;
}

.whishes__button {
  height: 60px;
  width: 260px;
  color: white;
  background-color: #0d121b;
  border: white 1px solid;
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;
}

.whishes__button:hover {
  border: 3px solid #ffd859;
  color: #ffd859;
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
  gap: 20px;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.profile__button--addWish {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 10px;
  font-weight: 600;
  border-radius: 10px;
  border: 3px solid #0d121b;
  background-color: #0d121b;
  color: white;
  cursor: pointer;
  transition: border 0.3s ease, background-color 0.3s ease;
  width: 900px;
  font-size: 22px;
}

.profile__button--addWish:hover {
  border: 3px solid #ffd859;
}
</style>
