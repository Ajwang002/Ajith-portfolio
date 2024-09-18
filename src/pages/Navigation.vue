<template>
    <div class="w-full h-20 backdrop-blur-3xl bg-transparent">
        <nav class="h-full flex justify-between items-center flex-wrap p-3 rounded-3xl">
            <!-- Left Logo Side -->
            <div class="flex justify-center gap-2 items-center cursor-pointer" @click="activePath !== 'home' ? useNavigation('home') : null">
                <img src="../assets/images/Aj Logo.svg" class="w-10"/>
                <span class="text-4xl font-bold font-sans text-text tracking-[-2px]">Ajith</span>
            </div>

            <!-- Center Navigation button-->
            <div class="flex items-center gap-8">
                <div v-for="link in navigationLinks" :keys="link" class="flex flex-col gap-1 group " :class="link.href.includes(activePath) ? 'text-green-500' : 'text-slate-100/50'"  @click="useNavigation(link.href)">
                    <span class="relative w-fit block cursor-pointer font-sans font-medium
                    after:block after:content-[''] after:absolute after:h-[2px] after:bg-red-500 after:w-full
                    after:scale-x-0 after:transition after:duration-300 after:origin-left
                    group-hover:text-green-500 after:group-hover:scale-x-100" >{{ link['title'] }}
                    </span>
                </div>
            </div>

            <!-- Right Contact us Button-->
            <div class="h-10 flex justify-center items-center text-text rounded-xl bg-gradient-to-br from-green-400 via-green-500 to-green-600 cursor-pointer px-5 animate-bounce hover:animate-none hover:from-red-400 hover:to-red-600">
                <span class="font-medium">Hire Me</span>
            </div>
        </nav>
    </div>
</template>
<script setup lang="ts">
// ------------------- Imports ------------------- //
import { watchEffect, ref } from 'vue';
import { useRoute } from 'vue-router';
import {useNavigation} from '@/composables/CommonFunctions'
import {navigationLinks} from '@/utils/constants'


// ------------------- Helping Constant ------------------- //
const route = useRoute()

// -------------- Working Variable's-------------- //
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