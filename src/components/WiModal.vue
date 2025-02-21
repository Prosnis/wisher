<script setup lang="ts">
interface Props {
  modelValue: boolean
}

defineProps<Props>()
</script>

<template>
  <dialog
    class="modal__dialog"
    :open="modelValue"
  >
    <div class="modal__dialog__inner">
      <div class="modal__content">
        <slot />
      </div>
    </div>
  </dialog>
</template>

<style scoped>
.modal__dialog__inner{
    display: flex;
    flex-direction: column;
}
.modal__dialog {
    border: none;
    padding: 10px;
    max-width: 600px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.modal__content {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>
