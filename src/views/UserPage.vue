<template>
  <div>
    <div>
      <nav-bar />
    </div>
    <main class="user-main">
      <section class="user-info">
        <div class="profile-wrapper" v-if="user">
          <div class="user-wallapper" @mouseenter="hoverWallaper = true" @mouseleave="hoverWallaper = false">
            <img :src="user.wallpaperUrl" alt="user-wallapper">
            <div class="spinner" v-if="loading"></div>
            <label for="input-wallaper" class="btn-wallaper-edit" v-if="hoverWallaper">
              <input class="input-wallaper-edit" id="input-wallaper" type="file" @change="wallaperEdit('wallpaper', $event)" />
              изменить обложку
            </label>
          </div>

          <div class="user-photo-edit" @mouseenter="hoverAvatar = true" @mouseleave="hoverAvatar = false" >

            <img class="user-photo" :src="user.photoUrl" alt="user-photo">
            
            <label for="input-avatar" class="user-photo btn-avatar-edit" v-if="hoverAvatar">
              <input class="input-avatar-edit" type="file"  id="input-avatar" @change="wallaperEdit('avatar', $event)" />
              <font-awesome-icon class="user-photo-icon" :icon="['fas', 'edit']" />
            </label>

          </div>


          <div class="user-settings">
            <button @click="modaltoggle">Редактировать профиль</button>
            <EditUserPage v-if="modalShow" 
                            @close="modaltoggle"
                            :user="user"
                            :pickedBadges="badges"
                            @update-profile="profileUpdate"  />
          </div>


          <h2 class="user-title">{{ user.displayName }}</h2>
          <p class="user-about">{{ user.about || 'Информация о пользователе отсутствует' }}</p>
          <div class="badge-wrapper">
            <div v-for="(badge, index) in badges" :key="index" class="badge"
              :style="{ backgroundColor: badge.BgColor, color: badge.color }">
              {{ badge.name }}
            </div>
          </div>
        </div>
      </section>

      <div class="wishes-block">
        <!-- <button class="add-wish-button">Пожелать...</button> -->
        <section class="user-wishes" v-if="usersWhises.length">
          <div class="cards-list">
            <CommonCards v-for="wish in usersWhises" :key="wish.id" :wish="wish" />
          </div>
        </section>
        <div v-else class="empty-wishes">
          <img src="../assets//empty-box.png" alt="empty-box">
          <p>У пользователя пока нет желаний.</p>
        </div>
      </div>


    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getFirestore, collection, getDocs, doc, getDoc, updateDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import NavBar from '@/components/NavBar.vue';
import CommonCards from '@/components/WishCard.vue';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

import EditUserPage from '@/services/EditUserPage.vue';

const modalShow = ref(false)



const user = ref({});
const badges = ref([]);
const usersWhises = ref([]);
const route = useRoute();
const db = getFirestore();   // Инициализация Firestore
const hoverWallaper = ref(false)
const hoverAvatar = ref(false)

const wallpaperFile = ref(null);
const avatarFile = ref(null);

const storage = getStorage();
const auth = getAuth();
const loading = ref(false)


const modaltoggle = () => {
  modalShow.value = !modalShow.value
}


const uploadImage = async (file, path) => {
  const fileRef = storageRef(storage, path);
  await uploadBytes(fileRef, file);
  return await getDownloadURL(fileRef);  // Получаем URL загруженного изображения
};



const saveProfile = async () => {

  loading.value = true

  const currentUser = auth.currentUser;
  const userDocRef = doc(db, 'users', currentUser.uid);
  const updates = {};


  try {
    if (avatarFile.value) {
      const photoUrl = await uploadImage(avatarFile.value, `avatars/${currentUser.uid}`);
      updates.photoUrl = photoUrl;  // Сохраняем URL аватара
      user.value.photoUrl = photoUrl;
    }
    if (wallpaperFile.value) {
      const wallpaperUrl = await uploadImage(wallpaperFile.value, `wallpapers/${currentUser.uid}`);
      updates.wallpaperUrl = wallpaperUrl;  // Сохраняем URL обложки профиля
      user.value.wallpaperUrl = wallpaperUrl;
    }
    await updateDoc(userDocRef, updates);
    console.log('Профиль успешно обновлен');
  } catch(error) {
    console.log('ошибка при загрузке профиля,', error)
  } finally {
    loading.value = false
  }
};


const wallaperEdit = (target, event) => {
  const file = event.target.files[0];
  if (target === 'avatar') {
    avatarFile.value = file;
  } else if (target === 'wallpaper') {
    wallpaperFile.value = file;
  }
  saveProfile()
}







const uid = route.params.uid;


const profileUpdate = (updatedData) => {
  user.value.displayName = updatedData.userName;
  user.value.about = updatedData.userAbout;
  badges.value = updatedData.pickedBadges;
  console.log('Профиль обновлен в родительском компоненте:', updatedData);
};

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

.wishes-block {
  border-radius: 50px;
  background-color: #E3E8EB;
  box-shadow: 0px 10px 40px rgba(126, 155, 189, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.badge-wrapper {
  display: flex;
  flex-wrap: wrap;
  max-width: 700px;
  justify-content: center;
  padding: 20px;
}

.user-photo-icon{
  font-size: 100px;
  color: white;
}


.btn-avatar-edit{
  background-color: #464241;
  opacity: 0.3;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinner {
  color: white;
  position: absolute;
  top: 20%;
  right: 48%;
}

.spinner:after {
  animation: changeContent .8s linear infinite;
  display: block;
  content: "⠋";
  font-size: 80px;
}

@keyframes changeContent {
  10% { content: "⠙"; }
  20% { content: "⠹"; }
  30% { content: "⠸"; }
  40% { content: "⠼"; }
  50% { content: "⠴"; }
  60% { content: "⠦"; }
  70% { content: "⠧"; }
  80% { content: "⠇"; }
  90% { content: "⠏"; }
}



.input-wallaper-edit, .input-avatar-edit {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
}


.btn-wallaper-edit {
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

.empty-wishes {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  font-family: "Good dog", sans-serif;
  font-size: 30px;
  color: rgb(168, 154, 154);
}

.empty-wishes img {
  width: 300px;
}


.card-icon-set {
  padding: 10px;
  font-size: 20px;
  color: #474745;
}

.add-wish-button {
  margin: 0;
  width: 100px;
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 10px;
  font-weight: 600;
  border-radius: 10px;
  border: none;
  background-color: #4534db;
  color: white;
  cursor: pointer;
}

.user-settings button {
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

.user-settings {
  margin-left: auto;
}

.user-main {
  max-width: 1300px;
  margin: auto;
  min-height: 90vh;
  padding: 20px;
}

.user-photo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
}

.user-info {
  gap: 20px;
  border-radius: 50px;
  box-shadow: 0px 10px 40px rgba(126, 155, 189, 0.6);
  position: relative;
  background-color: #E3E8EB;

}

.user-wallapper {
  width: 100%;
  position: relative;
}

.user-wallapper img {
  object-fit: cover;
  width: 100%;
  height: 300px;
  border-radius: 50px 50px 0 0;
}

.user-photo {
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid white;
}

.profile-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 50px;
  background-color: #E3E8EB;
  margin-bottom: 50px;
}

.user-title {
  margin: 0 0 20px;
  margin-top: 65px
}

.user-about {
  margin: 0 0 20px;

}

.badge {
  text-align: center;
  padding: 8px;
  border-radius: 50px;
  font-weight: 900;
}

.badge-wrapper {
  display: flex;
  gap: 5px;
  margin-bottom: 20px;
}
</style>