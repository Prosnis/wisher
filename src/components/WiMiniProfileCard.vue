<script setup>
import { getAllUsers } from '@/services/GetAllUsers'
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import path from './constants/pathes'

const users = ref([])
const currentPage = ref(0)
const usersPerPage = 3
const router = useRouter()
const loading = ref(false)
const hoverArr = [1, 2, 3]

const paginatedUsers = computed(() => {
  const start = currentPage.value * usersPerPage
  const end = start + usersPerPage
  return users.value.slice(start, end)
})

function nextPage() {
  if ((currentPage.value + 1) * usersPerPage < users.value.length) {
    currentPage.value++
  }
}

function prevPage() {
  if (currentPage.value > 0) {
    currentPage.value--
  }
}

async function toUser(userID) {
  try {
    await router.push(`${path.user}/${userID}`)
  }
  catch (err) {
    console.log(err)
  }
}

onMounted(async () => {
  try {
    loading.value = true
    users.value = await getAllUsers()
  }
  catch (err) {
    console.log(err, 'err')
  }
  finally {
    loading.value = false
  }
})
</script>

<template>
  <div>
    <div v-if="loading">
      <div
        v-for="(item, index) in hoverArr"
        :key="index"
        class="mini__profile hover"
      />
    </div>

    <div
      v-for="user in paginatedUsers"
      v-else
      :key="user.uid"
      class="mini__profile"
      @click="toUser(user.uid)"
    >
      <div class="mini__profile__wallpaper">
        <img
          class="profile__img profile__img--wallpaper"
          :src="user.wallpaperUrl"
          alt=""
        >
      </div>
      <div class="mini__profile__avatar">
        <img
          class="profile__img profile__img--avatar"
          :src="user.photoUrl"
          alt=""
        >
      </div>
      <div class="mini__profile__info">
        <h3 class="mini__profile--title">
          {{ user.displayName }}
        </h3>
        <span class="mini__profile--description">открыть профиль</span>
      </div>
    </div>

    <div class="pagination__controls">
      <button
        class="pagination__button"
        :disabled="currentPage === 0"
        @click="prevPage"
      >
        Предыдущие
      </button>
      <button
        class="pagination__button"
        :disabled="(currentPage + 1) * usersPerPage >= users.length"
        @click="nextPage"
      >
        Следующие
      </button>
    </div>
  </div>
</template>

<style scoped>
.hover {
  width: 100%;
  height: 100%;
  --color: #131e36;
  background: linear-gradient(90deg, var(--color) 5%, transparent 50%, var(--color) 75%);
  background-size: 200% 100%;
  animation: loading 3s infinite;
  cursor: pointer;
  box-sizing: border-box;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }

  100% {
    background-position: -200% 0;
  }
}

.mini__profile--title {
  margin: 0;
  margin-bottom: 10px;
}

.mini__profile--description {
  color: #ffd859;
}

.mini__profile__wallpaper {
  width: 400px;
  height: 100px;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
}

.profile__img--wallpaper {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.mini__profile__avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin: -40px auto 10px;
  z-index: 1;
  background-color: white;
}

.profile__img--avatar {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.mini__profile {
  background-color: #111827;
  border-radius: 10px;
  width: 400px;
  text-align: center;
  height: 220px;
  margin-bottom: 20px;
}

.pagination__controls {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination__button {
  padding: 10px 20px;
  margin: 0 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.pagination__button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
