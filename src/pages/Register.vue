<template>
  <div class="content">
    <div class="md-layout md-alignment-center-center">
      <div class="md-layout-item md-size-50">
        <form>
          <md-card>
            <md-card-header data-background-color="red">
              <h4 class="title text-center">Admin Register</h4>
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
                <div class="md-layout-item md-small-size-100 md-size-100">
                  <md-field>
                    <label>Merchant User Name</label>
                    <md-input v-model="duname" type="text"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-100">
                  <md-field>
                    <label>Password</label>
                    <md-input v-model="password" type="password"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-100">
                  <md-field>
                    <label>Confirm Password</label>
                    <md-input v-model="cpassword" type="password"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-size-100">
                  <md-button
                    class="md-raised md-success md-block"
                    v-on:click="register()"
                    v-bind:disabled="buttonDisable"
                    >Register Now</md-button
                  >
                </div>
                <div class="md-layout-item md-size-100">
                  <md-button
                    class="md-raised md-info md-block"
                    v-on:click="onClickToNavigate('Login')"
                    >Already Register</md-button
                  >
                </div>
              </div>
            </md-card-content>
          </md-card>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
//import { postRequestData, SERVER_URL } from "@/assets/config.json";

export default {
  name: "register",
  data: () => ({
    duname: null,
    password: null,
    cpassword: null,
    error: false,
    errorMsg: null,
    buttonDisable: false
  }),
  methods: {
    onClickToNavigate(navigationName) {
      this.$router.push({ name: navigationName });
    },
    register() {
      this.buttonDisable = true;
      if (!this.duname || !this.password || !this.cpassword) {
        this.errorMsg = "Something is Missing !!!";
        this.error = true;
        this.buttonDisable = false;
        return;
      }

      if (this.password != this.cpassword) {
        this.errorMsg = "Password and Confirm Password not matching";
        this.error = true;
        this.buttonDisable = false;
        return;
      }

      let postRequestObj = { ...postRequestData };
      postRequestObj.body = JSON.stringify({
        distributorName: this.duname,
        password: this.password
      });

      fetch(`${SERVER_URL}dist/add`, postRequestObj)
        .then(response => response.text())
        .then(result => {
          console.log(result);
          this.onClickToNavigate("Login");
        })
        .catch(error => {
          this.errorMsg = error; //"Something happening wrong !!!";
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

<style></style>
