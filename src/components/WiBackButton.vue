<script setup lang="ts">
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

<style lang="scss" scoped>
.back__button {
    border: none;
    cursor: pointer;
    margin-right: auto;

    .back__icon {
        font-size: 30px;
        color: var(--color-accent);
        transition: transform 0.3s ease;
    }

    &:hover .back__icon {
        transform: scale(1.1);
    }
}
</style>
