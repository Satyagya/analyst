<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID">{{ item.quizId }}</md-table-cell>
        <md-table-cell md-label="Quiz Name">{{ item.quizName }}</md-table-cell>
        <md-table-cell md-label="Total Players">{{
          item.totalPlayers
        }}</md-table-cell>
        <md-table-cell md-label="Start Time">{{
          item.startTime
        }}</md-table-cell>
        <md-table-cell md-label="End Time">{{ item.endTime }}</md-table-cell>
        <md-table-cell md-label="Dynamic">{{ item.type }}</md-table-cell>
        <md-table-cell md-label="Winner">{{ item.winner }}</md-table-cell>
        <md-table-cell md-label="Most Answered Question">{{
          item.mostAnsweredQuestion
        }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "ordered-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
      users: [
        {
          quizId: 1,
          quizName: "fashion",
          totalPlayers: 256,
          startTime: "712387",
          endTime: "712387",
          type: false,
          winner: "satyagya",
          mostAnsweredQuestion: "melody itni chocklaty kyu hai"
        }
      ]
    };
  },
  //inside () link
  beforeMount() {
    //TODO: hit fetch request before mount for data of the tables
    fetch(`${this.$store.state.QUIZ_SERVER1}quizbay/user/analytics`)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        this.users = result;
      })
      .catch(error => console.log);
  }
};
</script>
