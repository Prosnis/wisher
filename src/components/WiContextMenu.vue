<script setup>
import { onBeforeUnmount, onMounted, reactive } from 'vue'

const toggle = reactive({
  visible: false,
})

function hideMenu() {
  toggle.visible = false
}

function handleClickOutside(event) {
  const container = event.target.closest('.context__menu__container')
  if (!container)
    hideMenu()
}

onMounted(() => {
  window.addEventListener('mousedown', handleClickOutside)
})

onBeforeUnmount(() => {
  window.removeEventListener('mousedown', handleClickOutside)
})
</script>

<template>
  <div
    class="context__menu__container"
    @click="() => toggle.visible = !toggle.visible"
  >
    <slot />
    <div
      v-if="toggle.visible"
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
