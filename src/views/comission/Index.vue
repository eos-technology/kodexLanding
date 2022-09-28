<template>
  <Header></Header>
  <section class="commissions">
    <section class="commissions__aside">
      <article class="commissions__aside__total">
        <p>Total balance</p>
        <h2>$ {{ comissions.data.reduce((a, b) => a + b, 0) }}</h2>
        <BaseButton
          label="Withdraw"
          :disabled="comissions.data.reduce((a, b) => a + b, 0) <= 0"
          @click="$router.push({ path: '/commissions/withdraw' })"
        ></BaseButton>
      </article>
      <article class="commissions__aside__total">
        <p>Total USD</p>
        <h2>$ {{ coinFormat(comissions.total) }}</h2>
      </article>
      <article class="commissions__aside__chart">
        <h2>Comissions</h2>
        <article class="">
          <apexchart
            :options="chartOptions"
            :series="series"
            height="500"
            :labels="['Apple', 'Mango', 'Banana', 'Papaya', 'Orange']"
          ></apexchart>
        </article>
      </article>
    </section>
    <section class="commissions__table">
      <article class="commissions__table__actions">
        <InputSearch></InputSearch>
        <BaseInput type="date" v-model="payload.date"></BaseInput>
      </article>
      <article class="commissions__table__container">
        <article class="commissions__table__table">
          <article class="commissions__table__table-header">
            <p>ID</p>
            <p>Type</p>
            <p style="width: 300px">Description</p>
            <p>Date</p>
            <p>Status</p>
            <p>Quantity</p>
          </article>
          <section v-if="!transactions.data" class="vacio">
            <img
              src="src\assets\images\vacio\vacioWallet.png"
              alt=""
              v-if="!transactions"
            />
            <h5>You still have no transactions</h5>
          </section>
          <template v-if="transactions">
            <article
              class="commissions__table__table-row"
              v-for="trx in transactions.data"
              :key="trx.id"
            >
              <p>{{ trx.id }}</p>
              <p>{{ trx.category ? trx.category.name : "" }}</p>
              <p class="suspensive">{{ trx.description }}</p>
              <p>{{ formatDate(trx.created_at) }}</p>
              <p class="Aprobado">{{ trx.type == 1 ? "Income" : "Outcome" }}</p>
              <p>${{ coinFormat(trx.quantity) }}</p>
            </article>
          </template>
        </article>
      </article>
      <b-pagination
        v-model="transactions.meta.current_page"
        :total-rows="transactions.meta.total"
        :per-page="transactions.meta.per_page"
      ></b-pagination>
    </section>
  </section>
</template>

<script>
import Header from "@/components/Header.vue";
import BaseButton from "@/components/form/BaseButton.vue";
import VueApexCharts from "vue3-apexcharts";
import InputSearch from "@/components/form/InputSearch.vue";
import BaseInput from "@/components/form/BaseInput.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: { apexchart: VueApexCharts },
  data() {
    return {
      payload: {
        page: 1,
        type: null,
        date: null,
      },
      series: [44, 55, 41, 17, 15, 0],
      chartOptions: {
        chart: {
          type: "pie",
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        labels: [
          "Directs",
          "Pro Bonus",
          "Level 1",
          "Level 2",
          "Level 3",
          "Level 4",
        ],
        fill: {
          type: "gradient",
        },
        stroke: {
          show: false,
        },
        legend: {
          position: "bottom",
          horizontalAlign: "start",
          labels: {
            useSeriesColors: true,
          },
          itemMargin: {
            horizontal: 5,
            vertical: 10,
          },
          formatter: function (seriesName, opts) {
            return [
              seriesName,
              `<span class="porcentaje">${
                opts.w.globals.series[opts.seriesIndex]
              }</span>`,
            ];
          },
        },
        plotOptions: {
          pie: {
            expandOnClick: false,
            pie: {
              size: "100%",
            },
          },
        },
      },
    };
  },
  components: { Header, BaseButton, InputSearch, BaseInput },
  created() {
    this.getData();
    this.getTransactionsData();
  },
  methods: {
    ...mapActions("comission", ["getComissions", "getTransactions"]),
    getData() {
      this.getComissions().then(() => {
        this.updateChart();
      });
    },
    getTransactionsData() {
      this.getTransactions(this.payload);
    },
    updateChart() {
      this.series = this.comissions.data;
      console.log(this.series);
    },
  },
  computed: {
    ...mapState("comission", ["comissions", "transactions"]),
  },
  watch: {
    "payload.date": function () {
      this.getTransactionsData();
    },
  },
};
</script>

<style lang="scss">
.suspensive {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 300px;
}
.commissions {
  margin-top: 30px;
  padding: 40px;
  border-radius: 8px;
  background: white;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-gap: 20px;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
  &__aside {
    padding: 16px;
    border-radius: 8px;
    background: #f6f8fa;
    &__total {
      border-radius: 8px;
      background: #ffffff;
      padding: 24px 16px;
      text-align: center;
      margin-bottom: 20px;
      p {
        color: #647188;
        font-size: 14px;
      }
      h2 {
        font-size: 20px;
      }
      button {
        margin-bottom: 0;
      }
    }
    &__chart {
      border-radius: 8px;
      background: #ffffff;
      padding: 24px 16px;
      text-align: center;
      margin-bottom: 20px;
      h2 {
        font-size: 22px;
        margin-bottom: 10px;
      }
      .apexcharts-legend-series {
        padding: 15px;
      }
    }
  }
  .apexcharts-legend {
    width: 100%;
    overflow: hidden;
    display: grid;
    grid-template-columns: 100px 100px;
    grid-gap: 10px;
    max-height: 100% !important;
    .apexcharts-legend-series {
      width: 100%;
      position: relative;
      padding: 15px;
      justify-content: center;
      flex-direction: column;
      .apexcharts-legend-marker {
        position: absolute;
        width: 100% !important;
        height: 100% !important;
        border: none;
        border-radius: 8px !important;
        opacity: 0.1;
      }
      .apexcharts-legend-text {
        font-size: 16px;
        font-weight: 800 !important;
      }
    }
  }
  &__table {
    overflow: hidden;
    @media (max-width: 700px) {
      padding: 20px;
    }
    &__actions {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      input {
        width: 250px;
        @media (max-width: 700px) {
          margin-top: 15px;
          width: 100%;
        }
      }
    }
    margin-top: 20px;
    @include Table(5);
    .Aprobado {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 5px;
        height: 5px;
        background: #0ec564;
        top: 50%;
        left: 30%;
        transform: translate(0%, -50%);
        border-radius: 100%;
      }
    }
    .Pendiente {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 5px;
        height: 5px;
        background: #ffab1b;
        top: 50%;
        left: 30%;
        transform: translate(0%, -50%);
        border-radius: 100%;
      }
    }
    .Rechazado {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 5px;
        height: 5px;
        background: #ff4e78;
        top: 50%;
        left: 30%;
        transform: translate(0%, -50%);
        border-radius: 100%;
      }
    }
  }
  .pagination {
    margin-top: 20px;
    justify-content: center !important;

    .page-item {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      .page-link {
        display: inline-block;
        width: 40px;
        height: 40px;
        border: none;
        border-radius: 100%;
        color: #0f215c;
        &:focus {
          box-shadow: none;
        }
      }
      &.active > .page-link {
        color: white;
        background: #0f215c;
      }
    }
  }
}
.porcentaje {
  font-weight: 300 !important;
  display: block !important;
}
</style>
