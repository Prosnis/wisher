<template>
    <nav class="nav">
        <ul class="nav__links">
            <span class="nav__logo logo">ВИШЕР</span>
            <!-- <router-link to="/wisher/user" class="navigate-link">user</router-link> -->
            <!-- <router-link to="/wisher/" class="navigate-link">feed</router-link> -->
            <!-- <router-link to="/wisher/auth" class="navigate-link">auth</router-link> -->
            <!-- <router-link to="/wisher/register" class="navigate-link">register</router-link> -->
            <!-- <li v-for="(item, index) in navItems" :key="index">
                {{ item.name }}
            </li> -->
            <!-- <a class="login" href="#">Войти</a> -->
        </ul>
    </nav>
</template>

<script setup>

    
</script>

<style scoped>
.nav__links a{
    color: white;
    text-decoration: none;
}

.nav {
    display: flex;
    justify-content: center;
    /* background: #3598db; */
    background: #464241;
    height: 60px;
    box-shadow: 0px 10px 40px rgba(126, 155, 189, 0.35);
    margin-bottom: 20px;
}

.nav__links {
    display: flex;
    align-items: center;
    list-style-type: none;
    gap: 20px;
    color: #fafbfa;
    margin: 0;
    padding: 0;
    font-size: 20px;
    width: 80%;

}

.nav__logo {
    font-size: 60px;
    font-family: "Good dog", sans-serif;
    /* margin-right: auto; */
    margin: auto;
}

.login {
    text-decoration: none;
    color: inherit;
    margin-left: auto;
}
</style>