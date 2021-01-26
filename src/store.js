import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const Store = new Vuex.Store({
  state: {
    did: null,
    dtoken: null,
    userProfile: null,
    isLoggedIn: false,
    SERVER_URL: "http://10.177.1.95:8091/",
    ANALYTICS_SERVER: "http://10.177.1.164:8080/",
    COMMON_INFRA_SERVER: "http://10.177.1.104:8085/",
    QUIZ_SERVER1: "http://10.177.1.113:8081/",
    QUIZ_SERVER2: "http://10.177.1.113:8083/",
    postRequestData: {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json"
      },
      body: null
    },
    didCookieName: "DID",
    dtokenCookieName: "DTOKEN",
    cookieToken: "COOKIE_TOKEN",
    userStats: []
  },
  mutations: {
    setLoggedIn(state, newDID, newDToken) {
      state.isLoggedIn = true;
      state.did = newDID;
      state.dtoken = newDToken;
    },
    setLogout(state) {
      state.isLoggedIn = false;
      state.did = null;
      state.dtoken = null;
    },
    updateUserStats(state, newData) {
      state.userStats = newData;
    }
  },
  getters: {}
});

export default Store;
