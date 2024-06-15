<template>
    <div class="w-full h-auto py-12 font-sans flex flex-col gap-8 items-center">
        <div class="flex justify-center gap-2 items-center cursor-pointer">
            <img src="../assets/images/Aj Logo.svg" class="w-8"/>
            <span class="text-3xl font-bold font-sans text-text tracking-[-2px]">Ajith</span>
        </div>

        <div class="flex items-center gap-8 text-sm">
            <div v-for="link in footerNavLink" :keys="link.title" class="flex flex-col gap-1 group text-slate-100/50">
                <span class="relative w-fit block cursor-pointer font-sans font-medium
                after:block after:content-[''] after:absolute after:h-[2px] after:bg-green-600 after:w-full
                after:scale-x-0 after:transition after:duration-300 after:origin-left
                group-hover:text-green-600 after:group-hover:scale-x-100">{{ link['title'] }}
                </span>
            </div>
        </div>

        <div class="text-xs">@ All rights reserved by <span class="text-green-500 font-semibold">Ajith {{ currentYear }}</span> </div>
    </div>
</template>
<script setup lang="ts">

const footerNavLink =[
    {'title': 'Home'},
    {'title': 'About'},
    {'title': 'Services'},
    {'title': 'Works'},
    {'title': 'Contact'},
]

const date = new Date()
const currentYear = date.getFullYear()
</script>