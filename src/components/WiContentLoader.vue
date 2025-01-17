<script setup>
import { ContentLoader } from 'vue-content-loader'

const props = defineProps({
  width: {
    type: Number,
  },
  height: {
    type: Number,
  },
})
</script>

<template>
  <ContentLoader
    :viewBox="`0 0 ${props.width} ${props.height}`"
    :speed="2"
    primary-color="#f5f7fa"
    secondary-color="#f0f0f0"
  >
    <rect
      x="0"
      y="0"
      rx="10"
      ry="10"
      :width="props.width"
      :height="props.height"
    />
  </ContentLoader>
</template>
