<template>
  <div>
    <div class="chart top" id="topStores">
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
      <v-card v-else id="topStores-container" height="350">
        <v-toolbar height="50%" color="#343F57" dark>
          <v-toolbar-title id="topStores-title">Top 10 Orders - Stores</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <VuePerfectScrollbar id="topStores-content" class="scroll-area" v-once :settings="settings">
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
      this.items = [
        store.state.checkTopStoresWeekData[0],
        store.state.checkTopStoresWeekData[1],
        store.state.checkTopStoresWeekData[2],
        store.state.checkTopStoresWeekData[3],
        store.state.checkTopStoresWeekData[4],
        store.state.checkTopStoresWeekData[5],
        store.state.checkTopStoresWeekData[6],
        store.state.checkTopStoresWeekData[7],
        store.state.checkTopStoresWeekData[8],
        store.state.checkTopStoresWeekData[9]
      ];
    }
  },
  computed: {
    checkTopStoresWeekData() {
      return store.state.checkTopStoresWeekData;
    }
  },
  beforeUpdate() {
    this.getData();
  },
  created() {
    this.loading = true;

    store.dispatch("fetchTopStoresWeek").then(checkTopStoresWeekData => {
      this.loading = false;
    });
  }
};
</script>