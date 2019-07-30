<template>
  <div id="simStatus">
    <div class="lds-ellipsis" v-if="loading">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <apexchart
      v-else
      id="simStatusHour"
      type="radialBar"
      height="350"
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
        theme: {
          mode: "dark",
          palette: "palette1",
          monochrome: {
            enabled: false,
            color: "#255aee",
            shadeTo: "light",
            shadeIntensity: 0.65
          }
        },
        title: {
          text: "SIM Status Check",
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
            inverseOrder: true,
            startAngle: -180,
            endAngle: 90,
            offsetX: -50,
            offsetY: 0,
            hollow: {
              margin: 5,
              size: "50%",
              background: "transparent"
            },
            dataLabels: {
              name: {
                show: false
              },
              value: {
                show: false
              }
            },
            track: {
              show: true,
              opacity: 0.2
            }
          }
        },
        labels: [],
        stroke: {
          lineCap: "round"
        },
        legend: {
          show: true,
          floating: true,
          fontSize: "14px",
          position: "left",
          offsetX: 330,
          offsetY: 230,
          labels: {
            useSeriesColors: false
          },
          markers: {
            size: 0
          },
          formatter: function(seriesName, opts) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
          },
          itemMargin: {
            horizontal: 1
          }
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                show: false
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
        store.state.checkSimStatusHourData[0].value,
        store.state.checkSimStatusHourData[1].value,
        store.state.checkSimStatusHourData[2].value
      ];
      this.chartOptions.labels = [
        store.state.checkSimStatusHourData[0].title,
        store.state.checkSimStatusHourData[1].title,
        store.state.checkSimStatusHourData[2].title
      ];
    }
  },
  computed: {
    checkSimStatusHourData() {
      return store.state.checkSimStatusHourData;
    }
  },
  beforeUpdate() {
    this.getData();
  },
  created() {
    this.loading = true;

    store.dispatch("fetchSimStatusHour").then(checkSimStatusHourData => {
      this.loading = false;
    });
  }
};
</script>