<template>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <div id="main-container">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    >
    <sidebar-menu collapsed id="sidebar" :menu="menu"/>
    <div id="content">
      <div v-if="showHeader == true" id="header">
        <h1 id="title" v-if="showHourlyDashboards == true">Hour</h1>
        <h1 id="title" v-if="showDailyDashboards == true">Day</h1>
        <h1 id="title" v-if="showWeeklyDashboards == true">Week</h1>
        <h1 id="title" v-if="showMonthlyDashboards == true">Month</h1>
        <h1 id="title" v-if="showStatus == true">Servers Status</h1>
        <h1 id="title" v-if="showInfo == true">Servers Info Details</h1>
        <img v-if="showHome == false" src="../assets/vodafone-logo.png">
        <div id="celfocus" v-if="showHome == true">
          <p>powered by</p>
          <img src="../assets/celfocus-logo.png">
        </div>
      </div>
      <Home id="home" v-if="showHome == true"></Home>
      <div id="dashboards" v-if="showDashboards== true">
        <HourlyDashboards v-if="showHourlyDashboards == true" id="hour-dashboards"></HourlyDashboards>
        <DailyDashboards v-if="showDailyDashboards == true" id="day-dashboards"></DailyDashboards>
        <WeeklyDashboards v-if="showWeeklyDashboards == true" id="week-dashboards"></WeeklyDashboards>
        <MonthlyDashboards v-if="showMonthlyDashboards == true" id="month-dashboards"></MonthlyDashboards>
      </div>
      <div id="servers">
        <ServersStatus v-if="showStatus == true" id="servers-status"></ServersStatus>
        <ServersInfo v-if="showInfo == true" id="servers-info"></ServersInfo>
      </div>
    </div>
  </div>
</html>
</template>

<script>
import { SidebarMenu } from "vue-sidebar-menu";
import Home from "./home/Home.vue";
import HourlyDashboards from "./dashboards/hour/HourlyDashboards.vue";
import DailyDashboards from "./dashboards/day/DailyDashboards.vue";
import WeeklyDashboards from "./dashboards/week/WeeklyDashboards.vue";
import MonthlyDashboards from "./dashboards/month/MonthlyDashboards.vue";
import ServersStatus from "./servers/status/ServersStatus.vue";
import ServersInfo from "./servers/info/ServersInfo.vue";

window.$ = require("jquery");
window.JQuery = require("jquery");

export default {
  components: {
    SidebarMenu,
    Home,
    HourlyDashboards,
    DailyDashboards,
    WeeklyDashboards,
    MonthlyDashboards,
    ServersStatus,
    ServersInfo
  },
  data() {
    return {
      showHeader: true,
      showHome: true,
      showDashboards: false,
      showHourlyDashboards: false,
      showDailyDashboards: false,
      showWeeklyDashboards: false,
      showMonthlyDashboards: false,
      showStatus: false,
      showInfo: false,
      menu: [
        {
          href: "/home",
          title: "Home",
          icon: "fas fa-home"
        },
        {
          title: "Dashboards",
          icon: "fa fa-chart-line",
          child: [
            {
              href: "/dashboards/hour",
              title: "Hour"
            },
            {
              href: "/dashboards/day",
              title: "Day"
            },
            {
              href: "/dashboards/week",
              title: "Week"
            },
            {
              href: "/dashboards/month",
              title: "Month"
            }
          ]
        },
        {
          title: "Servers",
          icon: "fas fa-server",
          child: [
            {
              href: "/servers/status",
              title: "Servers Status"
            },
            {
              href: "/servers/info",
              title: "Servers Info Details"
            }
          ]
        }
      ]
    };
  },
  methods: {
    checkUrl() {
      if (window.location.href.indexOf("home") > -1) {
        this.showHeader = true;
        this.showHome = true;
        this.showDashboards = false;
        this.showStatus = false;
        this.showInfo = false;
      } else if (window.location.href.indexOf("dashboards") > -1) {
        this.showHeader = true;
        this.showHome = false;
        this.showDashboards = true;
        this.showStatus = false;
        this.showInfo = false;
        if (window.location.href.indexOf("hour") > -1) {
          this.showHourlyDashboards = true;
          this.showDailyDashboards = false;
          this.showWeeklyDashboards = false;
          this.showMonthlyDashboards = false;
        } else if (window.location.href.indexOf("day") > -1) {
          this.showHourlyDashboards = false;
          this.showDailyDashboards = true;
          this.showWeeklyDashboards = false;
          this.showMonthlyDashboards = false;
        } else if (window.location.href.indexOf("week") > -1) {
          this.showHourlyDashboards = false;
          this.showDailyDashboards = false;
          this.showWeeklyDashboards = true;
          this.showMonthlyDashboards = false;
        } else if (window.location.href.indexOf("month") > -1) {
          this.showHourlyDashboards = false;
          this.showDailyDashboards = false;
          this.showWeeklyDashboards = false;
          this.showMonthlyDashboards = true;
        } else if (window.location.href.indexOf("status") > -1) {
          this.showHeader = true;
          this.showHome = false;
          this.showDashboards = false;
          this.showStatus = true;
          this.showInfo = false;
        } else if (window.location.href.indexOf("info") > -1) {
          this.showHeader = true;
          this.showHome = false;
          this.showDashboards = false;
          this.showStatus = false;
          this.showInfo = true;
        } else {
          this.showHeader = true;
          this.showHome = true;
          this.showDashboards = false;
          this.showStatus = false;
          this.showInfo = false;
        }
      } else if (window.location.href.indexOf("status") > -1) {
        this.showHeader = true;
        this.showHome = false;
        this.showDashboards = false;
        this.showStatus = true;
        this.showInfo = false;
      } else if (window.location.href.indexOf("info") > -1) {
        this.showHeader = true;
        this.showHome = false;
        this.showDashboards = false;
        this.showStatus = false;
        this.showInfo = true;
      } else {
        this.showHeader = true;
        this.showHome = true;
        this.showDashboards = false;
        this.showStatus = false;
        this.showInfo = false;
      }
    }
  },
  beforeMount() {
    this.checkUrl();
  }
};
</script>

