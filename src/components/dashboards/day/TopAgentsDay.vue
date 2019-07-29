<template>
  <div id="topAgents">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
    <div class="lds-ellipsis" v-if="loading">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <v-card v-else id="topAgents-container" height="350">
      <v-toolbar height="50%" color="#343F57" dark>
        <v-toolbar-title id="topAgents-title">Top 10 Orders - Agents</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-list id="topAgents-content" dark dense>
        <VuePerfectScrollbar class="scroll-area" v-once :settings="settings">
          <v-list-tile v-for="item in items" :key="item.title" avatar>
            <v-list-tile-action>
              <v-icon v-if="item.icon" color="white">store</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </VuePerfectScrollbar>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import store from "../../../store";
export default {
  components: {
    VuePerfectScrollbar
  },
  data() {
    return {
      loading: false,
      settings: {
        maxScrollbarLength: 60
      },
      items: []
    };
  },
  methods: {
    getData() {
      this.items = [
        store.state.checkTopAgentsDayData[0],
        store.state.checkTopAgentsDayData[1],
        store.state.checkTopAgentsDayData[2],
        store.state.checkTopAgentsDayData[3],
        store.state.checkTopAgentsDayData[4],
        store.state.checkTopAgentsDayData[5],
        store.state.checkTopAgentsDayData[6],
        store.state.checkTopAgentsDayData[7],
        store.state.checkTopAgentsDayData[8],
        store.state.checkTopAgentsDayData[9]
      ];
    }
  },
  computed: {
    checkTopAgentsDayData() {
      return store.state.checkTopAgentsDayData;
    }
  },
  beforeUpdate() {
    this.getData();
  },
  created() {
    this.loading = true;

    store.dispatch("fetchTopAgentsDay").then(checkTopAgentsDayData => {
      this.loading = false;
    });
  }
};
</script>

<style>
</style>
