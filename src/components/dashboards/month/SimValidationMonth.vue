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
        id="simValidationMonth"
        v-else
        type="donut"
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
              zoomout: false
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
          palette: "palette6"
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
            size: 110,
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
      this.series = [
        store.state.checkSimValidationMonthData[0].value,
        store.state.checkSimValidationMonthData[1].value
      ];
      this.chartOptions.labels = [
        store.state.checkSimValidationMonthData[0].title,
        store.state.checkSimValidationMonthData[1].title
      ];
    }
  },
  computed: {
    checkSimValidationMonthData() {
      return store.state.checkSimValidationMonthData;
    }
  },
  beforeUpdate() {
    this.getData();
  },
  created() {
    this.loading = true;

    store
      .dispatch("fetchSimValidationMonth")
      .then(checkSimValidationMonthData => {
        this.loading = false;
      });
  }
};
</script>

<style scoped>
#simValidationMonth {
  text-align: left;
}
</style>
