<template>
  <div>
    <div class="chart" id="simStatus">
      <div class="lds-ellipsis" v-if="loading">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <apexchart
        v-if="loading == false && this.$mq === 'desktopXL'"
        id="simStatusWeek"
        type="radialBar"
        height="400"
        :options="chartOptions"
        :series="series"
      />
      <apexchart
        v-if="loading == false && this.$mq === 'desktopL'"
        id="simStatusWeek"
        type="radialBar"
        height="320"
        :options="chartOptions"
        :series="series"
      />
      <apexchart
        v-if="loading == false && this.$mq === 'laptop'"
        id="simStatusWeek"
        type="radialBar"
        height="290"
        :options="chartOptions"
        :series="series"
      />
    </div>
  </div>
</template>

<script>
import store from "../../../store";
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
        theme: {
          mode: "dark",
          palette: "palette5",
          monochrome: {
            enabled: false,
            color: "#255aee",
            shadeTo: "light",
            shadeIntensity: 0.65
          }
        },
        title: {
          text: "SIM Status Check",
          align: "left",
          offsetX: 10,
          offsetY: 10,
          floating: false,
          style: {
            fontSize: "16px",
            color: "whitesmoke"
          }
        },
        plotOptions: {
          radialBar: {
            size: 140,
            inverseOrder: true,
            startAngle: -180,
            endAngle: 90,
            offsetX: 0,
            offsetY: -20,
            hollow: {
              margin: 5,
              size: "50%",
              background: "transparent"
            },
            dataLabels: {
              name: {
                show: false
              },
              value: {
                show: false
              }
            },
            track: {
              show: true,
              opacity: 0.2
            }
          }
        },
        labels: [],
        stroke: {
          lineCap: "round"
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
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
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
      for (let i = 0; i < store.state.checkSimStatusWeekData.length; i++) {
        this.series[i] = store.state.checkSimStatusWeekData[i].value;
        this.chartOptions.labels[i] =
          store.state.checkSimStatusWeekData[i].title;
      }
    }
  },
  computed: {
    checkSimStatusWeekData() {
      return store.state.checkSimStatusWeekData;
    }
  },
  beforeUpdate() {
    this.getData();
  },
  created() {
    this.loading = true;

    store.dispatch("fetchSimStatusWeek").then(() => {
      this.loading = false;
    });
  }
};
</script>

<style scoped>
#simStatusWeek {
  text-align: left;
}
</style>
