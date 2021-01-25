<template>
  <div class="content">
    <div class="wrapper">
      <div class="md-layout md-alignment-center-center">
        <div
          class="md-layout-item md-size-50 md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
        >
          <md-card>
            <md-card-header data-background-color="red">
              <h4 class="title text-center">Admin Login</h4>
            </md-card-header>

            <md-card-content>
              <div class="md-layout">
                <div v-if="error" class="md-layout-item">
                  <div class="wrapper">
                    <div class="alert alert-warning">
                      <div class="container">
                        <button
                          type="button"
                          aria-hidden="true"
                          class="close"
                          @click="event => removeNotify()"
                        >
                          <md-icon class="text-right">clear</md-icon>
                        </button>
                        <strong> WARNING ALERT </strong>
                        <p>: {{ errorMsg }}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="md-layout-item md-size-100">
                  <md-field>
                    <label>Admin User Name</label>
                    <md-input v-model="duname" type="text"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-size-100">
                  <md-field>
                    <label>Password</label>
                    <md-input v-model="password" type="password"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-size-100 text-center">
                  <md-button
                    class="md-raised md-success md-block"
                    v-on:click="login()"
                    v-bind:disabled="buttonDisable"
                    >Login</md-button
                  >
                </div>
                <div class="md-layout-item md-size-100 text-center">
                  <md-button
                    class="md-raised md-info md-block"
                    v-on:click="onClickToNavigate('Register')"
                    >Register</md-button
                  >
                </div>
              </div>
            </md-card-content>
          </md-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import { postRequestData, SERVER_URL, didCookieName, dtokenCookieName } from "@/assets/config.json";

export default {
  name: "login",
  data: () => ({
    duname: null,
    password: null,
    error: false,
    errorMsg: null,
    buttonDisable: false
  }),
  beforeMount() {
    if (
      this.$store.state.isLoggedIn ||
      (this.$cookies.isKey(didCookieName) &&
        this.$cookies.isKey(dtokenCookieName))
    ) {
      if (!this.$store.state.isLoggedIn) {
        this.$store.commit(
          "setLoggedIn",
          this.$cookies.get(didCookieName),
          this.$cookies.get(dtokenCookieName)
        );
      }
      this.$router.push({ name: "Dashboard" });
    }
  },
  methods: {
    onClickToNavigate(navigationName) {
      this.$router.push({ name: navigationName });
    },
    login() {
      this.buttonDisable = true;
      if (!this.password || !this.duname) {
        this.errorMsg = "Something is Missing !!!";
        this.error = true;
        this.buttonDisable = false;
        return;
      }

      let postRequestObj = { ...postRequestData };
      postRequestObj.body = JSON.stringify({
        distributorName: this.duname,
        password: this.password
      });

      //TODO: this.$store.commit("setLoggedIn", did, dtoken);
      //TODO:
      fetch(`${SERVER_URL}dist/login`, postRequestObj)
        .then(response => response.json())
        .then(result => {
          //TODO : Cookies handling is pending
          this.$store.commit("setLoggedIn", result.did, result.token);
          this.$cookies.set(didCookieName, result.did);
          this.$cookies.set(dtokenCookieName, result.token);
          this.onClickToNavigate("Dashboard");
        })
        .catch(error => {
          this.errorMsg = "Wrong Username & Password !!!" || error;
          this.error = true;
        });
      this.buttonDisable = false;
    },
    removeNotify() {
      this.error = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.md-content {
  width: 200px;
  height: 200px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
</style>
