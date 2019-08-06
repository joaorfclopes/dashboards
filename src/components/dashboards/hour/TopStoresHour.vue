<template>
  <div>
    <div v-if="this.$mq === 'desktopXL'" class="chart top" id="topStores">
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
        <v-card v-else id="topStores-container" height="400">
          <v-toolbar height="50%" color="#343F57" dark>
            <v-toolbar-title id="topStores-title">Top 10 Orders - Stores</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <VuePerfectScrollbar
            id="topStores-content"
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
    <div v-if="this.$mq === 'desktopL'" class="chart top" id="topStores">
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
        <v-card v-else id="topStores-container" height="320">
          <v-toolbar height="50%" color="#343F57" dark>
            <v-toolbar-title id="topStores-title">Top 10 Orders - Stores</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <VuePerfectScrollbar
            id="topStores-content"
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
    <div v-if="this.$mq === 'laptop'" class="chart top" id="topStores">
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
        <v-card v-else id="topStores-container" height="290">
          <v-toolbar height="50%" color="#343F57" dark>
            <v-toolbar-title id="topStores-title">Top 10 Orders - Stores</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <VuePerfectScrollbar
            id="topStores-content"
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
        wheelSpeed: 0.5,
        maxScrollbarLength: 60
      },
      items: []
    };
  },
  methods: {
    getData() {
      this.items = [
        store.state.checkTopStoresHourData[0],
        store.state.checkTopStoresHourData[1],
        store.state.checkTopStoresHourData[2],
        store.state.checkTopStoresHourData[3],
        store.state.checkTopStoresHourData[4],
        store.state.checkTopStoresHourData[5],
        store.state.checkTopStoresHourData[6],
        store.state.checkTopStoresHourData[7],
        store.state.checkTopStoresHourData[8],
        store.state.checkTopStoresHourData[9]
      ];
    }
  },
  computed: {
    checkTopStoresHourData() {
      return store.state.checkTopStoresHourData;
    }
  },
  beforeUpdate() {
    this.getData();
  },
  created() {
    this.loading = true;

    store.dispatch("fetchTopStoresHour").then(checkTopStoresHourData => {
      this.loading = false;
    });
  }
};
</script>