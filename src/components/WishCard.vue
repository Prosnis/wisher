<template>
    <div class="card">
        <img :src="wish.img" alt="" class="card__image">
        <h3 card__title>{{ wish.name }}</h3>
        <p class="card__price">{{ wish.price }} руб</p>
        <div class="card__user__info">
            <div class="user__info--info">
                <img :src="props.userImg" alt="User Avatar" class="card__img user__info--avatarImg" />
                <span v-text='props.userName'></span>
            </div>
            <span class="user__info--date">{{ new Date().toLocaleDateString() }}</span>
        </div>

    </div>
</template>

<script setup>


import { ref } from 'vue';


const props = defineProps({
    wish: {
        type: Object,
    },
    userImg: {
        type: String
    },
    userName: {
        type: String
    }
});

const hover = ref(false);
const handleLike = () => { };
const handleComment = () => { };
const handleAdd = () => { };
</script>

<style>
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

.card h3,
p {
    margin: 0;
}

.card__image {
    width: 100%;
    border: 1px solid #ccc;
    height: 250px;
    object-fit: cover;
    border-radius: 10% 10% 0 0;
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




.card {
    position: relative;
    width: 250px;
    height: 400px;
    border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    text-align: center;
    border-radius: 10%;
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