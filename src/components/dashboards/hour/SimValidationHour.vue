<template>
  <div>
    <div class="chart" id="simValidation">
      <div class="lds-ellipsis" v-if="loading">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <apexchart
        id="simValidationHour"
        v-if="loading == false && this.$mq === 'desktopXL'"
        type="donut"
        height="400"
        :options="chartOptions"
        :series="series"
      />
      <apexchart
        id="simValidationHour"
        v-if="loading == false && this.$mq === 'desktopL'"
        type="donut"
        height="320"
        :options="chartOptions"
        :series="series"
      />
      <apexchart
        id="simValidationHour"
        v-if="loading == false && this.$mq === 'laptop'"
        type="donut"
        height="290"
        :options="chartOptions"
        :series="series"
      />
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  data: function() {
    return {
      loading: false,
      series: [],
      chartOptions: {
        labels: [],
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
        stroke: {
          width: 3,
          colors: ["#343F57"]
        },
        dataLabels: {
          enabled: true
        },
        theme: {
          mode: "dark",
          palette: "palette1"
        },
        title: {
          text: "SIM Validation",
          align: "left",
          offsetX: 10,
          offsetY: 10,
          style: {
            fontSize: "16px",
            color: "whitesmoke"
          }
        },
        plotOptions: {
          pie: {
            size: 120,
            offsetX: 0,
            offsetY: -10,
            donut: {
              size: 60,
              labels: {
                show: false
              }
            }
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
      for (let i = 0; i < store.state.checkSimValidationHourData.length; i++) {
        this.series[i] = store.state.checkSimValidationHourData[i].value;
        this.chartOptions.labels[i] =
          store.state.checkSimValidationHourData[i].title;
      }
    }
  },
  computed: {
    checkSimValidationHourData() {
      return store.state.checkSimValidationHourData;
    }
  },
  beforeUpdate() {
    this.getData();
  },
  created() {
    this.loading = true;

    store.dispatch("fetchSimValidationHour").then(() => {
      this.loading = false;
    });
  }
};
</script>

<style scoped>
#simValidationHour {
  text-align: left;
}
</style>
