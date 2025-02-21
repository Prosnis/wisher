<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const visible = ref<boolean>(false)

function hideMenu() {
  visible.value = false
}

function onClickOutside(event: MouseEvent) {
  const target = event.target as HTMLElement | null
  const container = target?.closest('.context__menu__container') as HTMLElement | null
  if (!container)
    hideMenu()
}

onMounted(() => {
  window.addEventListener('mousedown', onClickOutside)
})

onBeforeUnmount(() => {
  window.removeEventListener('mousedown', onClickOutside)
})
</script>

<template>
  <div
    class="context__menu__container"
    @click="visible = !visible"
  >
    <slot />
    <div
      v-if="visible"
      class="context__menu"
      @click.stop
    >
      <slot
        name="menu"
        :hide-menu="hideMenu"
      />
    </div>
  </div>
</template>

  <style scoped>
  .context__menu__container {
    position: relative;
  }

  .context__menu {
    position: absolute;
    background: var(--color-secondary);
    border-radius: 10px;
    z-index: 1000;
    top: 60px;
    padding: 5px 0px;
    right: 20px;
    width: 180px;
    height: 60px;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  }
</style>
