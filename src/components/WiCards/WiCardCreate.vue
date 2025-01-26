<script setup>
import { PATHS } from '@/constants/paths'
import { useRouter } from 'vue-router'

defineProps({
  wish: {
    type: Object,
  },
  userImg: {
    type: String,
  },
  userName: {
    type: String,
  },
})

const router = useRouter()

async function goToCardPreview(wishID) {
  try {
    await router.push(`${PATHS.CARDS.SINGLE}/${wishID}`)
    console.log('Navigation succeeded!')
  }
  catch (err) {
    console.log('Card not allowed', err)
  }
}

function hoverEnter(event) {
  event.target.classList.add('card__hover')
}

function hoverLeft(event) {
  event.target.classList.remove('card__hover')
}
</script>

<template>
  <div
    class="card"
    @mouseenter="hoverEnter($event)"
    @mouseleave="hoverLeft($event)"
    @click="goToCardPreview(wish.id)"
  >
    <img
      :src="wish.img"
      alt="Изображение желания"
      class="card__image"
    >
    <h3 class="card__title">
      {{ wish.name }}
    </h3>
    <p class="card__price" />
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

<style scoped>
.card__status-container {
  margin-top: auto;
}
.card__status{
  margin-bottom: 5px;
  color: white;
  padding: 3px;
  border-radius: 5px;
}

.card__status--fulfilled{
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(137,23,178,1) 1%, rgba(251,17,37,0.7455357142857143) 100%, rgba(0,212,255,1) 100%);
}
.card__status--reserved{
  background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
}

.card__hover {
  width: 100%;
  height: 100%;
  --color: var(--color-secondary);
  background: linear-gradient(90deg, var(--color) 25%, transparent 50%, var(--color) 75%);
  background-size: 200% 100%;
  animation: loading 2s infinite;
  z-index: 1;
  cursor: pointer;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }

  100% {
    background-position: -200% 0;
  }
}

.card__title{
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
}
.user__info--date {
  font-size: 15px;
}

.user__info {
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 20px;
}

.card__image {
  width: 210px;
  height: 210px;
  object-fit: cover;
  border-radius: 5% 5% 0 0;
}

.card__user__info {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: auto;
  padding: 5px;
  flex-wrap: wrap;
  justify-content: center;
}

.user__info--avatarImg {
  border: 1px solid black;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.card__price {
  position: absolute;
  z-index: 1;
  right: 5%;
  top: 5%;
  background-color: white;
  padding: 2px;
  font-weight: 600;
  color: black;
  margin: 0;
}

.card {
  position: relative;
  width: 210px;
  height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
  border-radius: 10px;
  background-color: #0817ec1a;
  color: rgb(0, 0, 0);
  font-size: 14px;
  font-weight: 600;
}
</style>
