<script setup>
import { Button } from 'primevue'
import Dialog from 'primevue/dialog';
import { ref } from 'vue';

const visible = ref(false);

defineProps({
    title: String,
    button: String
})


</script>

<template>
    <Button :label="button" @click="visible = true" class="p-button-outlined" />
    <Dialog v-model:visible="visible" modal :header="title" class="w-25rem">
        <slot>

        </slot>
    </Dialog>


</template>