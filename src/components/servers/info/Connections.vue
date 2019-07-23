<template>
  <div>
    <div id="connections-container">
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <div id="tooltips">
            <div id="tooltipContentWebLb">
              <div style="color: red; text-transform: uppercase">
                <strong>web-lb</strong>
              </div>
              <p>10.160.0.12</p>
              <div style="font-size: 12px;">http/s://ecr.vodafone.com.qa/oncfo/*:443 -> 7005</div>
              <div style="font-size: 12px;">http/s://ecr.vodafone.com.qa/oncres/*:443 -> 7005</div>
              <div style="font-size: 12px;">http/s://ecr.vodafone.com.qa/use/*:443 -> 7005</div>
              <div style="font-size: 12px;">http/s://dms.vodafone.com.qa/oncbo/*:443 -> 7005</div>
              <div style="font-size: 12px;">http/s://dms.vodafone.com.qa/oncres/*:443 -> 7005</div>
            </div>
            <div id="tooltipContent-ecr-portal">
              <h5 style="color: white">https://ecr.vodafone.com.qa/oncfo/*</h5>
              <h5 style="color: white">https://ecr.vodafone.com.qa/oncres/*</h5>
            </div>
            <div id="tooltipContent-ecr-tablets">
              <h5 style="color: white">https://ecr.vodafone.com.qa/use/*</h5>
            </div>
            <div id="tooltipContent-3rd-party">
              <h5 style="color: white">Celfocus</h5>
            </div>
          </div>
          <v-flex class="box" v-for="i in 6" :key="`1${i}`" xs2>
            <div v-if="i == 3" id="fw5" class="element">
              <img src="../../../assets/firewall.png" width="30%;" />
              <h5 id="title" style="text-transform: uppercase; color: white">fw5</h5>
            </div>
            <div v-if="i == 6" class="lb element">
              <img
                id="lb-web"
                src="../../../assets/loadbalancer.png"
                width="40%"
                style="cursor: pointer"
                v-tooltip.left="{html: 'tooltipContentWebLb'}"
              />
            </div>
          </v-flex>
          <v-flex class="box" v-for="i in 6" :key="`2${i}`" xs2>
            <div v-if="i == 3" id="fw5" style="height: 20px;" class="element"></div>
          </v-flex>
          <v-flex class="box" v-for="i in 6" :key="`3${i}`" xs2>
            <div id="internet1" v-if="i == 2" class="element">
              <img src="../../../assets/internet.png" width="30%;" />
              <h5 id="title" style="text-transform: uppercase; color: white">internet</h5>
            </div>
            <div id="fw2" v-if="i == 6" class="element">
              <img src="../../../assets/firewall.png" width="30%;" />
              <h5 id="title" style="text-transform: uppercase; color: white">fw2</h5>
            </div>
          </v-flex>
          <v-flex class="box" v-for="i in 6" :key="`4${i}`" xs2>
            <div v-if="i == 3" id="fw5" style="height: 20px;" class="element"></div>
          </v-flex>
          <v-flex class="box" v-for="i in 6" :key="`5${i}`" xs2>
            <div id="ecr-portal" v-if="i == 1" class="element">
              <img
                src="../../../assets/pc.png"
                style="cursor: pointer"
                v-tooltip.right="{html: 'tooltipContent-ecr-portal'}"
                width="30%;"
              />
              <h5 id="title" style="text-transform: uppercase; color: white">ecr portal</h5>
            </div>
            <div id="ecr-tablets" v-if="i == 3" class="element">
              <img
                src="../../../assets/tablet.png"
                style="cursor: pointer"
                v-tooltip.right="{html: 'tooltipContent-ecr-tablets'}"
                width="30%;"
              />
              <h5 id="title" style="text-transform: uppercase; color: white">ecr tablets</h5>
            </div>
            <div id="fw1" v-if="i == 5" class="element">
              <img src="../../../assets/firewall.png" width="30%;" />
              <h5 id="title" style="text-transform: uppercase; color: white">fw1</h5>
            </div>
          </v-flex>
          <v-flex class="box" v-for="i in 6" :key="`6${i}`" xs2>
            <div v-if="i == 3" id="fw5" style="height: 20px;" class="element"></div>
          </v-flex>
          <v-flex class="box" v-for="i in 6" :key="`7${i}`" xs2>
            <div id="internet2" v-if="i == 5" class="element">
              <img src="../../../assets/internet.png" width="30%;" />
              <h5 id="title" style="text-transform: uppercase; color: white">internet</h5>
            </div>
          </v-flex>
          <v-flex class="box" v-for="i in 6" :key="`8${i}`" xs2>
            <div v-if="i == 3" id="fw5" style="height: 20px;" class="element"></div>
          </v-flex>
          <v-flex class="box" v-for="i in 6" :key="`9${i}`" xs2>
            <div id="3rd-party" v-if="i == 5" class="element">
              <img
                src="../../../assets/pc.png"
                style="cursor: pointer"
                v-tooltip.right="{html: 'tooltipContent-3rd-party'}"
                width="30%;"
              />
              <h5 id="title" style="text-transform: uppercase; color: white">3rd party</h5>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Tooltip from "vue-directive-tooltip";
import "vue-directive-tooltip/css/index.css";
import { setTimeout } from "timers";
import jsplumb from "jsplumb";

Vue.use(Tooltip);

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

<style>
#connections-container {
  margin-top: 6%;
}
.box {
  margin-top: 4%;
}
</style>