<template>
    <div class="w-full h-full box-border">
      <HeaderSection class="w-full h-screen"/>
    </div>
</template>
<script setup lang="ts">
// ------------- Import's ------------- //
import {onMounted} from 'vue'
import { initFlowbite } from 'flowbite'
import HeaderSection from '@/pages/HeaderSection.vue'



// Globally Flowbite component initiated...
onMounted(() =>{
  initFlowbite()
})
</script>