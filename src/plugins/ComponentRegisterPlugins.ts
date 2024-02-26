import {App} from 'vue';
import DropDown from '@/components/DropDown.vue'

export default {
    install(app: App) {
      // Globally register the MyComponent1 component
      app.component('DropDown', DropDown);
    }
  };