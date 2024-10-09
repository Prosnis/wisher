<template>
    <Modal>
        <button class="btn-modal-close" @click="closeModal"><font-awesome-icon class="btn-modal-close-icon"
                :icon="['fas', 'close']" /></button>
        <h1>Редактировать профиль</h1>
        <ul class="user-edit-list">
            <li>
                <label for="name">Имя:</label>
                <input type="text" id="name" v-model="userName">
            </li>
            <li>
                <label for="about">Краткая информация:</label>
                <textarea name="" id="about" v-model="userAbout"></textarea>
            </li>
            <li>
                <label for="">Выбирите интересы:</label>
                <div class="badge-wrapper">
                    <div v-for="(badge, index) in badges" :key="index" class="badge"
                        :style="{ backgroundColor: isBadgePicked(badge) ? 'white' : badge.BgColor, color: badge.color }"
                        @click="badgePicker(badge)">
                        {{ badge.name }}
                    </div>
                </div>
            </li>
        </ul>
        <button class="btn-modal-save" @click="saveProfile">сохранить изменения</button>
    </Modal>
</template>

<script setup>

import { badges } from './UserBadges';
import { ref, watch } from 'vue';
import { getFirestore, doc, updateDoc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import Modal from '@/components/ModalComponent.vue';

const userAbout = ref('');
const userName = ref('');
const auth = getAuth();
const db = getFirestore();

const emit = defineEmits(['close', 'update-profile']);

const props = defineProps({
    user: Object,
    pickedBadges: Array
});



const localUserName = ref(props.user.displayName);
const localUserAbout = ref(props.user.about);
const localPickedBadges = ref([...props.pickedBadges]); 

watch(() => props.user, (newUser) => {
    localUserName.value = newUser.displayName;
    localUserAbout.value = newUser.about;
}, { immediate: true });




const closeModal = () => {
    emit('close');
};



const isBadgePicked = (badge) => {
    return localPickedBadges.value.find((pickedBadge) => pickedBadge.name === badge.name);
};


const badgePicker = (badge) => {
    const index = localPickedBadges.value.findIndex((item) => item.name === badge.name); 
    if (index !== -1) {
        localPickedBadges.value.splice(index, 1); 
    } else {
        localPickedBadges.value.push(badge); 
    }
    console.log(localPickedBadges.value)
};

const saveProfile = async () => {
    const currentUser = auth.currentUser;
    if (!currentUser) {
        console.error('Пользователь не авторизован');
        return;
    }


    const userDocRef = doc(db, 'users', currentUser.uid);
    const userSnapshot = await getDoc(userDocRef);
    const userData = userSnapshot.exists() ? userSnapshot.data() : {};


    const updates = {};

    updates.displayName = userName.value !== '' ? userName.value : (userData.displayName || currentUser.displayName);
    updates.about = userAbout.value !== '' ? userAbout.value : (userData.about || '');
    updates.badges = localPickedBadges.value.length > 0 ? localPickedBadges.value : (userData.badges || []);


    try {
        await updateDoc(userDocRef, updates);
        console.log('Профиль успешно обновлен');
        emit('update-profile', { userName: updates.displayName, userAbout: updates.about, pickedBadges: updates.badges });
    } catch (error) {
        console.error('Ошибка при обновлении профиля:', error);
    }
    closeModal()
};

</script>


<style scoped>
.badge-wrapper {
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
}

.badge {
    cursor: pointer;
}


.modal-content h1 {
    margin: 0;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
}

.user-edit-list {
    list-style: none;
    padding: 0;
}

.user-edit-list li {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}

.user-edit-list label {
    flex: 0 0 150px;
    margin-right: 10px;
}

.user-edit-list input,
.user-edit-list textarea,
.user-edit-list div {
    flex: 1;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}

.user-edit-list textarea {
    resize: none;
    min-height: 80px;
}


.btn-modal-save {
    padding: 10px;
    margin: 10px;
    font-weight: 600;
    border-radius: 10px;
    border: none;
    background-color: #201f1e8a;
    color: white;
    cursor: pointer;
    margin: auto;
}

.btn-modal-close {
    background-color: white;
    border: none;
    cursor: pointer;
    padding: 10px;
    margin-left: auto;
}

.btn-modal-close-icon {
    font-size: 20px;
}
</style>