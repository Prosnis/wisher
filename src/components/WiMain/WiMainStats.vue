<script setup lang="ts">
import { getAllUsers } from '@/services/GetAllUsers';
import { getAllWishes } from '@/services/GetAllWishes';
import Card from 'primevue/card';
import { onMounted, ref } from 'vue';

const usersJoined = ref(0)
const wishesAdded = ref(0)
const wishesFulfilled = ref(0)

onMounted(async () => {
    try {
        const [users, wishes] = await Promise.all([getAllUsers(), getAllWishes()]);
        usersJoined.value = users.length;
        wishesAdded.value = wishes.length;
        wishesFulfilled.value = wishes.filter(wish => wish.fulfilled).length;
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }
});

</script>

<template>
    <div>
        <Card class="p-2 text-center bg-blue-500 mb-3">
            <template #content>
                <div class="flex flex-column md:flex-row justify-content-around gap-4">
                    <div>
                        <div class="stat-value  font-bold text-white text-7xl">{{ usersJoined }}</div>
                        <span class="text-800 text-white">Пользователей </span>
                    </div>
                    <div>
                        <div class="stat-value  font-bold text-white text-7xl">{{ wishesFulfilled }}</div>
                        <span class="text-400 text-white">Желаний исполнено</span>
                    </div>
                    <div>
                        <div class="stat-value font-bold text-white text-7xl">{{ wishesAdded }}</div>
                        <span class="text-400 text-white">Желаний добавлено</span>
                    </div>
                </div>
            </template>
        </Card>
    </div>

</template>