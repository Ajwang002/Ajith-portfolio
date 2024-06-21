<template>
    <div class="w-full h-20 bg-[#242424]">
        <nav class="h-full flex justify-between items-center flex-wrap p-3 rounded-3xl">
            <!-- Left Logo Side -->
            <div class="flex justify-center gap-2 items-center cursor-pointer">
                <img src="../assets/images/Aj Logo.svg" class="w-10"/>
                <span class="text-4xl font-bold font-sans text-text tracking-[-2px]">Ajith</span>
            </div>

            <!-- Center Navigation button-->
            <div class="flex items-center gap-8">
                <div v-for="link in navigationLinks" :keys="link" class="flex flex-col gap-1 group " :class="link.href.includes(activePath) ? 'text-green-500' : 'text-slate-100/50'"  @click="useNavigation(link.href)">
                    <span class="relative w-fit block cursor-pointer font-sans font-medium
                    after:block after:content-[''] after:absolute after:h-[2px] after:bg-green-500 after:w-full
                    after:scale-x-0 after:transition after:duration-300 after:origin-left
                    group-hover:text-green-500 after:group-hover:scale-x-100" >{{ link['title'] }}
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
// ------------------- Imports ------------------- //
import { watchEffect, ref } from 'vue';
import { useRoute } from 'vue-router';
import {useNavigation} from '@/composables/CommonFunctions'


// ------------------- Helping Constant ------------------- //
const route = useRoute()

// -------------- Working Variable's-------------- //
const navigationLinks = [
    {'title': 'Home', href: '/home'},
    {'title': 'About', href:'/about'},
    {'title': 'Services', href:'/service'},
    {'title': 'Works', href:'/home'},
    {'title': 'Contact', href: '/contacts'},
]
const activePath = ref('home')

// ---------- Watch ---------- //
watchEffect(() =>{
    var path = route.path
    if(path)
    {
        activePath.value = path.split('/')[1]
    }
})
</script>