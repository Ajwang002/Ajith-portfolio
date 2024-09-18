<template>
    <div class="relative w-full h-full box-border p-0">
      <!-- background blob section -->
      <div class="absolute top-1/4 right-1/2 w-60 h-60 bg-gradient-to-bl from-indigo-900 via-fuchsia-900 to-amber-600 rounded-full translate-x-1/2 animate-back_anime"></div>

      <!-- content section -->
      <HeaderSection class="max-w-7xl h-fit mx-auto"/>
    </div>
</template>
<script setup lang="ts">
import {onMounted} from 'vue'
import { initFlowbite } from 'flowbite'
import HeaderSection from './HeaderSection.vue'


// Globally Flowbite component initiated...
onMounted(() =>{
  initFlowbite()
})
</script>