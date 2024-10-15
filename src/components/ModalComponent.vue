<template>
    <dialog ref="dialogRef" class="modal__dialog" >
        <div class="modal__dialog__inner">
            <button class="modal__button modal__button--close" @click="closeModal"><font-awesome-icon
                class="modal__icon--close modal__icon"
                :icon="['fas', 'close']" /></button>
            <div class="modal__content">
                <slot />
            </div>
        </div>
    </dialog>
</template>

<script setup>
import { ref } from 'vue';


const dialogRef = ref(null);

const openModal = () => {
    dialogRef.value.showModal();
};

const closeModal = () => {
    dialogRef.value.close();
};


defineExpose({
    openModal,
    closeModal,
});
</script>

<style scoped>
.modal__dialog__inner{
    display: flex;
    flex-direction: column;
}
.modal__dialog {
    border: none;
    padding: 20px;
    width: 600px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.modal__content {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.modal__button--close {
    background-color: white;
    border: none;
    cursor: pointer;
    padding: 10px;
    margin-left: auto;
}

.modal__icon--close {
    font-size: 20px;
}
</style>