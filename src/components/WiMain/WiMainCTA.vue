<script setup lang="ts">
import { PATHS } from '@/constants/paths'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class=" flex flex-column gap-2 border-round md:flex-row">
    <div
      class="w-full bg-white border-round card__actions"
      @click="router.push(PATHS.CARDS.INVITATION_CREATE)"
    >
      <div class=" border-1 border-round  text-blue-500 gap-2 flex p-3">
        <div class=" flex justify-content-center">
          <img
            src="@/components/icons/invitation/party6.png"
            alt="postcard"
            class="w-10rem bg-blue-500 border-round post_card shake-on-hover mr-2"
          >
        </div>
        <div class="border-round ">
          <h2 class="text-3xl">
            Создать открытку
          </h2>
          <p class="text-lg">
            Создай открытку и поделись с друзьями
          </p>
        </div>
      </div>
    </div>

    <div class="w-full bg-white border-round">
      <div
        class=" border-1 border-round text-blue-500 gap-2 flex p-3 card__actions"
        @click="router.push(PATHS.CARDS.MAIN)"
      >
        <div class=" flex justify-content-center">
          <img
            src="@/components/icons/invitation/party6.png"
            alt="postcard"
            class="w-10rem bg-blue-500 border-round post_card shake-on-hover mr-2"
          >
        </div>
        <div class="border-round ">
          <h2 class="text-3xl">
            Желания пользователей
          </h2>
          <p class="text-lg">
            Узнай что хотят другие пользователи
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card__actions {
  cursor: pointer
}

.post_card {
  transform: rotate(-5deg);
}

@keyframes shake {
  0% {
    transform: rotate(-5deg) translateX(0);
  }

  25% {
    transform: rotate(-5deg) translateX(-5px);
  }

  50% {
    transform: rotate(-5deg) translateX(5px);
  }

  75% {
    transform: rotate(-5deg) translateX(-5px);
  }

  100% {
    transform: rotate(-5deg) translateX(0);
  }
}

.shake-on-hover:hover {
  animation: shake 0.5s ease-in-out;
}
</style>
