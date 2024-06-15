import {App} from 'vue';
import Unicon from 'vue-unicons'
import { uniInstagram, uniLinkedin, uniTwitter, uniEnvelopeAlt, uniPhone, uniMapMarker } from 'vue-unicons/dist/icons'
Unicon.add([uniInstagram, uniLinkedin, uniTwitter, uniEnvelopeAlt, uniPhone, uniMapMarker])

export default {
    install(app: App) {
      app.use(Unicon)
    }
  };