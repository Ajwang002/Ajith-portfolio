<template>
    <div class="max-w-screen-xl mx-auto mt-7">
        <nav class="flex justify-between flex-wrap bg-primary/95 p-5 rounded-2xl">
            <!-- Left Logo Side -->
            <div class="flex justify-center items-center rounded-full bg-background border-x-[10px] border-secondary w-12 aspect-square">
                <span class="font-serif font-black text-xl text-primary">Aj</span>
            </div>

            <!-- Center Navigation button-->
            <div class="flex items-center gap-8">
                <div v-for="link in navigationLinks" :keys="link" class="flex flex-col gap-1 group">
                    <span class="relative w-fit block font-medium cursor-pointer
                    after:block after:content-[''] after:absolute after:h-[2px] after:bg-secondary after:w-full
                    after:scale-x-0 after:transition after:duration-300 after:origin-left
                    group-hover:text-secondary after:group-hover:scale-x-100">{{ link['title'] }}
                    </span>
                </div>
            </div>

            <!-- Right Contact us Button-->
            <div class="flex justify-center items-center rounded-xl bg-gradient-to-r from-secondary/80 via-secondary-90 to-secondary hover:bg-gradient-to-l cursor-pointer px-5 animate-bounce hover:animate-none">
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