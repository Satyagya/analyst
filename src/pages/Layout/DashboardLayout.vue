<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :sidebar-item-color="sidebarBackground"
      :sidebar-background-image="sidebarBackgroundImage"
    >
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/dashboard">
        <md-icon>dashboard</md-icon>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/user">
        <md-icon>person</md-icon>
        <p>Admin Profile</p>
      </sidebar-link>
      <sidebar-link to="/quiz">
        <md-icon>library_books</md-icon>
        <p>Quiz</p>
      </sidebar-link>
      <sidebar-link to="/quora">
        <md-icon>bubble_chart</md-icon>
        <p>Quora</p>
      </sidebar-link>
      <sidebar-link to="/pageBook">
        <md-icon>location_on</md-icon>
        <p>PageBook</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <fixed-plugin
        :color.sync="sidebarBackground"
        :image.sync="sidebarBackgroundImage"
      >
      </fixed-plugin>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";
import FixedPlugin from "./Extra/FixedPlugin.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu,
    FixedPlugin
  },
  data() {
    return {
      sidebarBackground: "red",
      sidebarBackgroundImage: require("@/assets/img/sidebar.jpg")
    };
  },
  beforeMount() {
    if (this.$store.state.isLoggedIn || 
          this.$cookies.isKey(this.$store.state.cookieToken)){
          if (!this.$store.state.isLoggedIn){
              this.$store.commit("setLoggedIn", 
              this.$cookies.get(this.$store.state.cookieToken));
          }
    }else{
      this.$router.push({name: "Login"});
    }
  },
  methods: {
    logout() {
      this.$store.commit("setLogout");
      this.$cookies.remove(this.$store.state.cookieToken);
      this.$router.push({name: "Login"});
    }
  }
};
</script>
