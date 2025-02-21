<script setup lang="ts">
import type { Wish } from '@/types/interfaces/wish'
import { PATHS } from '@/constants/paths'
import { useRouter } from 'vue-router'

interface Props {
  wish: Wish
}

defineProps<Props>()

const router = useRouter()

async function goToCardPreview(wishID: string) {
  try {
    await router.push(`${PATHS.CARDS.SINGLE}/${wishID}`)
    console.log('Navigation succeeded!')
  }
  catch (err) {
    console.log('Card not allowed', err)
  }
}
</script>

<template>
  <div
    class="card"
    @click="goToCardPreview(wish.id)"
  >
    <img
      v-if="wish.img"
      :src="wish.img"
      alt="Изображение желания"
      class="card__image"
    >
    <h3 class="card__title">
      {{ wish.name }}
    </h3>
    <div class="card__status-container">
      <div v-if="wish.fulfilled">
        <div class="card__status card__status--fulfilled">
          Исполнено
          <font-awesome-icon
            :icon="['fas', 'check']"
            class="card__status--icon"
          />
        </div>
      </div>
      <div v-if="wish.reserve">
        <div class="card__status card__status--reserved">
          Забронировано
          <font-awesome-icon
            :icon="['fas', 'check']"
            class="card__status--icon"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/_colors' as color;
@use '@/styles/_mixins' as mixin;

.card {
  @include mixin.flex-center(column);

  @include mixin.responsive(768px) {
    width: 150px;
    height: 200px;
  };

  position: relative;
  width: 210px;
  height: 320px;
  gap: 20px;
  text-align: center;
  border-radius: 10px;
  background-color: color.$color-background;
  font-size: 14px;
  font-weight: 600;

  &__image {
    @include mixin.responsive(768px) {
      width: 100%;
      height: 100px;
    };

    width: 210px;
    height: 210px;
    object-fit: cover;
    border-radius: 5% 5% 0 0;
  }

  &__title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin: 0;
    font-size: 1.2rem;
  }

  &__status-container {
    margin-top: auto;

    .card__status {
      margin-bottom: 5px;
      color: white;
      padding: 3px;
      border-radius: 5px;
    }

    .card__status--fulfilled {
      background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(137, 23, 178, 1) 1%, rgba(251, 17, 37, 0.7455357142857143) 100%, rgba(0, 212, 255, 1) 100%);
    }

    .card__status--reserved {
      background: radial-gradient(circle, rgba(63, 94, 251, 1) 0%, rgba(252, 70, 107, 1) 100%);
    }
  }
}
</style>
