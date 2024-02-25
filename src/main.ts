import { createApp } from 'vue'
import ComponentRegisterPlugins from '@/plugins/ComponentRegisterPlugins'
import router from './router'

import App from './App.vue'

import './style.css'
import './index.css'


const app = createApp(App)

app.use(ComponentRegisterPlugins)
app.use(router)

app.mount('#app')

