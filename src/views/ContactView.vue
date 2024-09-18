<template>
    <div class="w-full h-full px-7 py-12">

        <!-- Contact info section -->
        <section class="grid grid-cols-6 gap-4">
            <div v-for="(contact, idx) in contactInfo" :key="idx" class="w-full flex flex-col gap-2 items-center" :class="idx=== 2 ? 'col-span-2' : ''"
            v-motion
            :initial="{ opacity: 0, scale: 0}"
            :enter="{ opacity: 1, scale: 1 }"
            :variants="{ custom: { scale: 2 } }"
            :delay="50"
            :duration="1200">
                <div v-if="contact.icon" class="w-20 h-20 backdrop-blur-md bg-blue-500/10 border-2 border-indigo-700/70 flex items-center justify-center rounded-md">
                    <Unicon :name="contact.icon" fill="#fff" width="32" height="32"/>
                </div>
                <div class="text-2xl text-green-500">{{ contact.title }}</div>
                <div v-for="detail in contact.value" :key="detail" class="text-secText flex flex-col gap-0">
                    <span>{{ detail }}</span>
                </div>
            </div>
        </section>


        <!-- Contact form section-->
        <section class="mt-28">
            <div class="w-8/12 h-fit bg-indigo-800/10 backdrop-blur-md border-2 border-indigo-700 hover:border-indigo-600/900 mx-auto flex flex-col gap-4 rounded-tl-3xl rounded-br-3xl p-10"
            v-motion
            :initial="{ opacity: 0, y: -500, scale: 0}"
            :enter="{ opacity: 1, y: 0, scale: 1 }"
            :variants="{ custom: { scale: 2 } }"
            :delay="50"
            :duration="1200">
                <div class="text-5xl text-start text-text">Let's work <span class="text-green-500">together</span></div>
                <form action="#" class="space-y-8">
                    <div class="text-secText">
                        <label for="name" class="block mb-2 text-sm font-medium text-start">Name <strong class="text-error"> *</strong></label>
                        <input type="text" v-model="name" class="block p-3 w-full text-sm text-gray-900 bg-gradient-to-br from-slate-500/20 to-slate-500/10 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your name ..." required>
                    </div>
                    <div class="text-secText">
                        <label for="email" class="block mb-2 text-sm font-medium  text-start">E-mail  <strong class="text-error"> *</strong></label>
                        <input type="email" v-model="email" class="shadow-sm bg-gradient-to-br from-slate-500/20 to-slate-500/10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your email ..." required>
                    </div>
                    <div class="text-secText">
                        <label for="subject" class="block mb-2 text-sm font-medium  text-start">Subject</label>
                        <input type="text" v-model="subject" class="block p-3 w-full text-sm text-gray-900 bg-gradient-to-br from-slate-500/20 to-slate-500/10 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your subject ..." required>
                    </div>
                    <div class="text-secText">
                        <label for="message" class="block mb-2 text-sm font-medium  text-start">Message</label>
                        <textarea v-model="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gradient-to-br from-slate-500/20 to-slate-500/10 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your message here ..."></textarea>
                    </div>
                    <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-500 border-none">Send message</button>
                </form>
            </div>
        </section>

    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const contactInfo = [
    {title: 'MAIL US', value: ['ajithkumarvak1083@gmail.com', 'ajfury1@gmail.com'], icon:'envelope-alt'},
    {title: null, value: [], icon:null},
    {title: 'CONTACT US', value: ['+916384249009', '+916382831313'], icon:'phone'},
    {title: null, value: [], icon:null},
    {title: 'LOCATION', value: ['Salem (DT),Tamil Nadu,', 'India - 636012'], icon:'map-marker'},
    
]

const name = ref('')
const email = ref('')
const subject = ref('')
const description = ref('')
</script>