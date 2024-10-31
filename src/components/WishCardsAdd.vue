<template>

    <form method="dialog" class="form" @submit="CreateCard">
        <h1 class="form__title">Добавить желание</h1>
        <div class="form__wrapper">
            <ul class="form__list">
                <li>
                    <label for="name">Название:</label>
                    <input type="text" id="name" v-model="previewName" required>
                </li>
                <li>
                    <label for="description">Описание</label>
                    <textarea type="text" id="description" v-model="previewDescription"> </textarea>
                </li>
                <li>
                    <label for="price">Цена</label>
                    <input type="number" id="price" v-model="previewPrice">
                </li>
                <li>
                    <label for="link">Ссылка на товар</label>
                    <input type="text" id="link" v-model="previewLink">
                </li>
            </ul>

            <div class="form__preview__card">

                <label v-if="!previewImg" class="card__label card__label--file" for="file-input">
                    <font-awesome-icon v-if="!previewImg" class="card__icon--file" :icon="['fas', 'file-image']" />
                    <input class="card__input card__input--file" type="file" id="file-input"
                        @change="previewCard($event)">
                </label>
                <img v-if="previewImg" :src="previewImg" alt="" class="card__image">
                <h3 card__title>{{ previewName }}</h3>
                <p class="card__price">{{ previewPrice }} руб</p>
                <div class="card__user__info">
                    <div class="user__info--info">
                        <img :src="props.userImg" alt="User Avatar" class="card__img user__info--avatarImg" />
                        <span v-text='props.userName'></span>
                    </div>
                    <span class="user__info--date">{{ previewDate }}</span>
                </div>
            </div>


        </div>
        <button class="form__btn form__btn--add">добавить</button>
    </form>

</template>

<script setup>

import { updateDoc, doc, arrayUnion, getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import { ref, defineProps, defineEmits  } from 'vue'

const emit = defineEmits()

const db = getFirestore()
const auth = getAuth();


const previewImg = ref('')
const previewName = ref('')
const previewDescription = ref('')
const previewPrice = ref('')
const previewDate = ref(new Date().toLocaleDateString())
const previewLink = ref('')

const props = defineProps({
    userImg: {
        type: String
    },
    userName: {
        type: String
    },
    usersWhises: {
        type: Array
    }
})

const clearForm = () =>{
    previewName.value = ''
    previewDescription.value = ''
    previewPrice.value = ''
    previewLink.value = ''
    previewImg.value = ''
}


const createCardData = (previewImg, previewName, previewDescription,previewPrice, previewDate,previewLink) => {
    return {
        id: crypto.randomUUID(),
        img: previewImg || 'https://media.istockphoto.com/id/1308342088/vector/surprise-gift-box-gift-box-with-red-ribbon-bow-flat-style-element-design-for-giveaway.jpg?s=612x612&w=0&k=20&c=FUOJS2CFbYIqm4R7zfyKUdeS-gMyc3bGlRr1rL7rjQ0=',
        name: previewName,
        hover: false,
        description: previewDescription || 'Описание отсутствует. ',
        price: previewPrice || 0,
        date: previewDate,
        link: previewLink
    };

};


async function addWishToUser(userId, cardData) {
    try {
        const userDocRef = doc(db, 'users', userId);

        await updateDoc(userDocRef, {
            wishes: arrayUnion(cardData)
        });

        emit('addWish', cardData)


        console.log('Card successfully added to wishes!');
    } catch (error) {
        console.error('Error adding card to wishes:', error);
    }
}


const CreateCard = () => {
    const currentUser = auth.currentUser;
    const newCard = createCardData(previewImg.value, previewName.value, previewDescription.value, previewPrice.value, previewDate.value, previewLink.value); 
    addWishToUser(currentUser.uid, newCard); 
    clearForm()
}


const previewCard = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            previewImg.value = e.target.result;
        }
        reader.readAsDataURL(file);
    }
}



</script>


<style scoped>
.form{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.form__btn--add{
margin: 0;
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 10px;
  font-weight: 600;
  border-radius: 10px;
  border: none;
  background-color: #464241;
  color: white;
  cursor: pointer;
}


.user__info--date {
    font-size: 15px;
}

.user__info--info {
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 20px;
}

.card__label--file {
    width: 100%;
    border: 1px solid #ccc;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.form__preview__card h3,
p {
    margin: 0;
}

.card__image {
    width: 100%;
    border: 1px solid #ccc;
    height: 250px;
    object-fit: cover;
}

.card__user__info {
    display: flex;
    align-items: center;
    gap: 40px;
    margin-top: auto;
    padding: 5px;

}

.user__info--avatarImg {
    border: 1px solid black;
    width: 30px;
    height: 30px;
    border-radius: 50%;
}

.card__price {
    position: absolute;
    z-index: 1;
    right: 5%;
    top: 5%;
    background-color: white;
    padding: 2px;
    font-weight: 600;
}



.form__preview__card {
    position: relative;
    width: 250px;
    height: 400px;
    border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    text-align: center;
}



.form__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.form__list li {
    display: flex;
    align-items: center;
    gap: 20px;
}

.form__list input,
textarea {
    height: 20px;
    margin-bottom: 10px;
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.form__list textarea {
    resize: none;
    min-height: 80px;
}

.form__list label {
    flex: 0 0 150px;
}

.form__list {
    list-style-type: none;
    padding: 0;
}


.card__icon--file {
    font-size: 100px;
    color: rgb(236, 233, 233);
    transition: color 0.3s;
}

.card__input--file {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
}
</style>