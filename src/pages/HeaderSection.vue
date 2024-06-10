<template>
    <div class="w-full h-fit-content bg-no-repeat m-0">
        <section class="w-full">
            <NavigationPage/>
            <MainView/>
        </section>
    </div>
</template>
<script setup lang="ts">
// ---------------- Imports ---------------- //
import NavigationPage from './Navigation.vue';
import MainView from '@/views/MainView.vue';


// ---------------- Working Variable's ---------------- //

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