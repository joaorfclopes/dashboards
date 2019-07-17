<template>
  <v-card id="statusUp">
    <div id="statusUp-title">
      <v-toolbar height="50%" color="#343F57" dark>
        <v-toolbar-title id="topAgents-title">{{server}}</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
    </div>
    <div id="statusUp-content">
      <img src="../../../assets/up.png" width="50">
      <h2>UP</h2>
      <p>Last down: {{days}} days ago</p>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ["server"],
  data: function() {
    return {
      days: 67
    };
  }
};
</script>


<style>
#statusUp {
  background-color: #343f57;
  border-radius: 0%;
  height: 200px;
  width: 200px;
}
#statusUp-content {
  margin-top: 5%;
}
#statusUp-content > h2 {
  color: #56d745;
  margin-bottom: 10%;
}
#statusUp-content > p {
  color: whitesmoke;
}
</style>
