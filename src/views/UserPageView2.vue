<script setup lang="ts">

import WiNavbar from '@/components/WiNavbar.vue'
import WiProfileNavbar from '@/components/WiProfileNavbar.vue'
import WiUserPagePicturesEdit from '@/components/WiUser/WiUserPagePicturesEdit.vue'
import WiUserWishes from '@/components/WiUser/WiUserWishes.vue'
import { useProfileStore } from '@/stores/WiProfileStore'
import { onMounted, ref, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import SubscribeListView from './SubscribeListView.vue'
import WiReservedListView from './WiReservedListView.vue'
import WiSubscribeButton from '@/components/WiSubscribeButton.vue'

import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
import Button from 'primevue/button';
import ScrollPanel from 'primevue/scrollpanel';




const route = useRoute()
const loading = ref<boolean>(false)

// interface ComponentsMap {
//     WiUserWishes: typeof WiUserWishes
//     SubscribeListView: typeof SubscribeListView
// }

// const components: ComponentsMap = {
//     WiUserWishes,
//     SubscribeListView,
// }

const profileStore = useProfileStore()
const { getProfileData } = profileStore

// const currentComponent = ref<string>('WiUserWishes')

// function changeView(componentName: string): void {
//     currentComponent.value = componentName
// }


const activeWishType = ref('wishes');






watch(
    () => route.params.uid,
    async (newUid) => {
        await getProfileData(newUid as string)
    },
)

const formateBirthday = computed(() => {
    const date = profileStore.user?.birthday.toDate()
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}.${month}.${year}`

})

onMounted(async () => {
    try {
        loading.value = true
        const uid = route.params.uid as string
        await getProfileData(uid)
    }
    catch (err) {
        console.log('Пользователь не автроризован', err)
    }
    finally {
        loading.value = false
    }
})
</script>

<template>
    <main class="w-full h-screen p-3">
        <div class="min-h-full min-w-full border-round-3xl p-3 bg ">
            <div class="wrapper">
                <WiNavbar />

                <div class="grid">
                    <div class="md:col-4 col-12">
                        <div class="grid">

                            <div class="md:col-12 col-12">
                                <div class="text-center  border-round-lg  bg-primary font-bold md:h-20rem h-13rem">
                                    <section class="bg-white border-round  h-full overflow-hidden mb-2 shadow-1">
                                        <div class=" bg-white relative">
                                            <div class="w-full md:h-16rem h-10rem  border-round">
                                                <img :src="profileStore.user?.wallpaperUrl" alt="Обложка профиля"
                                                    class="w-full h-full img" />
                                            </div>
                                            <div
                                                class="overflow-hidden border-circle w-6rem h-6rem md:w-9rem md:h-9rem avatar">
                                                <img :src="profileStore.user?.photoUrl" alt="Обложка профиля"
                                                    class="w-full h-full">
                                            </div>
                                        </div>

                                        <div class="p-2">
                                            <div class="flex justify-content-center flex-column align-items-center">
                                                <p class="text-xl md:text-3xl font-semibold m-0  text-blue-500">
                                                    {{ profileStore.user?.displayName }}</p>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>

                            <div class="col-12">

                                <div v-if="profileStore.user?.birthday"
                                    class="border-round-lg  md:h-6rem h-3rem shadow-1 bg-2 overflow-hidden">
                                    <div class="bg-text flex align-items-center justify-content-center">
                                        <h2 class="text-blue-500 md:text-3xl text-xl">{{ formateBirthday }}</h2>
                                    </div>
                                </div>

                            </div>

                            <div class="col-12 flex">
                                <div
                                    class="border-round-lg  bg-white flex-grow-1 flex align-items-center  h-10rem justify-content-center shadow-1 p-3 text-600">
                                    <p>{{ profileStore.user?.about }}</p>
                                </div>
                            </div>




                            <div class="col-6 cursor-pointer" @click="activeWishType = 'reservedWishes'">
                                <div class="border-round-lg  bg-white h-8rem flex flex-column  shadow-1 p-3">
                                    <p class="m-0 font-bold text-primary">Подарки</p>
                                    <div class="p-2">
                                        <WiReservedListView />
                                    </div>
                                </div>
                            </div>


                            <div class="col-6">

                                <div class="border-round-lg bg-white h-8rem flex flex-column  shadow-1 p-3">
                                    <p class="m-0 font-bold text-primary">Подписки</p>
                                    <div class="p-2">
                                        <SubscribeListView />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div class="md:col-8 col-12 flex gap-2 flex-column">

                        <div class="text-center  border-round-lg  bg-white h-3rem flex  justify-content-center">
                            <ButtonGroup class="flex gap-3 p-1">
                                <Button label="вишлист" icon="pi pi-book" @click="activeWishType = 'wishes'"  :variant="activeWishType === 'wishes' ? ' ' : 'text'"/>
                                <Button label="подарки" icon="pi pi-sparkles" :variant="activeWishType === 'reservedWishes' ? ' ' : 'text'" @click="activeWishType = 'reservedWishes'"/>
                            </ButtonGroup>
                        </div>


                        <div class="text-center  border-round-lg  bg-white overflow-hidden">
                            <div class="bg-white border-round  gap-3">
                                <ScrollPanel style="width: 100%; height: 585px">
                                    <div>
                                        <WiUserWishes :wish-type="activeWishType" />
                                    </div>
                                </ScrollPanel>
                            </div>
                        </div>
                    </div>

                </div>





            </div>
        </div>
    </main>


</template>

<style scoped>
.img {
    object-fit: cover;
}

.avatar {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.bg {
    background-image: url('@/components/icons/bg.svg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}


.bg-2 {
    background-image: url('@/components/icons/bg-date.avif');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.bg-text {
    background-color: rgba(255, 255, 255, 0.6);
    width: 100%;
    height: 100%;
}

.wrapper {
    max-width: 1600px;
    margin: auto;
}
</style>
