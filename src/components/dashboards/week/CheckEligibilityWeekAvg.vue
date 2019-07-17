<template>
    <div id="checkElAvg">
      <apexchart type="bar" height="350" :options="chartOptions" :series="series"/>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      series: [
        {
          name: "<= 3 sec",
          data: [200]
        },
        {
          name: "> 3 sec",
          data: [100]
        }
      ],
      chartOptions: {
        plotOptions: {
          bar: {
            columnWidth: "50%",
            endingShape: "rounded"
          }
        },
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
          palette: "palette8"
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
          categories: ["Orders - Last Week"],
          labels: {
            show: false
          }
        },
        fill: {
          opacity: 1
        }
      }
    };
  }
};
</script>