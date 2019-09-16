<template>
  <div id="main-container">
    <div v-if="this.$mq === 'desktopXL'" id="graphics">
      <div id="success" v-if="this.checked === false">
        <v-container grid-list-md text-xs-center>
          <v-layout align-start justify-space-around row fill-height>
            <v-flex v-for="i in 2" :key="`1${i}`" xs5>
              <v-card class="card" color="#343F57" height="400">
                <CheckEligibilityDay v-if="i == 1"></CheckEligibilityDay>
                <ReserveNumberDay v-if="i == 2"></ReserveNumberDay>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`2${i}`" xs2>
              <v-card class="card" color="#343F57" height="400">
                <TopStoresDay v-if="i == 1"></TopStoresDay>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout align-start justify-space-around row fill-height>
            <v-flex v-for="i in 2" :key="`3${i}`" xs5>
              <v-card class="card" color="#343F57" height="400">
                <SimStatusDay v-if="i == 1"></SimStatusDay>
                <SimValidationDay v-if="i == 2"></SimValidationDay>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`4${i}`" xs2>
              <v-card class="card" color="#343F57" height="400">
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
              <v-card class="card" color="#343F57" height="400">
                <CheckEligibilityDayAvg v-if="i == 1"></CheckEligibilityDayAvg>
                <ReserveNumberDayAvg v-if="i == 2"></ReserveNumberDayAvg>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`2${i}`" xs2>
              <v-card class="card" color="#343F57" height="400">
                <TopStoresDay v-if="i == 1"></TopStoresDay>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout align-start justify-space-around row fill-height>
            <v-flex v-for="i in 1" :key="`3${i}`" xs10>
              <v-card class="card" color="#343F57" height="400">
                <DeviceSyncTimeDay v-if="i == 1"></DeviceSyncTimeDay>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`4${i}`" xs2>
              <v-card class="card" color="#343F57" height="400">
                <TopAgentsDay v-if="i == 1"></TopAgentsDay>
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
                <CheckEligibilityDay v-if="i == 1"></CheckEligibilityDay>
                <ReserveNumberDay v-if="i == 2"></ReserveNumberDay>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`2${i}`" xs2>
              <v-card class="card" color="#343F57" height="320">
                <TopStoresDay v-if="i == 1"></TopStoresDay>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout align-start justify-space-around row fill-height>
            <v-flex v-for="i in 2" :key="`3${i}`" xs5>
              <v-card class="card" color="#343F57" height="320">
                <SimStatusDay v-if="i == 1"></SimStatusDay>
                <SimValidationDay v-if="i == 2"></SimValidationDay>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`4${i}`" xs2>
              <v-card class="card" color="#343F57" height="320">
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
              <v-card class="card" color="#343F57" height="320">
                <CheckEligibilityDayAvg v-if="i == 1"></CheckEligibilityDayAvg>
                <ReserveNumberDayAvg v-if="i == 2"></ReserveNumberDayAvg>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`2${i}`" xs2>
              <v-card class="card" color="#343F57" height="320">
                <TopStoresDay v-if="i == 1"></TopStoresDay>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout align-start justify-space-around row fill-height>
            <v-flex v-for="i in 1" :key="`3${i}`" xs10>
              <v-card class="card" color="#343F57" height="320">
                <DeviceSyncTimeDay v-if="i == 1"></DeviceSyncTimeDay>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`4${i}`" xs2>
              <v-card class="card" color="#343F57" height="320">
                <TopAgentsDay v-if="i == 1"></TopAgentsDay>
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
                <CheckEligibilityDay v-if="i == 1"></CheckEligibilityDay>
                <ReserveNumberDay v-if="i == 2"></ReserveNumberDay>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`2${i}`" xs2>
              <v-card class="card" color="#343F57" height="290">
                <TopStoresDay v-if="i == 1"></TopStoresDay>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout align-start justify-space-around row fill-height>
            <v-flex v-for="i in 2" :key="`3${i}`" xs5>
              <v-card class="card" color="#343F57" height="290">
                <SimStatusDay v-if="i == 1"></SimStatusDay>
                <SimValidationDay v-if="i == 2"></SimValidationDay>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`4${i}`" xs2>
              <v-card class="card" color="#343F57" height="290">
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
              <v-card class="card" color="#343F57" height="290">
                <CheckEligibilityDayAvg v-if="i == 1"></CheckEligibilityDayAvg>
                <ReserveNumberDayAvg v-if="i == 2"></ReserveNumberDayAvg>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`2${i}`" xs2>
              <v-card class="card" color="#343F57" height="290">
                <TopStoresDay v-if="i == 1"></TopStoresDay>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout align-start justify-space-around row fill-height>
            <v-flex v-for="i in 1" :key="`3${i}`" xs10>
              <v-card class="card" color="#343F57" height="290">
                <DeviceSyncTimeDay v-if="i == 1"></DeviceSyncTimeDay>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`4${i}`" xs2>
              <v-card class="card" color="#343F57" height="290">
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
import "@/style.css";

export default {
  props: {
    checked: {
      type: Boolean,
      required: true
    }
  },
  components: {
    CheckEligibilityDay: () => import("./CheckEligibilityDay.vue"),
    ReserveNumberDay: () => import("./ReserveNumberDay.vue"),
    SimStatusDay: () => import("./SimStatusDay.vue"),
    SimValidationDay: () => import("./SimValidationDay.vue"),
    TopStoresDay: () => import("./TopStoresDay.vue"),
    TopAgentsDay: () => import("./TopAgentsDay.vue"),
    CheckEligibilityDayAvg: () => import("./CheckEligibilityDayAvg.vue"),
    ReserveNumberDayAvg: () => import("./ReserveNumberDayAvg.vue"),
    DeviceSyncTimeDay: () => import("./DeviceSyncTimeDay.vue")
  }
};
</script>