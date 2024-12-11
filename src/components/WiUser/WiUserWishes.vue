<script setup>
import path from '@/components/constants/pathes'
import WiCardCreate from '@/components/WiCards/WiCardCreate.vue'
import { useProfileStore } from '@/stores/WiProfileStore'
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const profileStore = useProfileStore()
const { getProfileData } = profileStore
const router = useRouter()

onMounted(() => {
  getProfileData(route.params.uid)
})
</script>

<template>
  <h2 class="whishes__title">
    Список желаний
  </h2>

  <div class="whishes__buttons__wrapper">
    <button
      v-if="profileStore.hasEditPermission"
      class="whishes__button whishes__button--whish"
      @click="() => router.push(path.cardAdd)"
    >
      Добавить желание
    </button>
    <button
      v-if="profileStore.hasEditPermission"
      class="whishes__button whishes__button--invitation"
      @click="() => router.push(path.invitationCard)"
    >
      Создать открытку
    </button>
  </div>

  <section
    v-if="profileStore.wishes.length"
    class="wishes__list"
  >
    <div class="whishes__cards">
      <WiCardCreate
        v-for="wish in profileStore.wishes"
        :key="wish.id"
        :wish="wish"
        :user-img="profileStore.user.photoUrl"
        :user-name="profileStore.user.displayName"
      />
    </div>
  </section>

  <div
    v-else
    class="wishes__empty"
  >
    <img
      class="wishes__empty--img"
      src="@/assets/empty-box.png"
      alt="empty-box"
      loading="lazy"
    >
    <p
      class="wishes__empty--phrase"
    >
      У пользователя пока нет желаний.
    </p>
  </div>
</template>

<style scoped>
.whishes__buttons__wrapper{
  display: flex;
  gap: 20px;
}

.whishes__button{
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
  padding: 50px;
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
