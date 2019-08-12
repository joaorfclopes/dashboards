<template>
  <div>
    <div v-if="this.$mq === 'desktopXL'" class="chart top" id="topAgents">
      <v-card class="card" color="#343F57" height="400">
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
        <v-card v-else id="topAgents-container" height="400">
          <v-toolbar height="50%" color="#343F57" dark>
            <v-toolbar-title id="topAgents-title">Top 10 Orders - Agents</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <VuePerfectScrollbar
            id="topAgents-content"
            class="scroll-area"
            v-once
            :settings="settings"
          >
            <v-list-tile v-for="item in items" :key="item.title" avatar>
              <v-list-tile-action>
                <v-icon v-if="item.icon" color="white">store</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-text="item.title" id="list-content"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </VuePerfectScrollbar>
        </v-card>
      </v-card>
    </div>
    <div v-if="this.$mq === 'desktopL'" class="chart top" id="topAgents">
      <v-card class="card" color="#343F57" height="320">
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
        <v-card v-else id="topAgents-container" height="320">
          <v-toolbar height="50%" color="#343F57" dark>
            <v-toolbar-title id="topAgents-title">Top 10 Orders - Agents</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <VuePerfectScrollbar
            id="topAgents-content"
            class="scroll-area"
            v-once
            :settings="settings"
          >
            <v-list-tile v-for="item in items" :key="item.title" avatar>
              <v-list-tile-action>
                <v-icon v-if="item.icon" color="white">store</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-text="item.title" id="list-content"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </VuePerfectScrollbar>
        </v-card>
      </v-card>
    </div>
    <div v-if="this.$mq === 'laptop'" class="chart top" id="topAgents">
      <v-card class="card" color="#343F57" height="290">
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
        <v-card v-else id="topAgents-container" height="290">
          <v-toolbar height="50%" color="#343F57" dark>
            <v-toolbar-title id="topAgents-title">Top 10 Orders - Agents</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <VuePerfectScrollbar
            id="topAgents-content"
            class="scroll-area"
            v-once
            :settings="settings"
          >
            <v-list-tile v-for="item in items" :key="item.title" avatar>
              <v-list-tile-action>
                <v-icon v-if="item.icon" color="white">store</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-text="item.title" id="list-content"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </VuePerfectScrollbar>
        </v-card>
      </v-card>
    </div>
  </div>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import store from "../../../store";
import "../../style.css";
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
      for (let i = 0; i < store.state.checkTopAgentsHourData.length; i++) {
        this.items[i] = store.state.checkTopAgentsHourData[i];
      }
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