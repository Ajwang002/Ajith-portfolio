<template>
    <div class="w-full h-auto py-12 font-sans text-xs flex flex-col gap-4">

        <!-- Top Section -->
        <section class="grid grid-cols-2 gap-4 h-[250px]">

            <!-- Profile Column -->
            <div class="p-7 pb-9  bg-indigo-800/10 backdrop-blur-md border-2 border-indigo-700 hover:border-indigo-600/90  flex flex-row gap-5 rounded-2xl shadow-xl shadow-violet-900/30 drop-shadow-lg "
            ref="targetEl"
            :style="{
                 transform: cardTransform,
                 transition: 'transform 0.2s ease-out'
            }"
            v-motion
            :initial="{ opacity: 0, y: 500 }"
            :enter="{ opacity: 1, y: 0, scale: 1 }"
            :delay="50"
            :duration="1200">
                <div class="basis-1/2">
                    <img src="../assets/images/Aj Logo.png" class="h-44 mx-auto"/>
                </div>
                <div class="basis-1/2 flex flex-col justify-center items-start">
                    <div class="text-secText text-xl font-bold mb-3">
                        <span>A WEB</span>
                        <span class="ml-1">
                            <vue-typer
                            class="custom"
                            :text='["DEVELOPER", "DESIGNER"]'
                            :repeat='Infinity'
                            :shuffle='false'
                            initial-action='typing'
                            :pre-type-delay='10'
                            :type-delay='100'
                            :pre-erase-delay='2000'
                            :erase-delay='100'
                            erase-style='backspace'
                            :erase-on-complete='false'
                            caret-animation='blink'
                            ></vue-typer>
                        </span>
                    </div>
                    <div class="flex flex-col justify-center items-start text-text">
                        <span class="text-5xl">Ajithkumar</span>
                        <span class="text-4xl">Venkatrman</span>
                    </div>
                    <div class="mt-3 text-secText">
                        Iam a Web Developer & Designer based on India.
                    </div>
                </div>
            </div>

            <div class="flex flex-col gap-4">
                <!-- bg-blue-100/10 backdrop-blur-md  -->
                <div class="basis-2/12 p-2 px-5 backdrop-blur-md bg-blue-500/10 border-2 border-indigo-700/70 text-secText rounded-2xl overflow-y-hidden"
                v-motion
                :initial="{ opacity: 0, y: -500 }"
                :enter="{ opacity: 1, y: 0, scale: 1 }"
                :variants="{ custom: { scale: 2 } }"
                :delay="50"
                :duration="1200">
                    <div class="h-full overflow-y-hidden uppercase flex items-center text-text font-semibold leading-10">
                        <marquee>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem cumque ducimus dicta temporibus atque, sit nulla cum quas perferendis ut reiciendis voluptates, ex ad, accusamus expedita? Eaque suscipit aliquid pariatur!</marquee>
                    </div>
                </div>

                <div class="basis-10/12 flex gap-4 ">
                    <div class="basis-1/2 p-5 flex flex-col bg-blue-900/30 backdrop-blur-md border-2 border-indigo-700/30 rounded-2xl shadow-sm shadow-indigo-600"
                    v-motion
                    :initial="{ opacity: 0, x: 500 }"
                    :enter="{ opacity: 1, x: 0, scale: 1 }"
                    :variants="{ custom: { scale: 2 } }"
                    :delay="50"
                    :duration="1200">
                        <div class="basis-8/12 overflow-hidden flex items-center justify-center">
                            <img src="../assets/images/Aj Logo.svg" class="w-full h-20 mx-auto"/>
                        </div>

                        <div class="basis-4/12 flex justify-between items-center">
                            <div class="flex flex-col items-start">
                                <div class="text-secText">
                                    MORE ABOUT ME
                                </div>
                                <div class="text-text text-2xl font-bold">
                                    Credentials
                                </div>
                            </div>
                            <div class="h-10 flex justify-center items-center text-text rounded-xl bg-green-500 cursor-pointer px-5" @click="useNavigation('/credential')">
                                <ArrowRightIcon class="text-text w-5 h-5"/>
                            </div>
                        </div>
                    </div>

                    <div class="basis-1/2 p-5 flex flex-col  bg-blue-900/30 backdrop-blur-md border-2 border-indigo-700/30 rounded-2xl shadow-sm shadow-indigo-600"
                    v-motion
                    :initial="{ opacity: 0, x: -500 }"
                    :enter="{ opacity: 1, x: 0, scale: 1 }"
                    :variants="{ custom: { scale: 2 } }"
                    :delay="50"
                    :duration="1200">
                        <div class="basis-8/12 overflow-hidden flex items-center justify-center">
                            <img src="../assets/images/Aj Logo.svg" class="w-full h-20 mx-auto"/>
                        </div>

                        <div class="basis-4/12 flex justify-between items-center">
                            <div class="flex flex-col items-start">
                                <div class="text-secText">
                                    SHOW CASE
                                </div>
                                <div class="text-text text-2xl font-bold">
                                    Portfolios
                                </div>
                            </div>
                            <div class="h-10 flex justify-center items-center text-text rounded-xl bg-green-500  cursor-pointer px-5 ">
                               <ArrowRightIcon class="text-text w-5 h-5"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Middle Section -->
        <section class="grid grid-cols-4 gap-4 h-[250px]">

            <!-- CV Download Section -->
            <div class="p-7 bg-blue-900/30 backdrop-blur-md border-2 border-indigo-700/30 rounded-2xl shadow-sm shadow-indigo-600"
            v-motion
            :initial="{ opacity: 0, x: 500 }"
            :enter="{ opacity: 1, x: 0, scale: 1 }"
            :variants="{ custom: { scale: 2 } }"
            :delay="50"
            :duration="1200">
                <div class="basis-9/12 overflow-hidden flex items-center justify-center">
                    <img src="../assets/images/cvDownload.png" class="w-auto h-[126px] object-contain mx-auto"/>
                </div>

                <div class="basis-3/12 flex justify-between items-end">
                    <div class="flex flex-col items-start">
                        <div class="text-secText">
                            MY CV
                        </div>
                        <div class="text-text text-2xl font-bold">
                            Download
                        </div>
                    </div>
                    <div class="h-10 flex justify-center items-center text-text rounded-xl bg-green-500  cursor-pointer px-5 ">
                        <ArrowDownTrayIcon class="text-text w-6 h-6"/>
                    </div>
                </div>
            </div>

            <!-- Service Providing Section -->
            <div class="col-span-2 p-7  bg-blue-900/30 backdrop-blur-md border-2 border-indigo-700/30 rounded-2xl shadow-sm shadow-indigo-600flex flex-col gap-5"
            v-motion
            :initial="{ opacity: 0, scale: 0 }"
            :enter="{ opacity: 1, scale: 1 }"
            :variants="{ custom: { scale: 2 } }"
            :delay="50"
            :duration="1200">
                <div class="basis-9/12 grid grid-cols-2 gap-4">
                    <div v-for="(service, idx) in serviceDetails" :key="idx" class="service-img group rounded-2xl cursor-pointer">
                        <span class="service-text opacity-0 group-hover:opacity-100 text-xl font-medium text-text">{{ service.name }}</span>
                        <img :src="service.image" class="w-auto h-[126px] object-contain mx-auto opacity-100 group-hover:opacity-10"/>
                    </div>
                </div>

                <div class="basis-3/12 flex justify-between items-end">
                    <div class="flex flex-col items-start">
                        <div class="text-secText">
                            SPECIALIZATION
                        </div>
                        <div class="text-text text-2xl font-bold">
                            Services Offering
                        </div>
                    </div>
                    <div class="h-10 flex justify-center items-center text-text rounded-xl bg-green-500  cursor-pointer px-5 ">
                       <ArrowRightIcon class="text-text w-5 h-5"/>
                    </div>
                </div>
            </div>


            <!-- Social Media Profile Section -->
            <div class="p-7  bg-blue-900/30 backdrop-blur-md border-2 border-indigo-700/30 rounded-2xl shadow-sm shadow-indigo-600 flex flex-col gap-5"
            v-motion
            :initial="{ opacity: 0, x: -500 }"
            :enter="{ opacity: 1, x: 0, scale: 1 }"
            :variants="{ custom: { scale: 2 } }"
            :delay="50"
            :duration="1200">
                <div class="basis-9/12 w-full overflow-hidden flex justify-between items-center">
                    <div v-for="icon in ['instagram', 'linkedin', 'twitter']" :key="icon" class="w-3/12 aspect-square flex justify-center items-center  bg-slate-200/70 rounded-full cursor-pointer">
                        <Unicon :name="icon" fill="#64748b" hover-fill="#0000FF" width="32" height="32" />
                    </div>
                </div>

                <div class="basis-3/12 flex justify-between items-end">
                    <div class="flex flex-col items-start">
                        <div class="text-secText">
                            STAY WITH ME
                        </div>
                        <div class="text-text text-2xl font-bold">
                            Profiles
                        </div>
                    </div>
                    <div class="h-10 flex justify-center items-center text-text rounded-xl bg-green-500  cursor-pointer px-5">
                       <ArrowRightIcon class="text-text w-5 h-5"/>
                    </div>
                </div>
            </div>
        </section>

        <!-- Bottom Section -->
        <section class="grid grid-cols-2 gap-4 h-[250px]">

            <!-- CV Download Section -->
            <div class="p-7 border-2 border-indigo-500/50 w-full flex justify-between gap-2 rounded-2xl"
            v-motion
            :initial="{ opacity: 0, x: -500, y:-500 }"
            :enter="{ opacity: 1, x: 0, y: 0, scale: 1 }"
            :variants="{ custom: { scale: 2 } }"
            :delay="50"
            :duration="1200">
                <div v-for="data in experienceDetails" :key="data.value" class="w-4/12 h-full p-7  bg-blue-900/30 backdrop-blur-md border-2 border-indigo-700/30 rounded-2xl shadow-sm shadow-indigo-600  flex flex-col gap-2 justify-center items-center">
                    <span class="text-5xl text-text">{{ data.value }}</span>
                    <span class="text-secText">{{ data.title }}</span>
                </div>
            </div>

            <!-- Service Providing Section -->
            <div class="p-7  bg-blue-900/30 backdrop-blur-md border-2 border-indigo-700/30 rounded-2xl shadow-sm shadow-indigo-600 flex flex-col gap-4"
            v-motion
            :initial="{ opacity: 0, x: 500, y:-500 }"
            :enter="{ opacity: 1, x: 0, y: 0, scale: 1 }"
            :variants="{ custom: { scale: 2 } }"
            :delay="50"
            :duration="1200">
                <div class="basis-5/12 grid grid-cols-2 gap-4">
                </div>

                <div class="basis-7/12 flex justify-between items-end">
                    <div class="flex flex-col items-start">
                        <div class="text-text text-5xl font-bold">
                            Let's
                        </div>
                        <div class="text-text text-5xl font-bold">
                            Work <span class="text-important">together.</span>
                        </div>
                    </div>
                    <div class="h-10 flex justify-center items-center text-text rounded-xl bg-green-500 cursor-pointer px-5 " @click="useNavigation('/contacts')">
                       <ArrowRightIcon class="text-text w-5 h-5"/>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup lang="ts">
