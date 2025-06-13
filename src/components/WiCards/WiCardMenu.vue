<script setup lang="ts">
import type { Wish } from '@/types/interfaces/wish'
import WiContextMenu from '@/components/WiContextMenu.vue'
import WiModal from '@/components/WiModal.vue'
import { deleteDoc, doc, getFirestore } from 'firebase/firestore'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

interface Props {
  card: Wish
}

const props = defineProps<Props>()

const emit = defineEmits(['toggleFulfill'])
const currentCard = ref<string | null>(null)
const modalToggle = ref<boolean>(false)
const router = useRouter()
const route = useRoute()
const db = getFirestore()

function toggleFulfillStatus() {
  const newStatus = !props.card.fulfilled
  emit('toggleFulfill', newStatus)
}

async function deleteCard() {
  try {
    const cardRef = doc(db, 'wishes', currentCard.value as string)
    await deleteDoc(cardRef)
    console.log(`карточка id: ${currentCard.value} удалена.`)
  }
  catch (error) {
    console.error('Ошибка при удалении карточки', error)
  }
  router.go(-1)
}

onMounted(() => {
  currentCard.value = route.params.uid as string
})
</script>

<template>
  <WiContextMenu>
    <template #menu="{ hideMenu }">
      <ul class="card__menu__list">
        <li
          class="card__menu__item card__menu__item--fulfilled"
          @click=" [hideMenu(), toggleFulfillStatus()]"
        >
          <font-awesome-icon
            class="menu__icon"
            :icon="['fas', 'check']"
          /> Исполнено
        </li>
        <li
          class="card__menu__item card__menu__item--delete"
          @click="[hideMenu(), modalToggle = true]"
        >
          <font-awesome-icon
            class="menu__icon"
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
.card__menu__list {
  color: black;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.card__menu__item--fulfilled {
  color: green;
  font-size: 15px;
  padding: 5px;
}

.menu__icon {
  margin: 0px 10px 0px 10px;
}

.menu__modal__buttons {
  display: flex;
}

.menu__modal__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 500px;
  cursor: default;
}

.menu__modal--confirm {
  padding: 0;
  margin: 0;
  font-size: 32px;
}

.menu__modal--remind {
  font-size: 16px;
}

.menu__modal__button {
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

.menu__modal__button--decline {
  background-color: #ffd859;
  color: rgb(255, 255, 255);
}

.menu__modal__button--accept {
  background-color: #ff6c59;
  color: rgb(250, 250, 250);
}

.card__menu__item {
  font-size: 15px;
  padding: 5px;
}

.card__menu__item--delete {
  color: red;
}

.card__menu__item:hover {
  background-color: var(--color-background-light);
}

.card__menu--icon {
  padding: 25px;
  font-size: 30px;
  color: black;
}
</style>
