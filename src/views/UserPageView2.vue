<script setup lang="ts">
import UiSkeleton from '@/components/Ui/UiSkeleton.vue'
import WiNavbar from '@/components/WiNavbar.vue'
import WiSubscribeButton from '@/components/WiSubscribeButton.vue'

import { useAnimation } from '@/composables/useAnimation'
import { PATHS } from '@/constants/paths';
import { formattedBirthday } from '@/services/FormatBirthDate'
import { useProfileStore } from '@/stores/WiProfileStore'
import { computed, onMounted, ref, useTemplateRef, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const target = useTemplateRef<HTMLDivElement>('target')
const isLoading = ref(false)
const hasAnimated = ref(true)
const profileStore = useProfileStore()
const { getProfileData } = profileStore
const { transformValue } = useAnimation(target)

const friendsTarget = computed(() => profileStore.user?.subscribe?.length ?? 0)
const giftsTarget = computed(() => profileStore.reservedWishes.length ?? 0)

watch(
  () => route.params.uid,
  async (newUid) => {
    await getProfileData(newUid as string)
    hasAnimated.value = true
  },
)

onMounted(async () => {
  try {
    isLoading.value = true
    const uid = route.params.uid as string
    await getProfileData(uid)
  }
  catch (err) {
    console.log('Пользователь не автроризован', err)
  }
  finally {
    isLoading.value = false
  }
})
</script>

<template>
  <WiNavbar />


  <main class="main">

    <router-link :to="`${PATHS.USER.WISHES}/${route.params.uid}`" class="person">
      <UiSkeleton :isLoading="isLoading" class="person__info">
        <div ref="target" class="person__info"
          :style="{ transform: transformValue, transition: 'transform 0.25s ease-out' }">
          <i class="person__icon pi pi-arrow-up-right" />
          <span class="person__subtitle">wish ideas for</span>
          <h1 class="person__nickname">@{{ profileStore.user?.displayName }}</h1>
        </div>
      </UiSkeleton>
    </router-link>


    <UiSkeleton :isLoading="isLoading" class="user-photo">
      <div class="user-photo">
        <img :src="profileStore.user?.photoUrl" alt="user image" class="user-photo__img" />
      </div>
    </UiSkeleton>

    <UiSkeleton :isLoading="isLoading" class="about">
      <section class="about">
        <div class="about__wrapper">
          <span class="about__label">О себе:</span>
          <span class="about__label about__label-empty" v-if="!profileStore.user?.about">информация не указана</span>
          <span class="about__value">{{ profileStore.user?.about }}</span>
        </div>
      </section>
    </UiSkeleton>

    <UiSkeleton :isLoading="isLoading" class="birthday">
      <section class="birthday">
        <span class="birthday__label">День рождения:</span>
        <span class="birthday__value">{{ formattedBirthday(profileStore.user?.birthday) }}</span>
      </section>
    </UiSkeleton>

    <UiSkeleton :isLoading="isLoading" class="follow">
      <section class="follow">
        <router-link class="follow__link" :to="PATHS.CARDS.INVITATION_CREATE" v-if="profileStore.hasEditPermission">
          <p class="follow__postcard">Создать открытку</p>
          <i class="follow__icon pi pi-arrow-up-right" />
        </router-link>
        <div v-else class="follow__wrapper">
          <WiSubscribeButton />
        </div>

      </section>
    </UiSkeleton>

    <UiSkeleton :isLoading="isLoading" class="friends">
      <router-link :to="`${PATHS.USER.FRIENDS}/${route.params.uid}`" class="friends">
        <div class="friends__item">
          <div class="friends__number">{{ Math.floor(friendsTarget) }}</div>
          <div class="friends__label">Друзья</div>
          <i class="friends__icon pi pi-arrow-up-right" />
        </div>
      </router-link>
    </UiSkeleton>

    <UiSkeleton :isLoading="isLoading" class="gifts">
      <router-link :to="`${PATHS.USER.GIFTS}/${route.params.uid}`" class="gifts">
        <div class="gifts__item">
          <div class="gifts__number">{{ Math.floor(giftsTarget) }}</div>
          <div class="gifts__label">Подарки</div>
          <i class="gifts__icon pi pi-arrow-up-right" />
        </div>
      </router-link>
    </UiSkeleton>

  </main>
</template>

<style lang="scss" scoped>
@use '@/styles/colors';
@use '@/styles/mixins';

.main {
  height: calc(100vh - 100px);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 20px;
  grid-template-areas:
    "a b e"
    "a b h"
    "a b c"
    "d f c";

  @include mixins.mobile {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "a b"
      "e b"
      "h h"
      "c c"
      "d f";
    gap: 10px;
    padding: 10px;
  }
}

.person {
  grid-area: a;
  text-decoration: none;

  &__info {
    width: 100%;
    height: 100%;
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    position: relative;
    cursor: pointer;
    background-color: #3399FF;
    border-radius: $border-radius;

    &:hover .person__nickname,
    &:hover .person__icon {
      transform: translateY(-2px);
      text-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
    }
  }

  &__icon {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 25px;
    transition: all 0.3s ease;
    text-shadow: none;

    @include mixins.mobile {
      font-size: $font-size-mobile;
      top: 10px;
      right: 10px;
    }
  }

  &__subtitle {
    font-size: 32px;
    font-weight: 200;

    @include mixins.mobile {
      font-size: $font-size-mobile;
    }
  }

  &__nickname {
    font-size: 42px;
    font-weight: 600;
    margin: 0;
    transition: all 0.3s ease;
    text-align: center;

    @include mixins.mobile {
      font-size: 16px;
    }
  }
}

.user-photo {
  grid-area: b;
  overflow: hidden;
  border-radius: $border-radius;
  background-color: $color-background-grey;
  display: flex;
  justify-content: center;

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @include mixins.mobile {
    height: 400px;
  }
}

.about {
  grid-area: c;
  background-color: colors.$color-background-purple;
  color: white;
  border-radius: $border-radius;
  display: flex;
  justify-content: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  font-size: 1.2rem;
  width: 100%;
  height: 100%;

  &__wrapper {
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    height: 100%;
  }

  &__label {
    font-weight: 500;

    @include mobile {
      font-size: $font-size-mobile;
    }

    &-empty {
      opacity: 0.8;
      font-style: italic;
      font-size: 16px;
    }
  }

  &__value {
    font-weight: 300;
    line-height: 1.4;

    @include mobile {
      font-size: $font-size-mobile;
    }
  }
}

.birthday {
  grid-area: h;
  background-color: #030305;
  color: white;
  border-radius: $border-radius;
  padding: 30px;
  font-size: $font-size-desktop;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);

  @include mixins.mobile {
    font-size: $font-size-mobile;
    gap: 5px;
  }

  &__label,
  &__value {
    text-align: center;

    @include mixins.mobile {
      font-size: $font-size-mobile;
      gap: 5px;
    }
  }
}

