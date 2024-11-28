<script setup>
import { deleteDoc, doc, getFirestore } from 'firebase/firestore'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import WiContextMenu from './WiContextMenu.vue'
import WiModal from './WiModal.vue'

const currentCard = ref(null)
const router = useRouter()
const route = useRoute()
const modalRef = ref(null)
const db = getFirestore()

function openModal() {
  modalRef.value.openModal()
}
function closeModal() {
  modalRef.value.closeModal()
}

async function deleteCard() {
  try {
    const cardRef = doc(db, 'wishes', currentCard.value)
    await deleteDoc(cardRef)
    console.log(`карточка id: ${currentCard.value} удалена.`)
  }
  catch (error) {
    console.error('Ошибка при удалении карточки', error)
  }
  router.go(-1)
}

onMounted(() => {
  currentCard.value = route.params.uid
})
</script>

<template>
  <WiContextMenu>
    <template #menu>
      <ul class="card__menu__list">
        <li class="card__menu__item card__menu__item--edit">
          <font-awesome-icon :icon="['fas', 'pen']" />
          Редактировать
        </li>
        <li
          class="card__menu__item card__menu__item--delete"
          @click="openModal"
        >
          <font-awesome-icon
            :icon="['fas', 'trash-can']"
          /> Удалить
        </li>
      </ul>
    </template>
    <font-awesome-icon
      class="card__menu--icon"
      :icon="['fas', 'ellipsis-vertical']"
    />
  </WiContextMenu>

  <WiModal ref="modalRef">
    <div class="menu__modal__content">
      <h3>Удалить подарок?</h3>
      <span>Восстановить его будет невозможно.</span>
      <div class="menu__modal__buttons">
        <button
          class="menu__modal__button menu__modal__button--decline"
          @click="closeModal"
        >
          нет, я
          передумал
        </button>
        <button
          class="menu__modal__button menu__modal__button--accept"
          @click="deleteCard"
        >
          да, удалить
        </button>
      </div>
    </div>
  </WiModal>
</template>

<style scoped>
.menu__modal__buttons{
  display: flex;
}

.menu__modal__content{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.menu__modal__content h3{
  padding: 0;
  margin: 0;
  font-size: 28px;
}

.menu__modal__content span{
  font-size: 16px;
}

.menu__modal__button{
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
.menu__modal__button--decline:hover {
  border: 3px solid #ffd859;
}
.menu__modal__button--accept:hover {
  border: 3px solid #ee2517;
}

.card__menu__list{
  color: black;
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.card__menu__item{
  font-size: 15px;
  padding: 5px;
}

.card__menu__item--delete{
  color: red;
}

.card__menu__list li:hover{
  background-color: #cfd3cf;
}

.card__menu--icon{
  padding: 25px;
  font-size: 30px;
}
</style>
