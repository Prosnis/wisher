<script setup>
import { deleteDoc, doc, getFirestore, updateDoc } from 'firebase/firestore'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import WiContextMenu from '../WiContextMenu.vue'
import WiModal from '../WiModal.vue'

const currentCard = ref(null)
const router = useRouter()
const route = useRoute()
const modalToggle = ref(false)
const db = getFirestore()

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

async function fulfillCard() {
  try {
    const cardRef = doc(db, 'wishes', currentCard.value)
    await updateDoc(cardRef, { fulfilled: true })
    console.log(`Карточка id: ${currentCard.value} выполнена.`)
  }
  catch (error) {
    console.error('Ошибка при обновлении статуса карточки', error)
  }
}

onMounted(() => {
  currentCard.value = route.params.uid
})
</script>

<template>
  <WiContextMenu>
    <template #menu="{ hideMenu }">
      <ul class="card__menu__list">
        <li
          class="card__menu__item card__menu__item--edit"
          @click="() => hideMenu()"
        >
          <font-awesome-icon :icon="['fas', 'pen']" />
          Редактировать
        </li>
        <li
          class="card__menu__item card__menu__item--fulfilled"
          @click="() => [hideMenu(), fulfillCard()]"
        >
          <font-awesome-icon
            :icon="['fas', 'check-circle']"
          /> Исполнено
        </li>
        <li
          class="card__menu__item card__menu__item--delete"
          @click="[hideMenu(), modalToggle = true]"
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

  <WiModal v-model="modalToggle">
    <div class="menu__modal__content">
      <h3 class="menu__modal--confirm">
        Удалить карточку?
      </h3>
      <span class="menu__modal--remind">Восстановить её будет невозможно.</span>
      <div class="menu__modal__buttons">
        <button
          class="menu__modal__button menu__modal__button--decline"
          @click="modalToggle = false"
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
  width: 500px;
  cursor: default;
}
.menu__modal--confirm{
  padding: 0;
  margin: 0;
  font-size: 32px;
}

.menu__modal--remind{
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
  color: white;
  cursor: pointer;
  transition: border 0.3s ease, background-color 0.3s ease;
  border: none;
}
.menu__modal__button--decline{
  background-color: #ffd859;
  color: rgb(255, 255, 255);
}

.menu__modal__button--accept{
  background-color: #ff6c59;
  color: rgb(250, 250, 250);
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

.card__menu__item:hover{
  background-color: #cfd3cf;
}

.card__menu--icon{
  padding: 25px;
  font-size: 30px;
  color: black;
}
</style>
