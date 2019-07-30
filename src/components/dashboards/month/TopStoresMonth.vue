<template>
  <div id="topStores">
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
      <v-list id="topStores-content" dark dense>
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
        store.state.checkTopStoresMonthData[0],
        store.state.checkTopStoresMonthData[1],
        store.state.checkTopStoresMonthData[2],
        store.state.checkTopStoresMonthData[3],
        store.state.checkTopStoresMonthData[4],
        store.state.checkTopStoresMonthData[5],
        store.state.checkTopStoresMonthData[6],
        store.state.checkTopStoresMonthData[7],
        store.state.checkTopStoresMonthData[8],
        store.state.checkTopStoresMonthData[9]
      ];
    }
  },
  computed: {
    checkTopStoresMonthData() {
      return store.state.checkTopStoresMonthData;
    }
  },
  beforeUpdate() {
    this.getData();
  },
  created() {
    this.loading = true;

    store.dispatch("fetchTopStoresMonth").then(checkTopStoresMonthData => {
      this.loading = false;
    });
  }
};
</script>