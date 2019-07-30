<template>
  <div id="checkElAvg">
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
import style from "../../../styles/dashboards/style.css";
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