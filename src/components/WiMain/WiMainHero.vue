<script setup lang="ts">
import Card from 'primevue/card';
</script>

<template>
    <Card class="text-center p-2rem mb-3 ">
        <template #title>
            <h1 class="text-xl mb-1rem  md:text-5xl">Добро пожаловать в Wisher! 🤗</h1>
        </template>
        <template #content>
            <p class="text-xl mb-2rem ">
                Это мой <span class="text-blue-500">пет-проект</span>, в котором я экспериментирую с новыми
                технологиями.
                Здесь вы можете создать свой список желаний, сделать пригласительные на праздник, а
                также вдохновиться идеями ваших друзей.
                Если у вас есть предложения по улучшению приложения, буду рад услышать их в моём <a class="custom-link"
                    href="https://t.me/Artyomprosnis" target="_blank">телеграмме<i class="pi pi-arrow-up-right"></i>
                </a>.
            </p>
        </template>
    </Card>

</template>

<style scoped>
.custom-link {
    text-decoration: none;
    color: #007BFF;
}
</style>