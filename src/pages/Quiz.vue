<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-200 md-xsmall-size-200 md-size-50"
      >
        <chart-card
          :chart-data="dailySalesChart.data"
          :chart-options="dailySalesChart.options"
          :chart-type="'Line'"
          data-background-color="green"
        >
          <template slot="content">
            <h4 class="title">Traffic History</h4>
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
              updated 2 minutes ago
            </div>
          </template>
        </chart-card>
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
            <h3 class="title">4245</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>date_range</md-icon>
              Last 24 Hours
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-28"
      >
        <stats-card data-background-color="green">
          <template slot="header">
            <md-icon>AT</md-icon>
          </template>

          <template slot="content">
            <p class="category">Total Active traffic</p>
            <h3 class="title">
              49
              <small>K</small>
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
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Page Visits</h4>
            <p class="category">Details</p>
          </md-card-header>
          <md-card-content>
            <ordered-table table-header-color="red"></ordered-table>
          </md-card-content>
        </md-card>
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
            <ordered-table table-header-color="red"></ordered-table>
          </md-card-content>
        </md-card>
      </div>
      <div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  StatsCard,
  ChartCard,
  OrderedTable
} from "@/components";

export default {
  components: {
    StatsCard,
    ChartCard,
    OrderedTable
  },
  data() {
    return {
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
          high: 70, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
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
      }
    }
};
</script>
