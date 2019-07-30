<template>
  <div id="main-container">
    <v-container id="servers-container" grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-layout id="uptime-container" align-center justify-center row fill-height>
          <v-flex v-for="i in 8" :key="`1${i}`">
            <StatusUp v-if="i == 1" server="WC01"></StatusUp>
            <StatusUp v-if="i == 2" server="WC02"></StatusUp>
            <StatusUp v-if="i == 3" server="APP01"></StatusUp>
            <statusDown v-if="i == 4" server="APP02"></statusDown>
            <StatusUp v-if="i == 5" server="OID01"></StatusUp>
            <StatusUp v-if="i == 6" server="OID02"></StatusUp>
            <statusDown v-if="i == 7" server="DB01"></statusDown>
            <StatusUp v-if="i == 8" server="DB02"></StatusUp>
          </v-flex>
        </v-layout>
        <v-layout align-center justify-center row fill-height>
          <v-flex v-for="i in 1" :key="`2${i}`" xs12>
            <Realtime v-if="i == 1"></Realtime>
          </v-flex>
        </v-layout>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import StatusUp from "./StatusUp";
import StatusDown from "./StatusDown";
import Realtime from "./Realtime";

export default {
  components: {
    StatusUp,
    StatusDown,
    Realtime
  }
};
</script>

<style scoped>
#uptime-container {
  margin-right: -1%;
}
</style>
