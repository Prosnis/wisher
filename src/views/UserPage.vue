<template>
  <div>
    <div>
      <NavBar />
    </div>

    <main class="user">
      <div v-show="isLoading" class="skeleton-loader user__info"></div>
      <section class="user__info">
        <div v-show="!isLoading" class="profile" v-if="user">

          <div class="profile__wallapper" @mouseenter="hoverWallaper = true" @mouseleave="hoverWallaper = false">
            <img :src="user.wallpaperUrl" alt="user-wallapper" loading="lazy" class="profile__wallapper-img"
              :style="{ opacity: imageLoaded ? 1 : 0 }" @load="imageLoaded = true">
            <!-- <div class="profile__spinner" v-if="!loading" /> -->
            <label for="input-wallaper" class="profile__wallaper-edit" v-if="hoverWallaper">
              <input class="profile__input profile__input--wallpaper" id="input-wallaper" type="file"
                @change="picturesEdit('wallpaper', $event)">
              изменить обложку
            </label>
          </div>

          <div class="profile__photo-wrapper" @mouseenter="hoverAvatar = true" @mouseleave="hoverAvatar = false">
            <div class="profile__spinner" v-if="loading" />
            <img class="profile__photo" :src="user.photoUrl" alt="user-photo" loading="lazy">
            <label for="input-avatar" class="profile__photo profile__photo--edit" v-if="hoverAvatar">
              <input class="profile__input profile__input--avatar" type="file" id="input-avatar"
                @change="picturesEdit('avatar', $event)">
              <font-awesome-icon class="profile__icon profile__icon-edit" :icon="['fas', 'edit']" />
            </label>
          </div>


          <div class="profile__settings">
            <button class="profile__button profile__button--edit" @click="showModal">Редактировать профиль</button>
            <ModalComponent ref="modal">
              <EditUserPage :user="user" :picked-badges="badges" @update-profile="profileUpdate" />
            </ModalComponent>
          </div>


          <h2 class="profile__name">{{ user.displayName }}</h2>
          <p class="profile__about">{{ user.about || 'Информация о пользователе отсутствует' }}</p>

          <div class="profile__badges">
            <div v-for="(badge, index) in badges" :key="index" class="badge">
              {{ badge.name }}
            </div>
          </div>
        </div>
      </section>

      <div class="wishes">
        <h2>Список желаний</h2>
        <button class="profile__button profile__button--addWish" @click="showModalAddCard">Добавить</button>
        <ModalComponent ref="modalAddCard">
          <AddWishCards :userImg="user.photoUrl" :userName ='user.displayName' @addWish="handleAddWish"/>
        </ModalComponent>
        <section class="wishes__list" v-if="usersWhises.length">
          <div class="whishes__cards">
            <CommonCards v-for="wish in usersWhises" :key="wish.id" :wish="wish" :userImg="user.photoUrl" :userName ='user.displayName' />
          </div>
        </section>
        <div v-else class="wishes__empty">
          <img src="../assets//empty-box.png" alt="empty-box" loading="lazy">
          <p>У пользователя пока нет желаний.</p>
        </div>
      </div>


    </main>
  </div>
</template>

<script setup>
import ModalComponent from '@/components/ModalComponent.vue';
import NavBar from '@/components/NavBar.vue';
import CommonCards from '@/components/WishCardCreate.vue';
import EditUserPage from '@/components/EditUserPage.vue';
import { getUserData } from '@/services/GetUserData.js';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { saveProfile } from '@/services/UserPictureUpdate'
import AddWishCards from '@/components/WishCardsAdd.vue';
// import {usersWhises} from '@/assets/temp-data/temp-data.js'

const user = ref({});
const badges = ref([]);
const usersWhises = ref([]);
const route = useRoute();
const hoverWallaper = ref(false)
const hoverAvatar = ref(false)
const wallpaperFile = ref(null);
const avatarFile = ref(null);
const loading = ref(false)
const modal = ref(null)
const modalAddCard = ref(null)
const isLoading = ref(true);
const imageLoaded = ref(false);



const showModal = () => {
  modal.value.openModal();
};


const showModalAddCard = () => {
  modalAddCard.value.openModal();
};


function picturesEdit(target, event) {
  const file = event.target.files[0];
  if (target === 'avatar') {
    avatarFile.value = file;
  } else if (target === 'wallpaper') {
    wallpaperFile.value = file;
  }
  saveProfile(user, wallpaperFile, avatarFile, loading)
}


function profileUpdate(updatedData) {
  user.value.displayName = updatedData.userName;
  user.value.about = updatedData.userAbout;
  badges.value = updatedData.pickedBadges;
  console.log('Профиль обновлен в родительском компоненте:', updatedData);
}


const handleAddWish = (cardData) => {
    usersWhises.value.push(cardData); 
};


onMounted(async () => {
  isLoading.value = true;
  const uid = route.params.uid;
  const { user: userData, wishes } = await getUserData(uid);
  if (userData) {
    user.value = userData;
    badges.value = userData.badges || [];
    usersWhises.value = userData.wishes;
  } else {
    console.error('Не удалось загрузить данные пользователя');
  }
  isLoading.value = false;
});


</script>





<style scoped>
.whishes__cards{
  display: flex;
  gap: 20px;
  padding: 50px;
  flex-wrap: wrap;
  justify-content: center;
}

.profile__spinner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  --color: #f8f8dfaf;
  background: linear-gradient(90deg, var(--color) 25%, transparent 50%, var(--color) 75%);
  background-size: 200% 100%;
  border-radius: 50px 50px 0 0;
  animation: loading 1.5s infinite;
  z-index: 1;
  opacity: 0.8;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }

  100% {
    background-position: -200% 0;
  }
}




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

.profile__icon-edit {
  font-size: 100px;
  color: white;
}


.profile__photo--edit {
  background-color: #464241;
  opacity: 0.3;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}


.profile__input {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
}


.profile__wallaper-edit {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px;
  margin: 10px;
  font-weight: 600;
  border-radius: 10px;
  border: none;
  background-color: #4642418a;
  color: white;
  cursor: pointer;
}

.wishes__empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  font-size: 20px;
  color: rgb(3, 3, 3);
}

.wishes__empty img {
  width: 300px;
}


/* .card-icon-set {
  padding: 10px;
  font-size: 20px;
  color: #474745;
} */

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

.profile__photo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid white;
}

.user__info {
  gap: 20px;
  border-radius: 50px;
  box-shadow: 0px 10px 40px rgba(126, 155, 189, 0.6);
  position: relative;

}

.profile__wallapper {
  width: 100%;
  position: relative;
}

.profile__wallapper img {
  object-fit: cover;
  width: 100%;
  height: 300px;
  border-radius: 50px 50px 0 0;
}

.profile__wallapper-img {
  transition: opacity 0.3s ease-in-out;
  opacity: 0;
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

.profile__button--addWish {
  cursor: pointer;
  background-color: white;
  padding: 20px;
  border: none;

}

</style>