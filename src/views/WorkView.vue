<template>
    <div class="w-full h-full px-7 py-12 flex flex-col gap-4">

        <!-- Profile & summary section -->
        <section class="grid grid-cols-3 gap-4 h-fit items-center">
            <div class="backdrop-blur-md bg-blue-500/10 border-2 border-indigo-700/70 p-7 flex flex-col gap-6 h-full rounded-2xl text-secText"
            v-motion
            :initial="{ opacity: 0, x: 500}"
            :enter="{ opacity: 1, x: 0, scale: 1 }"
            :variants="{ custom: { scale: 2 } }"
            :delay="50"
            :duration="1200">
                <!-- <img src="../assets/images/Aj Logo.png" class="h-44 w-44"/> -->
                <div v-for="(service, idx) in services" :key="service.name">
                    <div class="flex items-center justify-start gap-4 cursor-pointer group" @click="onSelectService(idx)">
                        <div class="w-2/12 aspect-square flex justify-center items-center  bg-slate-100/10 rounded-full cursor-pointer">
                            <Unicon :name="service.icon" fill="#A1A1AA" hover-fill="#fff" width="24" height="24" class="group-hover:text-green-500"/>
                        </div>
                        <span class="text-xl font-medium group-hover:text-green-500" :class="selectedService?.name === service.name ? 'text-green-500' : ''">{{ service.name }}</span>
                    </div>
                </div>
            </div>

            <div class="col-span-2 flex flex-col gap-4 h-full">
                <div class="text-5xl text-text text-center"
                v-motion
                :initial="{ opacity: 0, scale:0}"
                :enter="{ opacity: 1,scale: 1 }"
                :variants="{ custom: { scale: 2 } }"
                :delay="50"
                :duration="1200">MY WORKS</div>

                <div class="bg-indigo-800/10 backdrop-blur-md border-2 border-indigo-700 hover:border-indigo-600/90 p-7 flex flex-col gap-4 items-start rounded-2xl text-text"
                v-motion
                :initial="{ opacity: 0, x: -500}"
                :enter="{ opacity: 1, x: 0, scale: 1 }"
                :variants="{ custom: { scale: 2 } }"
                :delay="50"
                :duration="1200">
                    <div class="text-4xl">{{ selectedService?.splitName[0] }} <span v-if="selectedService?.splitName[1]" class="text-green-500">{{ selectedService?.splitName[1] }}</span></div>
                    <div class="text-justify text-secText">{{ selectedService?.content }}</div>
                    <div class="flex items-center gap-4 text-text text-sm">
                        <div v-for="(keyword, idx) in selectedService?.keyWords" :key="keyword" class="rounded-2xl px-5 py-1.5" :style="`background: ${keywordBgClr(idx)}`">
                            <span class="text-sm font-semibold" >{{ keyword }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Bottom section -->
        <section class="grid grid-cols-4 gap-4 h-[250px]">

            <!-- Credential Part -->
            <div class="p-5 flex flex-col backdrop-blur-md bg-blue-500/10 border-2 border-indigo-700/70 rounded-2xl"
            v-motion
            :initial="{ opacity: 0, x: -500, y:500 }"
            :enter="{ opacity: 1, x: 0, y:0, scale: 1 }"
            :variants="{ custom: { scale: 2 } }"
            :delay="50"
            :duration="1200">
                <div class="basis-8/12 overflow-hidden flex items-center justify-center">
                    <img src="../assets/images/Aj Logo.svg" class="w-full h-20 mx-auto"/>
                </div>

                <div class="basis-4/12 flex justify-between items-center">
                    <div class="flex flex-col items-start">
                        <div class="text-secText text-xs">
                            MORE ABOUT ME
                        </div>
                        <div class="text-slate-100 teservice && {index: number}xt-2xl font-bold">
                            Credentials
                        </div>
                    </div>
                    <div class="h-10 flex justify-center items-center text-text rounded-xl bg-green-500 cursor-pointer px-5" @click="useNavigation('/credential')">
                        <ArrowRightIcon class="text-text w-5 h-5"/>
                    </div>
                </div>
            </div>


            <!-- Social Media Profile Section -->
            <div class="p-7 backdrop-blur-md bg-blue-500/10 border-2 border-indigo-700/70 flex flex-col gap-5 rounded-2xl"
            v-motion
            :initial="{ opacity: 0, x: 500, y: 500 }"
            :enter="{ opacity: 1, x: 0, y: 0,  scale: 1 }"
            :variants="{ custom: { scale: 2 } }"
            :delay="50"
            :duration="1200">
                <div class="basis-9/12 w-full overflow-hidden flex justify-between items-center">
                    <div v-for="icon in ['instagram', 'linkedin', 'twitter']" :key="icon" class="w-3/12 aspect-square flex justify-center items-center  bg-slate-100/10  rounded-full cursor-pointer">
                        <Unicon :name="icon" fill="#A1A1AA" hover-fill="#fff" width="32" height="32" />
                    </div>
                </div>

                <div class="basis-3/12 flex justify-between items-end">
                    <div class="flex flex-col items-start">
                        <div class="text-secText text-xs">
                            STAY WITH ME
                        </div>
                        <div class="text-slate-100 text-2xl font-bold">
                            Profiles
                        </div>
                    </div>
                    <div class="h-10 flex justify-center items-center text-text rounded-xl bg-green-500 cursor-pointer px-5" @click="null">
                        <ArrowRightIcon class="text-text w-5 h-5"/>
                    </div>
                </div>
            </div>

            <!-- Lets work together part -->
            <div class="col-span-2 p-7 backdrop-blur-md bg-blue-500/10 border-2 border-indigo-700/70 flex flex-col gap-4 rounded-2xl"
            v-motion
            :initial="{ opacity: 0, scale: 0 }"
            :enter="{ opacity: 1, scale: 1 }"
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
                            Work <span class="text-green-500">together.</span>
                        </div>
                    </div>
                    <div class="h-10 flex justify-center items-center text-text rounded-xl bg-green-500 cursor-pointer px-5" @click="useNavigation('/contacts')">
                        <ArrowRightIcon class="text-text w-5 h-5"/>
                    </div>
                </div>
            </div>

        </section>
    </div>
</template>
<script setup lang="ts">
// -------------- imports -------------- //
import { onMounted, ref } from 'vue';
import {useNavigation, useColorGenerator} from '@/composables/CommonFunctions'
import { ArrowRightIcon  } from '@heroicons/vue/24/solid'


const colorGen = new useColorGenerator()


// -------------- Working Variable's -------------- //

interface service {
    name : string
    icon : string
    value : string
    splitName : string []
    content : string
    keyWords : string []
}

type ServiceWithIndex = service & { index: number | undefined };

const services = ref<service[]>([
    {
        name: 'Web Development',
        icon:'brackets-curly',
        value:'develop',
        splitName:['Web', 'Development'],
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, in voluptate cumque, magnam molestias quas similique aliquid officiis minima consequatur natus consequuntur architecto nihil? Quas alias nemo fuga id aliquam!",
        keyWords: ['Vue.js', 'Tailwind css', 'Laravel', 'Django', 'Express.js']
    },
    {
        name: 'Web Design',
        icon:'swatchbook',
        value:'design',
        splitName:['Web', 'Design'],
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, in voluptate cumque, magnam molestias quas similique aliquid officiis minima consequatur natus consequuntur architecto nihil? Quas alias nemo fuga id aliquam!",
        keyWords: ['Figma']
    },
])

const selectedService = ref<ServiceWithIndex | null>(null)
selectedService.value = {...services.value[0], index: 0}

// -------------- Working Function's -------------- //
const onSelectService = (idx: number) =>{
    var dup_serv:ServiceWithIndex  = {... JSON.parse(JSON.stringify(services.value[idx])), index: idx}
    selectedService.value = {...dup_serv}
}

const keyWordsColors = ref<object[]>([])

const getKeyWordsColors = ():void =>{
    for(var i=0; i<services.value.length; i++)
    {
        var keyWordsLen = services.value?.[i]?.keyWords.length
        var colors = colorGen.genMulpUniColors(keyWordsLen, 0.6)
        keyWordsColors.value[i] = colors
    }
}

const keywordBgClr = (idx:number) =>{
    var selectedIndex = selectedService.value?.index
    // @ts-ignore
    var colorsCollection = keyWordsColors.value[selectedIndex]
    if(colorsCollection?.length > 0)
    {
        return colorsCollection[idx]?.['opc']
    }
    else{
        return 'none'
    }
}

onMounted(() =>{
    getKeyWordsColors()
    onSelectService(0) // initial set
})
</script>