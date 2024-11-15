<script setup>
import { saveProfile } from '@/services/UserPictureUpdate'
import { ref } from 'vue'

const props = defineProps({
  user: {
    type: Object,
    default: () => ({}),
  },
})
const hoverWallaper = ref(false)
const hoverAvatar = ref(false)
const wallpaperFile = ref(null)
const avatarFile = ref(null)
const loading = ref(false)
const imageLoaded = ref(false)

function picturesEdit(target, event) {
  const file = event.target.files[0]
  if (target === 'avatar') {
    avatarFile.value = file
  }
  else if (target === 'wallpaper') {
    wallpaperFile.value = file
  }
  saveProfile(props.user, wallpaperFile, avatarFile, loading)
}
</script>

<template>
  <div
    class="profile__wallapper"
    @mouseenter="hoverWallaper = true"
    @mouseleave="hoverWallaper = false"
  >
    <img
      :src="props.user.wallpaperUrl"
      alt="user-wallpaper"
      loading="lazy"
      class="profile__wallapper-img"
      :style="{ opacity: imageLoaded ? 1 : 0 }"
      @load="imageLoaded = true"
    >
    <label
      v-if="hoverWallaper"
      for="input-wallaper"
      class="profile__wallaper-edit"
    >
      <input
        id="input-wallaper"
        class="profile__input profile__input--wallpaper"
        type="file"
        @change="picturesEdit('wallpaper', $event)"
      >
      изменить обложку
    </label>
  </div>

  <div
    class="profile__photo-wrapper"
    @mouseenter="hoverAvatar = true"
    @mouseleave="hoverAvatar = false"
  >
    <div
      v-if="loading"
      class="profile__spinner"
    />
    <img
      class="profile__photo"
      :src="props.user.photoUrl"
      alt="user-photo"
      loading="lazy"
    >
    <label
      v-if="hoverAvatar"
      for="input-avatar"
      class="profile__photo profile__photo--edit"
    >
      <input
        id="input-avatar"
        class="profile__input profile__input--avatar"
        type="file"
        @change="picturesEdit('avatar', $event)"
      >
      <font-awesome-icon
        class="profile__icon profile__icon-edit"
        :icon="['fas', 'edit']"
      />
    </label>
  </div>
</template>

<style scoped>
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

.profile__input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
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

.profile__icon-edit {
    font-size: 100px;
    color: white;
}
</style>
