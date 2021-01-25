<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID">{{ item.userId }}</md-table-cell>
        <md-table-cell md-label="Name">{{ item.username }}</md-table-cell>
        <md-table-cell md-label="Timestamp">{{ item.timestamp }}</md-table-cell>
        <md-table-cell md-label="Area of Interest">{{ item.areaOfInterests }}</md-table-cell>
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
          id: 1,
          name: "Dakota Rice",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
        {
          id: 2,
          name: "Minerva Hooper",
          salary: "$23,738",
          country: "Curaçao",
          city: "Sinaai-Waas"
        },
        {
          id: 3,
          name: "Sage Rodriguez",
          salary: "$56,142",
          country: "Netherlands",
          city: "Overland Park"
        },
        {
          id: 4,
          name: "Philip Chaney",
          salary: "$38,735",
          country: "Korea, South",
          city: "Gloucester"
        }
      ]
    };
  },
  //inside () link
  beforeMount(){
    //TODO: hit fetch request before mount for data of the table
    fetch(`${this.$store.state.COMMON_INFRA_SERVER}`)
        .then(response => response.json())
        .then(result => {
          console.log(result);
          this.users = result;
        })
        .catch(error => console.log);
  }
};
</script>
