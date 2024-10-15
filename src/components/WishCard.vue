<template>
    <div class="card" @mouseenter="hover = true" @mouseleave="hover = false">
        <img class="card__img" :src="wish.img" alt="">
        <p class="card__title">{{ wish.name }}</p>
        <p class="card__description">{{ wish.description }}</p>
        <div class="card__icons" v-if="hover">
            <font-awesome-icon class="card_icons_icon" :icon="['fas', 'heart']" @click="handleLike" />
            <font-awesome-icon class="card_icons_icon" :icon="['fas', 'add']" @click="handleAdd" />
            <font-awesome-icon class="card_icons_icon" :icon="['fas', 'comment']" @click="handleComment" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const hover = ref(false);
const handleLike = () => {};
const handleComment = () => {};
const handleAdd = () => {};
</script>

<style >
.card {
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    padding-bottom: 10px;
    transition: transform 0.2s ease-in;
    box-shadow: 0px 10px 40px rgba(126, 155, 189, 0.35);
    position: relative;
    color: rgb(0, 0, 0);
    background-color: #ffffff;
}

.card:hover {
    transform: scale(1.05);
}


.card__icons {
    display: flex;
    justify-content: center;
    gap: 10px;
    color: #4c4ed1;
    margin-top: auto;
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(170, 170, 172, 0.521)
}

.card_icons_icon {
    margin-left: 10px;
    font-size: 30px;
    padding: 10px;
    border-radius: 50px;
}

.card-icon:hover{
    transform: scale(2);
    cursor: pointer;
}


.card__img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
}

.icon {
  font-size: 24px;
  cursor: pointer;
  color: #3598db;
  transition: color 0.3s ease;
}


.card__title {
    margin: 10px 0 0;
    font-size: 18px;
}



.users-wishes {
    margin: auto;
    text-align: center;

}

.cards-list {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    padding: 5px;
}


.card__description{
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 60px;
}

</style>