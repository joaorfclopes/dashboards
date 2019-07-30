<template>
  <div id="reserveNr">
    <div class="lds-ellipsis" v-if="loading">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <apexchart v-else type="line" height="350" :options="chartOptions" :series="series" />
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
          type: "line",
          shadow: {
            enabled: false,
            color: "#bbb",
            top: 3,
            left: 2,
            blur: 3,
            opacity: 1
          },
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
          padding: {
            top: 10,
            right: 20,
            bottom: 20,
            left: 20
          }
        },
        stroke: {
          width: 7,
          curve: "smooth"
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          labels: {
            show: true
          }
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
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            gradientToColors: ["#FDD835"],
            shadeIntensity: 1,
            type: "vertical",
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100]
          }
        },
        markers: {
          size: 4,
          opacity: 0.9,
          colors: ["#FFA41B"],
          strokeColor: "#fff",
          strokeWidth: 2,

          hover: {
            size: 7
          }
        }
      }
    };
  },
  methods: {
    getData() {
      this.series = [
        {
          name: store.state.checkReserveNumberMonthData[0].title,
          data: store.state.checkReserveNumberMonthData[0].value
        },
        {
          name: store.state.checkReserveNumberMonthData[1].title,
          data: store.state.checkReserveNumberMonthData[1].value
        }
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

    store.dispatch("fetchReserveNumberMonth").then(checkReserveNumberMonthData => {
      this.loading = false;
    });
  }
};
</script>