// ------------- imports ------------- //
import { ref, computed } from 'vue';
import { ArrowDownTrayIcon, ArrowRightIcon  } from '@heroicons/vue/24/solid'
import {useNavigation} from '@/composables/CommonFunctions'
import WebDesign from '../assets/images/webDesign.png'
import WebDev from '../assets/images/webDevelopemnt.png'
import {useMouseInElement} from '@vueuse/core'
// @ts-ignore
import VueTyper from 'vue3-typer'
import "vue3-typer/dist/vue-typer.css"


// ------------- Helping Constant ------------- //
const targetEl = ref(null)
const {elementHeight, elementWidth, isOutside, elementX, elementY} = useMouseInElement(targetEl)


// ------------- Working Variable's ------------- //
const experienceDetails = ref([
    {
        title: 'YEARS EXPERIENCE', value: '02'
    },
    {
        title: 'CLIENTS WORLDWIDE', value: '0'
    },
    {
        title: 'TOTAL PROJECTS', value: '0'
    },
])

const serviceDetails = ref([
    {name: 'Web Designing', image: WebDesign},
    {name: 'Web Developing', image: WebDev}
])

// ------------- Working function ------------- //
const cardTransform = computed(() =>{
    var maxRotation = 15

    var rX = ( maxRotation/2 - (elementY.value / elementHeight.value) * maxRotation).toFixed(2)
    var rY = ((elementX.value / elementWidth.value) * maxRotation - maxRotation/2).toFixed(2)

    return isOutside.value ? '' : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
})

</script>

<style lang="scss" scoped>
.vue-typer {
    --char-typed-color: theme(colors.important);
    --char-selected-color: black;

    --char-typed-background-color: transparent;
    --char-selected-background-color: #ACCEF7;

    --caret-idle-color: red;
    --caret-typing-color: #22c55e;
    --caret-selecting-color: black;
    --caret-erasing-color: red;
    --caret-complete-color: black;

    cursor: default;
    user-select: none;
}
.vue-typer {
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
  font-weight:bold;
}

.service-img{
    position: relative;
    background-color: none !important;
}
.service-img:hover{
    background-color: rgba(16, 127, 201, 0.416) !important;
    transition: background-color 0.5s linear;
}
.service-text{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>