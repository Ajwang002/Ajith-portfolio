import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
    history: createWebHistory(import.meta.env.APP_URL),
    routes:[
        {
            path:'/',
            redirect: to => {
                return {path: '/home'}
            }
        },
        {
            path:'/home',
            name:'Home',
            component: () => import('@/pages/MainPage.vue')
        },
        // {
        //     path:'/contacts',
        //     name:'Home',
        //     component: () => import('@/pages/MainPage.vue')
        // },
        // Catch-all route
        {
            path: '/:pathMatch(.*)*',
            name:'Home',
            component: () => import('@/pages/MainPage.vue')
        }
    ],

})
  

export default router