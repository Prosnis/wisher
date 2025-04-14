<script setup lang="ts">
import { ContentLoader } from 'vue-content-loader'

interface Props {
  width: number
  height: number
}

defineProps<Props>()
</script>

<template>
  <ContentLoader
    :viewBox="`0 0 ${width} ${height}`"
    :speed="2"
    primary-color="#f5f7fa"
    secondary-color="#f0f0f0"
  >
    <rect
      x="0"
      y="0"
      rx="10"
      ry="10"
      :width="width"
      :height="height"
    />
  </ContentLoader>
</template>
