<script setup>
import WiCardCreate from '@/components/WiCardCreate.vue'
import WiCardsAdd from '@/components/WiCardsAdd.vue'
import { useProfileStore } from '@/stores/WiProfileStore'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const profileStore = useProfileStore()
const { user, wishes, hasEditPermission, } = storeToRefs(profileStore)
const { getProfileData } = profileStore
const addCardToggle = ref(false)
const buttonText = ref('Добавить')


const addCardBtn = () => {
  addCardToggle.value = !addCardToggle.value
  addCardToggle.value === false ? buttonText.value = 'Добавить' : buttonText.value = 'Отменить'
}
function handleAddWish(cardData) {
  wishes.value.push(cardData)
  addCardBtn()
}

onMounted(() => {
  getProfileData(route.params.uid)
})
</script>

<template>
  <h2 class="whishes__title">
    Список желаний
  </h2>
  <button v-if="hasEditPermission" 
      class="profile__button profile__button--addWish" 
      @click="addCardBtn">
    {{ buttonText }}
  </button>


  <WiCardsAdd v-if="addCardToggle" :user-img="user.photoUrl" :user-name="user.displayName"
    @handle-add-wish="handleAddWish" />




  <section v-if="wishes.length" class="wishes__list">
    <div class="whishes__cards">
      <WiCardCreate v-for="wish in wishes" :key="wish.id" :wish="wish" :user-img="user.photoUrl"
        :user-name="user.displayName" />
    </div>
  </section>


  <div v-else class="wishes__empty">
    <img src="../assets//empty-box.png" alt="empty-box" loading="lazy">
    <p>У пользователя пока нет желаний.</p>
  </div>
</template>

<style scoped>
.whishes__title {
  color: white;
}

.wishes__empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  font-size: 20px;
  color: rgb(3, 3, 3);
}

.wishes__empty img {
  width: 300px;
}

.whishes__cards {
  display: flex;
  gap: 20px;
  padding: 50px;
  flex-wrap: wrap;
  justify-content: center;
}

.profile__button--addWish {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 10px;
  font-weight: 600;
  border-radius: 10px;
  border: 3px solid #0d121b;
  background-color: #0d121b;
  color: white;
  cursor: pointer;
  transition: border 0.3s ease, background-color 0.3s ease;
  width: 900px;
  font-size: 22px;
}

.profile__button--addWish:hover {
  border: 3px solid #ffd859;
}
</style>
