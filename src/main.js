import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import Vuex from "vuex";
import VueCookies from "vue-cookies";

// router setup
import routes from "./routes/routes";

// Plugins
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";

// MaterialDashboard plugin
import MaterialDashboard from "./material-dashboard";

import Chartist from "chartist";

import Store from "./store";

// configure router
const router = new VueRouter({
  mode: "history",
  routes, // short for routes: routes
  linkExactActiveClass: "nav-item active"
});

Vue.prototype.$Chartist = Chartist;

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(VueCookies);
//Vue.use(Notifications);

Vue.$cookies.config("1h");

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store: Store,
  data: {
    Chartist: Chartist
  }
});
