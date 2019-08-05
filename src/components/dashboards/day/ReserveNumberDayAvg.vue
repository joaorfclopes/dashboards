<template>
  <div>
    <div class="chart" id="reserveNrAvg">
      <div class="lds-ellipsis" v-if="loading">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <apexchart v-else type="radialBar" height="350" :options="chartOptions" :series="series" />
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
          palette: "palette4"
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
                    store.state.checkReserveNumberDayAvgData[0].value
                  );
                  var value2 = parseInt(
                    store.state.checkReserveNumberDayAvgData[1].value
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
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex] + "%";
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
        store.state.checkReserveNumberDayAvgData[0].value,
        store.state.checkReserveNumberDayAvgData[1].value
      ];
      this.chartOptions.labels = [
        store.state.checkReserveNumberDayAvgData[0].title,
        store.state.checkReserveNumberDayAvgData[1].title
      ];
    }
  },
  computed: {
    checkReserveNumberDayData() {
      return store.state.checkReserveNumberDayData;
    }
  },
  beforeUpdate() {
    this.getData();
  },
  created() {
    this.loading = true;

    store
      .dispatch("fetchReserveNumberDayAvg")
      .then(checkReserveNumberDayData => {
        this.loading = false;
      });
  }
};
</script>