<script setup lang="ts">
import WiNavbar from '@/components/WiNavbar.vue'
import WiUserWishes from '@/components/WiUser/WiUserWishes.vue';
import { onMounted } from 'vue';
import { useProfileStore } from '@/stores/WiProfileStore'
import { useRoute } from 'vue-router';

const route = useRoute()
const profileStore = useProfileStore()
const { getProfileData } = profileStore

onMounted(async () => {
    const uid = route.params.uid as string
    await getProfileData(uid)
})
</script>


<template>
    <WiNavbar />
    <!-- <WiUserWishes wish-type="reservedWishes"/>
    <WiUserWishes wish-type="fulfilledWishes"/>
    <WiUserWishes wish-type=""/> -->

    <div class="container">
        <div class="user">
            <div class="user_wrapper">
                <div class="user__name">
                    @{{ profileStore.user?.displayName }}
                </div>
                <div class="user__image">
                    <img :src="profileStore.user?.photoUrl" alt="user image" class="user__image__avatar">
                </div>
                <i class="pi pi-arrow-up-right person__info__icon-share" />
            </div>
        </div>
        <div class="control">
            <ul>
                <li>+ новый вишлист</li>
                <li>мои желания</li>
                <li> безделушки</li>
                <li>пабрекушки</li>
                <li>секретное</li>
                <li>забронировал</li>
                <li>исполненно</li>
            </ul>
        </div>
        <div class="wishes">
            <WiUserWishes wish-type="" />
        </div>
    </div>


</template>


<style lang="scss" scoped>
.person__info__icon-share {
    position: absolute;
    top: -90px;
    right: -120px;
    font-size: 25px;
}

.user_wrapper {
    display: flex;
    position: relative;
    gap: 20px;
}

.user__image {
    grid-area: b;
    overflow: hidden;
    width: 140px;
    height: 140px;
    border-radius: 50%;
}

.user__image__avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.user__name {
    font-size: 56px;
    font-weight: 600;
    margin: 0;
    align-self: center;
}

.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: .5fr 1fr 1.5fr;
    gap: 20px;
    grid-template-areas:
        "control user user"
        "wishes wishes wishes"
        "wishes wishes wishes";
}

.user {
    grid-area: user;
    background-color: #3399FF;
    border-radius: 20px;
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    position: relative;
    cursor: pointer;
    font-size: 2rem;
    background: linear-gradient(300deg, #3399FF 0%, #4369e6 70%);

}

.control {
    grid-area: control;
    background-color: #3399FF;

    border-radius: 20px;
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    position: relative;
    cursor: pointer;
    font-size: 2rem;
    background: linear-gradient(300deg, #3399FF 0%, #4369e6 70%);
}

.wishes {
    grid-area: wishes;
    background-color: #3399FF;
    border-radius: 20px;
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    position: relative;
    cursor: pointer;
    font-size: 2rem;
    background: linear-gradient(300deg, #3399FF 0%, #4369e6 70%);
    padding: 20px;
}
</style>