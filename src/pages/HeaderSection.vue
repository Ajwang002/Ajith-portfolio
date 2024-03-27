<template>
    <div class="relative w-full h-fit-content bg-no-repeat bg-fixed" style="background-image: url('src/assets/images/BG_Sample-1.png'); background-size: 100% 100%;">
        <!-- Navigation Bar -->
        <!-- <Navigation class="absolute top-5 left-0 right-0 z-10"/> -->

        <!-- Content Section -->
        <div v-if="false" class="max-w-screen-xl h-[500px] flex flex-wrap bg-red-800/30 mx-auto mt-6">
            <div class="w-1/2 h-full flex flex-col justify-around p-5">
                <div class="bg-background w-fit py-3 px-5 rounded-lg text-blue-600 font-medium text-bubble">
                    Hi There!
                </div>
                <div>
                    <div class="text-5xl font-mono">Iam <span class="text-secondary">Ajithkumar</span></div>
                </div>
            </div>
            <div class="w-1/2 h-full p-5">

            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
// ---------- Imports ---------- //
// import Navigation from '@/pages/Navigation.vue';
</script>
<style>
.text-bubble
{
    position: relative;
}
.text-bubble:after{
    position: absolute;
    display: block; 
    width: 0; 
    content: "";
    border: 10px solid transparent;
    border-top-color: white;
    border-bottom: 0;
    bottom: -10px; left: calc(50% - 10px);
}
</style>