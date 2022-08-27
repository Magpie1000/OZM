import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        background: "#E5E5E5",
        backgroundDark: "#0D0E23",
        feedBackground: "#FFFFFF",
        // Vue 기본 설정.
        primary: "#0d0e23",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
        // Customs
        ssafyBlue: "#6DCEF5",
        ssafyWhite: "#FFFFFF",
        ssafyBlack: "#161215",
      },
      dark: {},
    },
  },
});
