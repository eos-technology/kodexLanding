<template>
  <Header></Header>
  <section class="dasboard">
    <section class="dasboard__main">
      <article class="dasboard__main__img">
        <h2>Kodex Pay</h2>
        <p class="dasboard__main__text">KodexPay was born from the need to allow businesses that only accepted Fiat to
          enter the new world of cryptocurrencies, we have easy and efficient processes that allow users to convert
          cryptos into Fiat quickly, we also have high quality standards that allow us to carry out seamless and fast
          integrations with different programming languages ​​and external platforms</p>
        <img src="/src/assets/icons/imgMain.png" alt="" />
      </article>
      <article class="dasboard__main__data">
        <h2>Most used payment methods</h2>
        <article class="dasboard__main__data-chart">
          <apexchart :options="chartOptions" :series="series"
            :labels="['Apple', 'Mango', 'Banana', 'Papaya', 'Orange']"></apexchart>
        </article>
      </article>
    </section>
    <aside class="aside">
      <article class="aside__card">
        <div class="aside__card__img">
          <img src="@/assets/icons/newWallet.png" alt="" />
        </div>
        <div class="aside__card__text">
          <p class="aside__card__text__title-card">Wallet Balance</p>
          <p class="aside__card__text__price">$
            {{ coinFormat(sumUsd) }}
          </p>
        </div>
      </article>
      <article class="aside__chart">
        <h3>KodexPay Stats</h3>
        <article class="aside__chart__price">
          <article class="aside__chart__price__tab">
            <div class="aside__chart__price__tab__contain">
              <img src="/assets/icons/hand-coins-currency-color.svg" alt="" />
            </div>
            <div class="aside__chart__price__tab__name">
              <p>Clients</p>
              <h5>100+</h5>
            </div>
          </article>
          <article class="aside__chart__price__tab">
            <div class="aside__chart__price__tab__contain">
              <img src="/assets/icons/hand-coins-currency.svg" alt="" />
            </div>
            <div class="aside__chart__price__tab__name">
              <p>Transactions</p>
              <h5>$2M</h5>
            </div>
          </article>
        </article>
        <article>
          <apexchart type="line" :options="options" :series="series2"></apexchart>
        </article>
      </article>
      <article class="aside__list">
        <h3>Recent clients</h3>
        <article class="aside__list__tab" v-for="x in 5" :key="x">
          <div class="aside__list__tab__contain">
            <img src="/assets/icons/hand-coins-currency-black.svg" alt="" />
          </div>
          <div class="aside__list__tab__name">
            <p>Trade</p>
            <h5>$0.00</h5>
          </div>
        </article>
      </article>
    </aside>
  </section>
</template>

<script>
import Header from "@/components/Header.vue";
import VueApexCharts from "vue3-apexcharts";
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  components: { Header, apexchart: VueApexCharts },
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
      labels: ["Bitcoin", "USDT (TRC20)", "USDT (ERC20)", "Etherium", "BNB"],
      fill: {
        type: "gradient",
      },
      stroke: {
        show: false,
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            labels: {
              show: true,
              name: {
                show: false,
              },
              value: {
                show: false,
              },
              total: {
                show: true,
                label: "Total",
                color: "#DEE6EF",
                fontSize: "10px",
                fontFamily: "Roboto",
                formatter: function (w) {
                  return w.globals.seriesTotals.reduce((a, b) => {
                    return a + b;
                  }, 0);
                },
              },
            },
          },
        },
      },
      legend: {
        fontFamily: 'Kanit',
        fontWeight: 400,
        formatter: function (seriesName, opts) {
          return [seriesName, " - ", ` <span class="apex-bold"> ${opts.w.globals.series[opts.seriesIndex]}M </span>`]
        }
      },
      responsive: [
        {
          chart: {
            width: 250,
          },
          breakpoint: 700,
          options: {
            legend: {
              position: "bottom",
            },
            itemMargin: {
              horizontal: 5,
              vertical: 10,
            },
          },
        },
      ],
    };
    const series2 = [
      {
        name: "Total send",
        data: [1, 10, 0, 5],
      },
      {
        name: "Total received",
        data: [4, 8, 4, 2],
      },
    ];
    const options = {
      chart: {
        height: 350,
        type: "line",
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        type: "datetime",
        categories: ["2021-02-04", "2021-02-05", "2021-02-06", "2021-02-09"],
      },
      stroke: {
        curve: "smooth",
      },
      legend: {
        show: false,
      },
      markers: {
        size: 5,
      },
      colors: ["#02C9FD", "#1F78B4"],
      dataLabels: {
        enabled: false,
        offsetX: -6,
        style: { fontSize: "12px" },
      },
      plotOptions: {},
    };
    return {
      series,
      chartOptions,
      options,
      series2,
    };
  },
  created() {
    this.getWallets()
  },
  methods: {
    ...mapActions("wallet", ["getWallets", "getTransactions"]),
  },
  computed: {
    ...mapGetters('wallet', ['sumUsd'])
  }
};
</script>

