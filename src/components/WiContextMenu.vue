<script setup>
import { ref } from 'vue'

const visible = ref(false)

function hideMenu() {
  visible.value = false
}

function toggleMenu() {
  visible.value = !visible.value
}
</script>

<template>
  <div
    class="context-menu-container"
    @click="toggleMenu"
  >
    <slot />
    <div
      v-if="visible"
      class="context-menu"
      @click.stop
    >
      <slot name="menu" />
    </div>
  </div>
</template>

  <style scoped>
  .context-menu-container {
    position: relative;
  }

  .context-menu {
    position: absolute;
    background: #fff;
    border-radius: 10px;
    z-index: 1000;
    top: 60px;
    padding: 5px 0px;
    right: 20px;
    width: 150px;
    height: 55px;
  }
</style>
