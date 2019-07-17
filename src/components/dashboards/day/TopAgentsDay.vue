<template>
  <div id="topAgents">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    >
    <v-card id="topAgents-container" height="350">
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

export default {
  components: {
    VuePerfectScrollbar
  },
  data() {
    return {
      settings: {
        maxScrollbarLength: 60
      },
      items: [
        {
          icon: true,
          title: "Kasun Delgahapitiya"
        },
        {
          icon: true,
          title: "Mubarak Azeez"
        },
        {
          icon: true,
          title: "Anis Hammi"
        },
        {
          icon: true,
          title: "Susan Samson"
        },
        {
          icon: true,
          title: "Ryna Arca"
        },
        {
          icon: true,
          title: "Hani Mohammed"
        },
        {
          icon: true,
          title: "Subash Premananda"
        },
        {
          icon: true,
          title: "Amir Habib"
        },
        {
          icon: true,
          title: "Ahmed Ghazy"
        },
        {
          icon: true,
          title: "Wahid Almiskgrocery"
        }
      ]
    };
  }
};
</script>

<style scoped>
#topAgents-container {
  background-color: #343f57;
  border-radius: 0%;
}
#topAgents-title {
  font-size: 120%;
}
#topAgents-content {
  max-height: 85.9%;
  overflow-y: scroll;
  background-color: #343f57;
}
.scroll-area {
  position: relative;
  margin: auto;
  width: 100%;
  height: 290px;
}
</style>
