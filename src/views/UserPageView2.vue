<script setup lang="ts">
import WiNavbar from '@/components/WiNavbar.vue'
import { useProfileStore } from '@/stores/WiProfileStore'
import { useMouseInElement } from '@vueuse/core'
import { useAnimation } from '@/composables/useAnimation'
import { getAuth } from 'firebase/auth'
import { useRouter,useRoute } from 'vue-router'
import { onMounted, ref, useTemplateRef, watch } from 'vue'
import {computed} from 'vue'

const auth = getAuth()
const router = useRouter()
const target = useTemplateRef<HTMLDivElement>('target')
const { transformValue } = useAnimation(target)

function toUserWishes() {
  const uid = auth.currentUser?.uid
  router.push({ path: `/wishes/${uid}` })
}


const route = useRoute()
const loading = ref<boolean>(false)

const profileStore = useProfileStore()
const { getProfileData } = profileStore


const formattedBirthday = computed(() => {
  const timestamp = profileStore.user?.birthday
  if (!timestamp) return '—'
  const date = timestamp.toDate?.() || new Date(timestamp)
  return date.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
})

watch(
  () => route.params.uid,
  async (newUid) => {
    await getProfileData(newUid as string)
  },
)

/////////
const targetValues = {
  wishes: 12,
  friends: 4,
  gifts: 4
}

const wishes = ref(0)
const friends = ref(0)
const gifts = ref(0)
const hasAnimated = ref(false)

const animateValue = (current, target, duration) => {
  const startTime = performance.now()
  const startValue = 0
  const updateValue = (timestamp) => {
    const elapsed = timestamp - startTime
    const progress = Math.min(elapsed / duration, 1)
    current.value = startValue + (target - startValue) * easeOutQuad(progress)
    if (progress < 1) {
      requestAnimationFrame(updateValue)
    }
  }
  requestAnimationFrame(updateValue)
}

const easeOutQuad = (t) => {
  return t * (2 - t)
}

onMounted(async () => {
  try {
    loading.value = true
    const uid = route.params.uid as string
    await getProfileData(uid)
    if (!hasAnimated.value) {
      animateValue(wishes, targetValues.wishes, 2000)
      animateValue(friends, targetValues.friends, 2000)
      animateValue(gifts, targetValues.gifts, 2000)
      hasAnimated.value = true
    }
  }
  catch (err) {
    console.log('Пользователь не автроризован', err)
  }
  finally {
    loading.value = false
  }
})
</script>

<template>
  <WiNavbar />

  <main class="main">

    <section class="person" @click="toUserWishes">
      <div ref="target" class="person__info"
        :style="{ transform: transformValue, transition: 'transform 0.25s ease-out' }">
        <i class="pi pi-arrow-up-right person__info__icon-share" />
        <span class="person__info__subtitle">wish ideas for</span>
        <h1 class="person__info__nickname">
          @{{ profileStore.user?.displayName }}
        </h1>
      </div>
    </section>

    <div class="person__image">
      <img :src="profileStore.user?.photoUrl" alt="user image" class="person__image__avatar">
    </div>

<section class="about">
  <ul class="about__list">
    <li class="about__item">
      <span class="about__label">День рождения:</span>
      <span class="about__value">{{ formattedBirthday }}</span>
    </li>
    <li class="about__item">
      <span class="about__label">Интересы:</span>
      <span class="about__value">Программирование, дизайн, музыка</span>
    </li>
    <li class="about__item">
      <span class="about__label">О себе:</span>
      <span class="about__value">{{ profileStore.user?.about }}</span>
    </li>
  </ul>
</section>


    <section class="follow">
      ПОДПИСАТЬСЯ
    </section>

    <section class="panel2">
      <div class="stats-container">
        <div class="stat-item">
          <div class="stat-number">{{ Math.floor(wishes) }}</div>
          <div class="stat-label">Желаний</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">{{ Math.floor(friends) }}</div>
          <div class="stat-label">Друзей</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">{{ Math.floor(gifts) }}</div>
          <div class="stat-label">Подарков</div>
        </div>
      </div>
    </section>
    
  </main>
</template>

<style lang="scss" scoped>
@use '@/styles/colors' ;

.about {
  grid-area: c;
  color: white;
  // background: linear-gradient(135deg, #4a00e0, #8e2de2);
  background-color: #4a00e0;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;
}

.about__list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 20px;
  font-weight: 300;
  align-items: flex-start;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

.about__item {
  padding: 15px 20px;
  border-radius: 12px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.about__label {
  font-weight: 500;
}

.about__value {
  color: #ffffff;
  font-weight: 300;
  line-height: 1.4;
}




.panel2 {
  grid-area: d;
  background-color: $color-background-grey;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  &__wrapper2 {
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 26px;
    font-weight: 300;
    align-items: center;
  }
}

.stats-container {
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background: rgba(70, 55, 55, 0.1);
  border-radius: 12px;
  margin-top: 20px;
  width: 800px;
}

.stat-item {
  text-align: center;
  padding: 0 15px;
  width: 300px;
}

.stat-number {
  font-size: 62px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
}



.main {
  height: calc(100vh - 100px);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 20px;
  grid-template-areas:
    "a b e"
    "a b c"
    "d d c";
}

.person {
  grid-area: a;

  &__info {
    width: 565px;
    height: 100%;
    // height: 480px;
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    position: relative;
    cursor: pointer;

    background-color: #3399FF;
    border-radius: 20px;

    &__icon-share {
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 25px;

      transition: all 0.3s ease;
      text-shadow: none;
    }

    &__subtitle {
      font-size: 32px;
      font-weight: 200;

    }

    &:hover .person__info__nickname {
      transform: translateY(-2px);
      text-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
    }

    &:hover .person__info__icon-share {
      transform: translateY(-2px);
      text-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
    }

    &__nickname {
      font-size: 56px;
      font-weight: 600;
      margin: 0;
      position: relative;
      transition: all 0.3s ease;
      text-shadow: none;
    }

  }

  &__image {
    grid-area: b;
    overflow: hidden;
    // width: 330px;
    // height: 480px;
    border-radius: 20px;
  }

  &__image__avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.follow {
  grid-area: e;
  // width: 460px;
  color: white;
  background-color: $color-background-pink;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 26px;
    font-weight: 300;
    align-items: center;
  }
}

</style>