.follow {
  grid-area: e;
  background-color: colors.$color-background-pink;
  color: white;
  border-radius: $border-radius;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 100%;

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    font-size: 26px;
    font-weight: 300;
    width: 100%;
    height: 100%;
  }

  &__postcard {
    font-size: $font-size-desktop;
    transition: all 0.3s ease;
    text-align: center;

    @include mixins.mobile {
      font-size: $font-size-mobile;
    }
  }

  &__link {
    text-decoration: none;
    color: white;
  }

  &__icon {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 25px;
    transition: all 0.3s ease;
    text-shadow: none;

    @include mixins.mobile {
      font-size: $font-size-mobile;
      top: 10px;
      right: 10px;
    }
  }

  &:hover .follow__postcard,
  &:hover .follow__icon {
    transform: translateY(-2px);
    text-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  }

}

.friends {
  grid-area: d;
  text-decoration: none;
  color: white;
}

.gifts {
  grid-area: f;
  text-decoration: none;
  color: white;
}

.friends,
.gifts {
  width: 100%;
  height: 100%;
  background-color: colors.$color-background-grey;
  border-radius: $border-radius;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  padding: 5px;

  &__icon {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 25px;
    transition: all 0.3s ease;
    text-shadow: none;


    @include mixins.mobile {
      font-size: $font-size-mobile;
      top: 10px;
      right: 10px;
    }
  }

  &:hover &__icon,
  &:hover &__number,
  &:hover &__label {
    transform: translateY(-2px);
    text-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  }

  &__item {
    text-align: center;
    transition: all 0.3s ease;
  }

  &__number {
    font-size: 62px;
    font-weight: 700;
    color: white;
    margin-bottom: 5px;
    transition: all 0.3s ease;

    @include mixins.mobile {
      font-size: 1.7rem;
    }
  }


  &__label {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.7);
    transition: all 0.3s ease;

    @include mixins.mobile {
      font-size: $font-size-mobile;
      ;
    }
  }
}
</style>
