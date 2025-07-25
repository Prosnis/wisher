<script setup lang="ts">
import Button from 'primevue/button'
import Popover from 'primevue/popover'

import { onMounted, ref } from 'vue'

interface PickWallpaperPayload {
  target: 'wallpaper' | 'profilePhoto'
  src: string
}

const props = defineProps<{
  folder: string
  target: PickWallpaperPayload['target']
}>()

const emit = defineEmits<{
  (e: 'pick-wallpaper', payload: PickWallpaperPayload): void
}>()

const op = ref<InstanceType<typeof Popover> | null>(null)

const toggle = (event: Event) => {
  op.value?.toggle(event)
}

const currentImg = ref('')
const images = ref<string[]>([])

const pickCurrentImg = (event: Event) => {
  const src = (event.currentTarget as HTMLElement).querySelector('img')?.getAttribute('src')

  if (src) {
    emit('pick-wallpaper', {
      target: props.target,
      src,
    })
  }
}

onMounted(async () => {
  try {
    const { getDefaultImgs } = await import('@/services/getDefaultImgs')
    const { profilePhoto, profileWall } = await getDefaultImgs()
    images.value = props.folder === 'avatars' ? profilePhoto : profileWall
  }
  catch (error) {
    console.error('Error loading images:', error)
    images.value = []
  }
})
</script>

<template>
  <div class="card flex justify-center">
    <Button
      type="button"
      label="Выбрать"
      class="p-button-outlined"
      @click="toggle"
    />
    <Popover
      ref="op"
      class="w-20rem"
    >
      <ul class="flex w-full bg-white flex-wrap gap-1 p-0">
        <li
          v-for="(svg, index) in images"
          :key="index"
          class="border-circle overflow-hidden w-2rem md:w-3rem h-2rem md:h-3rem border-solid border-blue-200 cursor-pointer"
          :class="[{ 'border-blue-700': currentImg.includes(svg) }]"
          @click="pickCurrentImg"
        >
          <img
            class="w-full h-full img"
            :src="svg"
            alt=""
          >
        </li>
      </ul>
    </Popover>
  </div>
</template>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}

.img {
    object-fit: cover;
}
</style>
