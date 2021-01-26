<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Admin Profile</h4>
        <p class="category">Edit profile (Function Disabled)</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div v-if="error" class="md-layout-item">
            <div class="wrapper">
              <div class="alert alert-danger">
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

          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Admin_id (Primary objects can't be modified)</label>
              <!-- <md-input v-model="adminID" type="text"></md-input> -->
              <md-input v-model="disabled" disabled></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>User Name</label>
              <md-input v-model="username" type="text"></md-input>
              <!-- <md-input v-model="disabled" disabled></md-input> -->
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Email Address </label>
              <md-input v-model="email" type="email"></md-input>
              <!-- <md-input v-model="disabled" disabled></md-input> -->
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>First Name</label>
              <md-input v-model="firstName" type="text"></md-input>
              <!-- <md-input v-model="disabled" disabled></md-input> -->
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Last Name</label>
              <md-input v-model="lastName" type="text"></md-input>
              <!-- <md-input v-model="disabled" disabled></md-input> -->
            </md-field>
          </div>
          <!-- <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Address</label>
              <md-input v-model="address" type="text"></md-input>
            </md-field>
          </div> -->

          <div class="md-layout-item md-size-100 text-right">
            <md-button
              class="md-raised md-success"
              style="background-color: #f44336!important;"
              @click="updateProfile()"
              v-bind:disabled="buttonDisable"
              >Update Admin Profile</md-button
            >
          </div>
        </div>
      </md-card-content>
    </md-card>
    <md-snackbar
      :md-position="position"
      :md-duration="isInfinity ? Infinity : duration"
      :md-active.sync="showSnackbar"
      md-persistent
    >
      <span>Profile Updation Successfull !!!</span>
      <md-button class="md-primary" @click="showSnackbar = false"
        >Close</md-button
      >
    </md-snackbar>
  </form>
</template>

<script>
import { postRequestData, SERVER_URL } from "@/assets/config.json";

export default {
  name: "edit-profile-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      adminid: null,
      username: null,
      disabled: null,
      email: null,
      lastname: null,
      firstname: null
    };
  },
  methods: {
    updateProfile() {
      this.buttonDisable = true;
      if (!this.username || !this.email || !this.lastname || !this.firstname) {
        this.errorMsg = "Something is Missing !!!";
        this.error = true;
        this.buttonDisable = false;
        return;
      }

      let postRequestObj = { ...postRequestData };
      postRequestObj.body = JSON.stringify({
        did: this.$store.state.did,
        distributorName: this.distributorName,
        password: this.password
      });

      //TODO : get did, token from store then send it request body
      fetch(`${SERVER_URL}analytics/adminRegUpdate`, postRequestObj)
        .then(response => response.json())
        .then(result => {
          this.showSnackbar = true;
          //TODO : Cookies handling is pending
          console.log("update profile", result);
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
