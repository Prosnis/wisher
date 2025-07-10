<script setup lang="ts">
import WiNavbar from '@/components/WiNavbar.vue';
import WiUserWishes from '@/components/WiUser/WiUserWishes.vue';

const str = 'reservedWishes'

</script>



<template>
    <WiNavbar />
    <div class="gifts">
        <h1 class="gifts__title">Зарезервированные подарки</h1>
        <WiUserWishes :wish-type="str" :cardCreateButton="false" />
    </div>
</template>


<style scoped lang="scss"></style>