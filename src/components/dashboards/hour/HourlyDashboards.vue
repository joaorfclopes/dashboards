<template>
  <div id="main-container">
    <div v-if="this.$mq === 'desktopXL'" id="graphics">
      <div id="success" v-if="this.checked === false">
        <v-container grid-list-md text-xs-center>
          <v-layout align-start justify-space-around row fill-height>
            <v-flex v-for="i in 2" :key="`1${i}`" xs5>
              <v-card class="card" color="#343F57" height="400">
                <CheckEligibilityHour v-if="i == 1"></CheckEligibilityHour>
                <ReserveNumberHour v-if="i == 2"></ReserveNumberHour>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`2${i}`" xs2>
              <v-card class="card" color="#343F57" height="400">
                <TopStoresHour v-if="i == 1"></TopStoresHour>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout align-start justify-space-around row fill-height>
            <v-flex v-for="i in 2" :key="`3${i}`" xs5>
              <v-card class="card" color="#343F57" height="400">
                <SimStatusHour v-if="i == 1"></SimStatusHour>
                <SimValidationHour v-if="i == 2"></SimValidationHour>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`4${i}`" xs2>
              <v-card class="card" color="#343F57" height="400">
                <TopAgentsHour v-if="i == 1"></TopAgentsHour>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
      <div id="avg-time" v-if="this.checked === true">
        <v-container grid-list-md text-xs-center>
          <v-layout align-start justify-space-around row fill-height>
            <v-flex v-for="i in 2" :key="`1${i}`" xs5>
              <v-card class="card" color="#343F57" height="400">
                <CheckEligibilityHourAvg v-if="i == 1"></CheckEligibilityHourAvg>
                <ReserveNumberHourAvg v-if="i == 2"></ReserveNumberHourAvg>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`2${i}`" xs2>
              <v-card class="card" color="#343F57" height="400">
                <TopStoresHour v-if="i == 1"></TopStoresHour>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout align-start justify-space-around row fill-height>
            <v-flex v-for="i in 1" :key="`3${i}`" xs10>
              <v-card class="card" color="#343F57" height="400">
                <DeviceSyncTimeHour v-if="i == 1"></DeviceSyncTimeHour>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`4${i}`" xs2>
              <v-card class="card" color="#343F57" height="400">
                <TopAgentsHour v-if="i == 1"></TopAgentsHour>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </div>
    <div v-if="this.$mq === 'desktopL'" id="graphics">
      <div id="success" v-if="this.checked === false">
        <v-container grid-list-md text-xs-center>
          <v-layout align-start justify-space-around row fill-height>
            <v-flex v-for="i in 2" :key="`1${i}`" xs5>
              <v-card class="card" color="#343F57" height="320">
                <CheckEligibilityHour v-if="i == 1"></CheckEligibilityHour>
                <ReserveNumberHour v-if="i == 2"></ReserveNumberHour>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`2${i}`" xs2>
              <v-card class="card" color="#343F57" height="320">
                <TopStoresHour v-if="i == 1"></TopStoresHour>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout align-start justify-space-around row fill-height>
            <v-flex v-for="i in 2" :key="`3${i}`" xs5>
              <v-card class="card" color="#343F57" height="320">
                <SimStatusHour v-if="i == 1"></SimStatusHour>
                <SimValidationHour v-if="i == 2"></SimValidationHour>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`4${i}`" xs2>
              <v-card class="card" color="#343F57" height="320">
                <TopAgentsHour v-if="i == 1"></TopAgentsHour>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
      <div id="avg-time" v-if="this.checked === true">
        <v-container grid-list-md text-xs-center>
          <v-layout align-start justify-space-around row fill-height>
            <v-flex v-for="i in 2" :key="`1${i}`" xs5>
              <v-card class="card" color="#343F57" height="320">
                <CheckEligibilityHourAvg v-if="i == 1"></CheckEligibilityHourAvg>
                <ReserveNumberHourAvg v-if="i == 2"></ReserveNumberHourAvg>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`2${i}`" xs2>
              <v-card class="card" color="#343F57" height="320">
                <TopStoresHour v-if="i == 1"></TopStoresHour>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout align-start justify-space-around row fill-height>
            <v-flex v-for="i in 1" :key="`3${i}`" xs10>
              <v-card class="card" color="#343F57" height="320">
                <DeviceSyncTimeHour v-if="i == 1"></DeviceSyncTimeHour>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`4${i}`" xs2>
              <v-card class="card" color="#343F57" height="320">
                <TopAgentsHour v-if="i == 1"></TopAgentsHour>
              </v-card>
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