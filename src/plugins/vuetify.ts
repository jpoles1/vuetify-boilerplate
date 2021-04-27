import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
	theme: { dark: true },
});

import VuetifyToast from "vuetify-toast-snackbar";
Vue.use(VuetifyToast, {
	dissmissable: true,
	color: "#403e4d",
});
