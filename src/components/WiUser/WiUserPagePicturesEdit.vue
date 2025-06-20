<script setup lang="ts">
import { getAuth } from 'firebase/auth'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const { user, hasEditPermission } = defineProps({
  user: {
    type: Object,
    default: () => ({}),
  },
  hasEditPermission: {
    type: Boolean,
  },
  userName: {
    type: String,
  },
  userAbout: {
    type: String,
  },
})

const hoverWallaper = ref(false)
const hoverAvatar = ref(false)
const wallpaperFile = ref(null)
const avatarFile = ref(null)
const imageLoaded = ref(false)
const route = useRoute()
const auth = getAuth()

const isWallaperOwner = computed(() => hoverWallaper.value && hasEditPermission)
const isAvatarOwner = computed(() => hoverAvatar.value && hasEditPermission)
const isAvailableToSubscribe = computed(() => !hasEditPermission && auth.currentUser && auth.currentUser.uid !== route.params.uid)

function picturesEdit(target, event) {
  const file = event.target.files[0]
  if (target === 'avatar') {
    avatarFile.value = file
  }
  else if (target === 'wallpaper') {
    wallpaperFile.value = file
  }
  uploadUserPictures(user, wallpaperFile, avatarFile)
}
</script>

<template>
  <div
    class="profile__wallapper"
    @mouseenter="hoverWallaper = true"
    @mouseleave="hoverWallaper = false"
  >
    <img
      :src="user.wallpaperUrl"
      alt="Обложка профиля"
      loading="lazy"
      class="profile__wallapper-img"
      :style="{ opacity: imageLoaded ? 1 : 0 }"
      @load="imageLoaded = true"
    >

    <label
      v-if="isWallaperOwner"
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

  <div class="profile__user__Info">
    <div
      class="profile__photo-wrapper"
      @mouseenter="hoverAvatar = true"
      @mouseleave="hoverAvatar = false"
    >
      <img
        class="profile__photo"
        :src="user.photoUrl"
        alt="Аватар профиля"
        loading="lazy"
      >

      <label
        v-if="isAvatarOwner"
        for="input-avatar"
        class="profile__photo profile__photo--edit"
      >
        <input
          id="input-avatar"
          class="profile__input profile__input--avatar"
          type="file"
          @change="picturesEdit('avatar')"
        >
        <font-awesome-icon
          class="profile__icon profile__icon-edit"
          :icon="['fas', 'edit']"
        />
      </label>

      <div>
        <h2 class="profile__name">
          {{ user.displayName }}
        </h2>
        <p>
          14 желаний 10 исполненно
        </p>
        <!-- <p class="profile__about">
          {{ user.about || 'Информация о пользователе отсутствует' }}
        </p> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile__wallapper {
  width: 100%;
  position: relative;
}

.profile__wallapper-img {
  transition: opacity 0.3s ease-in-out;
  opacity: 0;
  object-fit: cover;
  width: 100%;
  height: 180px;
  border-radius: 10px 10px 0 0;
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
  --color: var(--color-accent);
  background: linear-gradient(90deg, var(--color) 25%, transparent 50%, var(--color) 75%);
  background-size: 200% 100%;
  animation: loading 3s infinite;
  border-radius: 10px;
  z-index: 10;
  opacity: 0.3;
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
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid white;
  position: relative;
  margin-top: -100px;
  z-index: 5;
  border: 2px solid var(--color-accent);
}

.profile__photo--edit {
  background-color: #9180e9;
  opacity: 0.3;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20px
}

.profile__input {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
}

.profile__icon-edit {
  font-size: 70px;
  color: white;
}

.profile__name {
  font-size: 28px;
  margin: 0px;
  color: var(--color-text-primary);
}

.profile__about {
  margin: 0px;
  color: var(--color-text-primary);
  max-width: 400px;
  overflow-wrap: break-word;
  white-space: pre-wrap
}

.profile__photo-wrapper {
  position: relative;
  padding: 20px;
  display: flex;
  gap: 20px;
}
</style>
