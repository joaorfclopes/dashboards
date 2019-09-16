<template>
  <div>
    <div class="chart" id="reserveNr">
      <div class="lds-ellipsis" v-if="loading">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <apexchart
        v-if="loading == false && this.$mq === 'desktopXL'"
        type="line"
        height="400"
        :options="chartOptions"
        :series="series"
      />
      <apexchart
        v-if="loading == false && this.$mq === 'desktopL'"
        type="line"
        height="320"
        :options="chartOptions"
        :series="series"
      />
      <apexchart
        v-if="loading == false && this.$mq === 'laptop'"
        type="line"
        height="290"
        :options="chartOptions"
        :series="series"
      />
    </div>
  </div>
</template>

<script>
import store from "@/store";
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
              zoomout: false,
              pan: false,
              reset: false
            }
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
          type: "Week",
          categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
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
            gradientToColors: ["#C6FFB4"],
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
        },
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
          formatter: function(seriesName) {
            return seriesName;
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
      for (let i = 0; i < store.state.checkReserveNumberWeekData.length; i++) {
        this.series[i] = {
          name: store.state.checkReserveNumberWeekData[i].title,
          data: store.state.checkReserveNumberWeekData[i].value
        };
      }
    }
  },
  computed: {
    checkReserveNumberWeekData() {
      return store.state.checkReserveNumberWeekData;
    }
  },
  beforeUpdate() {
    this.getData();
  },
  created() {
    this.loading = true;

    store
      .dispatch("fetchReserveNumberWeek")
      .then(() => {
        this.loading = false;
      });
  }
};
</script>