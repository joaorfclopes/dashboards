import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueSidebarMenu from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
import Vuetify from "vuetify";
import VueApexCharts from "vue-apexcharts";
import { ToggleButton } from "vue-js-toggle-button";
import responsive from "vue-responsive";

library.add(faCoffee, faArrowDown);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("apexchart", VueApexCharts);
Vue.component("ToggleButton", ToggleButton);

Vue.use(responsive, Vuetify, VueSidebarMenu, VueApexCharts);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
