<template>
  <div id="main-container">
    <sidebar-menu collapsed id="sidebar" @itemClick="checkUrl" :menu="menu" />
    <div id="particles-js"></div>
    <div v-if="showHome" id="me">
      <img src="../assets/logo.svg" />
      <p>powered by</p>
    </div>
    <div id="content-container">
      <div id="content">
        <div v-if="showHeader" id="header">
          <div id="title">
            <h1 v-if="showHourlyDashboards">Hour</h1>
            <h1 v-if="showDailyDashboards">Day</h1>
            <h1 v-if="showWeeklyDashboards">Week</h1>
            <h1 v-if="showMonthlyDashboards">Month</h1>
          </div>
          <div id="button">
            <toggle-button
              id="btn"
              v-if="showButton"
              v-tooltip.bottom="'Change to ' + label"
              :width="100"
              :value="false"
              :labels="{checked: 'Average Time', unchecked: 'Success'}"
              color="#E60000"
              @change="switchPerformance"
            />
          </div>
          <div id="image">
            <img v-if="showHome == false" src="../assets/vodafone-logo.png" />
          </div>
        </div>
        <Home id="home" v-if="showHome"></Home>
        <div id="dashboards">
          <HourlyDashboards :checked="checked" v-if="showHourlyDashboards" id="hour-dashboards"></HourlyDashboards>
          <DailyDashboards :checked="checked" v-if="showDailyDashboards" id="day-dashboards"></DailyDashboards>
          <WeeklyDashboards :checked="checked" v-if="showWeeklyDashboards" id="week-dashboards"></WeeklyDashboards>
          <MonthlyDashboards :checked="checked" v-if="showMonthlyDashboards" id="month-dashboards"></MonthlyDashboards>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { SidebarMenu } from "vue-sidebar-menu";
import Tooltip from "vue-directive-tooltip";
import "vue-directive-tooltip/css/index.css";
import Home from "./home/Home.vue";
import HourlyDashboards from "./dashboards/hour/HourlyDashboards.vue";
import DailyDashboards from "./dashboards/day/DailyDashboards.vue";
import WeeklyDashboards from "./dashboards/week/WeeklyDashboards.vue";
import MonthlyDashboards from "./dashboards/month/MonthlyDashboards.vue";
import "particles.js";
import "@/style.css";

Vue.use(Tooltip);

window.$ = require("jquery");
window.JQuery = require("jquery");

export default {
  components: {
    SidebarMenu,
    Home,
    HourlyDashboards,
    DailyDashboards,
    WeeklyDashboards,
    MonthlyDashboards
  },
  data() {
    return {
      showHeader: true,
      showButton: false,
      showHome: true,
      showHourlyDashboards: false,
      showDailyDashboards: false,
      showWeeklyDashboards: false,
      showMonthlyDashboards: false,
      checked: false,
      label: "Average Time",
      menu: [
        {
          href: "/",
          title: "Home",
          icon: "fa fa-home",
          component: Home
        },
        {
          title: "Dashboards",
          icon: "fa fa-chart-line",
          child: [
            {
              href: "/hour",
              title: "Hour",
              component: HourlyDashboards
            },
            {
              href: "/day",
              title: "Day",
              component: DailyDashboards
            },
            {
              href: "/week",
              title: "Week",
              component: WeeklyDashboards
            },
            {
              href: "/month",
              title: "Month",
              component: MonthlyDashboards
            }
          ]
        }
      ]
    };
  },
  methods: {
    checkUrl() {
      if (window.location.href.indexOf("hour") > -1) {
        this.showHeader = true;
        this.showButton = true;
        this.showHome = false;
        this.showHourlyDashboards = true;
        this.showDailyDashboards = false;
        this.showWeeklyDashboards = false;
        this.showMonthlyDashboards = false;
      } else if (window.location.href.indexOf("day") > -1) {
        this.showHeader = true;
        this.showButton = true;
        this.showHome = false;
        this.showHourlyDashboards = false;
        this.showDailyDashboards = true;
        this.showWeeklyDashboards = false;
        this.showMonthlyDashboards = false;
      } else if (window.location.href.indexOf("week") > -1) {
        this.showHeader = true;
        this.showButton = true;
        this.showHome = false;
        this.showHourlyDashboards = false;
        this.showDailyDashboards = false;
        this.showWeeklyDashboards = true;
        this.showMonthlyDashboards = false;
      } else if (window.location.href.indexOf("month") > -1) {
        this.showHeader = true;
        this.showButton = true;
        this.showHome = false;
        this.showHourlyDashboards = false;
        this.showDailyDashboards = false;
        this.showWeeklyDashboards = false;
        this.showMonthlyDashboards = true;
      } else if (window.location.href.indexOf("status") > -1) {
        this.showHeader = true;
        this.showButton = false;
        this.showHome = false;
        this.showHourlyDashboards = false;
        this.showDailyDashboards = false;
        this.showWeeklyDashboards = false;
        this.showMonthlyDashboards = false;
        this.showStatus = true;
      } else if (window.location.href.indexOf("info") > -1) {
        this.showHeader = true;
        this.showButton = false;
        this.showHome = false;
        this.showHourlyDashboards = false;
        this.showDailyDashboards = false;
        this.showWeeklyDashboards = false;
        this.showMonthlyDashboards = false;
        this.showInfo = true;
      } else {
        this.showHeader = true;
        this.showButton = false;
        this.showHome = true;
        this.showHourlyDashboards = false;
        this.showDailyDashboards = false;
        this.showWeeklyDashboards = false;
        this.showMonthlyDashboards = false;
      }
    },
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
    switchPerformance() {
      var btn = document.getElementById("btn");
      if (btn.classList.contains("toggled")) {
        this.checked = false;
        this.label = "Average Time";
      } else {
        this.checked = true;
        this.label = "Success";
      }
    }
  },
  beforeMount() {
    this.checkUrl();
  },
  mounted() {
    this.initParticles();
  }
};
</script>

<style scoped>
#main-container {
  width: 100%;
  margin: 0;
}
#content-container {
  height: 100vh;
  position: relative;
}
#content {
  margin-left: 1%;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 100%;
  z-index: 100;
}
#home {
  padding-top: 1%;
}
#header {
  position: relative;
  z-index: 10;
  text-align: center;
  margin: 0 auto;
  height: 1vh;
}
#me {
  position: absolute;
  top: 0; 
  right: 0;
  z-index: 10;
  margin-top: 1%;
}
#me > img {
  margin-left: 0.5%;
  margin-right: 5%;
  float: right;
  width: 30%;
  opacity: 0;
  animation-name: zoomInRight, fade;
  animation-fill-mode: forwards;
  animation-delay: 1.5s;
  animation-duration: 1s;
}
#me > p {
  color: whitesmoke;
  font-size: 90%;
  float: right;
  opacity: 0;
  animation-name: zoomInLeft, fade;
  animation-fill-mode: forwards;
  animation-delay: 1.5s;
  animation-duration: 1s;
}
#title > h1 {
  color: whitesmoke;
}
#image > img {
  width: 20%;
}
#title,
#image {
  display: inline-block;
  vertical-align: top;
  width: 40%;
}
#button {
  display: inline-block;
  vertical-align: top;
  min-height: 250px;
  margin: 0;
}
#title {
  margin-top: 1.2%;
  float: left;
}
#button {
  margin-top: 1.5%;
}
#image {
  float: right;
}
#home {
  position: relative;
  z-index: 10;
}
#dashboards {
  position: relative;
  z-index: 10;
  margin-top: 3%;
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
