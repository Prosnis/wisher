<script setup>
import Carousel from 'primevue/carousel';
import { useProfileStore } from '@/stores/WiProfileStore'
import { useRoute } from 'vue-router'
import { ref, onMounted } from "vue";

const route = useRoute()
const profileStore = useProfileStore()
const { getProfileData } = profileStore

const products = ref([]);
const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);




onMounted(async () => {
  try {
    const uid = route.params.uid 
    await getProfileData(uid)
    products.value = profileStore.fulfilledWishes
    console.log(products.value)
  }
  catch (err) {
    console.log(err)
  }
})



</script>

<template>
    <div class="card">
        <Carousel :value="products" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
            <template #item="slotProps">
                <div class="border border-surface-200 dark:border-surface-700 rounded m-2  p-4">
                    <div class="mb-4">
                        <div class="relative mx-auto">
                            <img :src="slotProps.data.img" :alt="slotProps.data.name" class="w-full rounded" />
                        </div>
                    </div>
                    <div class="mb-4 font-medium">{{ slotProps.data.name }}</div>
                </div>
            </template>
        </Carousel>
    </div>
</template>