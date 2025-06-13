<script setup lang="ts">
import WiNavbar from '@/components/WiNavbar.vue'
import WiUserWishes from '@/components/WiUser/WiUserWishes.vue'
import { useProfileStore } from '@/stores/WiProfileStore'
import ScrollPanel from 'primevue/scrollpanel'

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
  <div class="flex flex-column main-container">
    <WiNavbar />

    <div class="grid size border-round bg-white m-auto">
      <div class="col-12 md:col-3">
        <div class="border-right-1 border-100 bg-white  flex flex-column align-items-center ">
          <div class="w-15rem h-20rem border-round-2xl overflow-hidden bg-blue-500 mb-5 mt-5">
            <img
              :src="profileStore.user?.photoUrl"
              class="w-full fit h-full"
              alt=""
            >
          </div>
          <div class="w-15rem">
            <h2 class="m-0 mb-2">
              {{ profileStore.user?.displayName }}
            </h2>
            <div class="font-bold text-sm mb-5">
              <span> 14 желаний</span>
              <span> 4 исполненно</span>
            </div>
            <p class="text-left text-500 m-0 mb-5">
              {{ profileStore.user?.about }}
            </p>
            <p class="font-bold m-0 mb-2">
              Хобби
            </p>
            <p class="text-500 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p class="font-bold m-0 mb-2">
              Город
            </p>
            <p class="m-0 text-500">
              Россия, Красноярск
            </p>
          </div>
        </div>
      </div>

      <div class="col-12 md:col-9">
        <div class="grid min-h-full">
          <!-- <div class="col-12 flex justify-content-center">
            <div class="profile__nav">
              <WiProfileNavbar v-if="profileStore.hasEditPermission" :active="currentComponent"
                @change-view="changeView" />
            </div>
          </div> -->

          <div class="col-12 h-full">
            <div class="profile__wishes__wrapper h-full">
              <div class="h-full">
                <ScrollPanel style="width: 100%; height: 800px ">
                  <component :is="components[currentComponent as keyof ComponentsMap]" />
                </ScrollPanel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.size {
  min-width: 100%;
  min-height: calc(100vh - 80px);
}

.main-container {
  min-height: 100vh;
}

.fit {
  object-fit: cover
}

.custom__tag {
  background: #3b82f6;
  color: white;
  border: 2px, solid, #3b82f6;
}
</style>
