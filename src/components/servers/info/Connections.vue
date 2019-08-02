<template>
  <div>
    <div id="connections-container">
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <div id="tooltips">
            <div id="tooltipContentWebLb">
              <div id="web-lb-title">
                <strong>web-lb</strong>
              </div>
              <p>10.160.0.12</p>
              <div id="web-lb-content">
                <div>http/s://ecr.vodafone.com.qa/oncfo/*:443 -> 7005</div>
                <div>http/s://ecr.vodafone.com.qa/oncres/*:443 -> 7005</div>
                <div>http/s://ecr.vodafone.com.qa/use/*:443 -> 7005</div>
                <div>http/s://dms.vodafone.com.qa/oncbo/*:443 -> 7005</div>
                <div>http/s://dms.vodafone.com.qa/oncres/*:443 -> 7005</div>
              </div>
            </div>
            <div id="tooltipContent-ecr-portal">
              <h5>https://ecr.vodafone.com.qa/oncfo/*</h5>
              <h5>https://ecr.vodafone.com.qa/oncres/*</h5>
            </div>
            <div id="tooltipContent-ecr-tablets">
              <h5>https://ecr.vodafone.com.qa/use/*</h5>
            </div>
            <div id="tooltipContent-3rd-party">
              <h5>Celfocus</h5>
            </div>
          </div>
          <v-flex class="box" v-for="i in 6" :key="`1${i}`" xs2>
            <div v-if="i == 3" id="fw5" class="element">
              <img src="../../../assets/firewall.png" width="30%;" />
              <h5 id="title">fw5</h5>
            </div>
            <div v-if="i == 6" class="lb element">
              <img
                id="lb-web"
                class="point"
                src="../../../assets/loadbalancer.png"
                width="40%"
                v-tooltip.left="{html: 'tooltipContentWebLb'}"
              />
            </div>
          </v-flex>
          <v-flex class="box" v-for="i in 6" :key="`2${i}`" xs2>
            <div v-if="i == 3" class="element fw5"></div>
          </v-flex>
          <v-flex class="box" v-for="i in 6" :key="`3${i}`" xs2>
            <div id="internet1" v-if="i == 2" class="element">
              <img src="../../../assets/internet.png" width="30%;" />
              <h5 id="title">internet</h5>
            </div>
            <div id="fw2" v-if="i == 6" class="element">
              <img src="../../../assets/firewall.png" width="30%;" />
              <h5 id="title">fw2</h5>
            </div>
          </v-flex>
          <v-flex class="box" v-for="i in 6" :key="`4${i}`" xs2>
            <div v-if="i == 3" class="element fw5"></div>
          </v-flex>
          <v-flex class="box" v-for="i in 6" :key="`5${i}`" xs2>
            <div id="ecr-portal" v-if="i == 1" class="element">
              <img
                class="point"
                src="../../../assets/pc.png"
                v-tooltip.right="{html: 'tooltipContent-ecr-portal'}"
                width="30%;"
              />
              <h5 id="title">ecr portal</h5>
            </div>
            <div id="ecr-tablets" v-if="i == 3" class="element">
              <img
                class="point"
                src="../../../assets/tablet.png"
                v-tooltip.right="{html: 'tooltipContent-ecr-tablets'}"
                width="30%;"
              />
              <h5 id="title">ecr tablets</h5>
            </div>
            <div id="fw1" v-if="i == 5" class="element">
              <img src="../../../assets/firewall.png" width="30%;" />
              <h5 id="title">fw1</h5>
            </div>
          </v-flex>
          <v-flex class="box" v-for="i in 6" :key="`6${i}`" xs2>
            <div v-if="i == 3" class="element fw5"></div>
          </v-flex>
          <v-flex class="box" v-for="i in 6" :key="`7${i}`" xs2>
            <div id="internet2" v-if="i == 5" class="element">
              <img src="../../../assets/internet.png" width="30%;" />
              <h5 id="title">internet</h5>
            </div>
          </v-flex>
          <v-flex class="box" v-for="i in 6" :key="`8${i}`" xs2>
            <div v-if="i == 3" class="element fw5"></div>
          </v-flex>
          <v-flex class="box" v-for="i in 6" :key="`9${i}`" xs2>
            <div id="3rd-party" v-if="i == 5" class="element">
              <img
                class="point"
                src="../../../assets/pc.png"
                v-tooltip.right="{html: 'tooltipContent-3rd-party'}"
                width="30%;"
              />
              <h5 id="title">3rd party</h5>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
import { setTimeout } from "timers";
import jsplumb from "jsplumb";

export default {
  methods: {
    repaint() {
      setTimeout(function() {
        jsPlumb.repaintEverything();
      }, 1000);
    }
  },
  mounted() {
    this.repaint();
    jsPlumb.ready(function() {
      $(window).resize(function() {
        jsPlumb.repaintEverything();
      });
      jsPlumb.connect({
        source: "lb-web",
        target: "fw2",
        connector: ["Straight"],
        endpoint: "Blank",
        paintStyle: { stroke: "white", strokeWidth: 1.5 },
        anchor: ["Top", "Bottom"]
      });
      jsPlumb.connect({
        source: "lb-web",
        target: "internal-presentation",
        connector: ["Straight"],
        endpoint: "Blank",
        paintStyle: { stroke: "white", strokeWidth: 1.5 },
        anchor: ["Right", "Left"]
      });
      jsPlumb.connect({
        source: "fw5",
        target: "internet1",
        connector: ["Straight"],
        endpoint: "Blank",
        paintStyle: { stroke: "white", strokeWidth: 1.5 },
        anchor: ["Bottom", "Top"]
      });
      jsPlumb.connect({
        source: "internet1",
        target: "ecr-portal",
        connector: ["Straight"],
        endpoint: "Blank",
        paintStyle: { stroke: "white", strokeWidth: 1.5 },
        anchor: ["Bottom", "Top"]
      });
      jsPlumb.connect({
        source: "internet1",
        target: "ecr-tablets",
        connector: ["Straight"],
        endpoint: "Blank",
        paintStyle: { stroke: "white", strokeWidth: 1.5 },
        anchor: ["Bottom", "Top"]
      });
      jsPlumb.connect({
        source: "fw5",
        target: "fw1",
        connector: ["Straight"],
        endpoint: "Blank",
        paintStyle: { stroke: "white", strokeWidth: 1.5 },
        anchor: ["Bottom", "Top"]
      });
      jsPlumb.connect({
        source: "fw5",
        target: "fw2",
        connector: ["Straight"],
        endpoint: "Blank",
        paintStyle: { stroke: "white", strokeWidth: 1.5 },
        anchor: ["Bottom", "Top"]
      });
      jsPlumb.connect({
        source: "fw1",
        target: "internet2",
        connector: ["Straight"],
        endpoint: "Blank",
        paintStyle: { stroke: "white", strokeWidth: 1.5 },
        anchor: ["Bottom", "Top"]
      });
      jsPlumb.connect({
        source: "internet2",
        target: "3rd-party",
        connector: ["Straight"],
        endpoint: "Blank",
        paintStyle: { stroke: "white", strokeWidth: 1.5 },
        anchor: ["Bottom", "Top"]
      });
    });
  }
};
</script>

<style scoped>
#connections-container {
  margin-top: 6%;
}
.box {
  margin-top: 4%;
}
#web-lb-title {
  color: red;
  text-transform: uppercase;
}
#web-lb-content {
  font-size: 12px;
}
h5 {
  color: white;
}
#title {
  text-transform: uppercase;
  color: white;
}
.point {
  cursor: pointer;
}
.fw5 {
  height: 20px;
}
</style>
