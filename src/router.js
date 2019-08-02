import Vue from "vue";
import Router from "vue-router";

import Home from "./components/home/Home.vue";
import HourlyDashboards from "./components/dashboards/hour/HourlyDashboards.vue";
import DailyDashboards from "./components/dashboards/day/DailyDashboards.vue";
import WeeklyDashboards from "./components/dashboards/week/WeeklyDashboards.vue";
import MonthlyDashboards from "./components/dashboards/month/MonthlyDashboards.vue";
import ServersStatus from "./components/servers/status/ServersStatus.vue";
import ServersInfo from "./components/servers/info/ServersInfo.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/hour",
      name: "hour",
      component: HourlyDashboards
    },
    {
      path: "/day",
      name: "day",
      component: DailyDashboards
    },
    {
      path: "/week",
      name: "week",
      component: WeeklyDashboards
    },
    {
      path: "/month",
      name: "month",
      component: MonthlyDashboards
    },
    {
      path: "/status",
      name: "status",
      component: ServersStatus
    },
    {
      path: "/info",
      name: "info",
      component: ServersInfo
    }
  ]
});
