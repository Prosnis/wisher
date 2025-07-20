<script setup lang="ts">
import type { MenuItem } from 'primevue/menuitem'
import UiSkeleton from '@/components/Ui/UiSkeleton.vue';
import { PATHS } from '@/constants/paths'
import { logout } from '@/services/logOut'
import { useUserStore } from '@/stores/WiUserStore'
import { getAuth } from 'firebase/auth'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Menubar from 'primevue/menubar'
import TieredMenu from 'primevue/tieredmenu'
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
const auth = getAuth()
const isLoading = computed(() => !userStore.user)
const notAuthorized = computed(() => !auth.currentUser)
const menu = ref<InstanceType<typeof TieredMenu> | null>(null)

const items = ref<MenuItem[]>([
  {
    label: `Профиль`,
    icon: 'pi pi-user',
    command: () => { toUserPage() },
  },
  {
    label: 'Настройки',
    icon: 'pi pi-cog',
    command: () => { goToSettingsPage() },
  },
  {
    label: 'Выйти',
    icon: 'pi pi-sign-out',
    command: () => { logout() },
  },
],
)

const toggleMenu = (event: Event) => {
  menu.value?.toggle(event)
}


function goToSettingsPage() {
  const uid = auth.currentUser?.uid
  router.push({ path: `${PATHS.USER.SETTINGS}/${uid}` })
}

async function toUserPage() {
  const uid = userStore.userUID
  if (!uid) return
  const userPagePath = `${PATHS.USER.PROFILE}/${uid}`
  if (route.path !== userPagePath) {
    await router.push(userPagePath)
  }
}
</script>

<template>

  <Menubar class="mb-3 h-5rem navbar">
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
              class="bg-white border-round-2xl text-color flex justify-content-around font-semibold border-none p-2">
              войти
              <i class="pi pi-arrow-up-right" />
            </Button>
          </router-link>
          <Button v-else type="button" aria-haspopup="true" aria-controls="overlay_tmenu" variant="link"
            @click="toggleMenu">
            <UiSkeleton :isLoading="isLoading">
              <template #default>
                <div class="flex align-items-center gap-2">
                  <Avatar :image="userStore.user?.photoUrl" shape="circle" size="small" />
                  <i class="pi pi-chevron-down text-white" />
                </div>
              </template>
            </UiSkeleton>

          </Button>
          <TieredMenu id="overlay_tmenu" ref="menu" :model="items" popup />
        </div>
      </div>
    </template>
  </Menubar>
</template>

<style scoped>
.pi-arrow-up-right {
  border: #3399FF 2px solid;
  border-radius: 50%;
  padding: 8px;
  color: white;
  background-color: #3399FF;
}

.p-menubar {
  max-width: 1400px;
  background-color: inherit;
  border: none;

}

.logo {
  color: #ffffff;
  font-size: 3rem;
  font-weight: 600;
  display: inline-block;
  transition: all 0.3s ease;
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
