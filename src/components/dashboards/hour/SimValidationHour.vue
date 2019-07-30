<template>
  <div id="simValidation">
    <div class="lds-ellipsis" v-if="loading">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <apexchart
      id="simValidationHour"
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
        labels: [],
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
            offsetX: 60,
            offsetY: -10,
            donut: {
              size: 70,
              labels: {
                show: true
              }
            }
          }
        }
      }
    };
  },
  methods: {
    getData() {
      this.series = [
        store.state.checkSimValidationHourData[0].value,
        store.state.checkSimValidationHourData[1].value
      ];
      this.chartOptions.labels = [
        store.state.checkSimValidationHourData[0].title,
        store.state.checkSimValidationHourData[1].title
      ];
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

    store
      .dispatch("fetchSimValidationHour")
      .then(checkSimValidationHourData => {
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
