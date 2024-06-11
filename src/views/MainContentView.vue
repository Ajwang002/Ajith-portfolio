<template>
    <div class="w-full h-auto py-12 font-sans text-xs flex flex-col gap-4">

        <!-- Top Section -->
        <section class="grid grid-cols-2 gap-4 h-[300px]">

            <!-- Profile Column -->
            <div class="p-7 pb-9 backdrop-blur-xl bg-gradient-to-br from-slate-500/20 to-slate-500/10 flex flex-row gap-5 rounded-2xl ">
                <div class="basis-1/2">
                    <img src="../assets/images/Aj Logo.png" class="h-44"/>
                </div>
                <div class="basis-1/2 flex flex-col justify-center items-start">
                    <div class="text-slate-100/50 font-medium mb-3">A WEB DEVELOPER</div>
                    <div class="flex flex-col justify-center items-start text-slate-100">
                        <span class="text-5xl">Ajithkumar</span>
                        <span class="text-4xl">Venkatrman</span>
                    </div>
                    <div class="mt-3 text-slate-100/50">
                        Iam a Web Developer based on India.
                    </div>
                </div>
            </div>

            <div class="flex flex-col gap-4">
                <div class="basis-2/12 p-2 px-5 backdrop-blur-sm  bg-gradient-to-br from-slate-500/20 to-slate-500/10 text-slate-100/50 rounded-2xl overflow-y-hidden">
                    <div class="h-full overflow-y-hidden uppercase flex items-center">
                        <marquee>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem cumque ducimus dicta temporibus atque, sit nulla cum quas perferendis ut reiciendis voluptates, ex ad, accusamus expedita? Eaque suscipit aliquid pariatur!</marquee>
                    </div>
                </div>

                <div class="basis-10/12 flex gap-4">
                    <div class="basis-1/2 p-5 flex flex-col backdrop-blur-sm bg-gradient-to-br from-slate-500/20 to-slate-500/10 rounded-2xl">
                        <div class="basis-8/12 overflow-hidden flex items-center justify-center">
                            <img src="../assets/images/Aj Logo.svg" class="w-full h-20 mx-auto"/>
                        </div>

                        <div class="basis-4/12 flex justify-between items-center">
                            <div class="flex flex-col items-start">
                                <div class="text-slate-100/50">
                                    MORE ABOUT ME
                                </div>
                                <div class="text-slate-100 text-2xl font-bold">
                                    Credentials
                                </div>
                            </div>
                            <div class="h-10 flex justify-center items-center text-text rounded-xl bg-gray-600/40 cursor-pointer px-5 animate-pulse hover:animate-none">
                                <span class="font-medium">Lets go</span>
                            </div>
                        </div>
                    </div>

                    <div class="basis-1/2 p-5 flex flex-col backdrop-blur-sm bg-gradient-to-br from-slate-500/20 to-slate-500/10 rounded-2xl">
                        <div class="basis-8/12 overflow-hidden flex items-center justify-center">
                            <img src="../assets/images/Aj Logo.svg" class="w-full h-20 mx-auto"/>
                        </div>

                        <div class="basis-4/12 flex justify-between items-center">
                            <div class="flex flex-col items-start">
                                <div class="text-slate-100/50">
                                    SHOW CASE
                                </div>
                                <div class="text-slate-100 text-2xl font-bold">
                                    Portfolios
                                </div>
                            </div>
                            <div class="h-10 flex justify-center items-center text-text rounded-xl bg-gray-600/40 cursor-pointer px-5 animate-pulse hover:animate-none">
                                <span class="font-medium">Lets go</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Middle Section -->
        <section class="grid grid-cols-4 gap-4 h-[300px]">

            <!-- CV Download Section -->
            <div class="p-7 backdrop-blur-xl bg-gradient-to-br from-slate-500/20 to-slate-500/10 flex flex-col gap-5 rounded-2xl">
                <div class="basis-9/12 overflow-hidden flex items-center justify-center">
                    <img src="../assets/images/cvDownload.png" class="w-auto h-[180px] object-contain mx-auto"/>
                </div>

                <div class="basis-3/12 flex justify-between items-end">
                    <div class="flex flex-col items-start">
                        <div class="text-slate-100/50">
                            MY CV
                        </div>
                        <div class="text-slate-100 text-2xl font-bold">
                            Download
                        </div>
                    </div>
                    <div class="h-10 flex justify-center items-center text-text rounded-xl bg-gray-600/40 cursor-pointer px-5 animate-pulse hover:animate-none">
                        <ArrowDownTrayIcon class="text-text w-6 h-6"/>
                    </div>
                </div>
            </div>

            <!-- Service Providing Section -->
            <div class="col-span-2 p-7 backdrop-blur-xl bg-gradient-to-br from-slate-500/20 to-slate-500/10 flex flex-col gap-5 rounded-2xl">
                <div class="basis-9/12 grid grid-cols-2 gap-4">
                    <div>
                        <img src="../assets/images/webDesign.png" class="w-auto h-[180px] object-contain mx-auto"/>
                    </div>
                    <div>
                        <img src="../assets/images/webDevelopemnt.png" class="w-auto h-[180px] object-contain mx-auto"/>
                    </div>
                </div>

                <div class="basis-3/12 flex justify-between items-end">
                    <div class="flex flex-col items-start">
                        <div class="text-slate-100/50">
                            SPECIALIZATION
                        </div>
                        <div class="text-slate-100 text-2xl font-bold">
                            Services Offering
                        </div>
                    </div>
                    <div class="h-10 flex justify-center items-center text-text rounded-xl bg-gray-600/40 cursor-pointer px-5 animate-pulse hover:animate-none">
                        <span class="font-medium">Lets go</span>
                    </div>
                </div>
            </div>


            <!-- Social Media Profile Section -->
            <div class="p-7 backdrop-blur-xl bg-gradient-to-br from-slate-500/20 to-slate-500/10 flex flex-col gap-5 rounded-2xl">
                <div class="basis-9/12 overflow-hidden flex items-center justify-center">
                    <img src="../assets/images/cvDownload.png" class="w-auto h-[180px] object-contain mx-auto"/>
                </div>

                <div class="basis-3/12 flex justify-between items-end">
                    <div class="flex flex-col items-start">
                        <div class="text-slate-100/50">
                            MY CV
                        </div>
                        <div class="text-slate-100 text-2xl font-bold">
                            Download
                        </div>
                    </div>
                    <div class="h-10 flex justify-center items-center text-text rounded-xl bg-gray-600/40 cursor-pointer px-5 animate-pulse hover:animate-none">
                        <ArrowDownTrayIcon class="text-text w-6 h-6"/>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup lang="ts">
import { ArrowDownTrayIcon  } from '@heroicons/vue/24/solid'
</script>