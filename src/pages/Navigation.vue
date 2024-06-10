<template>
    <div class="w-full pt-1">
        <nav class="flex justify-between items-center flex-wrap p-3 rounded-3xl">
            <!-- Left Logo Side -->
            <div class="flex justify-center gap-2 items-center">
                <img src="../assets/images/Aj Logo.svg" class="w-10"/>
                <span class="text-4xl font-bold font-sans text-text tracking-[-4px]">Ajith</span>
            </div>

            <!-- Center Navigation button-->
            <div class="flex items-center gap-8">
                <div v-for="link in navigationLinks" :keys="link" class="flex flex-col gap-1 group text-slate-100/50">
                    <span class="relative w-fit block cursor-pointer font-sans font-medium
                    after:block after:content-[''] after:absolute after:h-[2px] after:bg-green-600 after:w-full
                    after:scale-x-0 after:transition after:duration-300 after:origin-left
                    group-hover:text-green-600 after:group-hover:scale-x-100">{{ link['title'] }}
                    </span>
                </div>
            </div>

            <!-- Right Contact us Button-->
            <div class="h-10 flex justify-center items-center text-text rounded-xl bg-gray-600/40 cursor-pointer px-5 animate-bounce hover:animate-none">
                <span class="font-medium">Lets talk</span>
            </div>
        </nav>
    </div>
</template>
<script setup lang="ts">
// -------------- Navigation Links -------------- //
const navigationLinks = [
    {'title': 'Home'},
    {'title': 'About'},
    {'title': 'Services'},
    {'title': 'Works'},
    {'title': 'Contact'},
]
</script>