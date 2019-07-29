<template>
  <div id="simValidation">
    <div class="lds-ellipsis" v-if="loading">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <apexchart
      v-else
      type="donut"
      height="350"
      width="100%"
      :options="chartOptions"
      :series="series"
    />
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
        stroke: {
          width: 3,
          colors: ["#343F57"]
        },
        dataLabels: {
          enabled: true
        },
        labels: [],
        theme: {
          mode: "dark",
          palette: "palette8"
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
            offsetX: 60,
            offsetY: -10,
            donut: {
              size: 70,
              labels: {
                show: true
              }
            }
          }
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      }
    };
  },
  methods: {
    getData() {
      this.series = [
        store.state.checkSimValidationWeekData[0].value,
        store.state.checkSimValidationWeekData[1].value
      ];
      this.chartOptions.labels = [
        store.state.checkSimValidationWeekData[0].title,
        store.state.checkSimValidationWeekData[1].title
      ];
    }
  },
  computed: {
    checkSimValidationWeekData() {
      return store.state.checkSimValidationWeekData;
    }
  },
  beforeUpdate() {
    this.getData();
  },
  created() {
    this.loading = true;

    store.dispatch("fetchSimValidationWeek").then(checkSimValidationWeekData => {
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