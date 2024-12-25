<script setup>
import path from '@/components/constants/pathes'
import WiCardCreate from '@/components/WiCards/WiCardCreate.vue'
import { useProfileStore } from '@/stores/WiProfileStore'
import { getAuth } from 'firebase/auth'
import { onMounted, ref } from 'vue'
import { ContentLoader } from 'vue-content-loader'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const profileStore = useProfileStore()
const { getProfileData } = profileStore
const skeleton = ref(false)
const auth = getAuth()

onMounted(async () => {
  try {
    skeleton.value = true
    await getProfileData(route.params.uid)
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
  <ContentLoader
    v-if="skeleton"
    class="skeleton__wishes"
    viewBox="0 0 1300 400"
    :speed="2"
    primary-color="#f5f7fa"
    secondary-color="#c9c5c5"
  >
    <rect
      x="0"
      y="0"
      rx="10"
      ry="10"
      width="1300"
      height="400"
    />
  </ContentLoader>

  <div v-else>
    <section class="wishes__list">
      <div
        v-if="profileStore.hasEditPermission"
        class="wishes__buttons"
      >
        <button
          class="wishes__button"
          @click="() => router.push(path.cardAdd)"
        >
          Добавить желание
        </button>
        <button
          class="wishes__button"
          @click="() => router.push(path.invitationCard)"
        >
          Создать приглашение
        </button>
        <button
          class="wishes__button"
          @click="() => router.push(path.cards)"
        >
          Желания пользователей
        </button>
      </div>
      <div class="whishes__cards">
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
          alt=""
        >
        <span>Здесь пока пусто...</span>
      </div>
    </section>
  </div>
</template>

<style scoped>
.wishes__buttons{
  display: flex;
  justify-content: center;
}
.wishes__button{
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

.wishes__button:hover{
  background-color: var(--color-background-light);
  color: var(--color-accent);
}

.skeleton__wishes{
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
