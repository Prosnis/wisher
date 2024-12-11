<script setup>
import path from '@/components/constants/pathes'
import WiMiniProfileCard from '@/components/WiMiniProfileCard.vue'
import NavBar from '@/components/WiNavbar.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function hoverEnter(event) {
  event.target.classList.add('hover')
}

function hoverLeft(event) {
  event.target.classList.remove('hover')
}
</script>

<template>
  <NavBar />
  <div class="feed__container">
    <div class="feed__wrapper">
      <div
        class="feed__item feed__item--login"
        @mouseenter="hoverEnter($event)"
        @mouseleave="hoverLeft($event)"
        @click="() => router.push(path.register)"
      >
        <h2 class="item__title">
          Присоедениться
        </h2>
        <span class="item__subtitle">Зарегистрируйтесь, чтобы создать свой список желаний.</span>
        <font-awesome-icon
          class="feed__icon feed__icon-arrow"
          :icon="['fas', 'angles-right']"
        />
      </div>

      <div
        class="feed__item feed__item--search "
        @mouseenter="hoverEnter($event)"
        @mouseleave="hoverLeft($event)"
        @click="() => router.push(path.cards)"
      >
        <h2 class="item__title">
          Идеи подарков
        </h2>
        <span class="item__subtitle">Откройте для себя желания пользователей, которые разделяют ваши интересы!</span>
        <font-awesome-icon
          class="feed__icon feed__icon-arrow"
          :icon="['fas', 'angles-right']"
        />
      </div>

      <div
        class="feed__item feed__item--invitation "
        @mouseenter="hoverEnter($event)"
        @mouseleave="hoverLeft($event)"
        @click="() => router.push(path.invitationCard)"
      >
        <h2 class="item__title">
          Cоздать приглашение
        </h2>
        <span class="item__subtitle">Удобная онлайн-открытка для ваших друзей!</span>
        <font-awesome-icon
          class="feed__icon feed__icon-arrow"
          :icon="['fas', 'angles-right']"
        />
      </div>

      <div class="feed__item feed__item--users ">
        <h2 class="item__title">
          Пользователи
        </h2>
        <WiMiniProfileCard />
      </div>
    </div>
  </div>
</template>

<style scoped>
.item__subtitle {
  font-style: italic;
}

.item__title {
  margin: 0;
  margin-bottom: 10px;
}

.hover {
  width: 100%;
  height: 100%;
  --color: #131e36;
  background: linear-gradient(90deg, var(--color) 5%, transparent 50%, var(--color) 75%);
  background-size: 200% 100%;
  animation: loading 3s infinite;
  cursor: pointer;
  box-sizing: border-box;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }

  100% {
    background-position: -200% 0;
  }
}

.feed__icon {
  font-size: 120px;
  margin-top: auto;
  margin-left: auto;
}

.feed__wrapper {
  max-width: 1300px;
  margin: auto;
  min-height: 85vh;
  padding: 20px;
  background-color: #111827;
  border-radius: 10px;
  display: grid;
  grid-template-areas:
    'a  d'
    'b  d'
    'c  d'
  ;
  gap: 20px;
}

.feed__item {
  background-color: #0d121b;
  border-radius: 10px;
  color: #d9e6eb;
  padding: 20px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  overflow: inherit;
}

.feed__item:not(:last-child):hover {
  color: #ffd859;
}

.feed__item--login {
  grid-area: a;
}

.feed__item--search {
  grid-area: b;
}

.feed__item--invitation {
  grid-area: c;
}

.feed__item--users {
  grid-area: d;
  align-items: center;
  gap: 20px;
}
</style>
