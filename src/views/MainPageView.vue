<script setup>
import Button from 'primevue/button';
import WiNavbar from '@/components/WiNavbar.vue';
</script>



<template>
    <main class="min-w-full min-h-screen p-3 flex ">

        <div class="min-h-full min-w-full border-round-3xl p-3 bg ">
            <div class="wrapper">
                <WiNavbar />

                <div class="grid align-items-center h">
                    <div class="col-12 md:col-6">
                        <p class="text-7xl line-height-2 font-medium"> Lorem <br> <span
                                class="text-blue-500">ipsum</span><br> dolor</p>
                        <span class="text-2xl">С Wisher вы можете Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Pariatur praesentium laborum totam accusantium quia exercitationem reiciendis eveniet
                            dolores tempore nemo nostrum necessitatibus quis, ea laudantium. Aliquam sed labore fuga
                            sapiente..</span>
                    </div>

                    <div class="col-12 md:col-6 relative">
                        <img class="hero__image border-round-3xl" src="@/components/icons/main.avif" alt=""
                            loading="lazy">
                        <div class="qwe">
                            <Button type="button"
                                class="bg-white border-round-3xl text-color flex justify-content-around font-semibold border-none p-2 ">
                                создать вишлист
                                <i class="pi pi-arrow-up-right"></i>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </main>
</template>



<style scoped>

.qwe {
    position: absolute;
    top: 85%;
    left: 70%;
    transform: translate(-50%, -50%);
} 

.pi-arrow-up-right {
  border: #3D5AFE 2px solid;
  border-radius: 50%;
  padding: 8px;
  color: white;
  background-color: #3D5AFE
}


.h {
    min-height: 85vh;
}

.wrapper {
    max-width: 1600px;
    margin: auto;
}

.hero__image {
    width: 100%;
    height: 700px;
    object-fit: cover;
}

.bg {
    background-image: url('@/components/icons/bg.svg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>