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
            "00h-01h",
            "01h-02h",
            "02h-03h",
            "03h-04h",
            "04h-05h",
            "05h-06h",
            "06h-07h",
            "07h-08h",
            "08h-09h",
            "09h-10h",
            "10h-11h",
            "11h-12h",
            "12h-13h",
            "13h-14h",
            "14h-15h",
            "15h-16h",
            "16h-17h",
            "17h-18h",
            "18h-19h",
            "19h-20h",
            "20h-21h",
            "21h-22h",
            "23h-00h"
          ],
          labels: {
            show: false
          }
        },
        theme: {
          mode: "dark",
          palette: "palette5"
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
          name: store.state.checkReserveNumberDayData[0].title,
          data: store.state.checkReserveNumberDayData[0].value
        },
        {
          name: store.state.checkReserveNumberDayData[1].title,
          data: store.state.checkReserveNumberDayData[1].value
        }
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
      .dispatch("fetchReserveNumberDay")
      .then(checkReserveNumberDayData => {
        this.loading = false;
      });
  }
};
</script>