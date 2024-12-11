<script setup>
import path from '@/components/constants/pathes'
import WiNavbar from '@/components/WiNavbar.vue'
import WiUserPagePicturesEdit from '@/components/WiUser/WiUserPagePicturesEdit.vue'
import WiUserWishesVue from '@/components/WiUser/WiUserWishes.vue'
import { useProfileStore } from '@/stores/WiProfileStore'
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const profileStore = useProfileStore()
const { getProfileData } = profileStore

function goToSettingsPage() {
  const uid = route.params.uid
  router.push({ path: `${path.settings}/${uid}` })
}

onMounted(async () => {
  await getProfileData(route.params.uid)
})
</script>

<template>
  <div>
    <div>
      <WiNavbar />
    </div>

    <main class="user">
      <div
        v-show="profileStore.skeletonLoad"
        class="skeleton-loader user__info"
      />
      <section class="user__info">
        <div
          v-if="!profileStore.skeletonLoad && profileStore.user && profileStore.user.displayName"
          class="profile"
        >
          <WiUserPagePicturesEdit
            :user="profileStore.user"
            :has-edit-permission="profileStore.hasEditPermission"
          />
          <div class="profile__settings">
            <button
              v-if="profileStore.hasEditPermission"
              class="profile__button profile__button--edit"
              @click="goToSettingsPage"
            >
              Редактировать профиль
            </button>
            <div
              v-else
              class="profile__settings__permission"
            />
          </div>

          <h2 class="profile__name">
            {{ profileStore.user.displayName }}
          </h2>
          <p class="profile__about">
            {{ profileStore.user.about || 'Информация о пользователе отсутствует' }}
          </p>

          <div class="profile__badges">
            <div
              v-for="(badge, index) in profileStore.badges"
              :key="index"
              class="badge"
            >
              {{ badge.name }}
            </div>
          </div>
        </div>
      </section>

      <div class="wishes">
        <WiUserWishesVue v-if="profileStore.user" />
      </div>
    </main>
  </div>
</template>

<style scoped>
.profile__settings__permission{
  height: 55px;
}
.skeleton-loader {
  height: 600px;
  opacity: .8;
  --color: #ffffff;
  background-repeat: no-repeat;
  animation: fade 1s linear infinite alternate;
  margin-bottom: 50px;

  background-image:
    radial-gradient(circle 97px, var(--color) 100%, transparent 0%),
    radial-gradient(circle 100px, rgb(255, 255, 255) 100%, transparent 0%),
    linear-gradient(var(--color) 30px, transparent 0%),
    linear-gradient(var(--color) 30px, transparent 0%),
    linear-gradient(var(--color) 30px, transparent 0%),
    linear-gradient(var(--color) 30px, transparent 0%),
    linear-gradient(var(--color) 300px, transparent 0%);

  background-size:
    200px 200px,
    200px 200px,
    10% 30px,
    30% 30px,
    40% 30px,
    15% 30px,
    100%;

  background-position:
    550px 200px,
    550px 200px,
    585px 410px,
    450px 470px,
    385px 540px,
    1090px 320px,
    0px 0px;
}

@keyframes fade {
  from {
    /* opacity: 0.6; */
    background-color: hsl(200, 20%, 70%);
  }

  to {
    /* opacity: 1; */
    background-color: hsl(200, 20%, 95%);
  }
}

.wishes {
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #111827
}

.profile__badges {
  display: flex;
  flex-wrap: wrap;
  max-width: 700px;
  justify-content: center;
  padding: 20px;
  gap: 5px;
  margin-bottom: 20px;
}

.profile__button--edit {
  margin: 0;
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 10px;
  font-weight: 600;
  border-radius: 10px;
  border: 3px solid #0d121b;
  background-color: #0d121b;
  color: white;
  cursor: pointer;
  transition: border 0.3s ease, background-color 0.3s ease;
}

.profile__button--edit:hover {
  border: 3px solid #ffd859;
}

.profile__settings {
  margin-left: auto;
}

.user {
  max-width: 1300px;
  margin: auto;
  min-height: 90vh;
  padding: 20px;
}

.user__info {
  gap: 20px;
  border-radius: 10px;
  position: relative;
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 50px;
  background-color: #111827
}

.profile__name {
  margin: 0 0 20px;
  margin-top: 65px;
  color: #F7F6F5;
}

.profile__about {
  margin: 0 0 20px;
  color: #F7F6F5;

}

.badge {
  text-align: center;
  padding: 8px;
  border-radius: 50px;
  font-weight: 600;
  color: black;
  background-color: #ffd859;
}

.user__info {
  transition: opacity 0.3s ease;
}
</style>
