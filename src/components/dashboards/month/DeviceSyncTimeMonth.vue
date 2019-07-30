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
import style from "../../../styles/dashboards/style.css";
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
          palette: "palette4"
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
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          labels: {
            show: true
          }
        }
      }
    };
  },
  methods: {
    getData() {
      this.series = [
        {
          name: store.state.checkDeviceSyncTimeMonthData[0].title,
          data: store.state.checkDeviceSyncTimeMonthData[0].value
        },
        {
          name: store.state.checkDeviceSyncTimeMonthData[1].title,
          data: store.state.checkDeviceSyncTimeMonthData[1].value
        }
      ];
    }
  },
  computed: {
    checkDeviceSyncTimeMonthData() {
      return store.state.checkDeviceSyncTimeMonthData;
    }
  },
  beforeUpdate() {
    this.getData();
  },
  created() {
    this.loading = true;

    store
      .dispatch("fetchDeviceSyncTimeMonth")
      .then(checkDeviceSyncTimeMonthData => {
        this.loading = false;
      });
  }
};
</script>