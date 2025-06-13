<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['changeView'])

const buttons = [
  { id: 'WiUserWishes', label: 'Вишлист', icon: 'pi pi-clipboard' },
  { id: 'SubscribeListView', label: 'Подписки', icon: 'pi pi-heart' },
  { id: 'WiReservedListView', label: 'Подарки', icon: 'pi pi-gift' },
]

const activeView = ref<string>('WiUserWishes')

function changeView(view: string): void {
  activeView.value = view
  emit('changeView', view)
}
</script>

<template>
  <div class="custom__menu">
    <button
      v-for="button in buttons"
      :key="button.id"
      class="menu__button"
      :class="{ active: activeView === button.id }"
      @click="changeView(button.id)"
    >
      <i :class="button.icon" />
      {{ button.label }}
    </button>
  </div>
</template>

<style scoped>
.custom__menu{
  display: flex;
  gap: 5px;
  flex-wrap: nowrap;
}

.menu__button{
  font-size: 1rem;
  color: #3b82f6;
  background-color: transparent;
  border: none;
  padding: 5px 10px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
}

.menu__button.active{
  background-color: #3b82f6;
  color: white;
}

.menu__button:hover{
  background-color: #3b82f6;
  color: white;
}
</style>
