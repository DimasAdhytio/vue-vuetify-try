import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      dark:true,
        themes: {
          dark: {
            primary: colors.grey.darken4, // #E53935
            secondary: colors.grey.darken3, // #FFCDD2
            info: colors.blue.darken3, // #3F51B5
          },
        },
      },
});
