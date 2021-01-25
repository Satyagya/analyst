import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const Store = new Vuex.Store({
  state: {
    did: null,
    dtoken: null,
    userProfile: null,
    isLoggedIn: false,
    SERVER_URL: "http://10.177.1.149:8003/",
    CART_SERVER: "http://10.177.1.134:8002/",
    SEARCH_SERVER: "http://10.177.1.144:8000/",
    USER_SERVER: "http://10.177.1.144:8001/",
    PRODUCT_SERVER: "http://10.177.1.118:6969/",
    COMMON_INFRA_SERVER: "http://localhost:8000/",
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
    dtokenCookieName: "DTOKEN"
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
    }
  },
  getters: {}
});

export default Store;
