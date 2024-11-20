<script setup>
import WiCardCreate from '@/components/WiCardCreate.vue'
import WiCardsAdd from '@/components/WiCardsAdd.vue'
import WiModal from '@/components/WiModal.vue'
import { getUserData } from '@/services/GetUserData'
import { onMounted, ref } from 'vue'

const props = defineProps({
  user: {
    type: Object,
    default: () => ({}),
  },
  hasEditPermission: {
    type: Boolean,
    default: () => false,
  },
  profileUserUid: {
    type: String,
  },
})
const modalAddCard = ref(null)
const userWishList = ref([])

onMounted(async () => {
  try {
    const { wishes: userWishes } = await getUserData(props.profileUserUid)
    userWishList.value = userWishes
  }
  catch (error) {
    console.error('Ошибка при получении желаний:', error)
  }
})

function showModalAddCard() {
  modalAddCard.value.openModal()
}

function handleAddWish(cardData) {
  userWishList.value.push(cardData)
}
</script>

<template>
  <h2 class="whishes__title">
    Список желаний
  </h2>
  <button
    v-if="hasEditPermission"
    class="profile__button profile__button--addWish"
    @click="showModalAddCard"
  >
    Добавить
  </button>
  <WiModal ref="modalAddCard">
    <WiCardsAdd
      :user-img="props.user.photoUrl"
      :user-name="props.user.displayName"
      @handle-add-wish="handleAddWish"
    />
  </WiModal>
  <section
    v-if="userWishList.length"
    class="wishes__list"
  >
    <div class="whishes__cards">
      <WiCardCreate
        v-for="wish in userWishList"
        :key="wish.id"
        :wish="wish"
        :user-img="props.user.photoUrl"
        :user-name="props.user.displayName"
      />
    </div>
  </section>
  <div
    v-else
    class="wishes__empty"
  >
    <img
      src="../assets//empty-box.png"
      alt="empty-box"
      loading="lazy"
    >
    <p>У пользователя пока нет желаний.</p>
  </div>
</template>

<style scoped>
.whishes__title{
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
  padding: 10px;
  margin: 10px;
  font-weight: 600;
  border-radius: 10px;
  border: 3px solid #0d121b;
  background-color: #0d121b;
  color: white;
  cursor: pointer;
  transition: border 0.3s ease, background-color 0.3s ease;
}

.profile__button--addWish:hover{
  border: 3px solid #ffd859;
}
</style>
