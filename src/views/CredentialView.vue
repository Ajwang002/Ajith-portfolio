<template>
    <div class="w-full h-full px-7 py-12 grid grid-cols-12 gap-4">

        <!-- Left Section -->
        <section class="col-span-4 flex flex-col gap-8 h-fit p-7 bg-indigo-800/10 backdrop-blur-md border-2 border-indigo-700 hover:border-indigo-600/90 rounded-2xl"
        v-motion
        :initial="{ opacity: 0, x: 500, scale: 0}"
        :enter="{ opacity: 1, x: 0, scale: 1 }"
        :delay="10"
        :duration="1200">
            <div class="w-full h-fit">
                <img src="../assets/images/Aj Logo.png" class="h-48 w-48 mx-auto"/>
            </div>

            <div class="flex flex-col gap-0 items-center">
                <span class="text-text text-2xl">Ajithkumar <strong>Venkatraman</strong></span>
                <span class="text-secText">@ajithkumar</span>
            </div>

            <div class="flex items-center justify-center gap-4">
                <div v-for="icon in ['instagram', 'linkedin', 'twitter']" :key="icon" class="w-2/12 aspect-square flex justify-center items-center  bg-slate-100/10 rounded-full cursor-pointer">
                    <Unicon :name="icon" fill="#A1A1AA" hover-fill="#fff" width="24" height="24" />
                </div>
            </div>

            <div class="w-full h-10 flex justify-center items-center text-text rounded-3xl bg-red-600/40 cursor-pointer px-5 animate-pulse hover:animate-none">
                <span class="font-medium">Contact Me</span>
            </div>
        </section>


        <!-- Right Section -->
        <section class="about-section col-span-8 w-full flex flex-col gap-4"
        v-motion
        :initial="{ opacity: 0, x: -500, scale: 0}"
        :enter="{ opacity: 1, x: 0, scale: 1 }"
        :variants="{ custom: { scale: 2 } }"
        :delay="10"
        :duration="1200">

            <!-- About Me Section -->
            <div class="w-full h-fit p-5 backdrop-blur-md bg-blue-500/10 border-2 border-indigo-700/70 rounded-2xl flex flex-col gap-4"
            v-motion
            :initial="{ opacity: 0, y: 100, scale: 0}"
            :visible-once="{ opacity: 1, y: 0, scale: 1 }"
            :delay="10"
            :duration="1200">
                <div class="text-2xl text-important text-start">ABOUT ME</div>
                <div class="text-justify text-secText">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi deserunt fugiat, magnam eligendi cumque temporibus repudiandae asperiores libero quisquam enim inventore accusantium itaque id molestias officia, blanditiis non ea optio!
                </div>
            </div>

            <!-- Experience Section -->
            <div class="w-full h-fit backdrop-blur-md bg-blue-500/10 border-2 border-indigo-700/70 p-5 flex flex-col gap-3 items-start rounded-2xl">
                <div class="text-2xl text-important">EXPERIENCE</div>
                <div v-for="(experience, idx) in experienceDetails" :key="experience.role" class="flex flex-col gap-2" :class="idx !== (experienceDetails.length -1) ? 'mb-6' : '' "
                v-motion
                :initial="{ opacity: 0, y: 100, scale: 0}"
                :visible-once="{ opacity: 1, y: 0, scale: 1 }"
                :delay="10"
                :duration="1200">
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
                    <div class="text-lg text-green-500 flex items-center gap-3">
                        <Unicon name="suitcase-alt" fill="#fff" width="21" height="21"/>
                        <span>{{ experience.role }}</span>
                    </div>
                    <div class="text-secText flex items-center gap-3">
                        <Unicon name="building" fill="#fff" width="21" height="21"/>
                        <span>{{ experience.org }}</span>
                    </div>
                    <div class="text-justify text-secText">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi deserunt fugiat, magnam eligendi cumque temporibus repudiandae asperiores libero quisquam enim inventore accusantium itaque id molestias officia, blanditiis non ea optio!
                    </div>
                </div>
            </div>

            <!-- Education Section -->
            <div class="w-full h-fit backdrop-blur-md bg-blue-500/10 border-2 border-indigo-700/70 p-5 flex flex-col gap-3 items-start rounded-2xl">
                <div class="text-2xl text-important">EDUCATION</div>
                <div v-for="(education, idx) in educationDetails" :key="education.degree" class="flex flex-col gap-2" :class="idx !== (experienceDetails.length -1) ? 'mb-6' : '' "
                v-motion
                :initial="{ opacity: 0, y: 100, scale: 0}"
                :visible-once="{ opacity: 1, y: 0, scale: 1 }"
                :delay="10"
                :duration="1200">
                    <div class="w-full flex items-center gap-4">
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
                    <div class="text-lg text-green-500 flex items-center gap-3">
                        <Unicon name="graduation-cap" fill="#fff" width="21" height="21"/>
                        <span>{{ education.degree }}</span>
                    </div>
                    <div class="text-secText flex items-center gap-3">
                        <Unicon name="book-open" fill="#fff" width="21" height="21"/>
                        <span>{{ education.source }}</span>
                    </div>
                    <div class="text-justify text-secText">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi deserunt fugiat, magnam eligendi cumque temporibus repudiandae asperiores libero quisquam enim inventore accusantium itaque id molestias officia, blanditiis non ea optio!
                    </div>
                </div>
            </div>


            <!-- Skill Section -->
            <div class="w-full h-fit backdrop-blur-md bg-blue-500/10 border-2 border-indigo-700/70 p-5 flex flex-col gap-3 items-start rounded-2xl">
                <div class="text-2xl text-important">SKILL</div>
                    <div v-for="skill in skillDetails" :key="skill.title" class="w-full flex flex-col"
                    v-motion
                    :initial="{ opacity: 0, y: 100, scale: 0}"
                    :visible-once="{ opacity: 1, y: 0, scale: 1 }"
                    :delay="1"
                    :duration="1200">
                        <div class="text-start text-text text-lg">{{ skill.title }}</div>
                        <template class="w-full grid grid-cols-12 gap-6 p-5">
                            <div v-for="(item, idx) in skill.skill" :key="idx" class="w-full flex flex-col items-start gap-2 col-span-6">
                                <div class="text-lg text-secText">{{ item?.name }}</div>
                                <div class="w-full bg-slate-100/10 rounded-full dark:bg-gray-700">
                                    <div class="bg-red-600/80 text-sm font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" :style="{width: `${item?.value}`}"> {{ item?.value }}</div>
                                </div>
                            </div>
                        </template>
                    </div>
            </div>
        </section>
    </div>
