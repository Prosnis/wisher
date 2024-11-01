<template>
    <div class="card__preview">
        <div class="card__preview__description">

            <div class="preview__user">
                <div class="preview__user--avatar">
                    <img class="user__avatar" :src="props.userImg" alt="">
                </div>
                <span class="user__name">{{ props.userName }} <span style="font-size: 20px; font-style: italic;">указал ссылку </span><a :href="wish.link" target="_blank" class="card__preview--link"><font-awesome-icon :icon="['fas', 'up-right-from-square']" /></a></span>
            </div>

            <h1 class="card__preview--title">{{ wish.name }}</h1>

            <div class="card__preview--img">
                <img class="preview__img" :src="wish.img" alt="">
            </div>
        </div>

        <div class="card__preview__details">
            <div class="test">
                <div class="icon-wrapper">
                    <a :href="'https://www.ozon.ru/search/?from_global=true&text=' + encodeURIComponent(wish.name)"  target="_blank" class="preview__details-link details-link--ozon">
                        <img class="icon" src="@/components/icons/ozon.png" alt="">
                    </a>
                </div>
                <div class="icon-wrapper">
                    <img class="icon" src="@/components/icons/ym.png" alt="">
                </div>
                <div class="icon-wrapper">
                    <img class="icon" src="@/components/icons/wb.png" alt="">
                </div>
            </div>
            <div class="card__preview__details-links">
                <a :href="'https://www.ozon.ru/search/?from_global=true&text=' + encodeURIComponent(wish.name)"    target="_blank" class="preview__details-link details-link--ozon">найти на OZON<font-awesome-icon :icon="['fas', 'up-right-from-square']" /></a>
                <a :href="'https://www.wildberries.ru/catalog/0/search.aspx?search=' + encodeURIComponent(wish.name)" target="_blank" class="preview__details-link details-link--wildberries"> найти на WILDBERRIES<font-awesome-icon :icon="['fas', 'up-right-from-square']" /></a>
                <a :href="'https://market.yandex.ru/search?text=' + encodeURIComponent(wish.name)"  target="_blank" class="preview__details-link details-link--yandex">найти на YANDEX MARKET<font-awesome-icon :icon="['fas', 'up-right-from-square']" /></a>
            </div>
            <div class="card__preview--actions">
                <font-awesome-icon class="actions__icon actions__icon--add" :icon="['fas', 'square-plus']" />
                <font-awesome-icon class="actions__icon actions__icon--like" :icon="['fas', 'heart']" />
            </div>
        </div>
    </div>
</template>





<script setup>

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

</script>




<style scoped>

.test {
    display: flex;
    gap: 10px;
}
.icon-wrapper{
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 15%;
}

.icon{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card__preview--actions{
    display: flex;
    flex-direction: column;
}
.preview__details-link{
    padding: 5px;
    font-size: 20px;
    text-align: center;
    color: white;
    font-weight: 800;
    border: none;
    border-radius: 5px;
}

.details-link--ozon{
    background-color: #005bff;
}
.details-link--yandex{
    background-color: #fce000;
}
.details-link--wildberries{
    background-color: #a73afd;
}


.card__preview__details-links{
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.card__preview {
    border: 1px solid black;
    display: flex;
}

.preview__user--avatar {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    overflow: hidden;
}

.user__avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.user__name {
    font-size: 30px;
}

.preview__user {
    display: flex;
    align-items: center;
    gap: 5px;
}

.card__preview--img {
    width: 400px;
    height: 400px;
    overflow: hidden;
}

.preview__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card__preview--link {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;
    font-size: 15px;
}

.card__preview--link:hover {
    color: #0056b3;
    text-decoration: underline;
}

.card__preview--link:active {
    color: #003f7f;
}

.actions__icon {
    font-size: 35px;
    color: #bbc9d8;
}
</style>