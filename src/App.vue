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
#app {
  text-align: center;
  scroll-behavior: smooth;
}
::-webkit-scrollbar {
  display: none;
}
</style>
