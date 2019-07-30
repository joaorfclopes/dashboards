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
import style from "../../../styles/servers/style.css";
export default {
  props: ["server"],
  data: function() {
    return {
      days: 12
    };
  }
};
</script>