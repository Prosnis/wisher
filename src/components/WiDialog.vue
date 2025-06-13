<script setup>
import { Button } from 'primevue'
import Dialog from 'primevue/dialog'
import { ref } from 'vue'

defineProps({
  title: String,
  button: String,
})

const visible = ref(false)
</script>

<template>
  <Button
    :label="button"
    class="p-button-outlined"
    @click="visible = true"
  />
  <Dialog
    v-model:visible="visible"
    modal
    :header="title"
    class="w-25rem"
  >
    <slot />
  </Dialog>
</template>
