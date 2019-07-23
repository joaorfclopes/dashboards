import Vue from "vue";
import Vuex from "vuex";
import client from "./client";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    checkEligibilityHourData: [],
    checkReserveNumberHourData: [],
    checkSimStatusHourData: [],
    checkSimValidationHourData: [],
    checkTopAgentsHourData: [],
    checkTopStoresHourData: [],
    checkEligibilityHourAvgData: [],
    checkReserveNumberHourAvgData: [],
    checkDeviceSyncTimeHourData: []
  },
  mutations: {
    setCheckEligibilityHourData(state, checkEligibilityHourData) {
      state.checkEligibilityHourData = checkEligibilityHourData;
    },
    setCheckReserveNumberHourData(state, checkReserveNumberHourData) {
      state.checkReserveNumberHourData = checkReserveNumberHourData;
    },
    setCheckSimStatusHourData(state, checkSimStatusHourData) {
      state.checkSimStatusHourData = checkSimStatusHourData;
    },
    setCheckSimValidationHourData(state, checkSimValidationHourData) {
      state.checkSimValidationHourData = checkSimValidationHourData;
    },
    setCheckTopAgentsHourData(state, checkTopAgentsHourData) {
      state.checkTopAgentsHourData = checkTopAgentsHourData;
    },
    setCheckTopStoresHourData(state, checkTopStoresHourData) {
      state.checkTopStoresHourData = checkTopStoresHourData;
    },
    setCheckEligibilityHourAvgData(state, checkEligibilityHourAvgData) {
      state.checkEligibilityHourAvgData = checkEligibilityHourAvgData;
    },
    setCheckReserveNumberHourAvgData(state, checkReserveNumberHourAvgData) {
      state.checkReserveNumberHourAvgData = checkReserveNumberHourAvgData;
    },
    setcheckDeviceSyncTimeHourData(state, checkDeviceSyncTimeHourData) {
      state.checkDeviceSyncTimeHourData = checkDeviceSyncTimeHourData;
    }
  },
  actions: {
    async fetchCheckEligibilityHour({ commit }) {
      const checkEligibilityHourData = await client.fetchCheckEligibilityHour();
      return commit("setCheckEligibilityHourData", checkEligibilityHourData);
    },
    async fetchReserveNumberHour({ commit }) {
      const checkReserveNumberHourData = await client.fetchReserveNumberHour();
      return commit("setCheckReserveNumberHourData", checkReserveNumberHourData);
    },
    async fetchSimStatusHour({ commit }) {
      const checkSimStatusHourData = await client.fetchSimStatusHour();
      return commit("setCheckSimStatusHourData", checkSimStatusHourData);
    },
    async fetchSimValidationHour({ commit }) {
      const checkSimValidationHourData = await client.fetchSimValidationHour();
      return commit("setCheckSimValidationHourData", checkSimValidationHourData);
    },
    async fetchTopAgentsHour({ commit }) {
      const checkTopAgentsHourData = await client.fetchTopAgentsHour();
      return commit("setCheckTopAgentsHourData", checkTopAgentsHourData);
    },
    async fetchTopStoresHour({ commit }) {
      const checkTopStoresHourData = await client.fetchTopStoresHour();
      return commit("setCheckTopStoresHourData", checkTopStoresHourData);
    },
    async fetchCheckEligibilityHourAvg({ commit }) {
      const checkEligibilityHourAvgData = await client.fetchCheckEligibilityHourAvg();
      return commit("setCheckEligibilityHourAvgData", checkEligibilityHourAvgData);
    },
    async fetchReserveNumberHourAvg({ commit }) {
      const checkReserveNumberHourAvgData = await client.fetchReserveNumberHourAvg();
      return commit("setCheckReserveNumberHourAvgData", checkReserveNumberHourAvgData);
    },
    async fetchDeviceSyncTimeHour({ commit }) {
      const checkDeviceSyncTimeHourData = await client.fetchDeviceSyncTimeHour();
      return commit("setcheckDeviceSyncTimeHourData", checkDeviceSyncTimeHourData);
    }
  }
});
