<template>
  <div id="devSync" style="height: 350px;">
    <div class="lds-ellipsis" v-if="loading">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <apexchart v-else type="area" height="350" :options="chartOptions" :series="series" />
  </div>
</template>

<script>
import store from "../../../store";
import "../../style.css";
export default {
  data: function() {
    return {
      loading: false,
      series: [],
      chartOptions: {
        chart: {
          background: "#343F57",
          animations: {
            enabled: true,
            easing: "easeinout",
            speed: 1000,
            animateGradually: {
              delay: 150,
              enabled: true
            },
            dynamicAnimation: {
              enabled: true,
              speed: 350
            }
          },
          toolbar: {
            show: true
          },
          fontFamily: "Roboto, sans-serif"
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth"
        },
        grid: {
          show: true,
          borderColor: "#90A4AE",
          strokeDashArray: 0,
          position: "back",
          xaxis: {
            lines: {
              show: false
            }
          },
          yaxis: {
            lines: {
              show: true
            }
          },
          row: {
            colors: undefined,
            opacity: 0.5
          },
          column: {
            colors: undefined,
            opacity: 0.5
          },
          padding: {
            top: 10,
            right: 20,
            bottom: 30,
            left: 20
          }
        },
        theme: {
          mode: "dark",
          palette: "palette5"
        },
        title: {
          text: "Device Sync Time",
          align: "left",
          offsetX: 10,
          offsetY: 10,
          floating: false,
          style: {
            fontSize: "16px",
            color: "whitesmoke"
          }
        },
        xaxis: {
          categories: [
            "00h-01h",
            "01h-02h",
            "02h-03h",
            "03h-04h",
            "04h-05h",
            "05h-06h",
            "06h-07h",
            "07h-08h",
            "08h-09h",
            "09h-10h",
            "10h-11h",
            "11h-12h",
            "12h-13h",
            "13h-14h",
            "14h-15h",
            "15h-16h",
            "16h-17h",
            "17h-18h",
            "18h-19h",
            "19h-20h",
            "20h-21h",
            "21h-22h",
            "23h-00h"
          ],
          labels: {
            show: false
          }
        }
      }
    };
  },
  methods: {
    getData() {
      this.series = [
        {
          name: store.state.checkDeviceSyncTimeDayData[0].title,
          data: store.state.checkDeviceSyncTimeDayData[0].value
        },
        {
          name: store.state.checkDeviceSyncTimeDayData[1].title,
          data: store.state.checkDeviceSyncTimeDayData[1].value
        }
      ];
    }
  },
  computed: {
    checkDeviceSyncTimeDayData() {
      return store.state.checkDeviceSyncTimeDayData;
    }
  },
  beforeUpdate() {
    this.getData();
  },
  created() {
    this.loading = true;

    store
      .dispatch("fetchDeviceSyncTimeDay")
      .then(checkDeviceSyncTimeDayData => {
        this.loading = false;
      });
  }
};
</script>