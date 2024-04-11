<template>
    <div class="w-full h-fit-content bg-no-repeat m-0" style="background-image: url('src/assets/images/BG_Sample-1.png'); background-size: 100% 100%;">
        <nav class="max-w-screen-2xl mx-auto flex justify-between items-center py-5">
            <!-- Name Logo Section -->
            <div>
                <img src="@/assets/images/Ajith_logo.svg" class="w-11 h-12"/>
            </div>

            <!-- Router Hypertext Section -->
            <div class="flex justify-between flex-wrap gap-10 text-mainText_2">
                <div v-for="(navLink, idx) in navigationLinks" :key="idx" class="cursor-pointer hover:text-secondary font-medium">
                    <div>{{ navLink.name }}</div>
                </div>
            </div>

            <!-- Contact Btn Section -->
            <button class="w-fit h-fit p-2 bg-black rounded-full cursor-pointer transition duration-500 ease-out group hover:bg-secondary hover:ease-in animate-bounce hover:animate-none">
                <div class="w-fit h-fit px-3 py-1 bg-secondary rounded-full transition duration-500 ease-out group-hover:ease-in group-hover:bg-black">
                    <span class="text-black font-normal transition duration-500 ease-out group-hover:ease-in group-hover:text-secondary">Contact Me</span>
                </div>
            </button>
        </nav>
    </div>
</template>
<script setup lang="ts">
// ---------------- Imports ---------------- //



// ---------------- Working Variable's ---------------- //
const navigationLinks = [ // Navigation Links
    {name:'About Us', link:'#about'},
    {name:'Products', link:'#about'},
    {name:'Services', link:'#about'},
    {name:'Resources', link:'#about'},
]

</script>
<style>
.text-bubble
{
    position: relative;
}
.text-bubble:after{
    position: absolute;
    display: block; 
    width: 0; 
    content: "";
    border: 10px solid transparent;
    border-top-color: white;
    border-bottom: 0;
    bottom: -10px; left: calc(50% - 10px);
}
</style>