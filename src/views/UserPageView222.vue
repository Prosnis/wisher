<script setup lang="ts">

import WiNavbar from '@/components/WiNavbar.vue'
import WiProfileNavbar from '@/components/WiProfileNavbar.vue'
import WiUserPagePicturesEdit from '@/components/WiUser/WiUserPagePicturesEdit.vue'
import WiUserWishes from '@/components/WiUser/WiUserWishes.vue'
import { useProfileStore } from '@/stores/WiProfileStore'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import SubscribeListView from './SubscribeListView.vue'
import WiReservedListView from './WiReservedListView.vue'

const route = useRoute()
const loading = ref<boolean>(false)

interface ComponentsMap {
  WiUserWishes: typeof WiUserWishes
  WiReservedListView: typeof WiReservedListView
  SubscribeListView: typeof SubscribeListView
}

const components: ComponentsMap = {
  WiUserWishes,
  WiReservedListView,
  SubscribeListView,
}

const profileStore = useProfileStore()
const { getProfileData } = profileStore

const currentComponent = ref<string>('WiUserWishes')

function changeView(componentName: string): void {
  currentComponent.value = componentName
}

watch(
  () => route.params.uid,
  async (newUid) => {
    await getProfileData(newUid as string)
    currentComponent.value = 'WiUserWishes'
  },
)

onMounted(async () => {
  try {
    loading.value = true
    const uid = route.params.uid as string
    await getProfileData(uid)
  }
  catch (err) {
    console.log('Пользователь не автроризован', err)
  }
  finally {
    loading.value = false
  }
})

</script>

<template>
  <div>
    <div>
      <WiNavbar />
    </div>
    <main class="user">


      <section  class="user__info">
        <div v-if="profileStore.user" class="profile">
          <WiUserPagePicturesEdit :user="profileStore.user" :has-edit-permission="profileStore.hasEditPermission"
            :user-name="profileStore.user.displayName" :user-about="profileStore.user.about" />
        </div>
      </section>

      <div v-if="profileStore.badges.length > 0">
        <div class="profile__badges">
          <div v-for="(badge, index) in profileStore.badges" :key="index" class="badge">
            {{ badge.name }}
          </div>
        </div>
      </div>

      <div class="profile__nav">
        <WiProfileNavbar v-if="profileStore.hasEditPermission" :active="currentComponent" @change-view="changeView" />
      </div>

      <div class="profile__wishes__wrapper">
        <div  class="wishes">
          <component :is="components[currentComponent as keyof ComponentsMap]" />
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.skeleton {
  margin-bottom: 20px;
}

.profile__nav {
  margin-bottom: 20px;
}

.profile__wishes__wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.wishes {
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #111827 */
  background-color: var(--color-secondary);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}

.profile__badges {
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  gap: 5px;
  justify-content: center;
  align-content: center;
  /* background-color: #111827; */
  background-color: var(--color-secondary);
  max-height: 350px;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}

.user {
  margin: auto;
  min-height: 90vh;

}

.user__info {
  gap: 20px;
  border-radius: 10px;
  position: relative;
  display: flex;
  width: 100%;
  margin-bottom: 20px;
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  /* margin-bottom: 20px; */
  /* background-color: #111827; */
  background-color: var(--color-secondary);
  width: 100%;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}

.profile__name {
  margin: 20px;
  color: #F7F6F5;
}

.badge {
  text-align: center;
  padding: 5px;
  border-radius: 10px;
  font-weight: 600;
  color: var(--color-text);
  /* background-color: #ffd859; */
  background-color: var(--color-accent);

}

.user__info {
  transition: opacity 0.3s ease;
}
</style>
