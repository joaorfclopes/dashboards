<template>
  <div>
    <div v-if="this.$mq === 'desktopXL'" class="chart" id="checkElAvg">
      <v-card class="card" color="#343F57" height="400">
        <div class="lds-ellipsis" v-if="loading">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <apexchart v-else type="bar" height="400" :options="chartOptions" :series="series" />
      </v-card>
    </div>
    <div v-if="this.$mq === 'desktopL'" class="chart" id="checkElAvg">
      <v-card class="card" color="#343F57" height="320">
        <div class="lds-ellipsis" v-if="loading">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <apexchart v-else type="bar" height="320" :options="chartOptions" :series="series" />
      </v-card>
    </div>
    <div v-if="this.$mq === 'laptop'" class="chart" id="checkElAvg">
      <v-card class="card" color="#343F57" height="290">
        <div class="lds-ellipsis" v-if="loading">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <apexchart v-else type="bar" height="290" :options="chartOptions" :series="series" />
      </v-card>
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
        plotOptions: {
          bar: {
            columnWidth: "50%",
            endingShape: "rounded"
          }
        },
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
          padding: {
            top: 10,
            right: 20,
            bottom: 20,
            left: 20
          }
        },
        theme: {
          mode: "dark",
          palette: "palette1"
        },
        title: {
          text: "Check Eligibility",
          align: "left",
          offsetX: 10,
          offsetY: 10,
          floating: false,
          style: {
            fontSize: "16px",
            color: "whitesmoke"
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ["Orders - Last Hour"],
          labels: {
            show: false
          }
        },
        fill: {
          opacity: 1
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
        {
          name: store.state.checkEligibilityHourAvgData[0].title,
          data: [store.state.checkEligibilityHourAvgData[0].value]
        },
        {
          name: store.state.checkEligibilityHourAvgData[1].title,
          data: [store.state.checkEligibilityHourAvgData[1].value]
        }
      ];
    }
  },
  computed: {
    checkEligibilityHourAvgData() {
      return store.state.checkEligibilityHourAvgData;
    }
  },
  beforeUpdate() {
    this.getData();
  },
  created() {
    this.loading = true;

    store
      .dispatch("fetchCheckEligibilityHourAvg")
      .then(checkEligibilityHourAvgData => {
        this.loading = false;
      });
  }
};
</script>