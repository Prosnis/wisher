<script setup>
import WiNavbar from '@/components/WiNavbar.vue'
import WiProfileNavbar from '@/components/WiProfileNavbar.vue'
import WiUserPagePicturesEdit from '@/components/WiUser/WiUserPagePicturesEdit.vue'
import WiUserWishesVue from '@/components/WiUser/WiUserWishes.vue'
import { useProfileStore } from '@/stores/WiProfileStore'
import { onMounted, ref } from 'vue'
import { ContentLoader } from 'vue-content-loader'
import { useRoute, useRouter } from 'vue-router'
import SubscribeListView from './SubscribeListView.vue'
import WiReservedListView from './WiReservedListView.vue'

const router = useRouter()
const route = useRoute()

const components = {
  WiUserWishesVue,
  WiReservedListView,
  SubscribeListView,
}

const profileStore = useProfileStore()
const { getProfileData } = profileStore

const currentComponent = ref('WiUserWishesVue')

function changeView(componentName) {
  currentComponent.value = componentName
}

onMounted(async () => {
  await getProfileData(route.params.uid)
})
</script>

<template>
  <div>
    <div>
      <WiNavbar />
    </div>
    <main class="user">
      <ContentLoader
        v-if="profileStore.skeletonLoad"
        viewBox="0 0 1300 365"
        :speed="2"
        primary-color="#f5f7fa"
        secondary-color="#c9c5c5"
      >
        <rect
          x="0"
          y="0"
          rx="10"
          ry="10"
          width="1300"
          height="345"
        />
      </ContentLoader>

      <section
        v-else
        class="user__info"
      >
        <div class="profile">
          <WiUserPagePicturesEdit
            :user="profileStore.user"
            :has-edit-permission="profileStore.hasEditPermission"
            :user-name="profileStore.user.displayName"
            :user-about="profileStore.user.about"
          />
        </div>
      </section>

      <ContentLoader
        v-if="profileStore.skeletonLoad"
        class="skeleton"
        viewBox="0 0 1300 67"
        :speed="2"
        primary-color="#f5f7fa"
        secondary-color="#c9c5c5"
      >
        <rect
          x="0"
          y="0"
          rx="10"
          ry="10"
          width="1300"
          height="67"
        />
      </ContentLoader>

      <div
        v-else
        class="profile__badges test__profile"
      >
        <div
          v-for="(badge, index) in profileStore.badges"
          :key="index"
          class="badge"
        >
          {{ badge.name }}
        </div>
      </div>

      <ContentLoader
        v-if="profileStore.skeletonLoad "
        class="skeleton"
        viewBox="0 0 1300 75"
        :speed="2"
        primary-color="#f5f7fa"
        secondary-color="#c9c5c5"
      >
        <rect
          x="0"
          y="0"
          rx="10"
          ry="10"
          width="1300"
          height="75"
        />
      </ContentLoader>

      <div
        v-else
        class="profile__nav"
      >
        <WiProfileNavbar
          v-if="profileStore.hasEditPermission"
          @change-view="changeView"
        />
      </div>

      <div class="profile__wishes__wrapper">
        <div class="wishes">
          <keep-alive>
            <component :is="components[currentComponent]" />
          </keep-alive>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.skeleton{
  margin-bottom: 20px;
}
.profile__nav{
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
  justify-content: space-evenly;
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
  max-width: 1300px;
  margin: auto;
  min-height: 90vh;

}

.user__info {
  gap: 20px;
  border-radius: 10px;
  position: relative;
  display: flex;
  width: 100%;
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 20px;
  /* background-color: #111827; */
  background-color: var(--color-secondary);
  width: 100%;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}

.profile__name {
  margin: 20px;
  color: #F7F6F5;
}

.profile__about {
  margin: 0 0 20px;
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
