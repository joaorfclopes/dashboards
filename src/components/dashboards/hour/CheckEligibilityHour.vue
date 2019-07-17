<template>
  <div id="checkEl">
    <img id="loading" width="50px" v-if="loading" src="../../../assets/loading.svg" alt />
    <apexchart v-else type="bar" height="350" :options="chartOptions" v-bind:series="series" />
  </div>
</template>

<script>
import store from "../../../store.js";
export default {
  data: function() {
    return {
      loading: false,
      series: [],
      chartOptions: {
        chart: {
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
            show: false
          },
          fontFamily: "Roboto, sans-serif"
        },
        grid: {
          show: true,
          xaxis: {
            lines: {
              show: true
            }
          },
          yaxis: {
            lines: {
              show: false
            }
          },
          padding: {
            top: -10,
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
          style: {
            fontSize: "16px",
            color: "whitesmoke"
          }
        },
        dataLabels: {
          enabled: false
        },
        plotOptions: {
          bar: {
            horizontal: true,
            columnWidth: "50%",
            endingShape: "rounded"
          }
        },
        xaxis: {
          categories: ["Orders - Last Hour"]
        },
        yaxis: {
          labels: {
            show: false
          }
        },
        fill: {
          opacity: 1
        }
      }
    };
  },
  methods: {
    getData() {
      this.series = [
        {
          name: store.state.checkEligibilityHourData[0].title,
          data: [store.state.checkEligibilityHourData[0].value]
        },
        {
          name: store.state.checkEligibilityHourData[1].title,
          data: [store.state.checkEligibilityHourData[1].value]
        },
        {
          name: store.state.checkEligibilityHourData[2].title,
          data: [store.state.checkEligibilityHourData[2].value]
        }
      ];
    }
  },
  computed: {
    checkEligibilityHourData() {
      return store.state.checkEligibilityHourData;
    }
  },
  beforeUpdate() {
    this.getData();
  },
  created() {
    this.loading = true;

    store
      .dispatch("fetchCheckEligibilityHour")
      .then(checkEligibilityHourData => {
        this.loading = false;
      });
  }
};
</script>

<style>
#loading {
  margin-top: 150px;
}
</style>