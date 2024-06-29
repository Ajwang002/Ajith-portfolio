<template>
    <div class="w-full h-fit m-0">
        <section class="w-full h-fit">
            <NavigationPage class="sticky top-0 z-10 overflow-hidden w-full"/>
            <MainView class="w-full h-fit"/>
            <FooterView class="w-full h-fit"/>
        </section>
    </div>
</template>
<script setup lang="ts">
// ---------------- Imports ---------------- //
import NavigationPage from './Navigation.vue';
import MainView from '@/views/MainView.vue';
import FooterView from '@/views/FooterView.vue';



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