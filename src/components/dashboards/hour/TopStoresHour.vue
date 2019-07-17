<template>
  <div id="topStores">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
    <img id="loading" width="50px" v-if="loading" src="../../../assets/loading.svg" alt />
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
import store from "../../../store.js";
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

<style>
#topStores-container {
  background-color: #343f57;
  border-radius: 0%;
}
#topStores-title {
  font-size: 120%;
}
#topStores-content {
  max-height: 85.9%;
  background-color: #343f57;
}
.scroll-area {
  position: relative;
  margin: auto;
  width: 100%;
  height: 290px;
}
</style>