<script setup>
import Button from "primevue/button";
import Popover from 'primevue/popover';

import { onMounted, ref} from 'vue'

const op = ref();
const toggle = (event) => {
    op.value.toggle(event);
}

const currentImg = ref('')
const images = ref([])

const props = defineProps({
    folder: String,
    group: String
})

const emit = defineEmits(["pickWallpaper"]);

const pickCurrentImg = (event) => {
    currentImg.value = event.currentTarget.querySelector("img").src;
    emit("pickWallpaper", currentImg.value);
}

onMounted(async () => {
  try {
    const { getDefaultImgs } = await import('@/services/getDefaultImgs')
    const { profilePhoto, profileWall } = await getDefaultImgs()
    images.value = props.folder === 'avatars' ? profilePhoto : profileWall
  } catch (error) {
    console.error('Error loading images:', error)
    images.value = []
  }
})

</script>

<template>
    <div class="card flex justify-center">
          <Button type="button" label="Выбрать" class="p-button-outlined" @click="toggle"/>
          <Popover ref="op" class="w-20rem">
            <ul class="flex w-full bg-white flex-wrap gap-1 p-0">
                  <li @click="pickCurrentImg"  v-for="(svg, index) in images" :key="index" 
                  class="border-circle overflow-hidden w-2rem md:w-3rem h-2rem md:h-3rem border-solid border-blue-200 cursor-pointer" 
                  :class="[{ 'border-blue-700': currentImg.includes(svg) }]">
                      <img class="w-full h-full img" :src="svg" alt="">
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