<template>
    <div class="w-full h-full box-border p-0">
      <HeaderSection class="max-w-7xl h-screen mx-auto"/>
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