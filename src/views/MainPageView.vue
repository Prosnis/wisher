<script setup lang="ts">
import WiNavbar from '@/components/WiNavbar.vue'
import { useAnimation } from '@/composables/useAnimation';
import { PATHS } from '@/constants/paths';
import { getAuth } from 'firebase/auth'
import { useTemplateRef } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const auth = getAuth()
const target = useTemplateRef<HTMLDivElement>('target')
const { transformValue } = useAnimation(target)

const checkAuth = async () => {
  try {
    const uid = auth.currentUser?.uid;
    if (uid) {
      await router.push(`${PATHS.USER.PROFILE}/${uid}`);
    } else {
      await router.push(PATHS.AUTH.REGISTER);
    }
  } catch (error) {
    console.error('Auth check failed', error);
  }
};

</script>

<template>
  <WiNavbar />
  <div class="container">

    <div class="container__cta" ref="target" @click="checkAuth"
      :style="{ transform: transformValue, transition: 'transform 0.25s ease-out' }">
      <i class="pi pi-arrow-up-right container__cta-icon" />
      <span class="container__cta-title">Ваши мечты заслуживают отдельного списка!</span>
      <p class="container__cta-sub-title">Создайте первый вишлист прямо сейчас - это займет меньше минуты. Добавляйте
        желания из
        любых магазинов,
        делитесь с
        близкими и получайте идеальные подарки.</p>
    </div>


    <div class="container__wishes">
      <span class="container__wishes-title">Добавляй желания 🎁</span>
      <p class="container__wishes-sub-title">Добавляй товары из любых магазинов в один клик с помощью нашего удобного
        расширения
        для браузера
      </p>
    </div>

    <div class="container__name">
      <span class="container__name-title">WISHER 2025</span>
    </div>

    <div class="container__links">
      <img class="container__links-gif" src="@/components/icons/tenor.gif" alt="loli">
    </div>


    <router-link class="container__invitation" :to="PATHS.CARDS.INVITATION_CREATE">
      <span class="container__invitation-title">Приглашай красиво 💌</span>
      <p class="container__invitation-sub-title">Создайте персонализированную электронную открытку и отправьте
        друзьям
        в
        мессенджеры</p>
    </router-link>



    <div class=" container__footer">
    </div>

  </div>


</template>

<style scoped lang="scss">
@use '@/styles/mixins';
@use '@/styles/colors';

.container {
  display: grid;
  min-height: calc(100vh - 96px);
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 20px;
  grid-template-areas:
    "cta cta invitation name"
    "cta cta wishes wishes"
    "links footer footer footer";

  @include mobile {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "cta"
      "invitation"
      "wishes"
      "footer"
      "name";
    gap: 15px;
    width: 100%;
  }

  &__cta {
    grid-area: cta;
    @include card-base;
    background-color: $color-background-grey;
    padding: 20px;

    &-icon {
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 25px;
    }

    &-title {
      font-size: 2.4rem;
      font-weight: 600;
      text-align: start;
      max-width: 600px;
      margin-bottom: 50px;
    }

    &-sub-title {
      font-size: 1.3rem;
      opacity: 0.9;
      max-width: 600px;
      text-align: start;
    }
  }

  &__wishes {
    grid-area: wishes;
    @include card-base;
    @include hover-effect;
    background-color: $color-background-pink;

    &-title {
      @include title-styles;
    }

    &-sub-title {
      @include subtitle-styles;
    }
  }

  &__name {
    grid-area: name;
    @include card-base;
  }

  &__links {
    grid-area: links;
    @include card-base;
    overflow: hidden;
    position: relative;

    @include mobile {
      display: none;
    }

    &-gif {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__invitation {
    grid-area: invitation;
    @include card-base;
    @include hover-effect;
    background-color: $color-background-white;
    color: $color-text-primary;
    transition: background-color 0.9s, color 0.9s;
    text-decoration: none;
    width: 100%;
    height: 100%;

    &:hover {
      background-color: black;
      color: white;

      &-link {
        color: white;
      }
    }

    &-link {
      text-decoration: none;
      color: black;
      transition: color 0.3s;


      &:hover {
        color: white;
      }
    }

    &-title {
      @include title-styles;
    }

    &-sub-title {
      @include subtitle-styles;
    }
  }

  &__footer {
    grid-area: footer;
    @include card-base;
    background-color: $color-background-blue;
    padding: 20px;
  }

  &-invitation-link {
    text-decoration: none;
    color: #333;
  }
}
</style>
