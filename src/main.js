import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import VueSidebarMenu from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
import Vuetify from "vuetify";
import VueApexCharts from "vue-apexcharts";
import { ToggleButton } from "vue-js-toggle-button";

Vue.component("apexchart", VueApexCharts);
Vue.component("ToggleButton", ToggleButton);

Vue.use(Vuetify, VueSidebarMenu, VueApexCharts);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
