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
              <CheckEligibilityWeek v-if="i == 1"></CheckEligibilityWeek>
              <ReserveNumberWeek v-if="i == 2"></ReserveNumberWeek>
            </v-flex>
            <v-flex v-for="i in 1" :key="`2${i}`" xs2>
              <TopStoresWeek v-if="i == 1"></TopStoresWeek>
            </v-flex>
            <v-flex v-for="i in 2" :key="`3${i}`" xs5>
              <SimStatusWeek v-if="i == 1"></SimStatusWeek>
              <SimValidationWeek v-if="i == 2"></SimValidationWeek>
            </v-flex>
            <v-flex v-for="i in 1" :key="`4${i}`" xs2>
              <TopAgentsWeek v-if="i == 1"></TopAgentsWeek>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
      <div id="avg-time" v-if="this.checked === true">
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex v-for="i in 2" :key="`1${i}`" xs5>
              <CheckEligibilityWeekAvg v-if="i == 1"></CheckEligibilityWeekAvg>
              <ReserveNumberWeekAvg v-if="i == 2"></ReserveNumberWeekAvg>
            </v-flex>
            <v-flex v-for="i in 1" :key="`2${i}`" xs2>
              <TopStoresWeek v-if="i == 1"></TopStoresWeek>
            </v-flex>
            <v-flex v-for="i in 1" :key="`3${i}`" xs10>
              <DeviceSyncTimeWeek v-if="i == 1"></DeviceSyncTimeWeek>
            </v-flex>
            <v-flex v-for="i in 1" :key="`4${i}`" xs2>
              <TopAgentsWeek v-if="i == 1"></TopAgentsWeek>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
import CheckEligibilityWeek from "./CheckEligibilityWeek.vue";
import ReserveNumberWeek from "./ReserveNumberWeek.vue";
import SimStatusWeek from "./SimStatusWeek.vue";
import SimValidationWeek from "./SimValidationWeek.vue";
import TopStoresWeek from "./TopStoresWeek.vue";
import TopAgentsWeek from "./TopAgentsWeek.vue";
import CheckEligibilityWeekAvg from "./CheckEligibilityWeekAvg.vue";
import ReserveNumberWeekAvg from "./ReserveNumberWeekAvg.vue";
import DeviceSyncTimeWeek from "./DeviceSyncTimeWeek.vue";
import "../../style.css";

export default {
  components: {
    CheckEligibilityWeek,
    ReserveNumberWeek,
    SimStatusWeek,
    SimValidationWeek,
    TopStoresWeek,
    TopAgentsWeek,
    CheckEligibilityWeekAvg,
    ReserveNumberWeekAvg,
    DeviceSyncTimeWeek
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