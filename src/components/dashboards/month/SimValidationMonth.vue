<template>
  <div id="simValidation">
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
      width="100%"
      :options="chartOptions"
      :series="series"
    />
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
          palette: "palette4"
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