</template>
<script setup lang="ts">
// -------------- imports -------------- //
import { ref } from 'vue';


// -------------- Working Variable's -------------- //
const experienceDetails = ref([
    {role: 'Frond-end Developer', org: 'Pinlabs Technology pvt ltd.', s_year:'2023', e_year: '2024',},
])

const educationDetails = ref([
    {degree: 'Agricultural Engineering', source: 'Paavai Engineering College, Namakkal.', s_year:'2016', e_year: '2020',},
])

const skillDetails = ref([
    {
        title: 'Basics',
        skill : [
            {name: 'HTML-5' , value: '95%'},
            {name: 'CSS' , value: '95%'},
            {name: 'Git hub' , value: '85%'},
            {name: 'Git lab' , value: '85%'},
        ]
    },
    {
        title: 'Programming Language',
        skill : [
            {name: 'Java Script' , value: '80%'},
            {name: 'Python' , value: '85%'},
            {name: 'C++' , value: '50%'},
            {name: 'PHP' , value: '50%'},
        ]
    },
    {
        title: 'Frame Works',
        skill : [
            {name: 'Vue js' , value: '80%'},
            {name: 'Django' , value: '40%'},
            {name: 'Laravel' , value: '45%'},
            {name: 'Express js' , value: '50%'},
        ]
    },
    {
        title: 'Data Base',
        skill : [
            {name: 'SQL' , value: '65%'},
            {name: 'Mango DB' , value: '60%'},
        ]
    },
    {
        title: 'Design',
        skill : [
            {name: 'Figma' , value: '40%'},
        ]
    },
    {
        title: 'Advanced',
        skill : [
            {name: 'Tailwind css' , value: '95%'},
            {name: 'Type Script' , value: '85%'},
        ]
    },
    { // this empty value used to cover above all value enter inside view range
        title: '',
        skill : [
            {name: '' , value: '0'},,
        ]
    },

])
</script>
<style scoped>
.about-section {
    height: calc(100vh - 140px);
    overflow-y: auto;
    scrollbar-width: none;
}
</style>