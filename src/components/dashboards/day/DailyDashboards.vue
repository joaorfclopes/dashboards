<template>
  <div id="main-container">
    <div id="graphics">
      <div id="success" v-if="this.checked === false">
        <v-container grid-list-md text-xs-center>
          <v-layout align-start justify-space-around row fill-height>
            <v-flex v-for="i in 2" :key="`1${i}`" xs5>
              <v-card class="card" color="#343F57" height="350">
                <CheckEligibilityDay v-if="i == 1"></CheckEligibilityDay>
                <ReserveNumberDay v-if="i == 2"></ReserveNumberDay>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`2${i}`" xs2>
              <v-card class="card" color="#343F57" height="350">
                <TopStoresDay v-if="i == 1"></TopStoresDay>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout align-start justify-space-around row fill-height>
            <v-flex v-for="i in 2" :key="`3${i}`" xs5>
              <v-card class="card" color="#343F57" height="350">
                <SimStatusDay v-if="i == 1"></SimStatusDay>
                <SimValidationDay v-if="i == 2"></SimValidationDay>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`4${i}`" xs2>
              <v-card class="card" color="#343F57" height="350">
                <TopAgentsDay v-if="i == 1"></TopAgentsDay>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
      <div id="avg-time" v-if="this.checked === true">
        <v-container grid-list-md text-xs-center>
          <v-layout align-start justify-space-around row fill-height>
            <v-flex v-for="i in 2" :key="`1${i}`" xs5>
              <v-card class="card" color="#343F57" height="350">
                <CheckEligibilityDayAvg v-if="i == 1"></CheckEligibilityDayAvg>
                <ReserveNumberDayAvg v-if="i == 2"></ReserveNumberDayAvg>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`2${i}`" xs2>
              <v-card class="card" color="#343F57" height="350">
                <TopStoresDay v-if="i == 1"></TopStoresDay>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout align-start justify-space-around row fill-height>
            <v-flex v-for="i in 1" :key="`3${i}`" xs10>
              <v-card class="card" color="#343F57" height="350">
                <DeviceSyncTimeDay v-if="i == 1"></DeviceSyncTimeDay>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`4${i}`" xs2>
              <v-card class="card" color="#343F57" height="350">
                <TopAgentsDay v-if="i == 1"></TopAgentsDay>
              </v-card>
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
import "../../style.css";

export default {
  props: {
    checked: {
      type: Boolean,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },
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
  }
};
</script>