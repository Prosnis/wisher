<template>
    <div>
        <div>
            <NavBar />
        </div>
        <main class="main-feed">
            <section class="add-wish">
                <router-link :to="path.user" class="navigate-link">
                    <h1>Создать свой список желаний</h1>
                    <font-awesome-icon :icon="['fas', 'gift']" class="gift-icon fa-bounce animated" />
                </router-link>
            </section>
            <section class="users-wishes">
                <h2>Желания пользователей</h2>
                <div class="cards-list">
                        <CommonCards v-for="wish in usersWhises" :key="wish.id" :wish="wish" />
                    </div>
            </section>
        </main>
    </div>
</template>

<script setup>
import { usersWhises } from '@/assets/temp-data/temp-data';
import NavBar from '@/components/NavBar.vue';
import CommonCards from '@/components/WishCardCreate.vue';
import path from '@/services/pathes';
</script>

<style scoped>


.main-feed {
    max-width: 1300px;
    margin: auto;
    min-height: 90vh;
    border-radius: 5px;
    box-shadow: 0px 10px 40px rgba(126, 155, 189, 0.35);
    padding: 20px;
}


.navigate-link {
    font-family: 'Good dog', sans-serif;
    color: #3598db;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    max-width: 50%;
    margin: auto;
    border-radius: 5px;
    transition: transform 0.2s ease-in;
    text-decoration: none;
  text-decoration: none;
}

.navigate-link:hover {
    transform: translateY(-5px);
    cursor: pointer;
    text-decoration: underline;
}

.gift-icon {
    color: #db35cd;
}

</style>