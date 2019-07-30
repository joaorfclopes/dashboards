<template>
  <div id="main-container">
    <toggle-button
      v-tooltip.right="'Change to ' + label"
      id="btn"
      :width="100"
      :value="false"
      :labels="{checked: 'Average Time', unchecked: 'Success'}"
      color="#E60000"
      @change="switchPerformance"
      style="margin-top: -1%;"
    />
    <div id="graphics" style="margin-top: 1%;">
      <div id="success" v-if="this.checked === false">
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex v-for="i in 2" :key="`1${i}`" xs5>
              <CheckEligibilityDay v-if="i == 1"></CheckEligibilityDay>
              <ReserveNumberDay v-if="i == 2"></ReserveNumberDay>
            </v-flex>
            <v-flex v-for="i in 1" :key="`2${i}`" xs2>
              <TopStoresDay v-if="i == 1"></TopStoresDay>
            </v-flex>
            <v-flex v-for="i in 2" :key="`3${i}`" xs5>
              <SimStatusDay v-if="i == 1"></SimStatusDay>
              <SimValidationDay v-if="i == 2"></SimValidationDay>
            </v-flex>
            <v-flex v-for="i in 1" :key="`4${i}`" xs2>
              <TopAgentsDay v-if="i == 1"></TopAgentsDay>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
      <div id="avg-time" v-if="this.checked === true">
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex v-for="i in 2" :key="`1${i}`" xs5>
              <CheckEligibilityDayAvg v-if="i == 1"></CheckEligibilityDayAvg>
              <ReserveNumberDayAvg v-if="i == 2"></ReserveNumberDayAvg>
            </v-flex>
            <v-flex v-for="i in 1" :key="`2${i}`" xs2>
              <TopStoresDay v-if="i == 1"></TopStoresDay>
            </v-flex>
            <v-flex v-for="i in 1" :key="`3${i}`" xs10>
              <DeviceSyncTimeDay v-if="i == 1"></DeviceSyncTimeDay>
            </v-flex>
            <v-flex v-for="i in 1" :key="`4${i}`" xs2>
              <TopAgentsDay v-if="i == 1"></TopAgentsDay>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
import CheckEligibilityDay from "./CheckEligibilityDay.vue";
import ReserveNumberDay from "./ReserveNumberDay.vue";
import SimStatusDay from "./SimStatusDay.vue";
import SimValidationDay from "./SimValidationDay.vue";
import TopStoresDay from "./TopStoresDay.vue";
import TopAgentsDay from "./TopAgentsDay.vue";
import CheckEligibilityDayAvg from "./CheckEligibilityDayAvg.vue";
import ReserveNumberDayAvg from "./ReserveNumberDayAvg.vue";
import DeviceSyncTimeDay from "./DeviceSyncTimeDay.vue";
import style from "../../../styles/dashboards/style.css";

export default {
  components: {
    CheckEligibilityDay,
    ReserveNumberDay,
    SimStatusDay,
    SimValidationDay,
    TopStoresDay,
    TopAgentsDay,
    CheckEligibilityDayAvg,
    ReserveNumberDayAvg,
    DeviceSyncTimeDay
  },
  data() {
    return {
      checked: false,
      label: "Average Time"
    };
  },
  methods: {
    switchPerformance() {
      var btn = document.getElementById("btn");
      if (btn.classList.contains("toggled")) {
        this.checked = false;
        this.label = "Average Time";
      } else {
        this.checked = true;
        this.label = "Success";
      }
    }
  }
};
</script>