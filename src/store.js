import Vue from "vue";
import Vuex from "vuex";
import client from "@/client";
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
    checkDeviceSyncTimeDayData: [],

    checkEligibilityWeekData: [],
    checkReserveNumberWeekData: [],
    checkSimStatusWeekData: [],
    checkSimValidationWeekData: [],
    checkTopAgentsWeekData: [],
    checkTopStoresWeekData: [],
    checkEligibilityWeekAvgData: [],
    checkReserveNumberWeekAvgData: [],
    checkDeviceSyncTimeWeekData: [],

    checkEligibilityMonthData: [],
    checkReserveNumberMonthData: [],
    checkSimStatusMonthData: [],
    checkSimValidationMonthData: [],
    checkTopAgentsMonthData: [],
    checkTopStoresMonthData: [],
    checkEligibilityMonthAvgData: [],
    checkReserveNumberMonthAvgData: [],
    checkDeviceSyncTimeMonthData: []
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
    },

    setCheckEligibilityWeekData(state, checkEligibilityWeekData) {
      state.checkEligibilityWeekData = checkEligibilityWeekData;
    },
    setCheckReserveNumberWeekData(state, checkReserveNumberWeekData) {
      state.checkReserveNumberWeekData = checkReserveNumberWeekData;
    },
    setCheckSimStatusWeekData(state, checkSimStatusWeekData) {
      state.checkSimStatusWeekData = checkSimStatusWeekData;
    },
    setCheckSimValidationWeekData(state, checkSimValidationWeekData) {
      state.checkSimValidationWeekData = checkSimValidationWeekData;
    },
    setCheckTopAgentsWeekData(state, checkTopAgentsWeekData) {
      state.checkTopAgentsWeekData = checkTopAgentsWeekData;
    },
    setCheckTopStoresWeekData(state, checkTopStoresWeekData) {
      state.checkTopStoresWeekData = checkTopStoresWeekData;
    },
    setCheckEligibilityWeekAvgData(state, checkEligibilityWeekAvgData) {
      state.checkEligibilityWeekAvgData = checkEligibilityWeekAvgData;
    },
    setCheckReserveNumberWeekAvgData(state, checkReserveNumberWeekAvgData) {
      state.checkReserveNumberWeekAvgData = checkReserveNumberWeekAvgData;
    },
    setcheckDeviceSyncTimeWeekData(state, checkDeviceSyncTimeWeekData) {
      state.checkDeviceSyncTimeWeekData = checkDeviceSyncTimeWeekData;
    },

    setCheckEligibilityMonthData(state, checkEligibilityMonthData) {
      state.checkEligibilityMonthData = checkEligibilityMonthData;
    },
    setCheckReserveNumberMonthData(state, checkReserveNumberMonthData) {
      state.checkReserveNumberMonthData = checkReserveNumberMonthData;
    },
    setCheckSimStatusMonthData(state, checkSimStatusMonthData) {
      state.checkSimStatusMonthData = checkSimStatusMonthData;
    },
    setCheckSimValidationMonthData(state, checkSimValidationMonthData) {
      state.checkSimValidationMonthData = checkSimValidationMonthData;
    },
    setCheckTopAgentsMonthData(state, checkTopAgentsMonthData) {
      state.checkTopAgentsMonthData = checkTopAgentsMonthData;
    },
    setCheckTopStoresMonthData(state, checkTopStoresMonthData) {
      state.checkTopStoresMonthData = checkTopStoresMonthData;
    },
    setCheckEligibilityMonthAvgData(state, checkEligibilityMonthAvgData) {
      state.checkEligibilityMonthAvgData = checkEligibilityMonthAvgData;
    },
    setCheckReserveNumberMonthAvgData(state, checkReserveNumberMonthAvgData) {
      state.checkReserveNumberMonthAvgData = checkReserveNumberMonthAvgData;
    },
    setcheckDeviceSyncTimeMonthData(state, checkDeviceSyncTimeMonthData) {
      state.checkDeviceSyncTimeMonthData = checkDeviceSyncTimeMonthData;
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
    },

    async fetchCheckEligibilityWeek({ commit }) {
      const checkEligibilityWeekData = await client.fetchCheckEligibilityWeek();
      return commit("setCheckEligibilityWeekData", checkEligibilityWeekData);
    },
    async fetchReserveNumberWeek({ commit }) {
      const checkReserveNumberWeekData = await client.fetchReserveNumberWeek();
      return commit(
        "setCheckReserveNumberWeekData",
        checkReserveNumberWeekData
      );
    },
    async fetchSimStatusWeek({ commit }) {
      const checkSimStatusWeekData = await client.fetchSimStatusWeek();
      return commit("setCheckSimStatusWeekData", checkSimStatusWeekData);
    },
    async fetchSimValidationWeek({ commit }) {
      const checkSimValidationWeekData = await client.fetchSimValidationWeek();
      return commit(
        "setCheckSimValidationWeekData",
        checkSimValidationWeekData
      );
    },
    async fetchTopAgentsWeek({ commit }) {
      const checkTopAgentsWeekData = await client.fetchTopAgentsWeek();
      return commit("setCheckTopAgentsWeekData", checkTopAgentsWeekData);
    },
    async fetchTopStoresWeek({ commit }) {
      const checkTopStoresWeekData = await client.fetchTopStoresWeek();
      return commit("setCheckTopStoresWeekData", checkTopStoresWeekData);
    },
    async fetchCheckEligibilityWeekAvg({ commit }) {
      const checkEligibilityWeekAvgData = await client.fetchCheckEligibilityWeekAvg();
      return commit(
        "setCheckEligibilityWeekAvgData",
        checkEligibilityWeekAvgData
      );
    },
    async fetchReserveNumberWeekAvg({ commit }) {
      const checkReserveNumberWeekAvgData = await client.fetchReserveNumberWeekAvg();
      return commit(
        "setCheckReserveNumberWeekAvgData",
        checkReserveNumberWeekAvgData
      );
    },
    async fetchDeviceSyncTimeWeek({ commit }) {
      const checkDeviceSyncTimeWeekData = await client.fetchDeviceSyncTimeWeek();
      return commit(
        "setcheckDeviceSyncTimeWeekData",
        checkDeviceSyncTimeWeekData
      );
    },

    async fetchCheckEligibilityMonth({ commit }) {
      const checkEligibilityMonthData = await client.fetchCheckEligibilityMonth();
      return commit("setCheckEligibilityMonthData", checkEligibilityMonthData);
    },
    async fetchReserveNumberMonth({ commit }) {
      const checkReserveNumberMonthData = await client.fetchReserveNumberMonth();
      return commit(
        "setCheckReserveNumberMonthData",
        checkReserveNumberMonthData
      );
    },
    async fetchSimStatusMonth({ commit }) {
      const checkSimStatusMonthData = await client.fetchSimStatusMonth();
      return commit("setCheckSimStatusMonthData", checkSimStatusMonthData);
    },
    async fetchSimValidationMonth({ commit }) {
      const checkSimValidationMonthData = await client.fetchSimValidationMonth();
      return commit(
        "setCheckSimValidationMonthData",
        checkSimValidationMonthData
      );
    },
    async fetchTopAgentsMonth({ commit }) {
      const checkTopAgentsMonthData = await client.fetchTopAgentsMonth();
      return commit("setCheckTopAgentsMonthData", checkTopAgentsMonthData);
    },
    async fetchTopStoresMonth({ commit }) {
      const checkTopStoresMonthData = await client.fetchTopStoresMonth();
      return commit("setCheckTopStoresMonthData", checkTopStoresMonthData);
    },
    async fetchCheckEligibilityMonthAvg({ commit }) {
      const checkEligibilityMonthAvgData = await client.fetchCheckEligibilityMonthAvg();
      return commit(
        "setCheckEligibilityMonthAvgData",
        checkEligibilityMonthAvgData
      );
    },
    async fetchReserveNumberMonthAvg({ commit }) {
      const checkReserveNumberMonthAvgData = await client.fetchReserveNumberMonthAvg();
      return commit(
        "setCheckReserveNumberMonthAvgData",
        checkReserveNumberMonthAvgData
      );
    },
    async fetchDeviceSyncTimeMonth({ commit }) {
      const checkDeviceSyncTimeMonthData = await client.fetchDeviceSyncTimeMonth();
      return commit(
        "setcheckDeviceSyncTimeMonthData",
        checkDeviceSyncTimeMonthData
      );
    }
  }
});
