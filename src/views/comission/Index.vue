<template>
  <Header></Header>
  <section class="commissions">
    <section class="commissions__aside">
      <article class="commissions__aside__total">
        <p>Total balance</p>
        <h2>$ 7,610.00</h2>
        <BaseButton
          label="Retirar"
          @click="$router.push({ path: '/commissions/withdraw' })"
        ></BaseButton>
      </article>
      <article class="commissions__aside__total">
        <p>Total USD</p>
        <h2>$ 18,310.00</h2>
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
        <BaseInput type="date"></BaseInput>
      </article>
      <article class="commissions__table__container">
        <article class="commissions__table__table">
          <article class="commissions__table__table-header">
            <p>ID</p>
            <p>Type</p>
            <p>Description</p>
            <p>Date</p>
            <p>Status</p>
            <p>Quantity</p>
          </article>
          <article
            class="commissions__table__table-row"
            v-for="element in 5"
            :key="element"
          >
            <p>0</p>
            <p>Type Comissions</p>
            <p>Description</p>
            <p>06/07/2022 18:21</p>
            <p class="Aprobado">Aprobado</p>
            <p>$0.00</p>
          </article>
        </article>
      </article>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
      ></b-pagination>
    </section>
  </section>
</template>

<script>
import { ref } from "@vue/reactivity";
import Header from "@/components/Header.vue";
import BaseButton from "@/components/form/BaseButton.vue";
import VueApexCharts from "vue3-apexcharts";
import InputSearch from "@/components/form/InputSearch.vue";
import BaseInput from "@/components/form/BaseInput.vue";

export default {
  components: { apexchart: VueApexCharts },
  setup() {
    const series = [44, 55, 41, 17, 15];
    const chartOptions = {
      chart: {
        type: "pie",
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      labels: ["Bitcoin", "Eleven", "Lightcoin", "Etherium", "BitcoinCash"],
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

    };
    const currentPage = ref(1);
    const rows = ref(50);
    const perPage = ref(5);
    return {
      chartOptions,
      series,
      currentPage,
      rows,
      perPage,
    };
  },
  components: { Header, BaseButton, InputSearch, BaseInput },
};
</script>

<style lang="scss">
.commissions {
  margin-top: 30px;
  padding: 40px;
  border-radius: 8px;
  background: white;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-gap: 20px;
  @media (max-width: 700px){
    grid-template-columns: 1fr;
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
    &__actions {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      input {
        width: 250px;
        @media (max-width: 700px){
          margin-top: 15px;
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
        color: #000000;
        &:focus {
          box-shadow: none;
        }
      }
      &.active > .page-link {
        color: white;
        background: #000000;
      }
    }
  }
}
.porcentaje {
  font-weight: 300 !important;
  display: block !important;
}
</style>
