// src/plugins/iconPlugin.ts
import { App } from 'vue';
import Unicon from 'vue-unicons';
// @ts-ignore
import { uniInstagram, uniLinkedin, uniTwitter, uniEnvelopeAlt, uniPhone,
uniMapMarker, uniCalender, uniCalendarSlash, uniSuitcaseAlt,
uniBuilding, uniGraduationCap, uniBookOpen, uniSwatchbook, uniBracketsCurly  } from 'vue-unicons/dist/icons';

Unicon.add([uniInstagram, uniLinkedin, uniTwitter, uniEnvelopeAlt, uniPhone,
uniMapMarker, uniCalender, uniCalendarSlash, uniSuitcaseAlt, uniBuilding,
uniGraduationCap, uniBookOpen, uniSwatchbook, uniBracketsCurly ]);

const iconPlugin = {
  install(app: App) {
    // @ts-ignore
    app.use(Unicon);
  }
};

export default iconPlugin;