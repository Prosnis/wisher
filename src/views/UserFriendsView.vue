<script setup lang="ts">
import type { User } from '@/types/interfaces/user'

import UiSkeleton from '@/components/Ui/UiSkeleton.vue'
import WiNavbar from '@/components/WiNavbar.vue'
import { PATHS } from '@/constants/paths'
import { getSubscribeList } from '@/services/GetSubsList'
import { useProfileStore } from '@/stores/WiProfileStore'

import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const subscribeList = ref<User[] | []>([])
const isLoading = ref<boolean>(false)

const route = useRoute()
const router = useRouter()
const profileStore = useProfileStore()
const { getProfileData } = profileStore

async function toUserPage(userId: string) {
  try {
    await router.push(`${PATHS.USER.PROFILE}/${userId}`)
  }
  catch (err) {
    console.error('Ошибка при переходе:', err)
  }
}

const fetchSubscribeList = async () => {
  try {
    isLoading.value = true
    if (profileStore.user && profileStore.user.subscribe) {
      subscribeList.value = await getSubscribeList(profileStore.user.subscribe)
      console.log(subscribeList.value)
    }
    else {
      subscribeList.value = []
    }
  }
  catch (err) {
    console.error('Ошибка при получении списка подписок:', err)
    subscribeList.value = []
  }
  finally {
    isLoading.value = false
  }
}

onMounted(async () => {
  const uid = route.params.uid as string
  await getProfileData(uid)
  fetchSubscribeList()
})
</script>

<template>
  <WiNavbar />
  <div class="friends">
    <div class="friends__nav">
      <h1 class="friends__title">
        Друзья
      </h1>
      <router-link
        class="friends__back-link"
        :to="{ name: 'UserProfile', params: { uid: route.params.uid } }"
      >
        @{{ profileStore.user?.displayName }}
      </router-link>
    </div>

    <div class="friends__list">
      <template v-if="!isLoading">
        <div
          v-for="sub in subscribeList"
          :key="sub.uid"
          class="friends__item"
          @click="toUserPage(sub.uid)"
        >
          <div class="friends__info">
            <div class="friends__avatar">
              <img
                :src="sub.photoUrl"
                alt="avatar"
                class="friends__photo"
              >
            </div>
            <div class="friends__name">
              @{{ sub.displayName }}
            </div>
          </div>
        </div>
      </template>

      <template v-else>
        <div
          v-for="n in 3"
          :key="n"
          class="friends__item"
        >
          <UiSkeleton :is-loading="true">
            <div class="friends__info">
              <div class="friends__avatar">
                <div class="friends__photo skeleton-avatar" />
              </div>
              <div class="friends__name skeleton-text" />
            </div>
          </UiSkeleton>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/colors';
@use '@/styles/mixins';

.friends {
    border-radius: 20px;
    padding: 20px;
    min-height: calc(100vh - 100px);

    &__item {
        background-color: $color-background-grey;
        padding: 20px;
        border-radius: 20px;
    }

    &__list {
        display: flex;
        gap: 20px;
        flex-direction: column;
        margin-bottom: 20px;
    }

    &__avatar {
        width: 135px;
        height: 135px;
        overflow: hidden;
        border-radius: 50%;
    }

    &__photo {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &__name {
        font-size: 1.2rem;
        font-weight: 600;
    }

    &__info {
        list-style-type: none;
        padding: 0;
        display: flex;
        gap: 20px;
        align-items: center;
    }

    &__nav{
        display: flex;
        align-items: center;
        gap: 20px;
    }

    &__back-link{
        color: white;
        font-size: 26px;
        font-style: italic;
    }
}
</style>
