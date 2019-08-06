<template>
  <div>
    <div v-if="this.$mq === 'desktopXL'" class="chart" id="reserveNrAvg">
      <v-card class="card" color="#343F57" height="400">
        <div class="lds-ellipsis" v-if="loading">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <apexchart v-else type="radialBar" height="400" :options="chartOptions" :series="series" />
      </v-card>
    </div>
    <div v-if="this.$mq === 'desktopL'" class="chart" id="reserveNrAvg">
      <v-card class="card" color="#343F57" height="320">
        <div class="lds-ellipsis" v-if="loading">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <apexchart v-else type="radialBar" height="320" :options="chartOptions" :series="series" />
      </v-card>
    </div>
    <div v-if="this.$mq === 'laptop'" class="chart" id="reserveNrAvg">
      <v-card class="card" color="#343F57" height="290">
        <div class="lds-ellipsis" v-if="loading">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <apexchart v-else type="radialBar" height="290" :options="chartOptions" :series="series" />
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
          palette: "palette1"
        },
        title: {
          text: "Reserve Number",
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
            offsetX: 0,
            offsetY: -10,
            dataLabels: {
              name: {
                fontSize: "22px"
              },
              value: {
                fontSize: "16px"
              },
              total: {
                show: true,
                label: "Total",
                formatter: function() {
                  var value1 = parseInt(
                    store.state.checkReserveNumberHourAvgData[0].value
                  );
                  var value2 = parseInt(
                    store.state.checkReserveNumberHourAvgData[1].value
                  );
                  var values = value1 + value2;
                  return values + "%";
                }
              }
            },
            track: {
              show: true,
              opacity: 0.2
            }
          }
        },
        labels: [],
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
            return (
              seriesName + ":  " + opts.w.globals.series[opts.seriesIndex] + "%"
            );
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
        store.state.checkReserveNumberHourAvgData[0].value,
        store.state.checkReserveNumberHourAvgData[1].value
      ];
      this.chartOptions.labels = [
        store.state.checkReserveNumberHourAvgData[0].title,
        store.state.checkReserveNumberHourAvgData[1].title
      ];
    }
  },
  computed: {
    checkReserveNumberHourData() {
      return store.state.checkReserveNumberHourData;
    }
  },
  beforeUpdate() {
    this.getData();
  },
  created() {
    this.loading = true;

    store
      .dispatch("fetchReserveNumberHourAvg")
      .then(checkReserveNumberHourData => {
        this.loading = false;
      });
  }
};
</script>