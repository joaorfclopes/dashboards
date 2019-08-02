<template>
  <div id="scheme-container">
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <Modal
          :showOhs1="showOhs1"
          :showOhs2="showOhs2"
          :showWc1="showWc1"
          :showWc2="showWc2"
          :showApp1="showApp1"
          :showApp2="showApp2"
          :showDb1="showDb1"
          :showDb2="showDb2"
          :showOid1="showOid1"
          :showOid2="showOid2"
          :showBi="showBi"
          class="modal"
          v-if="showModal"
          @close="showModal = false"
        ></Modal>
        <div id="tooltips">
          <div id="tooltipContentOhs1">
            <p></p>
            <p>
              <strong>Mgmt:</strong> 10.160.0.171
            </p>
            <p>
              <strong>Data:</strong> 10.160.0.11
            </p>
          </div>
          <div id="tooltipContentOhs2">
            <p></p>
            <p>
              <strong>Mgmt:</strong> 10.160.0.170
            </p>
            <p>
              <strong>Data:</strong> 10.160.0.10
            </p>
          </div>
          <div id="tooltipContentWc1">
            <p></p>
            <p>
              <strong>Mgmt:</strong> 10.160.0.235
            </p>
            <p>
              <strong>Data:</strong> 10.160.0.107
            </p>
          </div>
          <div id="tooltipContentWc2">
            <p></p>
            <p>
              <strong>Mgmt:</strong> 10.160.0.234
            </p>
            <p>
              <strong>Data:</strong> 10.160.0.106
            </p>
          </div>
          <div id="tooltipContentApp1">
            <p></p>
            <p>
              <strong>Mgmt:</strong> 10.160.0.236
            </p>
            <p>
              <strong>Data:</strong> 10.160.0.108
            </p>
          </div>
          <div id="tooltipContentApp2">
            <p></p>
            <p>
              <strong>Mgmt:</strong> 10.160.0.237
            </p>
            <p>
              <strong>Data:</strong> 10.160.0.109
            </p>
          </div>
          <div id="tooltipContentDb1">
            <p></p>
            <p>
              <strong>Mgmt:</strong> 10.160.0.202
            </p>
            <p>
              <strong>Data:</strong> 10.160.0.74/76
            </p>
          </div>
          <div id="tooltipContentDb2">
            <p></p>
            <p>
              <strong>Mgmt:</strong> 10.160.0.203
            </p>
            <p>
              <strong>Data:</strong> 10.160.0.75/77/78/79/80
            </p>
          </div>
          <div id="tooltipContentOid1">
            <p></p>
            <p>
              <strong>Mgmt:</strong> 10.160.0.206
            </p>
            <p>
              <strong>Data:</strong> 10.160.0.83
            </p>
          </div>
          <div id="tooltipContentOid2">
            <p></p>
            <p>
              <strong>Mgmt:</strong> 10.160.0.207
            </p>
            <p>
              <strong>Data:</strong> 10.160.0.84
            </p>
          </div>
          <div id="tooltipContentBi">
            <p></p>
            <p>
              <strong>Mgmt:</strong> 10.160.0.204
            </p>
            <p>
              <strong>Data:</strong> 10.160.0.81
            </p>
          </div>
          <div id="tooltipContentPrtlLb">
            <div class="lb-title">
              <strong>prtl-lb</strong>
            </div>
            <div>10.160.0.113</div>
            <div class="lb-endpoint">http/* :7002 -> 7002</div>
          </div>
          <div id="tooltipContentLdapLb">
            <div class="lb-title">
              <strong>ldap-lb</strong>
            </div>
            <div>10.160.0.90</div>
            <div class="lb-endpoint">ldap/* :3060 -> 3060</div>
          </div>
          <div id="tooltipContentAppLb">
            <div class="lb-title">
              <strong>app-lb</strong>
            </div>
            <div>10.160.0.113</div>
            <div class="lb-endpoint">http/* :7005 -> 7005</div>
          </div>
        </div>
        <v-flex v-for="i in 3" :key="`1${i}`" xs12>
          <v-card
            id="internal-presentation"
            v-if="i == 1"
            dark
            color="#2A2A2E"
            height="200"
            class="zones"
          >
            <div class="scheme-title-container">
              <h4 id="scheme-title">internal presentation</h4>
            </div>
            <v-layout align-center justify-center row fill-height>
              <v-flex v-for="i in 3" :key="`4${i}`" xs4>
                <div v-if="i == 1" id="ohs" class="card margin">
                  <div id="ohs1" class="left">
                    <h3>bvpr-dmsow01</h3>
                    <v-btn
                      @click="showOhs1func"
                      class="btn"
                      fab
                      dark
                      depressed
                      outline
                      color="transparent"
                      v-tooltip.top="{html: 'tooltipContentOhs1'}"
                    >
                      <img src="../../../assets/server.png" width="80%" />
                    </v-btn>
                  </div>
                  <div id="ohs2" class="right">
                    <h3>bvpr-dmsow02</h3>
                    <v-btn
                      @click="showOhs2func"
                      class="btn"
                      fab
                      dark
                      depressed
                      outline
                      color="transparent"
                      v-tooltip.top="{html: 'tooltipContentOhs2'}"
                    >
                      <img src="../../../assets/server.png" width="80%" />
                    </v-btn>
                  </div>
                </div>
              </v-flex>
            </v-layout>
          </v-card>
          <div v-if="i == 1" id="prtl-lb" class="lb left">
            <img
              src="../../../assets/loadbalancer.png"
              width="10%"
              v-tooltip.left="{html: 'tooltipContentPrtlLb'}"
            />
          </div>
          <v-card class="zones" v-if="i == 2" dark color="#2A2A2E" height="200">
            <div class="scheme-title-container">
              <h4 id="scheme-title">application zone</h4>
            </div>
            <v-layout align-center justify-center row fill-height>
              <v-flex v-for="i in 3" :key="`4${i}`" xs4>
                <div v-if="i == 1" id="wc" class="card margin">
                  <div id="wc1" class="left">
                    <h3>bvpr-dmswc01</h3>
                    <v-btn
                      @click="showWc1func"
                      class="btn"
                      fab
                      dark
                      depressed
                      outline
                      color="transparent"
                      v-tooltip.top="{html: 'tooltipContentWc1'}"
                    >
                      <img src="../../../assets/server.png" width="80%" />
                    </v-btn>
                  </div>
                  <div id="wc2" class="right">
                    <h3>bvpr-dmswc02</h3>
                    <v-btn
                      @click="showWc2func"
                      class="btn"
                      fab
                      dark
                      depressed
                      outline
                      color="transparent"
                      v-tooltip.top="{html: 'tooltipContentWc2'}"
                    >
                      <img src="../../../assets/server.png" width="80%" />
                    </v-btn>
                  </div>
                </div>
                <div v-if="i == 2" class="lb">
                  <img
                    id="app-lb"
                    src="../../../assets/loadbalancer.png"
                    width="13%"
                    v-tooltip.top="{html: 'tooltipContentAppLb'}"
                  />
                </div>
                <div v-if="i == 3" id="app-scheme" class="card">
                  <div id="app1" class="left">
                    <h3>bvpr-dmsapp01</h3>
                    <v-btn
                      @click="showApp1func"
                      class="btn"
                      fab
                      dark
                      depressed
                      outline
                      color="transparent"
                      v-tooltip.top="{html: 'tooltipContentApp1'}"
                    >
                      <img src="../../../assets/server.png" width="80%" />
                    </v-btn>
                  </div>
                  <div id="app1" class="right">
                    <h3>bvpr-dmsapp02</h3>
                    <v-btn
                      @click="showApp2func"
                      class="btn"
                      fab
                      dark
                      depressed
                      outline
                      color="transparent"
                      v-tooltip.top="{html: 'tooltipContentApp2'}"
                    >
                      <img src="../../../assets/server.png" width="80%" />
                    </v-btn>
                  </div>
                </div>
              </v-flex>
            </v-layout>
          </v-card>
          <div v-if="i == 2" id="ldap-lb" class="lb right">
            <img
              src="../../../assets/loadbalancer.png"
              width="12%"
              v-tooltip.left="{html: 'tooltipContentLdapLb'}"
            />
          </div>
          <v-card class="zones" v-if="i == 3" dark color="#2A2A2E" height="200">
            <div class="scheme-title-container">
              <h4 id="scheme-title">database zone</h4>
            </div>
            <v-layout align-center justify-center row fill-height>
              <v-flex v-for="i in 3" :key="`4${i}`" xs4>
                <div v-if="i == 1" id="db" class="card margin">
                  <div id="db1" class="left">
                    <h3>bvpr-dmsdb01</h3>
                    <v-btn
                      @click="showDb1func"
                      class="btn"
                      fab
                      dark
                      depressed
                      outline
                      color="transparent"
                      v-tooltip.top="{html: 'tooltipContentDb1'}"
                    >
                      <img src="../../../assets/server.png" width="80%" />
                    </v-btn>
                  </div>
                  <div id="db2" class="right">
                    <h3>bvpr-dmsdb02</h3>
                    <v-btn
                      @click="showDb2func"
                      class="btn"
                      fab
                      dark
                      depressed
                      outline
                      color="transparent"
                      v-tooltip.top="{html: 'tooltipContentDb2'}"
                    >
                      <img src="../../../assets/server.png" width="80%" />
                    </v-btn>
                  </div>
                </div>
                <div v-if="i == 2" id="bi" class="card">
                  <div id="bi1" class="left">
                    <h3>bvpr-dmsbibd01</h3>
                    <v-btn
                      @click="showBifunc"
                      class="btn"
                      fab
                      dark
                      depressed
                      outline
                      color="transparent"
                      v-tooltip.top="{html: 'tooltipContentBi'}"
                    >
                      <img src="../../../assets/server.png" width="80%" />
                    </v-btn>
                  </div>
                </div>
                <div v-if="i == 3" id="oid" class="card">
                  <div id="oid1" class="left">
                    <h3>bvpr-dmsodi01</h3>
                    <v-btn
                      @click="showOid1func"
                      class="btn"
                      fab
                      dark
                      depressed
                      outline
                      color="transparent"
                      v-tooltip.top="{html: 'tooltipContentOid1'}"
                    >
                      <img src="../../../assets/server.png" width="80%" />
                    </v-btn>
                  </div>
                  <div id="oid1" class="right">
                    <h3>bvpr-dmsodi02</h3>
                    <v-btn
                      @click="showOid2func"
                      class="btn"
                      fab
                      dark
                      depressed
                      outline
                      color="transparent"
                      v-tooltip.top="{html: 'tooltipContentOid2'}"
                    >
                      <img src="../../../assets/server.png" width="80%" />
                    </v-btn>
                  </div>
                </div>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Modal from "./Modal.vue";
import { setTimeout } from "timers";
import jsplumb from "jsplumb";

export default {
  components: {
    Modal
  },
  data: function() {
    return {
      showModal: false,
      showOhs1: false,
      showOhs2: false,
      showWc1: false,
      showWc2: false,
      showApp1: false,
      showApp2: false,
      showDb1: false,
      showDb2: false,
      showOid1: false,
      showOid2: false,
      showBi: false
    };
  },
  methods: {
    showOhs1func() {
      this.clear();
      this.showModal = true;
      this.showOhs1 = true;
    },
    showOhs2func() {
      this.clear();
      this.showModal = true;
      this.showOhs2 = true;
    },
    showWc1func() {
      this.clear();
      this.showModal = true;
      this.showWc1 = true;
    },
    showWc2func() {
      this.clear();
      this.showModal = true;
      this.showWc2 = true;
    },
    showApp1func() {
      this.clear();
      this.showModal = true;
      this.showApp1 = true;
    },
    showApp2func() {
      this.clear();
      this.showModal = true;
      this.showApp2 = true;
    },
    showDb1func() {
      this.clear();
      this.showModal = true;
      this.showDb1 = true;
    },
    showDb2func() {
      this.clear();
      this.showModal = true;
      this.showDb2 = true;
    },
    showOid1func() {
      this.clear();
      this.showModal = true;
      this.showOid1 = true;
    },
    showOid2func() {
      this.clear();
      this.showModal = true;
      this.showOid2 = true;
    },
    showBifunc() {
      this.clear();
      this.showModal = true;
      this.showBi = true;
    },
    clear() {
      this.showOhs1 = false;
      this.showOhs2 = false;
      this.showWc1 = false;
      this.showWc2 = false;
      this.showApp1 = false;
      this.showApp2 = false;
      this.showDb1 = false;
      this.showDb2 = false;
      this.showOid1 = false;
      this.showOid2 = false;
      this.showBi = false;
    },
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
        source: "ohs",
        target: "prtl-lb",
        connector: ["Straight"],
        endpoint: "Blank",
        paintStyle: { stroke: "white", strokeWidth: 1.5 },
        anchor: ["Bottom", "Top"]
      });
      jsPlumb.connect({
        source: "prtl-lb",
        target: "wc",
        connector: ["Straight"],
        endpoint: "Blank",
        paintStyle: { stroke: "white", strokeWidth: 1.5 },
        anchor: ["Bottom", "Top"]
      });
      jsPlumb.connect({
        source: "wc",
        target: "db",
        connector: ["Straight"],
        endpoint: "Blank",
        paintStyle: { stroke: "white", strokeWidth: 1.5 },
        anchor: ["Bottom", "Top"]
      });
      jsPlumb.connect({
        source: "wc",
        target: "app-lb",
        connector: ["Straight"],
        endpoint: "Blank",
        paintStyle: { stroke: "white", strokeWidth: 1.5 },
        anchor: ["Right", "Left"]
      });
      jsPlumb.connect({
        source: "app-lb",
        target: "app-scheme",
        connector: ["Straight"],
        endpoint: "Blank",
        paintStyle: { stroke: "white", strokeWidth: 1.5 },
        anchor: ["Right", "Left"]
      });
      jsPlumb.connect({
        source: "app-scheme",
        target: "ldap-lb",
        connector: ["Straight"],
        endpoint: "Blank",
        paintStyle: { stroke: "white", strokeWidth: 1.5 },
        anchor: ["Bottom", "Top"]
      });
      jsPlumb.connect({
        source: "ldap-lb",
        target: "oid",
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
.scheme-title-container {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
#scheme-title {
  text-transform: uppercase;
  writing-mode: vertical-rl;
}
#content {
  margin-left: 7%;
  margin-top: 1%;
}
.btn {
  margin: 15%;
  transition-duration: 0.5s;
}
.btn:hover {
  transform: scale(1.1);
}
.lb {
  margin-top: 1.5%;
  cursor: pointer;
}
.card {
  border-radius: 5%;
  display: inline-block;
  width: 80%;
}
.margin {
  margin-left: 20%;
}
.lb-title {
  color: red;
  text-transform: uppercase;
}
.lb-endpoint {
  font-size: 12px;
}
.zones {
  padding: 1%;
}
.left {
  float: left;
}
.right {
  float: right;
}
#prtl-lb {
  width: 40.5%;
}
#app-lb {
  margin-top: -1%;
}
#ldap-lb {
  width: 34%;
}
#bi1 {
  margin-left: 32%;
}
</style>
