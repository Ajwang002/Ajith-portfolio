import {App} from 'vue';
import DropDown from '@/components/DropDown.vue'

export default {
    install(app: App) {
      // Globally register the component
      app.component('DropDown', DropDown);
    }
  };