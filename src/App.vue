<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
import Main from "./components/Main.vue";

export default {
  name: "app",
  components: {
    Main
  }
};
</script>

<style>
html {
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
  background-color: #1e1e21;
  overflow: hidden;
}
#app {
  text-align: center;
}
</style>
