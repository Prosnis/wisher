<script setup>
import path from '@/components/constants/pathes'
import { getAuth } from 'firebase/auth'
import { onMounted, ref } from 'vue'

const userLink = ref(null)
const auth = getAuth()
onMounted(async () => {
  userLink.value = await auth.currentUser.uid
})
</script>

<template>
  <nav class="nav">
    <ul class="nav__links">
      <router-link
        v-if="userLink"
        :to="`${path.user}/${userLink}`"
        class="nav__logo logo"
      >
        <span>ВИШЕР</span>
      </router-link>
      <!-- <router-link to="/wisher/user" class="navigate-link">user</router-link> -->
      <router-link
        :to="path.invitationCard"
        class="navigate-link"
      >
        invitation
      </router-link>
    </ul>
  </nav>
</template>

<style scoped>
.nav__links a {
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
