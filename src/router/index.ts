import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
    history: createWebHistory(import.meta.env.APP_URL),
    routes:[
        {
            path:'/',
            name:'Home',
            component: () => import('@/pages/MainPage.vue')
        },
    ],

})
  

export default router