import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import VueSidebarMenu from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
import Vuetify from "vuetify";
import VueApexCharts from "vue-apexcharts";
import { ToggleButton } from "vue-js-toggle-button";
import router from "./router";
import VueMq from "vue-mq";

Vue.component("apexchart", VueApexCharts);
Vue.component("ToggleButton", ToggleButton);

Vue.use(Vuetify, VueSidebarMenu, VueApexCharts);
Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 900,
    laptop: 900,
    desktopL: 1601,
    desktopXL: Infinity
  }
});
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
