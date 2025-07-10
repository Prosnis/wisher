<script setup lang="ts">
import UiButton from '@/components/Ui/UiButton.vue';
import WiNavbar from '@/components/WiNavbar.vue'
import WiUserWishes from '@/components/WiUser/WiUserWishes.vue';
import { useProfileStore } from '@/stores/WiProfileStore'
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import UiSkeleton from '@/components/Ui/UiSkeleton.vue'

const route = useRoute()
const profileStore = useProfileStore()
const { getProfileData } = profileStore
const wishType = ref('wishes')
const isLoading = ref(true)



onMounted(async () => {
    try {
        isLoading.value = true
        const uid = route.params.uid as string
        await getProfileData(uid)
    } catch (e) {
        console.error(e)
    } finally {
        isLoading.value = false
    }
})
</script>


<template>
    <WiNavbar />

    <UiSkeleton :isLoading="isLoading" class="">
        <div class="user-wishes">


            <div class="user-wishes__header">
                <div class="user-wishes__info">

                    <div class="user-wishes__name">
                        @{{ profileStore.user?.displayName }}
                    </div>
                    <div class="user-wishes__list">
                        <UiButton class="user-wishes__btn" @click="wishType = 'wishes'">все желания</UiButton>
                        <UiButton class="user-wishes__btn" @click="wishType = 'reservedWishes'">забронированы</UiButton>
                        <UiButton class="user-wishes__btn" @click="wishType = 'fulfilledWishes'">исполнены</UiButton>
                    </div>

                </div>
            </div>


            <div class="user-wishes__image-wrapper">
                <img :src="profileStore.user?.photoUrl" alt="user image" class="user-wishes__avatar">
            </div>


            <div class="user-wishes__wishes-list"
                :style="{ backgroundImage: profileStore.user?.wallpaperUrl ? `url('${profileStore.user.wallpaperUrl}')` : 'none' }">
                <WiUserWishes :wish-type="wishType" />
            </div>

        </div>
    </UiSkeleton>

</template>


<style lang="scss" scoped>
@use '@/styles/colors';
@use '@/styles/mixins';

.user-wishes {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 300px 1fr;
    background-color: $color-background-grey;
    border-radius: 20px;
    padding: 20px;
    gap: 20px;
    min-height: calc(100vh - 100px);
    place-items: center;
    grid-template-areas:
        "control user"
        "wishes wishes";


    @include mobile {
        grid-template-areas:
            "control"
            "user"
            "wishes";

        grid-template-columns: 1fr;
        grid-template-rows: 200px;
    }

    &__header {
        grid-area: user;
        border-radius: 20px;
        color: white;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        position: relative;
        cursor: pointer;
        font-size: 2rem;

    }

    &__info {
        display: flex;
        flex-direction: column;
        position: relative;
        align-items: center;
        gap: 20px;
    }

    &__name {
        font-size: 56px;
        font-weight: 600;
        margin: 0;
        align-self: center;

        @include mobile {
            font-size: 20px;
        }
    }

    &__list {
        display: flex;
        gap: 10px;
    }

    &__btn {
        @include mobile {
            font-size: 12px;
        }
    }

    &__icon-share {
        position: absolute;
        top: -90px;
        right: -120px;
        font-size: 25px;
    }

    &__image-wrapper {
        grid-area: control;
        overflow: hidden;
        border-radius: 50%;
        width: 300px;
        height: 300px;

        @include mobile {
            width: 150px;
            height: 150px;
        }
    }

    &__avatar {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &__wishes-list {
        grid-area: wishes;
        background-size: cover;
        background-attachment: fixed;
        border-radius: 20px;
        padding: 50px;
    }

    &__add-card {
        width: 200px;
        height: 200px;
        border: 1ps solid white;
    }
}
</style>