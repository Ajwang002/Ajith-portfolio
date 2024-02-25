<template>
    <div>
        <HelloWorld msg="Vite + Vue" />
    </div>
</template>
<script setup lang="ts">
import {onMounted} from 'vue'
import { initFlowbite } from 'flowbite'



// Globally Flowbite component initiated...
onMounted(() =>{
  initFlowbite()
})
</script>