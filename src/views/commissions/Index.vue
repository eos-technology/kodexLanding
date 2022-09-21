<template>
  <Header></Header>
  <section class="commissions">
    <section class="commissions__aside">
      <article class="commissions__aside__total">
        <p>Total balance</p>
        <h2>$ 7,610.00</h2>
        <BaseButton label="Retirar"></BaseButton>
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
    return {
      chartOptions,
      series,
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
}
.porcentaje {
  font-weight: 300 !important;
  display: block !important;
}
</style>