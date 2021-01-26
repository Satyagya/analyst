<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
      >
        <chart-card
          :chart-data="dailySalesChart.data"
          :chart-options="dailySalesChart.options"
          :chart-type="'Line'"
          data-background-color="red"
        >
          <template slot="content">
            <h4 class="title">Weekly User Traffic</h4>
            <p class="category">
              <span class="text-success"
                ><i class="fas fa-long-arrow-alt-up"></i> 55%
              </span>
              Increase
            </p>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              updated 4 minutes ago
            </div>
          </template>
        </chart-card>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
      >
        <chart-card
          :chart-data="emailsSubscriptionChart.data"
          :chart-options="emailsSubscriptionChart.options"
          :chart-responsive-options="emailsSubscriptionChart.responsiveOptions"
          :chart-type="'Bar'"
          data-background-color="red"
        >
          <template slot="content">
            <h4 class="title">Registered Users</h4>
            <p class="category">
              <span class="text-danger"
                ><i class="fas fa-long-arrow-alt-down"></i> 32%
              </span>
              Decrease
            </p>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              updated 10 days ago
            </div>
          </template>
        </chart-card>
      </div>

      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-33"
      >
        <stats-card data-background-color="orange">
          <template slot="header">
            <md-icon>store</md-icon>
          </template>

          <template slot="content">
            <p class="category">Active Users------(All three services)</p>
            <h3 class="title">
              {{ totalActiveUsers }}
            </h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon class="text-danger">warning</md-icon>
              <a href="#pablo">Update Requeired</a>
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-33"
      >
        <stats-card data-background-color="orange">
          <template slot="header">
            <md-icon>Highest Traffic</md-icon>
          </template>

          <template slot="content">
            <p class="category">Highest traffic</p>
            <h3 class="title">
              {{ totalActiveUsers4 }}
              <small>K</small>
            </h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>date_range</md-icon>
              Just Now
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-33"
      >
        <stats-card data-background-color="orange">
          <template slot="header">
            <md-icon>info_outline</md-icon>
          </template>

          <template slot="content">
            <p class="category">Total Page Views</p>
            <h3 class="title">7509</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>local_offer</md-icon>
              Tracked from Quiz/Quora/PageBook
            </div>
          </template>
        </stats-card>
      </div>
      <!-- <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="blue">
          <template slot="header">
            <i class="fab fa-twitter"></i>
          </template>

          <template slot="content">
            <p class="category">Folowers</p>
            <h3 class="title">+245</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>update</md-icon>
              Just Updated
            </div>
          </template>
        </stats-card>
      </div> -->
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-70"
      >
        <nav-tabs-card>
          <template slot="content">
            <span class="md-nav-tabs-title">Tasks:</span>
            <md-tabs class="md-success" md-alignment="left">
              <md-tab id="tab-home" md-label="Quiz" md-icon="bug_report">
                <!-- <md-tab id="tab-home" md-label="Bugs" md-icon="bug_report">     -->
                <nav-tabs-table></nav-tabs-table>
              </md-tab>

              <md-tab id="tab-pages" md-label="Quora" md-icon="code">
                <!-- <md-tab id="tab-pages" md-label="Website" md-icon="code"> -->
                <nav-tabs-table></nav-tabs-table>
              </md-tab>

              <md-tab id="tab-posts" md-label="PageBook" md-icon="cloud">
                <!-- <md-tab id="tab-posts" md-label="server" md-icon="cloud"> -->
                <nav-tabs-table></nav-tabs-table>
              </md-tab>
            </md-tabs>
          </template>
        </nav-tabs-card>
      </div>

      <div class="md-layout-item md-medium-size- md-xsmall-size- md-size-25">
        <!-- dont change md-size again -->

        <!-- <chart-card
          :chart-data="dataCompletedTasksChart.data"
          :chart-options="dataCompletedTasksChart.options"
          :chart-type="'Pie'"
          data-background-color="red"
        >
          <template slot="content">
            <h4 class="title">Current Traffic</h4>
            
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              campaign sent 26 minutes ago
            </div>
          </template>
        </chart-card> -->
        <md-h1>Active users</md-h1>
        <PieChart :chart-data="datacollection"></PieChart>
      </div>

      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">User Stats</h4>
            <p class="category">User stats for today.</p>
          </md-card-header>
          <md-card-content>
            <ordered-table
              :channelID="0"
              table-header-color="red"
            ></ordered-table>
            <ordered-table
              :channelID="1"
              table-header-color="red"
            ></ordered-table>
            <ordered-table
              :channelID="2"
              table-header-color="red"
            ></ordered-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
    <!-- <div class="container">
      <PieChart :chart-data="datacollection"></PieChart>
      <button @click="fillData()">Randomize</button>
    </div> -->
  </div>
</template>

<script>
import {
  StatsCard,
  ChartCard,
  NavTabsCard,
  NavTabsTable,
  OrderedTable
} from "@/components";
import PieChart from "@/components/PieChart.js";

