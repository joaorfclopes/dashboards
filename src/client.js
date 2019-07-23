import axios from "axios";

var checkEligibilityHour = "https://api.myjson.com/bins/x9pzv";
var reserveNumberHour = "https://api.myjson.com/bins/ewlub";
var simStatusHour = "https://api.myjson.com/bins/bqgcx";
var simValidationHour = "https://api.myjson.com/bins/l54hl";
var topAgentsHour = "https://api.myjson.com/bins/d0dwp";
var topStoresHour = "https://api.myjson.com/bins/gn4p5";
var checkEligibilityHourAvg = "https://api.myjson.com/bins/17cx05";
var reserveNumberHourAvg = "https://api.myjson.com/bins/149w39";
var deviceSyncTimeHour = "https://api.myjson.com/bins/rwxkl";

export default {
  async fetchCheckEligibilityHour() {
    const response = await axios.get(checkEligibilityHour);
    return response.data;
  },
  async fetchReserveNumberHour() {
    const response = await axios.get(reserveNumberHour);
    return response.data;
  },
  async fetchSimStatusHour() {
    const response = await axios.get(simStatusHour);
    return response.data;
  },
  async fetchSimValidationHour() {
    const response = await axios.get(simValidationHour);
    return response.data;
  },
  async fetchTopAgentsHour() {
    const response = await axios.get(topAgentsHour);
    return response.data;
  },
  async fetchTopStoresHour() {
    const response = await axios.get(topStoresHour);
    return response.data;
  },
  async fetchCheckEligibilityHourAvg() {
    const response = await axios.get(checkEligibilityHourAvg);
    return response.data;
  },
  async fetchReserveNumberHourAvg() {
    const response = await axios.get(reserveNumberHourAvg);
    return response.data;
  },
  async fetchDeviceSyncTimeHour() {
    const response = await axios.get(deviceSyncTimeHour);
    return response.data;
  }
};
