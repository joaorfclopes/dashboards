import Vue from "vue";
import Vuex from "vuex";
import client from "api-client";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    checkEligibilityHourData: [],
    checkReserveNumberHourData: [],
    checkSimStatusHourData: [],
    checkSimValidationHourData: [],
    checkTopAgentsHourData: [],
    checkTopStoresHourData: []
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
    }
  },
  actions: {
    fetchCheckEligibilityHour({ commit }) {
      return client.fetchCheckEligibilityHour().then(checkEligibilityHourData => commit("setCheckEligibilityHourData", checkEligibilityHourData));
    },
    fetchReserveNumberHour({ commit }) {
      return client.fetchReserveNumberHour().then(checkReserveNumberHourData => commit("setCheckReserveNumberHourData", checkReserveNumberHourData));
    },
    fetchSimStatusHour({ commit }) {
      return client.fetchSimStatusHour().then(checkSimStatusHourData => commit("setCheckSimStatusHourData", checkSimStatusHourData));
    },
    fetchSimValidationHour({ commit }) {
      return client.fetchSimValidationHour().then(checkSimValidationHourData => commit("setCheckSimValidationHourData", checkSimValidationHourData));
    },
    fetchTopAgentsHour({ commit }) {
      return client.fetchTopAgentsHour().then(checkTopAgentsHourData => commit("setCheckTopAgentsHourData", checkTopAgentsHourData));
    },
    fetchTopStoresHour({ commit }) {
      return client.fetchTopStoresHour().then(checkTopStoresHourData => commit("setCheckTopStoresHourData", checkTopStoresHourData));
    }
  }
});
