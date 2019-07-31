<template>
  <div id="realtime">
    <apexchart
      ref="realtimeChart"
      type="area"
      height="500"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>

<script>
var lastDate = 0;
var data = [];

function getDayWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  while (i < count) {
    var x = baseval;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    data.push({
      x,
      y
    });
    lastDate = baseval;
    baseval += 86400000;
    i++;
  }
}

getDayWiseTimeSeries(new Date().getTime(), 10, {
  min: 10,
  max: 90
});

function getNewSeries(baseval, yrange) {
  var newDate = baseval + 86400000;
  lastDate = newDate;
  data.push({
    x: newDate,
    y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
  });
}

function resetData() {
  data = data.slice(data.length - 10, data.length);
}

export default {
  data: function() {
    return {
      series: [
        {
          name: "Uptime Percentage",
          data: data.slice()
        }
      ],
      chartOptions: {
        chart: {
          toolbar: {
            show: false
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
          height: 350,
          zoom: {
            enabled: false
          }
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
              show: true
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
            top: 20,
            right: 10,
            bottom: 20,
            left: 20
          }
        },
        theme: {
          mode: "dark",
          monochrome: {
            enabled: true,
            color: "#E60000",
            shadeTo: "light",
            shadeIntensity: 0.65
          }
        },
        title: {
          text: "Server Uptime",
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
          type: "datetime",
          range: 777600000,
          title: {
            text: "Today Hours",
            offsetY: 10
          }
        },
        yaxis: {
          title: {
            text: "Uptime Percentage"
          }
        }
      }
    };
  },
  mounted: function() {
    this.intervals();
  },
  methods: {
    intervals: function() {
      var me = this;
      window.setInterval(function() {
        getNewSeries(lastDate, {
          min: 10,
          max: 90
        });

        me.$refs.realtimeChart.updateSeries([
          {
            data: data
          }
        ]);
      }, 5000);

      // every 60 seconds, we reset the data to prevent memory leaks
      window.setInterval(function() {
        resetData();
        me.$refs.realtimeChart.updateSeries(
          [
            {
              data
            }
          ],
          false,
          true
        );
      }, 60000);
    }
  }
};
</script>