<style lang="scss" >
.dasboard {
  display: grid;
  grid-template-columns: 70% 1fr;
  grid-gap: 25px;
  margin-top: 30px;

  @media (max-width: 1200px) {
    grid-template-columns: 50% 50%;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  &__main {
    &__text {
      margin-bottom: 16px;
    }

    &__img {
      padding: 16px;
      border-radius: 8px;
      background: white;

      h2 {
        color: #132D7C;
        margin-bottom: 15px;
        font-size: 26px;
      }

      h3 {
        margin-bottom: 15px;
        font-size: 14px;
        font-weight: 300;
      }

      p {
        font-size: 14px;
        color: #647188;
      }

      img {
        width: 100%;
      }
    }

    &__data {
      margin-top: 25px;
      padding: 16px;
      border-radius: 8px;
      background: white;

      h2 {
        color: #132D7C;
        margin-bottom: 15px;
        font-size: 26px;
      }

      .vue-apexcharts {
        max-height: 500px;
      }

      &-chart {
        width: 450px;

        @media (max-width: 700px) {
          width: 100%;
        }
      }
    }
  }

  .aside {
    &__card {
      display: flex;
      align-items: center;
      background-color: white;
      border-radius: 8px;
      padding: 15px 20px;
      margin-bottom: 24px;

      &__img {
        img {
          width: 100%;
        }

        width: 100px;
        margin-right: 20px;
      }

      &__text {
        &__title-card {
          font-size: 16px;
          color: #647188;
        }

        &__price {
          font-size: 36px;
          line-height: 40px;
          font-weight: 500;
        }
      }
    }

    &__chart {
      background-color: white;
      border-radius: 8px;
      padding: 15px 20px;
      margin-bottom: 24px;

      h3 {
        font-size: 26px;
        font-weight: 400;
        margin-bottom: 15px;
      }

      &__price {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;

        &__tab {
          display: flex;
          align-items: center;

          &__contain {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            margin-right: 15px;
            padding: 16px;
            border-radius: 12px;
            background: #f6f8fa;
          }

          &__name {
            p {
              color: #647188;
              font-size: 12px;
              font-weight: 300;
            }

            h5 {
              font-size: 14px;
              font-weight: 500;
            }
          }
        }
      }
    }

    &__list {
      background-color: white;
      border-radius: 8px;
      padding: 15px 20px;
      margin-bottom: 24px;

      h3 {
        font-size: 26px;
        font-weight: 400;
        margin-bottom: 15px;
      }

      &__tab {
        display: flex;
        align-items: center;
        margin-bottom: 15px;

        &__contain {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          margin-right: 15px;
          padding: 16px;
          border-radius: 12px;
          background: #f6f8fa;
        }

        &__name {
          p {
            color: #647188;
            font-size: 12px;
            font-weight: 300;
          }

          h5 {
            font-size: 14px;
            font-weight: 500;
          }
        }
      }
    }
  }
  .apexcharts-legend-series{
    display: flex;
    align-items: center;
  }
  .apexcharts-legend-text {
    .apex-bold {
      font-weight: 500;
    }
  }
}
</style>