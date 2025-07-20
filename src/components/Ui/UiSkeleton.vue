<!-- components/Skeleton.vue -->
<script setup lang="ts">
const props = defineProps<{
  isLoading: boolean
  tag?: keyof HTMLElementTagNameMap
  class?: string
}>()
</script>

<template>
  <div
    class="skeleton-wrapper"
    :class="[props.class, { loading: props.isLoading }]"
    v-bind="$attrs"
  >
    <slot />
    <div
      v-if="props.isLoading"
      class="skeleton-overlay"
    />
  </div>
</template>

<style scoped lang="scss">
.skeleton-wrapper {
  position: relative;

    &.loading {
    pointer-events: none;
  }
}

.skeleton-overlay {
  position: absolute;
  inset: 0;
  background-color: #2a2b35;
  border-radius: 20px;
  overflow: hidden;
  pointer-events: auto;
  z-index: 2;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      rgba(42, 43, 53, 0) 0%,
      rgba(80, 80, 90, 0.35) 50%,
      rgba(42, 43, 53, 0) 100%
    );
    animation: shimmer 1.2s infinite;
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
