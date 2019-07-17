<template>
  <v-card id="statusDown">
    <div id="statusDown-title">
      <v-toolbar height="50%" color="#343F57" dark>
        <v-toolbar-title id="topAgents-title">{{server}}</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
    </div>
    <div id="statusDown-content">
      <img src="../../../assets/down.png" width="50">
      <h2>DOWN</h2>
      <p>Last up: {{days}} days ago</p>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ["server"],
  data: function() {
    return {
      days: 12
    };
  }
};
</script>


<style>
#statusDown {
  background-color: #343f57;
  border-radius: 0%;
  height: 200px;
  width: 200px;
}
#statusDown-content {
  margin-top: 5%;
}
#statusDown-content > h2 {
  color: #D1010B;
  margin-bottom: 10%;
}
#statusDown-content > p {
  color: whitesmoke;
}
</style>