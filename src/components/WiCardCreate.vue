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

function goToCardPreview(wishID) {
  router.push(`${path.card}/${wishID}`).catch((err) => {
    console.log('Card not allowed', err)
  })
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
    <h3 card__title>
      {{ wish.name }}
    </h3>
    <p class="card__price">
      {{ formatPrice(wish.price) }} руб
    </p>
    <div class="card__user__info">
      <div class="user__info--info">
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

.user__info--date {
  font-size: 15px;
}

.user__info--info {
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 20px;
}

.card__label--file {
  width: 100%;
  border: 1px solid #ccc;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.card h3,
p {
  margin: 0;
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
  gap: 40px;
  margin-top: auto;
  padding: 5px;

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

.form__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form__list li {
  display: flex;
  align-items: center;
  gap: 20px;
}

.form__list input,
textarea {
  height: 20px;
  margin-bottom: 10px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form__list textarea {
  resize: none;
  min-height: 80px;
}

.form__list label {
  flex: 0 0 150px;
}

.form__list {
  list-style-type: none;
  padding: 0;
}

.card__icon--file {
  font-size: 100px;
  color: rgb(236, 233, 233);
  transition: color 0.3s;
}

.card__input--file {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
}
</style>
