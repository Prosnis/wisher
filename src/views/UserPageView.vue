<script setup>
import WiModal from '@/components/WiModal.vue'
import WiNavbar from '@/components/WiNavbar.vue'
import WiUserPagePicturesEdit from '@/components/WiUserPagePicturesEdit.vue'
import WiUserPageSettings from '@/components/WiUserPageSettings.vue'
import WiUserWishesVue from '@/components/WiUserWishes.vue'
import { getUserData } from '@/services/GetUserData.js'
import { getAuth } from 'firebase/auth'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'


const user = ref({})
const badges = ref([])
const route = useRoute()
const modal = ref(null)
const skeletonLoad = ref(true)
const auth = getAuth()
const hasEditPermission = ref(true)
const currentUserUid = ref('')


function showModal() {
  modal.value.openModal()
}


function profileUpdate(updatedData) {
  user.value.displayName = updatedData.userName
  user.value.about = updatedData.userAbout
  badges.value = updatedData.pickedBadges
  console.log('Профиль обновлен в родительском компоненте:', updatedData)
}


onMounted(async () => {
  skeletonLoad.value = true
  const uid = route.params.uid
  const currentUser = auth.currentUser
  currentUserUid.value = currentUser.uid

  if (currentUser && currentUser.uid === uid) {
    hasEditPermission.value = true
  }

  const { user: userData } = await getUserData(uid)

  if (userData) {
    user.value = userData
    badges.value = userData.badges || []
  }
  else {
    console.error('Не удалось загрузить данные пользователя')
  }
  skeletonLoad.value = false
})

</script>

<template>
  <div>
    <div>
      <WiNavbar />
    </div>

    <main class="user">
      <div v-show="skeletonLoad" class="skeleton-loader user__info" />
      <section class="user__info">
        <div v-if="!skeletonLoad && user && user.displayName" class="profile">

          <WiUserPagePicturesEdit :user="user" />
          <div class="profile__settings">
            <button v-if="hasEditPermission" class="profile__button profile__button--edit" @click="showModal">
              Редактировать профиль
            </button>
            <div v-if="!hasEditPermission" style="height: 55px;" />
            <WiModal ref="modal">
              <WiUserPageSettings :user="user" :picked-badges="badges" @update-profile="profileUpdate" />
            </WiModal>
          </div>

          <h2 class="profile__name">
            {{ user.displayName }}
          </h2>
          <p class="profile__about">
            {{ user.about || 'Информация о пользователе отсутствует' }}
          </p>

          <div class="profile__badges">
            <div v-for="(badge, index) in badges" :key="index" class="badge">
              {{ badge.name }}
            </div>
          </div>
        </div>
      </section>

      <div class="wishes">
        <WiUserWishesVue v-if="currentUserUid && user" :currentUserUid="currentUserUid"
          :hasEditPermission="hasEditPermission" :user="user" />
      </div>
    </main>
  </div>
</template>

<style scoped>
.skeleton-loader {
  height: 600px;
  --color: #f0f2f5;
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
    opacity: 0.6;
  }

  to {
    opacity: 1;
  }
}

.wishes {
  border-radius: 50px;
  box-shadow: 0px 10px 40px rgba(126, 155, 189, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
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
  border: none;
  background-color: #464241;
  color: white;
  cursor: pointer;
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
  border-radius: 50px;
  box-shadow: 0px 10px 40px rgba(126, 155, 189, 0.6);
  position: relative;

}


.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 50px;
  margin-bottom: 50px;
}

.profile__name {
  margin: 0 0 20px;
  margin-top: 65px
}

.profile__about {
  margin: 0 0 20px;

}

.badge {
  text-align: center;
  padding: 8px;
  border-radius: 50px;
  font-weight: 600;
  color: white;
  background-color: green;
}

.user__info {
  transition: opacity 0.3s ease;
}

.skeleton-loader {
  transition: opacity 0.3s ease;
  opacity: 1;
}

.skeleton-loader[style*="display: none"] {
  opacity: 0;
}
</style>
