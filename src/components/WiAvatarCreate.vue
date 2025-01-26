<script setup>
import { computed } from 'vue'

const { name } = defineProps({
  name: {
    type: String,
    required: true,
  },
})

const initial = computed(() => name.charAt(0).toUpperCase())
</script>

<template>
  <div class="avatar">
    <span class="avatar-letter">{{ initial }}</span>
  </div>
</template>

<style scoped>
.avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  background-color: rgb(222, 88, 255);
  border-radius: 50%;
  color: white;
  font-size: 80px;
  font-weight: bold;
}

.avatar-letter {
  display: block;
}
</style>
