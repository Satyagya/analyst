<template>
  <div>
    <md-table v-model="originalData" :table-header-color="tableHeaderColor">
      <md-table-row
        slot="md-table-row"
        slot-scope="{ item }"
        :key="item.userId"
      >
        <md-table-cell md-label="ChannelID">{{ item.channelId }}</md-table-cell>
        <md-table-cell md-label="UserID">{{ item.userId }}</md-table-cell>
        <md-table-cell md-label="Name">{{ item.userName }}</md-table-cell>
        <md-table-cell md-label="Email">{{ item.email }}</md-table-cell>
        <md-table-cell md-label="Timestamp">{{ item.timestamp }}</md-table-cell>
        <md-table-cell md-label="Area of Interest">{{ item.areaOfInterests }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "ordered-table",
  props: ['tableData','tableHeaderColor', 'channelID' ],
  // {
  //   tableData,
  //   tableHeaderColor: {
  //     type: String,
  //     default: ""
  //   },
  //   channelID: Number
  // },
  data() {
    return {
      selected: [],
      originalData: [],
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
  methods: {
    getDataFromAPI() {
      fetch(
        `${this.$store.state.COMMON_INFRA_SERVER}history/getRegistrationHistory`
      )
        .then(response => response.json())
        .then(result => {
          //console.log(result);
          this.originalData = result.filter(
            obj => obj.channelId == this.channelID
          );
        })
        .catch(error => console.log);
    }
  },
  mounted() {
    this.getDataFromAPI();
    console.log("this table", this.tableData);
  }
};
</script>
