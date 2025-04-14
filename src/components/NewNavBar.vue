<script setup>
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';

import { ref } from "vue";

const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home'
    },
    {
        label: 'Features',
        icon: 'pi pi-star'
    },
    {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
            {
                label: 'Components',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Blocks',
                icon: 'pi pi-server'
            },
            {
                label: 'UI Kit',
                icon: 'pi pi-pencil'
            },
            {
                label: 'Templates',
                icon: 'pi pi-palette',
                items: [
                    {
                        label: 'Apollo',
                        icon: 'pi pi-palette'
                    },
                    {
                        label: 'Ultima',
                        icon: 'pi pi-palette'
                    }
                ]
            }
        ]
    },
    {
        label: 'Contact',
        icon: 'pi pi-envelope'
    }
]);
</script>

<template>
    <div class="card">
        <Menubar :model="items" />
    </div>

    
    <nav class="flex justify-content-between align-items-center ">
        <span class="logo">wisher</span>
        <ul class="flex list-none gap-3 font-semibold p-0">
            <li>
                ПРОФИЛЬ
            </li>
            <li>
                ПОДАРКИ
            </li>
        </ul>
        <Button variant="outlined"
            class="bg-white border-round-3xl text-color p-2 w-15rem flex justify-content-around font-semibold">
            создать вишлист
            <i class="pi pi-arrow-up-right"></i>
        </Button>
    </nav>
</template>

<style scoped>
.logo {
    color: #3D5AFE;
    font-size: 1.5rem;
    font-weight: 600;
}

.pi-arrow-up-right {
    border: #3D5AFE 2px solid;
    border-radius: 50%;
    padding: 8px;
    color: white;
    background-color: #3D5AFE
}
</style>