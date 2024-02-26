<template>
    <div class="w-full h-full box-border">
        <Navigation class="w-full"/>
    </div>
</template>
<script setup lang="ts">
// ------------- Import's ------------- //
import {onMounted} from 'vue'
import { initFlowbite } from 'flowbite'
import Navigation from '@/pages/Navigation.vue'



// Globally Flowbite component initiated...
onMounted(() =>{
  initFlowbite()
})
</script>