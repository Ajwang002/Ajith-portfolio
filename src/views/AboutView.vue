<template>
    <div class="w-full h-full px-7 py-12 flex flex-col gap-4">

        <!-- Profile & summary section -->
        <section class="grid grid-cols-3 gap-4 h-[250px] items-center">
            <div class="bg-indigo-800/10 backdrop-blur-md border-2 border-indigo-700 hover:border-indigo-600/90 p-7 h-full flex justify-center rounded-2xl"
            v-motion
            :initial="{ opacity: 0, y: 500 }"
            :enter="{ opacity: 1, y: 0, scale: 1 }"
            :variants="{ custom: { scale: 2 } }"
            :delay="50"
            :duration="1200">
                <img src="../assets/images/Aj Logo.png" class="h-44 w-44"/>
            </div>

            <div class="col-span-2 flex flex-col gap-4 h-full">
                <div class="text-5xl text-text text-center"
                v-motion
                :initial="{ opacity: 0, x: 500 }"
                :enter="{ opacity: 1, x: 0, scale: 1 }"
                :variants="{ custom: { scale: 2 } }"
                :delay="50"
                :duration="1200">SELF-SUMMARY</div>
                <div class="backdrop-blur-md bg-blue-500/10 border-2 border-indigo-700/70 p-7 flex flex-col gap-4 items-start rounded-2xl text-text"
                v-motion
                :initial="{ opacity: 0, y: -500 }"
                :enter="{ opacity: 1, y: 0, scale: 1 }"
                :variants="{ custom: { scale: 2 } }"

                :delay="50"
                :duration="1200">
                    <div class="text-4xl">Ajithkumar <span class="text-important">Venkatraman</span></div>
                    <div class="text-justify text-secText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, in voluptate cumque, magnam molestias quas similique aliquid officiis minima consequatur natus consequuntur architecto nihil? Quas alias nemo fuga id aliquam!
                    </div>
                </div>
            </div>
        </section>

        <!-- Experience & Education section -->
        <section class="grid grid-cols-2 gap-4 h-[250px] items-center">

            <!-- Experience Part -->
            <div class="backdrop-blur-md bg-blue-500/10 border-2 border-indigo-700/70 p-7 h-full flex flex-col gap-3 items-start rounded-2xl text-text"
            v-motion
            :initial="{ opacity: 0, x: -500, y:-500 }"
            :enter="{ opacity: 1, x: 0, y: 0, scale: 1 }"
            :variants="{ custom: { scale: 2 } }"
            :delay="50"
            :duration="1200">
                <div class="text-2xl">EXPERIENCE</div>
                <div v-for="experience in experienceDetails" :key="experience.role" >
                    <div class="flex items-center gap-4">
                        <div class="flex items-center gap-3 text-secText">
                            <Unicon name="calender" fill="#fff" width="21" height="21" />
                            <span>{{ experience.s_year }}</span>
                        </div>
                        <div>-</div>    
                        <div class="flex items-center gap-3 text-secText">
                            <Unicon name="calendar-slash" fill="#fff" width="21" height="21"/>
                            <span>{{ experience.e_year }}</span>
                        </div>
                    </div>
                    <div class="text-2xl text-green-500 flex items-center gap-3">
                        <Unicon name="suitcase-alt" fill="#fff" width="21" height="21"/>
                        <span>{{ experience.role }}</span>
                    </div>
                    <div class="text-secText flex items-center gap-3">
                        <Unicon name="building" fill="#fff" width="21" height="21"/>
                        <span>{{ experience.org }}</span>
                    </div>
                </div>
            </div>


            <!-- Educational Part -->
            <div class="backdrop-blur-md bg-blue-500/10 border-2 border-indigo-700/70 p-7 h-full flex flex-col gap-3 items-start rounded-2xl text-text"
            v-motion
            :initial="{ opacity: 0, x: 500, y:-500 }"
            :enter="{ opacity: 1, x: 0, y: 0, scale: 1 }"
            :variants="{ custom: { scale: 2 } }"
            :delay="50"
            :duration="1200">
                <div class="text-2xl">EDUCATION</div>
                <div v-for="education in educationDetails" :key="education.degree" >
                    <div class="flex items-center gap-4">
                        <div class="flex items-center gap-3 text-secText">
                            <Unicon name="calender" fill="#fff" width="21" height="21" />
                            <span>{{ education.s_year }}</span>
                        </div>
                        <div>-</div>    
                        <div class="flex items-center gap-3 text-secText">
                            <Unicon name="calendar-slash" fill="#fff" width="21" height="21"/>
                            <span>{{ education.e_year }}</span>
                        </div>
                    </div>
                    <div class="text-2xl text-green-500 flex items-center gap-3">
                        <Unicon name="graduation-cap" fill="#fff" width="21" height="21"/>
                        <span>{{ education.degree }}</span>
                    </div>
                    <div class="text-secText flex items-center gap-3">
                        <Unicon name="book-open" fill="#fff" width="21" height="21"/>
                        <span>{{ education.source }}</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Bottom section -->
        <section class="grid grid-cols-4 gap-4 h-[250px]">

            <!-- Credential Part -->
            <div class="p-5 flex flex-col backdrop-blur-md bg-blue-500/10 border-2 border-indigo-700/70 rounded-2xl"
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
                        <div class="text-secText text-xs">
                            MORE ABOUT ME
                        </div>
                        <div class="text-slate-100 text-2xl font-bold">
                            Credentials
                        </div>
                    </div>
                    <div class="h-10 flex justify-center items-center text-text rounded-xl bg-red-700/20 border-2 border-red-600  cursor-pointer px-5 " @click="useNavigation('/credential')">
                        <ArrowRightIcon class="text-text w-5 h-5"/>
                    </div>
                </div>
            </div>

            <!-- Social Media Profile Section -->
            <div class="p-7 backdrop-blur-md bg-blue-500/10 border-2 border-indigo-700/70 flex flex-col gap-5 rounded-2xl"
            v-motion
            :initial="{ opacity: 0, x: 500 }"
            :enter="{ opacity: 1, x: 0, scale: 1 }"
            :variants="{ custom: { scale: 2 } }"
            :delay="50"
            :duration="1200">
                <div class="basis-9/12 w-full overflow-hidden flex justify-between items-center">
                    <div v-for="icon in ['instagram', 'linkedin', 'twitter']" :key="icon" class="w-3/12 aspect-square flex justify-center items-center  bg-slate-200/70 rounded-full cursor-pointer">
                        <Unicon :name="icon" fill="#64748b" hover-fill="#fff" width="32" height="32" />
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
                    <div class="h-10 flex justify-center items-center text-text rounded-xl bg-red-700/20 border-2 border-red-600  cursor-pointer px-5 " @click="null">
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
                            Work <span class="text-important">together.</span>
                        </div>
                    </div>
                    <div class="h-10 flex justify-center items-center text-text rounded-xl bg-red-700/20 border-2 border-red-600  cursor-pointer px-5 " @click="useNavigation('/contacts')">
                        <ArrowRightIcon class="text-text w-5 h-5"/>
                    </div>
                </div>
            </div>

        </section>
    </div>
</template>
<script setup lang="ts">
// -------------- imports -------------- //
import { ref } from 'vue';
import {useNavigation} from '@/composables/CommonFunctions'
import { ArrowRightIcon  } from '@heroicons/vue/24/solid'


// -------------- Working Variable's -------------- //
const experienceDetails = ref([
    {role: 'Frond-end Developer', org: 'Pinlabs Technology pvt ltd.', s_year:'2023', e_year: '2024',},
])

const educationDetails = ref([
    {degree: 'Agricultural Engineering', source: 'Paavai Engineering College, Namakkal.', s_year:'2016', e_year: '2020',}
])
</script>