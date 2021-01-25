<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID">{{ item.userId }}</md-table-cell>
        <md-table-cell md-label="Page Topic">{{ item.category }}</md-table-cell>
        <md-table-cell md-label="Views">{{ item.views }}</md-table-cell>
        <md-table-cell md-label="follows">{{ item.follows }}</md-table-cell>
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
          userId: 1,
          category: "fashion",
          views: 256,
          follows: 32
        },
        {
          userId: 1,
          category: "fashion",
          views: 256,
          follows: 32
        },
        {
          userId: 1,
          category: "fashion",
          views: 256,
          follows: 32
        },
        {
          userId: 1,
          category: "fashion",
          views: 256,
          follows: 32
        },
        {
          userId: 1,
          category: "fashion",
          views: 256,
          follows: 32
        },
        {
          userId: 1,
          category: "fashion",
          views: 256,
          follows: 32
        },
        {
          userId: 1,
          category: "fashion",
          views: 256,
          follows: 32
        },
        {
          userId: 1,
          category: "fashion",
          views: 256,
          follows: 32
        },
        {
          userId: 1,
          category: "fashion",
          views: 256,
          follows: 32
        }
      ]
    };
  },
  //inside () link
  beforeMount() {
    //TODO: hit fetch request before mount for data of the table
    //TODO: finish getting the data apilink is fine
    fetch(`${this.$store.state.ANALYTICS_SERVER}analytics/list/0`)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        this.users = result;
      })
      .catch(error => console.log);
  }
};
</script>
