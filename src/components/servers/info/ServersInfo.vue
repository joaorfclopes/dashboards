<template>
  <div id="main-div">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    >
    <div id="left">
      <connections></connections>
    </div>
    <div id="right">
      <scheme></scheme>
    </div>
  </div>
</template>

<script>
import Connections from "./Connections.vue";
import Scheme from "./Scheme.vue";

export default {
  components: {
    Connections,
    Scheme
  }
};
</script>

<style>
html {
  font-family: "Roboto", sans-serif;
}
#left {
  width: 40%;
  float: left;
}
#right {
  width: 60%;
  float: right;
}
</style>
