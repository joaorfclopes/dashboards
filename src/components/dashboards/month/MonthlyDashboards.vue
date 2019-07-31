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
    />
    <div id="graphics">
      <div id="success" v-if="this.checked === false">
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex v-for="i in 2" :key="`1${i}`" xs5>
              <CheckEligibilityMonth v-if="i == 1"></CheckEligibilityMonth>
              <ReserveNumberMonth v-if="i == 2"></ReserveNumberMonth>
            </v-flex>
            <v-flex v-for="i in 1" :key="`2${i}`" xs2>
              <TopStoresMonth v-if="i == 1"></TopStoresMonth>
            </v-flex>
            <v-flex v-for="i in 2" :key="`3${i}`" xs5>
              <SimStatusMonth v-if="i == 1"></SimStatusMonth>
              <SimValidationMonth v-if="i == 2"></SimValidationMonth>
            </v-flex>
            <v-flex v-for="i in 1" :key="`4${i}`" xs2>
              <TopAgentsMonth v-if="i == 1"></TopAgentsMonth>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
      <div id="avg-time" v-if="this.checked === true">
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex v-for="i in 2" :key="`1${i}`" xs5>
              <CheckEligibilityMonthAvg v-if="i == 1"></CheckEligibilityMonthAvg>
              <ReserveNumberMonthAvg v-if="i == 2"></ReserveNumberMonthAvg>
            </v-flex>
            <v-flex v-for="i in 1" :key="`2${i}`" xs2>
              <TopStoresMonth v-if="i == 1"></TopStoresMonth>
            </v-flex>
            <v-flex v-for="i in 1" :key="`3${i}`" xs10>
              <DeviceSyncTimeMonth v-if="i == 1"></DeviceSyncTimeMonth>
            </v-flex>
            <v-flex v-for="i in 1" :key="`4${i}`" xs2>
              <TopAgentsMonth v-if="i == 1"></TopAgentsMonth>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
import CheckEligibilityMonth from "./CheckEligibilityMonth.vue";
import ReserveNumberMonth from "./ReserveNumberMonth.vue";
import SimStatusMonth from "./SimStatusMonth.vue";
import SimValidationMonth from "./SimValidationMonth.vue";
import TopStoresMonth from "./TopStoresMonth.vue";
import TopAgentsMonth from "./TopAgentsMonth.vue";
import CheckEligibilityMonthAvg from "./CheckEligibilityMonthAvg.vue";
import ReserveNumberMonthAvg from "./ReserveNumberMonthAvg.vue";
import DeviceSyncTimeMonth from "./DeviceSyncTimeMonth.vue";
import "../../style.css";

export default {
  components: {
    CheckEligibilityMonth,
    ReserveNumberMonth,
    SimStatusMonth,
    SimValidationMonth,
    TopStoresMonth,
    TopAgentsMonth,
    CheckEligibilityMonthAvg,
    ReserveNumberMonthAvg,
    DeviceSyncTimeMonth
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