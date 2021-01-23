<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
      <img class="img" :src="cardUserImage" />
    </div>

    <md-card-content>
      <h6 class="category text-gray">Admin</h6>
      <h4 class="card-title">Evil Tester</h4>
      <p class="card-description">
        Evil Tester, as the name suggests, is pure evil. He might go to the
        extent of running your code a thousand times just so it crashes due to
        data overload in your database. You can run, debug, or hide your code,
        but the EVIL TESTER will find your errors.. and make you pay for them.
      </p>
      <md-button class="md-round md-danger">Logout</md-button>
    </md-card-content>
  </md-card>
</template>
<script>
export default {
  name: "user-card",
  props: {
    cardUserImage: {
      type: String,
      default: require("@/assets/img/faces/phani.jpeg")
    }
  },
  data() {
    return {};
  }
};
</script>
<style></style>
