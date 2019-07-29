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
    checkDeviceSyncTimeHourData: [],

    checkEligibilityDayData: [],
    checkReserveNumberDayData: [],
    checkSimStatusDayData: [],
    checkSimValidationDayData: [],
    checkTopAgentsDayData: [],
    checkTopStoresDayData: [],
    checkEligibilityDayAvgData: [],
    checkReserveNumberDayAvgData: [],
    checkDeviceSyncTimeDayData: []
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
    },

    setCheckEligibilityDayData(state, checkEligibilityDayData) {
      state.checkEligibilityDayData = checkEligibilityDayData;
    },
    setCheckReserveNumberDayData(state, checkReserveNumberDayData) {
      state.checkReserveNumberDayData = checkReserveNumberDayData;
    },
    setCheckSimStatusDayData(state, checkSimStatusDayData) {
      state.checkSimStatusDayData = checkSimStatusDayData;
    },
    setCheckSimValidationDayData(state, checkSimValidationDayData) {
      state.checkSimValidationDayData = checkSimValidationDayData;
    },
    setCheckTopAgentsDayData(state, checkTopAgentsDayData) {
      state.checkTopAgentsDayData = checkTopAgentsDayData;
    },
    setCheckTopStoresDayData(state, checkTopStoresDayData) {
      state.checkTopStoresDayData = checkTopStoresDayData;
    },
    setCheckEligibilityDayAvgData(state, checkEligibilityDayAvgData) {
      state.checkEligibilityDayAvgData = checkEligibilityDayAvgData;
    },
    setCheckReserveNumberDayAvgData(state, checkReserveNumberDayAvgData) {
      state.checkReserveNumberDayAvgData = checkReserveNumberDayAvgData;
    },
    setcheckDeviceSyncTimeDayData(state, checkDeviceSyncTimeDayData) {
      state.checkDeviceSyncTimeDayData = checkDeviceSyncTimeDayData;
    }
  },
  actions: {
    async fetchCheckEligibilityHour({ commit }) {
      const checkEligibilityHourData = await client.fetchCheckEligibilityHour();
      return commit("setCheckEligibilityHourData", checkEligibilityHourData);
    },
    async fetchReserveNumberHour({ commit }) {
      const checkReserveNumberHourData = await client.fetchReserveNumberHour();
      return commit(
        "setCheckReserveNumberHourData",
        checkReserveNumberHourData
      );
    },
    async fetchSimStatusHour({ commit }) {
      const checkSimStatusHourData = await client.fetchSimStatusHour();
      return commit("setCheckSimStatusHourData", checkSimStatusHourData);
    },
    async fetchSimValidationHour({ commit }) {
      const checkSimValidationHourData = await client.fetchSimValidationHour();
      return commit(
        "setCheckSimValidationHourData",
        checkSimValidationHourData
      );
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
      return commit(
        "setCheckEligibilityHourAvgData",
        checkEligibilityHourAvgData
      );
    },
    async fetchReserveNumberHourAvg({ commit }) {
      const checkReserveNumberHourAvgData = await client.fetchReserveNumberHourAvg();
      return commit(
        "setCheckReserveNumberHourAvgData",
        checkReserveNumberHourAvgData
      );
    },
    async fetchDeviceSyncTimeHour({ commit }) {
      const checkDeviceSyncTimeHourData = await client.fetchDeviceSyncTimeHour();
      return commit(
        "setcheckDeviceSyncTimeHourData",
        checkDeviceSyncTimeHourData
      );
    },

    async fetchCheckEligibilityDay({ commit }) {
      const checkEligibilityDayData = await client.fetchCheckEligibilityDay();
      return commit("setCheckEligibilityDayData", checkEligibilityDayData);
    },
    async fetchReserveNumberDay({ commit }) {
      const checkReserveNumberDayData = await client.fetchReserveNumberDay();
      return commit("setCheckReserveNumberDayData", checkReserveNumberDayData);
    },
    async fetchSimStatusDay({ commit }) {
      const checkSimStatusDayData = await client.fetchSimStatusDay();
      return commit("setCheckSimStatusDayData", checkSimStatusDayData);
    },
    async fetchSimValidationDay({ commit }) {
      const checkSimValidationDayData = await client.fetchSimValidationDay();
      return commit("setCheckSimValidationDayData", checkSimValidationDayData);
    },
    async fetchTopAgentsDay({ commit }) {
      const checkTopAgentsDayData = await client.fetchTopAgentsDay();
      return commit("setCheckTopAgentsDayData", checkTopAgentsDayData);
    },
    async fetchTopStoresDay({ commit }) {
      const checkTopStoresDayData = await client.fetchTopStoresDay();
      return commit("setCheckTopStoresDayData", checkTopStoresDayData);
    },
    async fetchCheckEligibilityDayAvg({ commit }) {
      const checkEligibilityDayAvgData = await client.fetchCheckEligibilityDayAvg();
      return commit(
        "setCheckEligibilityDayAvgData",
        checkEligibilityDayAvgData
      );
    },
    async fetchReserveNumberDayAvg({ commit }) {
      const checkReserveNumberDayAvgData = await client.fetchReserveNumberDayAvg();
      return commit(
        "setCheckReserveNumberDayAvgData",
        checkReserveNumberDayAvgData
      );
    },
    async fetchDeviceSyncTimeDay({ commit }) {
      const checkDeviceSyncTimeDayData = await client.fetchDeviceSyncTimeDay();
      return commit(
        "setcheckDeviceSyncTimeDayData",
        checkDeviceSyncTimeDayData
      );
    }
  }
});
