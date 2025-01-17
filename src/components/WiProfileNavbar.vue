<script setup>
import { ref } from 'vue'

const props = defineProps({
  activeView: String,
})

const emit = defineEmits(['changeView'])
const activeView = ref('WiUserWishesVue')

function changeView(view) {
  activeView.value = view
  emit('changeView', view)
}
</script>

<template>
  <div class="profile__nav">
    <button
      class="nav__button"
      :class="{ active: props.activeView === 'WiUserWishesVue' }"
      @click="changeView('WiUserWishesVue')"
    >
      Мой вишлист
    </button>
    <button
      class="nav__button"
      :class="{ active: props.activeView === 'SubscribeListView' }"
      @click="changeView('SubscribeListView')"
    >
      Мои подписки
    </button>
    <button
      class="nav__button"
      :class="{ active: props.activeView === 'WiReservedListView' }"
      @click="changeView('WiReservedListView')"
    >
      Зарезервированные подарки
    </button>
  </div>
</template>

<style scoped>
.profile__nav {
    background-color: var(--color-secondary);
    min-width: 300px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}
.nav__button {
  margin: 0;
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 10px;
  font-weight: 600;
  border-radius: 10px;
  border: 3px solid var(--color-primary);
  background-color: var(--color-primary);
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: border 0.3s ease, background-color 0.3s ease;
  width: 300px;
  justify-content: center;
  font-size: 16px;
  transition: background-color 0.3s ease, color 0.3s ease;
}
.nav__button.active {
  background-color: var(--color-accent);
  color: var(--color-background-light);
  border-color: var(--color-accent);
}

.nav__button:hover {
  background-color: var(--color-background-light);
  color: var(--color-accent);
}
</style>
