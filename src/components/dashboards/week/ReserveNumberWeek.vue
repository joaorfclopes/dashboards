<template>
    <div id="reserveNr">
      <apexchart type="line" height="350" :options="chartOptions" :series="series"/>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      series: [
        {
          name: "Success",
          data: [31, 25, 43, 18]
        },
        {
          name: "Failure - number not found",
          data: [20, 12, 23, 8]
        }
      ],
      chartOptions: {
        chart: {
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
            show: false
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
            "Week 1",
            "Week 2",
            "Week 3",
            "Week 4"
          ]
        },
        theme: {
          mode: "dark",
          palette: "palette8"
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
  }
};
</script>

<style>
</style>
