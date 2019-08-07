<template>
  <div id="main-container">
    <div v-if="this.$mq === 'desktopXL'" id="graphics">
      <div id="success" v-if="this.checked === false">
        <v-container grid-list-md text-xs-center>
          <v-layout align-start justify-space-around row fill-height>
            <v-flex v-for="i in 2" :key="`1${i}`" xs5>
              <v-card class="card" color="#343F57" height="400">
                <CheckEligibilityWeek v-if="i == 1"></CheckEligibilityWeek>
                <ReserveNumberWeek v-if="i == 2"></ReserveNumberWeek>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`2${i}`" xs2>
              <v-card class="card" color="#343F57" height="400">
                <TopStoresWeek v-if="i == 1"></TopStoresWeek>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout align-start justify-space-around row fill-height>
            <v-flex v-for="i in 2" :key="`3${i}`" xs5>
              <v-card class="card" color="#343F57" height="400">
                <SimStatusWeek v-if="i == 1"></SimStatusWeek>
                <SimValidationWeek v-if="i == 2"></SimValidationWeek>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`4${i}`" xs2>
              <v-card class="card" color="#343F57" height="400">
                <TopAgentsWeek v-if="i == 1"></TopAgentsWeek>
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
                <CheckEligibilityWeekAvg v-if="i == 1"></CheckEligibilityWeekAvg>
                <ReserveNumberWeekAvg v-if="i == 2"></ReserveNumberWeekAvg>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`2${i}`" xs2>
              <v-card class="card" color="#343F57" height="400">
                <TopStoresWeek v-if="i == 1"></TopStoresWeek>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout align-start justify-space-around row fill-height>
            <v-flex v-for="i in 1" :key="`3${i}`" xs10>
              <v-card class="card" color="#343F57" height="400">
                <DeviceSyncTimeWeek v-if="i == 1"></DeviceSyncTimeWeek>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`4${i}`" xs2>
              <v-card class="card" color="#343F57" height="400">
                <TopAgentsWeek v-if="i == 1"></TopAgentsWeek>
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
                <CheckEligibilityWeek v-if="i == 1"></CheckEligibilityWeek>
                <ReserveNumberWeek v-if="i == 2"></ReserveNumberWeek>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`2${i}`" xs2>
              <v-card class="card" color="#343F57" height="320">
                <TopStoresWeek v-if="i == 1"></TopStoresWeek>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout align-start justify-space-around row fill-height>
            <v-flex v-for="i in 2" :key="`3${i}`" xs5>
              <v-card class="card" color="#343F57" height="320">
                <SimStatusWeek v-if="i == 1"></SimStatusWeek>
                <SimValidationWeek v-if="i == 2"></SimValidationWeek>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`4${i}`" xs2>
              <v-card class="card" color="#343F57" height="320">
                <TopAgentsWeek v-if="i == 1"></TopAgentsWeek>
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
                <CheckEligibilityWeekAvg v-if="i == 1"></CheckEligibilityWeekAvg>
                <ReserveNumberWeekAvg v-if="i == 2"></ReserveNumberWeekAvg>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`2${i}`" xs2>
              <v-card class="card" color="#343F57" height="320">
                <TopStoresWeek v-if="i == 1"></TopStoresWeek>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout align-start justify-space-around row fill-height>
            <v-flex v-for="i in 1" :key="`3${i}`" xs10>
              <v-card class="card" color="#343F57" height="320">
                <DeviceSyncTimeWeek v-if="i == 1"></DeviceSyncTimeWeek>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`4${i}`" xs2>
              <v-card class="card" color="#343F57" height="320">
                <TopAgentsWeek v-if="i == 1"></TopAgentsWeek>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </div>
    <div v-if="this.$mq === 'laptop'" id="graphics">
      <div id="success" v-if="this.checked === false">
        <v-container grid-list-md text-xs-center>
          <v-layout align-start justify-space-around row fill-height>
            <v-flex v-for="i in 2" :key="`1${i}`" xs5>
              <v-card class="card" color="#343F57" height="290">
                <CheckEligibilityWeek v-if="i == 1"></CheckEligibilityWeek>
                <ReserveNumberWeek v-if="i == 2"></ReserveNumberWeek>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`2${i}`" xs2>
              <v-card class="card" color="#343F57" height="290">
                <TopStoresWeek v-if="i == 1"></TopStoresWeek>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout align-start justify-space-around row fill-height>
            <v-flex v-for="i in 2" :key="`3${i}`" xs5>
              <v-card class="card" color="#343F57" height="290">
                <SimStatusWeek v-if="i == 1"></SimStatusWeek>
                <SimValidationWeek v-if="i == 2"></SimValidationWeek>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`4${i}`" xs2>
              <v-card class="card" color="#343F57" height="290">
                <TopAgentsWeek v-if="i == 1"></TopAgentsWeek>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
      <div id="avg-time" v-if="this.checked === true">
        <v-container grid-list-md text-xs-center>
          <v-layout align-start justify-space-around row fill-height>
            <v-flex v-for="i in 2" :key="`1${i}`" xs5>
              <v-card class="card" color="#343F57" height="290">
                <CheckEligibilityWeekAvg v-if="i == 1"></CheckEligibilityWeekAvg>
                <ReserveNumberWeekAvg v-if="i == 2"></ReserveNumberWeekAvg>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`2${i}`" xs2>
              <v-card class="card" color="#343F57" height="290">
                <TopStoresWeek v-if="i == 1"></TopStoresWeek>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout align-start justify-space-around row fill-height>
            <v-flex v-for="i in 1" :key="`3${i}`" xs10>
              <v-card class="card" color="#343F57" height="290">
                <DeviceSyncTimeWeek v-if="i == 1"></DeviceSyncTimeWeek>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`4${i}`" xs2>
              <v-card class="card" color="#343F57" height="290">
                <TopAgentsWeek v-if="i == 1"></TopAgentsWeek>
              </v-card>
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
  props: {
    checked: {
      type: Boolean,
      required: true
    }
  },
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
  }
};
</script>