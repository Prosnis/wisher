<script setup lang="ts">
import WiNavbar from '@/components/WiNavbar.vue'
import { useAnimation } from '@/composables/useAnimation';
import { useTemplateRef } from 'vue'
import { useRoute } from 'vue-router';


const target = useTemplateRef<HTMLDivElement>('target')
const { transformValue } = useAnimation(target)
</script>




<template>
  <WiNavbar />
  <div class="container">
    <div class="container__cta" ref="target"
      :style="{ transform: transformValue, transition: 'transform 0.25s ease-out' }">
      <i class="pi pi-arrow-up-right container__cta__icon-share" />
      <span class="container__cta__title">Ваши мечты заслуживают отдельного списка!</span>
      <p class="container__cta__sub-title">Создайте первый вишлист прямо сейчас - это займет меньше минуты. Добавляйте
        желания из
        любых магазинов,
        делитесь с
        близкими и получайте идеальные подарки.</p>
    </div>
    <div class="container__wishes">
      <span class="container__wishes__title">Добавляй желания 🎁</span>
      <p class="container__wishes__sub-title">Добавляй товары из любых магазинов в один клик с помощью нашего удобного
        расширения
        для браузера
      </p>
    </div>
    <div class="container__name">
      <span class="container__name__title">WISHER 2024</span>
    </div>
    <div class="container__links">
      <img class="container__links__gif" src="@/components/icons/tenor.gif" alt="loli">
    </div>
    <div class="container__invitation">
      <span class="container__invitation__title">Приглашайте красиво 💌</span>
      <p class="container__invitation__sub-title">Создайте персонализированную электронную открытку и отправьте друзьям
        в
        мессенджеры</p>
    </div>
    <div class="container__footer">
      Lorem ipsum dolor sit amet 
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/mixins' ;
@use '@/styles/colors' ;

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
    padding: 10px;
  }

  &__cta {
    grid-area: cta;
    @include card-base;
    background-color: $color-background-grey;
    padding: 20px;

    &__icon-share {
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 25px;
    }

    &__title {
      font-size: 2.4rem;
      font-weight: 600;
      text-align: start;
      max-width: 600px;
      margin-bottom: 50px;
    }

    &__sub-title {
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

    &__title {
      @include title-styles;
    }

    &__sub-title {
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

  &__gif {
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
    transition: 0.9s;

    &:hover {
      color: $color-text;
      background-color: black;
    }

    &__title {
      @include title-styles;
    }

    &__sub-title {
      @include subtitle-styles;
    }
  }

  &__footer {
    grid-area: footer;
    @include card-base;
    background-color:$color-background-blue;
    padding: 20px;
  }
}
</style>
