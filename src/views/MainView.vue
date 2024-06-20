<template>
    <div class="w-full h-fit">
        <component :is="page" class="w-full h-fit"/>
        <FooterView class="w-full h-fit"/>
    </div>
</template>
<script setup lang="ts">
// ---------- Imports ---------- //
import { defineComponent, shallowRef, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import MainContent from './MainContentView.vue'
import Contact from './ContactView.vue'
import About from './AboutView.vue'
import Credential from './CredentialView.vue'
import FooterView from './FooterView.vue'


// ---------- Helping Constant ---------- //
const route = useRoute()


// ---------- Working Variable's ---------- //
const page = shallowRef<ReturnType<typeof defineComponent> | undefined>(MainContent)
const pages = [
    {name: 'home', page: MainContent},
    {name: 'about', page: About},
    {name: 'contacts', page: Contact},
    {name: 'credential', page:Credential}
]


// ---------- Working Functions ---------- //
const setPage = (path: any) =>{
    page.value = pages.find((page: any) => page.name === path)?.['page']
}


// ---------- Watch ---------- //
watchEffect(() =>{
    var path = route.path
    if(path)
    {
        path = path.split('/')[1]
        setPage(path)
    }
})
</script>