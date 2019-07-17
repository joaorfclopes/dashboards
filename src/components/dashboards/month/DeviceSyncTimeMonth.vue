<template>
    <div id="devSync" style="height: 350px;">
      <apexchart type="area" height="350" :options="chartOptions" :series="series"/>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      series: [
        {
          name: "<= 5 mnts",
          data: [105, 122, 237, 172, 251, 322, 271, 172, 155, 222, 337, 372]
        },
        {
          name: "> 5 mnts",
          data: [85, 92, 120, 110, 85, 52, 92, 60, 53, 32, 42, 30]
        }
      ],
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
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth"
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
          yaxis: {
            lines: {
              show: true
            }
          },
          row: {
            colors: undefined,
            opacity: 0.5
          },
          column: {
            colors: undefined,
            opacity: 0.5
          },
          padding: {
            top: 10,
            right: 20,
            bottom: 30,
            left: 20
          }
        },
        theme: {
          mode: "dark",
          palette: "palette4"
        },
        title: {
          text: "Device Sync Time",
          align: "left",
          offsetX: 10,
          offsetY: 10,
          floating: false,
          style: {
            fontSize: "16px",
            color: "whitesmoke"
          }
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
        }
      }
    };
  }
};
</script>