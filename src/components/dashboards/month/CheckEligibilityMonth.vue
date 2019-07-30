<template>
  <div id="checkEl">
    <div class="lds-ellipsis" v-if="loading">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <apexchart v-else type="bar" height="350" :options="chartOptions" :series="series" />
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
          palette: "palette4"
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
          categories: ["Orders - Last Month"]
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
          name: store.state.checkEligibilityMonthData[0].title,
          data: [store.state.checkEligibilityMonthData[0].value]
        },
        {
          name: store.state.checkEligibilityMonthData[1].title,
          data: [store.state.checkEligibilityMonthData[1].value]
        },
        {
          name: store.state.checkEligibilityMonthData[2].title,
          data: [store.state.checkEligibilityMonthData[2].value]
        }
      ];
    }
  },
  computed: {
    checkEligibilityMonthData() {
      return store.state.checkEligibilityMonthData;
    }
  },
  beforeUpdate() {
    this.getData();
  },
  created() {
    this.loading = true;

    store.dispatch("fetchCheckEligibilityMonth").then(checkEligibilityMonthData => {
      this.loading = false;
    });
  }
};
</script>