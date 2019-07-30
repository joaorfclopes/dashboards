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
import style from "../../../styles/dashboards/style.css";
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
        store.state.checkTopAgentsHourData[0],
        store.state.checkTopAgentsHourData[1],
        store.state.checkTopAgentsHourData[2],
        store.state.checkTopAgentsHourData[3],
        store.state.checkTopAgentsHourData[4],
        store.state.checkTopAgentsHourData[5],
        store.state.checkTopAgentsHourData[6],
        store.state.checkTopAgentsHourData[7],
        store.state.checkTopAgentsHourData[8],
        store.state.checkTopAgentsHourData[9]
      ];
    }
  },
  computed: {
    checkTopAgentsHourData() {
      return store.state.checkTopAgentsHourData;
    }
  },
  beforeUpdate() {
    this.getData();
  },
  created() {
    this.loading = true;

    store.dispatch("fetchTopAgentsHour").then(checkTopAgentsHourData => {
      this.loading = false;
    });
  }
};
</script>