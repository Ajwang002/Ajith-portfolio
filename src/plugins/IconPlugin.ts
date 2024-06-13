import {App} from 'vue';
import Unicon from 'vue-unicons'
import { uniInstagram, uniLinkedin, uniTwitter } from 'vue-unicons/dist/icons'
Unicon.add([uniInstagram, uniLinkedin, uniTwitter])

export default {
    install(app: App) {
      app.use(Unicon)
    }
  };