import { createApp } from 'vue'
import ComponentRegisterPlugins from '@/plugins/ComponentRegisterPlugins'
import IconPlugin from './plugins/IconPlugin'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'



import App from './App.vue'

import './style.css'
import './index.css'

const app = createApp(App)

app.use(ComponentRegisterPlugins)
app.use(IconPlugin)
app.use(MotionPlugin)
app.use(router)


app.mount('#app')