export default {
  components: {
    StatsCard,
    ChartCard,
    NavTabsCard,
    NavTabsTable,
    OrderedTable,
    PieChart
  },
  mounted() {
    this.fillData();
    //this.renderChart(this.pbchart, this.quizchart, this.quorachart)
  },
  data() {
    return {
      totalActiveUsers: 10,
      totalActiveUsers1: 10,
      totalActiveUsers2: 10,
      totalActiveUsers3: 10,
      totalActiveUsers4: 0,

      pbchart: 2,
      quorachart: 2,
      quizchart: 2,

      datacollection: null,
      dailySalesChart: {
        data: {
          labels: ["M", "T", "W", "T", "F", "S", "S"],
          series: [[12, 17, 7, 17, 23, 18, 38]]
        },
        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      dataCompletedTasksChart: {
        data: {
          labels: ["12am", "3pm", "6pm", "9pm", "12pm", "3am", "6am", "9am"],
          series: [[230, 750, 450, 300, 280, 240, 200, 190]]
        },

        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      emailsSubscriptionChart: {
        data: {
          labels: [
            "Ja",
            "Fe",
            "Ma",
            "Ap",
            "Mai",
            "Ju",
            "Jul",
            "Au",
            "Se",
            "Oc",
            "No",
            "De"
          ],
          series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
        },
        options: {
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0
          }
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function(value) {
                  return value[0];
                }
              }
            }
          ]
        ]
      }
    };
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: ["PageBook", "Quiz", "Quora"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#03a9f4", "#4caf50", "#ff9800"],
            data: [this.pbchart, this.quizchart, this.quorachart]
          }
        ]
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },
    // getTotalActiveUsersInPb() {
    //   //totalActiveUsers
    //   fetch(`${this.$store.state.ANALYTICS_SERVER}analytics/count/0`)
    //     .then(response => response.json())
    //     .then(result => {
    //       console.log(result);
    //       this.pbchart = result;
    //       return pbchart;
    //     })
    //     .catch(error => console.log);
    // },
    // getTotalActiveUsersInQuora() {
    //   //totalActiveUsers
    //   fetch(`${this.$store.state.ANALYTICS_SERVER}analytics/count/1`)
    //     .then(response => response.json())
    //     .then(result => {
    //       console.log(result);
    //       this.quorachart = result;
    //       return quorachart;
    //     })
    //     .catch(error => console.log);
    //   // return (result);
    // },
    // getTotalActiveUsersInQuiz() {
    //   //totalActiveUsers
    //   fetch(`${this.$store.state.ANALYTICS_SERVER}analytics/count/2`)
    //     .then(response => response.json())
    //     .then(result => {
    //       console.log(result);
    //       this.quizchart = result;
    //       return quizchart;
    //     })
    //     .catch(error => console.log);
    //   // return (result);
    // },

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
          this.filteredData = [...this.originalData];
          let dateData = this.groupWeek(this.originalData),
            tempData = [];
          console.log("groupWeek", dataData);
          this.processedData = {
            labels: [],
            series: []
          };

          for (let i = 0; i < dataData.length; i++) {
            this.processedData.labels.push(dataData[i]["timeStamp"]);
            tempData.push(dataData[i]["count"]);
          }

          this.processedData.series = [[...tempData]];
        })
        .catch(error => console.log);
    },

    getTotalActiveUsers() {
      fetch(`${this.$store.state.ANALYTICS_SERVER}analytics/count/0`)
        .then(response => response.json())
        .then(result => {
          console.log("result1", result);
          this.totalActiveUsers1 = result;
          this.pbchart = result;
          //console.log("pbchart "+this.pbchart);
          this.totalActiveUsers = this.totalActiveUsers1;
          this.totalActiveUsers4 = Math.max(
            this.totalActiveUsers4,
            this.totalActiveUsers1
          );
          this.fillData();
        })
        .catch(error => console.log);

      fetch(`${this.$store.state.ANALYTICS_SERVER}analytics/count/1`)
        .then(response => response.json())
        .then(result => {
          console.log("result2", result);
          this.totalActiveUsers2 = result;
          this.quorachart = result;
          this.totalActiveUsers += this.totalActiveUsers2;
          this.totalActiveUsers4 = Math.max(
            this.totalActiveUsers4,
            this.totalActiveUsers2
          );
          this.fillData();
        })
        .catch(error => console.log);

      fetch(`${this.$store.state.ANALYTICS_SERVER}analytics/count/2`)
        .then(response => response.json())
        .then(result => {
          console.log("result3", result);
          this.totalActiveUsers3 = result;
          this.quizchart = result;
          this.totalActiveUsers += this.totalActiveUsers3;
          this.totalActiveUsers4 = Math.max(
            this.totalActiveUsers4,
            this.totalActiveUsers3
          );
          this.fillData()
        })
        .catch(error => console.log);
    }
  },
  beforeMount() {
    this.getDataFromAPI();
    this.getTotalActiveUsers();
    // this.getTotalActiveUsersInPb(),
    // this.getTotalActiveUsersInQuora(),
    // this.getTotalActiveUsersInQuiz(),
    this.fillData();
  }
};
</script>
