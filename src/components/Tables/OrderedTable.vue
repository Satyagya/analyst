<template>
  <div>
    <md-table
      v-model="$store.state.userStats"
      :table-header-color="tableHeaderColor"
    >
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
        <md-table-cell md-label="Area of Interest">{{
          item.areaOfInterests
        }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "ordered-table",
  props: ["tableHeaderColor"],
  data() {
    return {
      selected: [],
      originalData: [],
      
    };
  }
};
</script>