<style>
body,
html {
  background: #1e1e21;
  font-family: "Roboto", sans-serif;
}
#main-container {
  width: 100%;
  margin: 0;
}
#sidebar {
  position: fixed;
}
#sidebar > button {
  display: none;
}
#content {
  margin-left: 2%;
}
#home {
  padding-top: 15%;
}
#header {
  margin-left: 2%;
  height: 10vh;
}
#header > h1 {
  color: whitesmoke;
  margin-top: 1.5%;
  margin-left: 3%;
  float: left;
}
#header > img {
  float: right;
  width: 10%;
  margin-right: 4%;
}
#celfocus {
  margin-left: 2%;
  height: 10vh;
}
#celfocus > p {
  font-size: 90%;
  color: whitesmoke;
  margin-top: 2%;
  margin-left: 83%;
  float: left;
  opacity: 0;
  animation-name: zoomInLeft, fade;
  animation-fill-mode: forwards;
  animation-delay: 2s;
  animation-duration: 2s;
}
#celfocus > img {
  float: right;
  width: 10%;
  margin-right: 3%;
  margin-top: 2%;
  opacity: 0;
  animation-name: zoomInRight, fade;
  animation-fill-mode: forwards;
  animation-delay: 2s;
  animation-duration: 2s;
}
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes zoomInLeft {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
@keyframes zoomInRight {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
#arrow-container {
  float: right;
  width: 10%;
}
.arrow {
  position: fixed;
}
@media only screen and (min-width: 1700px) and (max-width: 1903px) {
  #checkEl {
    width: 650px;
    margin-left: -50%;
  }
  #reserveNr {
    width: 650px;
    margin-left: -10%;
  }
  #simStatus {
    width: 650px;
    margin-left: -50%;
  }
  #simValidation {
    width: 650px;
    margin-left: -10%;
  }
  #checkElAvg {
    width: 650px;
    margin-left: -50%;
  }
  #reserveNrAvg {
    width: 650px;
    margin-left: -10%;
  }
  #devSync {
    width: 1315px;
    margin-left: -24.8%;
  }
  #topStores {
    width: 300px;
    margin-left: 80%;
  }
  #topAgents {
    width: 300px;
    margin-left: 80%;
  }
  #realtime {
    width: 1656px;
    margin-left: -22%;
  }
  #celfocus > p {
    margin-left: 82%;
  }
}

@media only screen and (min-width: 1590px) and (max-width: 1701px) {
  #checkEl {
    width: 600px;
    margin-left: -40%;
  }
  #reserveNr {
    width: 600px;
    margin-left: -10%;
  }
  #simStatus {
    width: 600px;
    margin-left: -40%;
  }
  #simValidation {
    width: 600px;
    margin-left: -10%;
  }
  #checkElAvg {
    width: 600px;
    margin-left: -40%;
  }
  #reserveNrAvg {
    width: 600px;
    margin-left: -10%;
  }
  #devSync {
    width: 1218px;
    margin-left: -19.8%;
  }
  #topStores {
    width: 250px;
    margin-left: 50%;
  }
  #topAgents {
    width: 250px;
    margin-left: 50%;
  }
  #statusUp {
    width: 180px;
    margin-left: -5%;
  }
  #statusDown {
    width: 180px;
    margin-left: -5%;
  }
  #realtime {
    width: 1496px;
    margin-left: -15.8%;
  }
  #celfocus > p {
    margin-left: 82%;
  }
}

@media only screen and (min-width: 1495px) and (max-width: 1591px) {
  #checkEl {
    width: 550px;
    margin-left: -30%;
  }
  #reserveNr {
    width: 550px;
    margin-left: -10%;
  }
  #simStatus {
    width: 550px;
    margin-left: -30%;
  }
  #simValidation {
    width: 550px;
    margin-left: -10%;
  }
  #checkElAvg {
    width: 550px;
    margin-left: -30%;
  }
  #reserveNrAvg {
    width: 550px;
    margin-left: -10%;
  }
  #devSync {
    width: 1120px;
    margin-left: -14.8%;
  }
  #topStores {
    width: 250px;
    margin-left: 25%;
  }
  #topAgents {
    width: 250px;
    margin-left: 25%;
  }
  #statusUp {
    width: 170px;
    margin-left: -5%;
  }
  #statusDown {
    width: 170px;
    margin-left: -5%;
  }
  #realtime {
    width: 1416px;
    margin-left: -12.2%;
  }
  #celfocus > p {
    margin-left: 82%;
  }
}
</style>