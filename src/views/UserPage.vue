<template>
    <div>
        <div>
            <nav-bar />
        </div>
        <main>
            <section class="user-info">
                <div class="profile-wrapper">
                    <img class="user-wallapper" src="../assets/Apotheosis.jpg" alt="user-wallapper">
                    <img class="user-photo" src="../assets/user-example.jpg" alt="user-photo">
                    <h2 class="user-title">UserName</h2>
                    <p class="user-about">Привет, люблю джинсы и светодиодную ленту!</p>
                    <div class="badge-wrapper">
                        <div v-for="(badge, index) in badges" :key="index" class="badge"
                            :style="{ backgroundColor: badge.BgColor, color: badge.color }">
                            {{ badge.name }}
                        </div>
                    </div>
                </div>
                <section class="user-wishes">
                    <div class="cards-list">
                        <CommonCards v-for="wish in usersWhises" :key="wish.id" :wish="wish" />
                    </div>
                </section>
            </section>
        </main>
    </div>
</template>

<script setup>
import { badges } from '../components/UserBadges.vue';
import NavBar from '../components/NavBar.vue';
import { usersWhises } from '../assets/temp-data/temp-data';
import CommonCards from '../components/WishCard.vue';
</script>



<style scoped>
main {
    max-width: 1300px;
    margin: auto;
    min-height: 90vh;

    padding: 20px;
}

.user-photo {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
}

.user-info {
    gap: 20px;
    border-radius: 50px;
    box-shadow: 0px 10px 40px rgba(126, 155, 189, 0.35);
    position: relative;

}

.user-wallapper {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 50px 50px 0 0;
    margin-bottom: 115px;
}

.user-photo {
    position: absolute;
    top: 200px;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid white;
}

.profile-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.user-title {
    margin: 0 0 20px;
}

.user-about {
    margin: 0 0 20px;
}

.badge {
    text-align: center;
    padding: 5px;
    border-radius: 50px;
    font-weight: 600;
}

.badge-wrapper {
    display: flex;
    gap: 5px;
    margin-bottom: 20px;
}
</style>