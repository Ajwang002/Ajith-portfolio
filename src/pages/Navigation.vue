<template>
    <div class="max-w-screen-xl mx-auto mt-7">
        <nav class="flex justify-between flex-wrap bg-primary p-5 rounded-full">
            <!-- Left Logo Side -->
            <div class="flex justify-center items-center rounded-full bg-background border-[3px] border-secondary w-12 aspect-square">
                <span class="font-serif font-black text-xl text-primary">Aj</span>
            </div>

            <!-- Center Navigation button-->
            <div class="flex items-center gap-8">
                <div v-for="link in navigationLinks" :keys="link">
                    <span class="cursor-pointer font-medium">{{ link['title'] }}</span>
                </div>
            </div>

            <!-- Right Contact us Button-->
            <div class="flex justify-center items-center rounded-full bg-secondary hover:bg-secondary/90 cursor-pointer px-5">
                <span class="font-medium">Contact</span>
            </div>
        </nav>
    </div>
</template>
<script setup lang="ts">
// -------------- Navigation Links -------------- //
const navigationLinks = [
    {'title': 'Home'},
    {'title': 'About'},
    {'title': 'Service'},
    {'title': 'Portfolio'},
]
</script>