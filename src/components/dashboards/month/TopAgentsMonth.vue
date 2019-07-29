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
        <VuePerfectScrollbar
          class="scroll-area"
          v-once
          :settings="settings"
F        >
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
          title: "Shana Sultana"
        },
        {
          icon: true,
          title: "Mohammed Alyafei"
        },
        {
          icon: true,
          title: "Khara Joy"
        },
        {
          icon: true,
          title: "Susan Samson"
        },
        {
          icon: true,
          title: "Razeel Ali"
        },
        {
          icon: true,
          title: "JHK Twenty Three"
        },
        {
          icon: true,
          title: "Nizzar Pangaligan"
        },
        {
          icon: true,
          title: "Nagib Becherif"
        },
        {
          icon: true,
          title: "Orgaden Malima"
        },
        {
          icon: true,
          title: "Said Bellaadem"
        }
      ]
    };
  }
};
</script>

<style>
</style>
