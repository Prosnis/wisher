<script setup lang="ts">
import { PATHS } from '@/constants/paths'
import { logout } from '@/services/logOut'
import { useUserStore } from '@/stores/WiUserStore'
import { getAuth } from 'firebase/auth'
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
import TieredMenu from 'primevue/tieredmenu';
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
const auth = getAuth()
const notAuthorized = computed(() => !auth.currentUser)
const menu = ref();

const items = ref([
  {
    label: `Профиль`,
    icon: 'pi pi-user',
    command: () => { toUserPage() }
  },
  {
    label: 'Настройки',
    icon: 'pi pi-cog',
    command: () => { goToSettingsPage() }
  },
  {
    label: 'Выйти',
    icon: 'pi pi-sign-out',
    command: () => { logout() }
  },
]
);

const toggle = (event) => {
  menu.value.toggle(event);
};
function goToSettingsPage() {
  const uid = auth.currentUser?.uid
  router.push({ path: `${PATHS.USER.SETTINGS}/${uid}` })
}
async function toUserPage() {
  const userPagePath = `${PATHS.USER.PROFILE}/${userStore.userUID}`
  if (route.path !== userPagePath) {
    await router.push(userPagePath)
  }
}
</script>

<template>
  <Menubar class="mb-2 h-4rem ">
    <template #start>
      <router-link :to="PATHS.MAIN" class="custom-link">
        <span class="logo">wisher</span>
      </router-link>
    </template>
    <template #end>
      <div class="flex items-center align-items-center gap-2 custom-link">
        <div class="card flex justify-center">
          <router-link v-if="notAuthorized" :to="PATHS.AUTH.REGISTER" class="custom-link">

            <Button type="button"
              class="bg-white border-round-3xl text-color flex justify-content-around font-semibold border-none p-2">
              войти
              <i class="pi pi-arrow-up-right"></i>
            </Button>

          </router-link>
          <Button v-else type="button" @click="toggle" aria-haspopup="true" aria-controls="overlay_tmenu"
            severity="secondary">
            <template #default>
              <div class="flex align-items-center gap-2" v-if="userStore.user">
                <Avatar :image="userStore.user.photoUrl" shape="circle" size="small" />
                <i class="pi pi-chevron-down" />
              </div>
            </template>
          </Button>
          <TieredMenu ref="menu" id="overlay_tmenu" :model="items" popup />
        </div>
      </div>
    </template>
  </Menubar>
</template>


<style scoped>

.pi-arrow-up-right {
  border: #3D5AFE 2px solid;
  border-radius: 50%;
  padding: 8px;
  color: white;
  background-color: #3D5AFE
}

.p-menubar {
  background-color: rgba(255, 255, 255, 0);
  border: none;
  padding: 0;
}

.logo {
  color: #3D5AFE;
  font-size: 1.5rem;
  font-weight: 600;
}

.custom-link {
  text-decoration: none;
  color: #333;
}

.custom-link:hover {
  cursor: pointer;
  color: #007BFF;
}
</style>
