<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goBack() {
  router.go(-1)
}
</script>

<template>
  <button
    class="back__button"
    @click="goBack"
  >
    <font-awesome-icon
      :icon="['fas', 'arrow-left-long']"
      class="back__icon"
    />
  </button>
</template>

<style scoped>
.back__button{
    border: none;
    cursor: pointer;
    background-color: transparent;
    margin-right: auto;
    transition: transform 0.3s ease;
}
.back__icon{
    font-size: 50px;
    color: white;
}

.back__button:hover {
    transform: scale(1.3);
}
</style>
