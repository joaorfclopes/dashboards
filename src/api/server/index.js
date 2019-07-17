import axios from "axios";
export default {
  fetchCheckEligibilityHour() {
    return axios
      .get("https://api.myjson.com/bins/x9pzv")
      .then(response => response.data);
  },
  fetchReserveNumberHour() {
    return axios
      .get("https://api.myjson.com/bins/ewlub")
      .then(response => response.data);
  },
  fetchSimStatusHour() {
    return axios
      .get("https://api.myjson.com/bins/bqgcx")
      .then(response => response.data);
  },
  fetchSimValidationHour() {
    return axios
      .get("https://api.myjson.com/bins/l54hl")
      .then(response => response.data);
  },
  fetchTopAgentsHour() {
    return axios
      .get("https://api.myjson.com/bins/d0dwp")
      .then(response => response.data);
  },
  fetchTopStoresHour() {
    return axios
      .get("https://api.myjson.com/bins/gn4p5")
      .then(response => response.data);
  }
};
