<script setup lang="ts">
import { STACK_ICONS } from '@/constants/stackIcons';
import Card from 'primevue/card';

const getIconPath = (iconName: string): string => {
    return new URL(`/src/components/icons/stack/${iconName}`, import.meta.url).href;
};
</script>



<template>
    <Card class="">
        <template #content>
            <div class="grid justify-content-center p-4">
                <div class="col-6 md:col-2 text-center" v-for="icon in STACK_ICONS" :key="icon.name">
                    <img :src="getIconPath(icon.path)" :alt="icon.name" class="icon" loading="lazy">
                    <p class="mt-2">{{ icon.name }}</p>
                </div>
            </div>
        </template>
    </Card>

</template>

<style scoped lang="scss">
.icon {
    width: 64px;
    height: 64px;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }
}
</style>
