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

var checkEligibilityDay = "https://api.myjson.com/bins/1bfhgx";
var reserveNumberDay = "https://api.myjson.com/bins/lqxlh";
var simStatusDay = "https://api.myjson.com/bins/1c8xqd";
var simValidationDay = "https://api.myjson.com/bins/1akx8l";
var topAgentsDay = "https://api.myjson.com/bins/gve5h";
var topStoresDay = "https://api.myjson.com/bins/jb9qd";
var checkEligibilityDayAvg = "https://api.myjson.com/bins/s8rt1";
var reserveNumberDayAvg = "https://api.myjson.com/bins/jdew5";
var deviceSyncTimeDay = "https://api.myjson.com/bins/l5pph";

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
  },
  async fetchCheckEligibilityDay() {
    const response = await axios.get(checkEligibilityDay);
    return response.data;
  },
  async fetchReserveNumberDay() {
    const response = await axios.get(reserveNumberDay);
    return response.data;
  },
  async fetchSimStatusDay() {
    const response = await axios.get(simStatusDay);
    return response.data;
  },
  async fetchSimValidationDay() {
    const response = await axios.get(simValidationDay);
    return response.data;
  },
  async fetchTopAgentsDay() {
    const response = await axios.get(topAgentsDay);
    return response.data;
  },
  async fetchTopStoresDay() {
    const response = await axios.get(topStoresDay);
    return response.data;
  },
  async fetchCheckEligibilityDayAvg() {
    const response = await axios.get(checkEligibilityDayAvg);
    return response.data;
  },
  async fetchReserveNumberDayAvg() {
    const response = await axios.get(reserveNumberDayAvg);
    return response.data;
  },
  async fetchDeviceSyncTimeDay() {
    const response = await axios.get(deviceSyncTimeDay);
    return response.data;
  }
};
