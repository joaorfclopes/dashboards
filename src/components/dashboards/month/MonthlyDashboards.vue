<template>
  <div id="main-container">
    <div v-if="this.$mq === 'desktopXL'" id="graphics">
      <div id="success" v-if="this.checked === false">
        <v-container grid-list-md text-xs-center>
          <v-layout align-start justify-space-around row fill-height>
            <v-flex v-for="i in 2" :key="`1${i}`" xs5>
              <v-card class="card" color="#343F57" height="400">
                <CheckEligibilityMonth v-if="i == 1"></CheckEligibilityMonth>
                <ReserveNumberMonth v-if="i == 2"></ReserveNumberMonth>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`2${i}`" xs2>
              <v-card class="card" color="#343F57" height="400">
                <TopStoresMonth v-if="i == 1"></TopStoresMonth>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout align-start justify-space-around row fill-height>
            <v-flex v-for="i in 2" :key="`3${i}`" xs5>
              <v-card class="card" color="#343F57" height="400">
                <SimStatusMonth v-if="i == 1"></SimStatusMonth>
                <SimValidationMonth v-if="i == 2"></SimValidationMonth>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`4${i}`" xs2>
              <v-card class="card" color="#343F57" height="400">
                <TopAgentsMonth v-if="i == 1"></TopAgentsMonth>
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
                <CheckEligibilityMonthAvg v-if="i == 1"></CheckEligibilityMonthAvg>
                <ReserveNumberMonthAvg v-if="i == 2"></ReserveNumberMonthAvg>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`2${i}`" xs2>
              <v-card class="card" color="#343F57" height="400">
                <TopStoresMonth v-if="i == 1"></TopStoresMonth>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout align-start justify-space-around row fill-height>
            <v-flex v-for="i in 1" :key="`3${i}`" xs10>
              <v-card class="card" color="#343F57" height="400">
                <DeviceSyncTimeMonth v-if="i == 1"></DeviceSyncTimeMonth>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`4${i}`" xs2>
              <v-card class="card" color="#343F57" height="400">
                <TopAgentsMonth v-if="i == 1"></TopAgentsMonth>
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
                <CheckEligibilityMonth v-if="i == 1"></CheckEligibilityMonth>
                <ReserveNumberMonth v-if="i == 2"></ReserveNumberMonth>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`2${i}`" xs2>
              <v-card class="card" color="#343F57" height="320">
                <TopStoresMonth v-if="i == 1"></TopStoresMonth>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout align-start justify-space-around row fill-height>
            <v-flex v-for="i in 2" :key="`3${i}`" xs5>
              <v-card class="card" color="#343F57" height="320">
                <SimStatusMonth v-if="i == 1"></SimStatusMonth>
                <SimValidationMonth v-if="i == 2"></SimValidationMonth>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`4${i}`" xs2>
              <v-card class="card" color="#343F57" height="320">
                <TopAgentsMonth v-if="i == 1"></TopAgentsMonth>
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
                <CheckEligibilityMonthAvg v-if="i == 1"></CheckEligibilityMonthAvg>
                <ReserveNumberMonthAvg v-if="i == 2"></ReserveNumberMonthAvg>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`2${i}`" xs2>
              <v-card class="card" color="#343F57" height="320">
                <TopStoresMonth v-if="i == 1"></TopStoresMonth>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout align-start justify-space-around row fill-height>
            <v-flex v-for="i in 1" :key="`3${i}`" xs10>
              <v-card class="card" color="#343F57" height="320">
                <DeviceSyncTimeMonth v-if="i == 1"></DeviceSyncTimeMonth>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`4${i}`" xs2>
              <v-card class="card" color="#343F57" height="320">
                <TopAgentsMonth v-if="i == 1"></TopAgentsMonth>
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
                <CheckEligibilityMonth v-if="i == 1"></CheckEligibilityMonth>
                <ReserveNumberMonth v-if="i == 2"></ReserveNumberMonth>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`2${i}`" xs2>
              <v-card class="card" color="#343F57" height="290">
                <TopStoresMonth v-if="i == 1"></TopStoresMonth>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout align-start justify-space-around row fill-height>
            <v-flex v-for="i in 2" :key="`3${i}`" xs5>
              <v-card class="card" color="#343F57" height="290">
                <SimStatusMonth v-if="i == 1"></SimStatusMonth>
                <SimValidationMonth v-if="i == 2"></SimValidationMonth>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`4${i}`" xs2>
              <v-card class="card" color="#343F57" height="290">
                <TopAgentsMonth v-if="i == 1"></TopAgentsMonth>
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
                <CheckEligibilityMonthAvg v-if="i == 1"></CheckEligibilityMonthAvg>
                <ReserveNumberMonthAvg v-if="i == 2"></ReserveNumberMonthAvg>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`2${i}`" xs2>
              <v-card class="card" color="#343F57" height="290">
                <TopStoresMonth v-if="i == 1"></TopStoresMonth>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout align-start justify-space-around row fill-height>
            <v-flex v-for="i in 1" :key="`3${i}`" xs10>
              <v-card class="card" color="#343F57" height="290">
                <DeviceSyncTimeMonth v-if="i == 1"></DeviceSyncTimeMonth>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 1" :key="`4${i}`" xs2>
              <v-card class="card" color="#343F57" height="290">
                <TopAgentsMonth v-if="i == 1"></TopAgentsMonth>
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
    CheckEligibilityMonth: () => import("./CheckEligibilityMonth.vue"),
    ReserveNumberMonth: () => import("./ReserveNumberMonth.vue"),
    SimStatusMonth: () => import("./SimStatusMonth.vue"),
    SimValidationMonth: () => import("./SimValidationMonth.vue"),
    TopStoresMonth: () => import("./TopStoresMonth.vue"),
    TopAgentsMonth: () => import("./TopAgentsMonth.vue"),
    CheckEligibilityMonthAvg: () => import("./CheckEligibilityMonthAvg.vue"),
    ReserveNumberMonthAvg: () => import("./ReserveNumberMonthAvg.vue"),
    DeviceSyncTimeMonth: () => import("./DeviceSyncTimeMonth.vue")
  }
};
</script>