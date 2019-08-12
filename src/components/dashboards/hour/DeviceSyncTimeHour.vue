<template>
  <div>
    <div class="chart" id="devSync">
      <div class="lds-ellipsis" v-if="loading">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <apexchart
        v-if="loading == false && this.$mq === 'desktopXL'"
        type="area"
        height="400"
        :options="chartOptions"
        :series="series"
      />
      <apexchart
        v-if="loading == false && this.$mq === 'desktopL'"
        type="area"
        height="320"
        :options="chartOptions"
        :series="series"
      />
      <apexchart
        v-if="loading == false && this.$mq === 'laptop'"
        type="area"
        height="290"
        :options="chartOptions"
        :series="series"
      />
    </div>
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
            speed: 800,
            animateGradually: {
              enabled: true,
              delay: 150
            },
            dynamicAnimation: {
              enabled: true,
              speed: 350
            }
          },
          toolbar: {
            show: true,
            tools: {
              download: true,
              selection: false,
              zoom: false,
              zoomin: false,
              zoomout: false,
              pan: false,
              reset: false
            }
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
          palette: "palette1"
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
          categories: ["Orders - Last Hour", "Orders - Last Hour"],
          labels: {
            show: false
          }
        },
        legend: {
          show: true,
          floating: false,
          position: "bottom",
          labels: {
            useSeriesColors: true
          },
          markers: {
            size: 0
          },
          formatter: function(seriesName, opts) {
            return seriesName;
          },
          itemMargin: {
            horizontal: 1
          }
        }
      }
    };
  },
  methods: {
    getData() {
      for (let i = 0; i < store.state.checkDeviceSyncTimeHourData.length; i++) {
        this.series[i] = {
          name: store.state.checkDeviceSyncTimeHourData[i].title,
          data: store.state.checkDeviceSyncTimeHourData[i].value
        };
      }
    }
  },
  computed: {
    checkDeviceSyncTimeHourData() {
      return store.state.checkDeviceSyncTimeHourData;
    }
  },
  beforeUpdate() {
    this.getData();
  },
  created() {
    this.loading = true;

    store
      .dispatch("fetchDeviceSyncTimeHour")
      .then(checkDeviceSyncTimeHourData => {
        this.loading = false;
      });
  }
};
</script>