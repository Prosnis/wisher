<script setup>
import path from '@/components/constants/pathes'
import { useRouter } from 'vue-router'

const props = defineProps({
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
    await router.push(`${path.card}/${wishID}`)
    console.log('Navigation succeeded!')
  }
  catch (err) {
    console.log('Card not allowed', err)
  }
}

function formatPrice(value) {
  if (!value)
    return ''
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
  }).format(value)
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
    :class="{ card: !props.wish.reserve, card__reserve: props.wish.reserve }"
    :data-id="wish.id"
    @mouseenter="hoverEnter($event)"
    @mouseleave="hoverLeft($event)"
    @click="goToCardPreview(wish.id)"
  >
    <img
      :src="wish.img"
      alt=""
      class="card__image"
    >
    <h3 class="card__title">
      {{ wish.name }}
    </h3>
    <p class="card__price">
      <!-- {{ formatPrice(wish.price) }} руб  -->
    </p>
    <div class="card__user__info">
      <div class="user__info">
        <img
          :src="props.userImg"
          alt="User Avatar"
          class="card__img user__info--avatarImg"
        >
        <span v-text="props.userName" />
      </div>
      <span class="user__info--date">{{ new Date().toLocaleDateString() }}</span>
    </div>
  </div>
</template>

<style scoped>
.card__hover {
  width: 100%;
  height: 100%;
  --color: #515c67;
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
  width: 100%;
  border: 1px solid #ccc;
  height: 250px;
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
  width: 260px;
  height: 420px;
  border: 3px solid #3dd68c;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
  border-radius: 5%;
  background-color: #0d121b;
  color: white;
  /* box-shadow: 0px 5px 5px rgba(126, 155, 189, 0.6); */
}
.card__reserve {
  position: relative;
  width: 260px;
  height: 420px;
   border: 3px solid #f14158;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
  border-radius: 5%;
  background-color: #0d121b;
  color: white;
}
</style>
