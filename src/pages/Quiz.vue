<template>
  <div class="content">
    <!-- <md-h1>Filters:</md-h1> -->

    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-20"
      >
        <stats-card data-background-color="green">
          <template slot="header">
            <md-icon>AT</md-icon>
          </template>

          <template slot="content">
            <p class="category">Total Active traffic</p>
            <h3 class="title">
              {{ totalActiveUsers }}
            </h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>date_range</md-icon>
              Just Now
              <!-- <md-icon class="text-danger">warning</md-icon>
              <a href="#pablo">Update Requeired</a> -->
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="green">
          <template slot="header">
            <md-icon>Q</md-icon>
          </template>

          <template slot="content">
            <p class="category">Currently Active Quizzes</p>
            <h3 class="title">
              {{ quizCount }}
            </h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>date_range</md-icon>
              Just Now
              <!-- <md-icon class="text-danger">warning</md-icon>
              <a href="#pablo">Update Requeired</a> -->
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-200 md-xsmall-size-200 md-size-55"
      >
        <chart-card
          :chart-data="processedData"
          :chart-options="dailySalesChart.options"
          :chart-type="'Line'"
          data-background-color="green"
        >
          <template slot="content">
            <h4 class="title">Weekly Traffic History</h4>
            <!-- <p class="category">
              <span class="text-success"
                ><i class="fas fa-long-arrow-alt-up"></i> 55%
              </span>
              Increase
            </p> -->
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              Updated Today
            </div>
          </template>
        </chart-card>
      </div>

      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Quiz</h4>
            <p class="category">Details</p>
          </md-card-header>
          <md-card-content>
            <quiz-table table-header-color="red"></quiz-table>
          </md-card-content>
        </md-card>
      </div>

      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-28"
      >
        <stats-card data-background-color="green">
          <template slot="header">
            <md-icon>store</md-icon>
          </template>

          <template slot="content">
            <p class="category">Total Registered Users</p>
            <h3 class="title">{{ filteredData.length }}</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>date_range</md-icon>
              Data for the last {{ time }} days
            </div>
          </template>
        </stats-card>
      </div>

      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">User Stats</h4>
            <p class="category">User Details</p>
          </md-card-header>
          <md-card-content>
            <ordered-table
              :channelID="channelID"
              table-header-color="red"
            ></ordered-table>
          </md-card-content>
        </md-card>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Time-Filter</button>
        <div class="dropdown-content">
          <md-button @click="fetchData(7)">1 Week</md-button>
          <md-button @click="fetchData(14)">2 Weeks</md-button>
          <md-button @click="fetchData(21)">3 Weeks</md-button>
          <md-button @click="fetchData(31)">1 Month</md-button>
          <md-button @click="fetchData(180)">6 Month</md-button>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import { StatsCard, ChartCard, OrderedTable } from "@/components";
import QuizTable from "../components/Tables/QuizTable.vue";

export default {
  components: {
    StatsCard,
    ChartCard,
    OrderedTable,
    QuizTable
  },

  data() {
    return {
      time: 1,
      totalActiveUsers: 0,
      quizCount: 10,
      channelID: 2,
      originalData: [],
      filteredData: [],
      processedData: {
        labels: [
          "2017-11-13",
          "2017-11-06",
          "2017-10-02",
          "2017-11-03",
          "2017-10-01",
          "2017-10-01"
        ], //dummy data
        series: [[124, 33, 66, 99, 23, 40]]
      },
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
          high: 300, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 5,
            right: 0,
            bottom: 0,
            left: 0
          }
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
    };
  },
  methods: {
    getMonday(d) {
      let day = d.getDay();
      let diff = d.getDate() - day + (day === 0 ? -6 : 1);
      return new Date(d.setDate(diff));
    },
    groupWeek(arrayOfObject) {
      return arrayOfObject.reduce((m, o) => {
        let monday = this.getMonday(new Date(o.timeStamp));
        let mondayYMD = monday.toISOString().slice(0, 10);
        let found = m.find(e => e.timeStamp === mondayYMD);
        if (found) {
          found.count += 1;
        } else {
          o.timeStamp = mondayYMD;
          m.push(o);
        }
        return m;
      }, []);
    },
    getDataFromAPI() {
      fetch(`${this.$store.state.COMMON_INFRA_SERVER}user/getLoginHistory`)
        .then(response => response.json())
        .then(result => {
          this.originalData = result.filter(
            obj => obj.channelId == this.channelID
          );
          this.filteredData = [...this.originalData];
          console.log("filtereddata", this.filteredData);
          let dateData = this.groupWeek(this.originalData),
            tempData = [];
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
    getTotalActiveQuiz() {
      //totalActiveUsers
      fetch(`${this.$store.state.QUIZ_SERVER2}quizbay/contest/getactivecount`)
        .then(response => response.json())
        .then(result => {
          console.log(result);
          this.quizCount = result;
        })
        .catch(error => console.log);
    },
    getTotalActiveUsers() {
      //totalActiveUsers
      fetch(`${this.$store.state.ANALYTICS_SERVER}analytics/count/2`)
        .then(response => response.json())
        .then(result => {
          console.log(result);
          this.totalActiveUsers = result;
        })
        .catch(error => console.log);
    },
    getDayDifference(pastDate) {
      let pastTime = new Date(pastDate);
      let presentTime = new Date();
      return (pastTime.getTime() - presentTime.getTime()) / (1000 * 3600 * 24);
    },
    filter(time) {
      //TODO: filter the list based time
      this.filteredData = this.originalData.filter(obj => {
        if (this.getDayDifference(obj.timeStamp) < time) {
          return obj;
        }
      });
    }
  },
  beforeMount() {
    //TODO: fetch request from the apis then populate
    this.getDataFromAPI();
    this.getTotalActiveUsers();
    this.getTotalActiveQuiz();
    //this.dailySalesChart.options.high =
  }
};
</script>
