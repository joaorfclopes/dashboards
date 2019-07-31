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
        v-else
        id="simStatusHour"
        type="radialBar"
        height="350"
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
              zoomout: false
            }
          },
          fontFamily: "Roboto, sans-serif"
        },
        theme: {
          mode: "dark",
          palette: "palette1",
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
            size: 120,
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
      this.series = [
        store.state.checkSimStatusHourData[0].value,
        store.state.checkSimStatusHourData[1].value,
        store.state.checkSimStatusHourData[2].value
      ];
      this.chartOptions.labels = [
        store.state.checkSimStatusHourData[0].title,
        store.state.checkSimStatusHourData[1].title,
        store.state.checkSimStatusHourData[2].title
      ];
    }
  },
  computed: {
    checkSimStatusHourData() {
      return store.state.checkSimStatusHourData;
    }
  },
  beforeUpdate() {
    this.getData();
  },
  created() {
    this.loading = true;

    store.dispatch("fetchSimStatusHour").then(checkSimStatusHourData => {
      this.loading = false;
    });
  }
};
</script>

<style scoped>
#simStatusHour {
  text-align: left;
}
</style>
