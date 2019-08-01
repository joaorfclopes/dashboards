<template>
  <div id="main-container">
    <sidebar-menu collapsed id="sidebar" :menu="menu" />
    <div id="content">
      <div id="particles-js"></div>
      <div v-if="showHeader == true" id="header">
        <h1 id="title" v-if="showHourlyDashboards == true">Hour</h1>
        <h1 id="title" v-if="showDailyDashboards == true">Day</h1>
        <h1 id="title" v-if="showWeeklyDashboards == true">Week</h1>
        <h1 id="title" v-if="showMonthlyDashboards == true">Month</h1>
        <h1 id="title" v-if="showStatus == true">Servers Status</h1>
        <h1 id="title" v-if="showInfo == true">Servers Info Details</h1>
        <img v-if="showHome == false" src="../assets/vodafone-logo.png" />
        <div id="celfocus" v-if="showHome == true">
          <p>powered by</p>
          <img src="../assets/celfocus-logo.png" />
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
import "particles.js";
import "./style.css";

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
          icon: "fas fa-home",
          color: "red"
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
  mounted() {
    this.initParticles();
  },
  methods: {
    initParticles() {
      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 700
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: {
              nb_sides: 5
            }
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 2,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false,
              mode: "grab"
            },
            onclick: {
              enable: false,
              mode: "repulse"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 150,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      });
    },
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

<style scoped>
#main-container {
  width: 100%;
  margin: 0;
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
  position: relative;
  z-index: 10;
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
  animation-duration: 1s;
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
  animation-duration: 1s;
}
#home {
  position: relative;
  z-index: 10;
}
#dashboards {
  position: relative;
  z-index: 10;
}
#servers {
  position: relative;
  z-index: 10;
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
</style>
