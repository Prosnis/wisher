<template>
  <div>
    <div>
      <NavBar />
    </div>
    <main class="user">
      <section class="user__info">

        <div class="profile" v-if="user">

          <div class="profile__wallapper" @mouseenter="hoverWallaper = true" @mouseleave="hoverWallaper = false">
            <img :src="user.wallpaperUrl" alt="user-wallapper" loading="lazy">
            <div class="profile__spinner" v-if="loading"/>
            <label for="input-wallaper" class="profile__wallaper-edit" v-if="hoverWallaper">
              <input class="profile__input profile__input--wallpaper" id="input-wallaper" type="file" @change="wallaperEdit('wallpaper', $event)" >
              изменить обложку
            </label>
          </div>

          <div class="profile__photo-wrapper" @mouseenter="hoverAvatar = true" @mouseleave="hoverAvatar = false">
            <img class="profile__photo" :src="user.photoUrl" alt="user-photo" loading="lazy">
            <label for="input-avatar" class="profile__photo profile__photo--edit" v-if="hoverAvatar">
              <input
               class="profile__input profile__input--avatar" type="file" id="input-avatar"
                @change="wallaperEdit('avatar', $event)" >
              <font-awesome-icon class="profile__icon profile__icon-edit" :icon="['fas', 'edit']" />
            </label>

          </div>


          <div class="profile__settings">
            <button class="profile__button profile__button--edit" @click="showModal">Редактировать профиль</button>
            <!-- <EditUserPage v-if="modalShow" @close="modaltoggle" :user="user" :pickedBadges="badges"
              @update-profile="profileUpdate" /> -->
              <ModalComponent ref="modal">
                <EditUserPage :user="user" :picked-badges="badges" @update-profile="profileUpdate"/>
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
        <!-- <button class="add-wish-button">Пожелать...</button> -->
        <section class="wishes__list" v-if="usersWhises.length">
          <div class="whishes__cards">
            <CommonCards v-for="wish in usersWhises" :key="wish.id" :wish="wish" />
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
import CommonCards from '@/components/WishCard.vue';
import EditUserPage from '@/services/EditUserPage.vue';
import { getAuth } from 'firebase/auth';
import { collection, doc,  getDoc, getDocs, getFirestore, updateDoc,} from 'firebase/firestore';
import { getDownloadURL, getStorage, ref as storageRef, uploadBytes } from 'firebase/storage';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';


const user = ref({});
const badges = ref([]);
const usersWhises = ref([]);
const route = useRoute();
const db = getFirestore();
const hoverWallaper = ref(false)
const hoverAvatar = ref(false)

const wallpaperFile = ref(null);
const avatarFile = ref(null);

const storage = getStorage();
const auth = getAuth();
const loading = ref(false)

const modal = ref(null)



const showModal = () => {
  modal.value.openModal();
};

async function uploadImage (file, path) {
  const fileRef = storageRef(storage, path);
  await uploadBytes(fileRef, file);
  return await getDownloadURL(fileRef);
}



async function saveProfile () {

  loading.value = true

  const currentUser = auth.currentUser;
  const userDocRef = doc(db, 'users', currentUser.uid);
  const updates = {};


  try {
    if (avatarFile.value) {
      const photoUrl = await uploadImage(avatarFile.value, `avatars/${currentUser.uid}`);
      updates.photoUrl = photoUrl;
      user.value.photoUrl = photoUrl;
    }
    if (wallpaperFile.value) {
      const wallpaperUrl = await uploadImage(wallpaperFile.value, `wallpapers/${currentUser.uid}`);
      updates.wallpaperUrl = wallpaperUrl;
      user.value.wallpaperUrl = wallpaperUrl;
    }
    await updateDoc(userDocRef, updates);
    console.log('Профиль успешно обновлен');
  } catch (error) {
    console.log('ошибка при загрузке профиля,', error)
  } finally {
    loading.value = false
  }
}


function wallaperEdit (target, event) {
  const file = event.target.files[0];
  if (target === 'avatar') {
    avatarFile.value = file;
  } else if (target === 'wallpaper') {
    wallpaperFile.value = file;
  }
  saveProfile()
}







const uid = route.params.uid;


function profileUpdate (updatedData) {
  user.value.displayName = updatedData.userName;
  user.value.about = updatedData.userAbout;
  badges.value = updatedData.pickedBadges;
  console.log('Профиль обновлен в родительском компоненте:', updatedData);
}

onMounted(async () => {

  const auth = getAuth();
  const currentUser = auth.currentUser;

  if (!currentUser) {
    console.error('User is not authenticated');
    return;
  }

  const userDoc = await getDoc(doc(db, 'users', uid));
  if (userDoc.exists()) {
    user.value = userDoc.data();
    console.log('Loaded user data:', user.value);
    badges.value = user.value.badges || [];
  } else {
    console.error('No such user!');
  }


  const wishesSnapshot = await getDocs(collection(db, 'users', uid, 'wishes'));
  usersWhises.value = wishesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
});


</script>





<style scoped>
.wishes {
  border-radius: 50px;
  background-color: #E3E8EB;
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

.profile__spinner {
  color: white;
  position: absolute;
  top: 20%;
  right: 48%;
}

.profile__spinner:after {
  animation: changeContent .8s linear infinite;
  display: block;
  content: "⠋";
  font-size: 80px;
}

@keyframes changeContent {
  10% {
    content: "⠙";
  }

  20% {
    content: "⠹";
  }

  30% {
    content: "⠸";
  }

  40% {
    content: "⠼";
  }

  50% {
    content: "⠴";
  }

  60% {
    content: "⠦";
  }

  70% {
    content: "⠧";
  }

  80% {
    content: "⠇";
  }

  90% {
    content: "⠏";
  }
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
  background-color: #E3E8EB;

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



.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 50px;
  background-color: #E3E8EB;
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
</style>