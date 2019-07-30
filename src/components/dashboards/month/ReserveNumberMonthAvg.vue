<template>
  <div id="reserveNrAvg">
    <div class="lds-ellipsis" v-if="loading">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <apexchart v-else type="radialBar" height="350" :options="chartOptions" :series="series" />
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
                formatter: function(w) {
                  var value1 = parseInt(
                    store.state.checkReserveNumberMonthAvgData[0].value
                  );
                  var value2 = parseInt(
                    store.state.checkReserveNumberMonthAvgData[1].value
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
        labels: ["<= 3 sec", "> 3 sec"]
      }
    };
  },
  methods: {
    getData() {
      this.series = [
        store.state.checkReserveNumberMonthAvgData[0].value,
        store.state.checkReserveNumberMonthAvgData[1].value
      ];
      this.chartOptions.labels = [
        store.state.checkReserveNumberMonthAvgData[0].title,
        store.state.checkReserveNumberMonthAvgData[1].title
      ];
    }
  },
  computed: {
    checkReserveNumberMonthData() {
      return store.state.checkReserveNumberMonthData;
    }
  },
  beforeUpdate() {
    this.getData();
  },
  created() {
    this.loading = true;

    store
      .dispatch("fetchReserveNumberMonthAvg")
      .then(checkReserveNumberMonthData => {
        this.loading = false;
      });
  }
};
</script>