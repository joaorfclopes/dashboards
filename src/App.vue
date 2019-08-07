<template>
  <div id="app">
    <Main v-if="this.$mq === 'desktopXL' || this.$mq === 'desktopL' || this.$mq === 'laptop'" />
    <Error v-else />
  </div>
</template>

<script>
import Main from "./components/Main.vue";
import Error from "./components/Error.vue";

export default {
  name: "app",
  components: {
    Main,
    Error
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
