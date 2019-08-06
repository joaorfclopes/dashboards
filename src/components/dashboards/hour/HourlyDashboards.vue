<template>
  <div id="main-container">
    <div id="graphics">
      <div id="success" v-if="this.checked === false">
        <v-container grid-list-md text-xs-center>
          <v-layout align-start justify-space-around row fill-height>
            <v-flex v-for="i in 2" :key="`1${i}`" xs5>
              <CheckEligibilityHour v-if="i == 1"></CheckEligibilityHour>
              <ReserveNumberHour v-if="i == 2"></ReserveNumberHour>
            </v-flex>
            <v-flex v-for="i in 1" :key="`2${i}`" xs2>
              <TopStoresHour v-if="i == 1"></TopStoresHour>
            </v-flex>
          </v-layout>
          <v-layout align-start justify-space-around row fill-height>
            <v-flex v-for="i in 2" :key="`3${i}`" xs5>
              <SimStatusHour v-if="i == 1"></SimStatusHour>
              <SimValidationHour v-if="i == 2"></SimValidationHour>
            </v-flex>
            <v-flex v-for="i in 1" :key="`4${i}`" xs2>
              <TopAgentsHour v-if="i == 1"></TopAgentsHour>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
      <div id="avg-time" v-if="this.checked === true">
        <v-container grid-list-md text-xs-center>
          <v-layout align-start justify-space-around row fill-height>
            <v-flex v-for="i in 2" :key="`1${i}`" xs5>
              <CheckEligibilityHourAvg v-if="i == 1"></CheckEligibilityHourAvg>
              <ReserveNumberHourAvg v-if="i == 2"></ReserveNumberHourAvg>
            </v-flex>
            <v-flex v-for="i in 1" :key="`2${i}`" xs2>
              <TopStoresHour v-if="i == 1"></TopStoresHour>
            </v-flex>
          </v-layout>
          <v-layout align-start justify-space-around row fill-height>
            <v-flex v-for="i in 1" :key="`3${i}`" xs10>
              <DeviceSyncTimeHour v-if="i == 1"></DeviceSyncTimeHour>
            </v-flex>
            <v-flex v-for="i in 1" :key="`4${i}`" xs2>
              <TopAgentsHour v-if="i == 1"></TopAgentsHour>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </div>
  </div>
</template>


<script>
import CheckEligibilityHour from "./CheckEligibilityHour.vue";
import ReserveNumberHour from "./ReserveNumberHour.vue";
import SimStatusHour from "./SimStatusHour.vue";
import SimValidationHour from "./SimValidationHour.vue";
import TopStoresHour from "./TopStoresHour.vue";
import TopAgentsHour from "./TopAgentsHour.vue";
import CheckEligibilityHourAvg from "./CheckEligibilityHourAvg.vue";
import ReserveNumberHourAvg from "./ReserveNumberHourAvg.vue";
import DeviceSyncTimeHour from "./DeviceSyncTimeHour.vue";
import "../../style.css";

export default {
  props: {
    checked: {
      type: Boolean,
      required: true
    }
  },
  components: {
    CheckEligibilityHour,
    ReserveNumberHour,
    SimStatusHour,
    SimValidationHour,
    TopStoresHour,
    TopAgentsHour,
    CheckEligibilityHourAvg,
    ReserveNumberHourAvg,
    DeviceSyncTimeHour
  }
};
</script>