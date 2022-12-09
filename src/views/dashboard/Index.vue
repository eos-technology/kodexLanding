<template>
  <Header></Header>
  <section class="dasboard">
    <section class="dasboard__main">
      <article class="dasboard__main__data">
        <h2>Kodex Pay</h2>
        <p class="dasboard__main__text">{{ $t("dashborad.description") }}</p>
        <img src="/src/assets/icons/imgMain.png" alt="" />
      </article>

      <article class="dasboard__main__data">
        <h2>KodexPay to USD Chart</h2>
        <img src="@/assets/images/chart.png" alt="" />
      </article>

      <article class="grid">
        <article class="dasboard__main__data">
          <h2>{{ $t("dashborad.pay") }}</h2>
          <article class="dasboard__main__data-chart">
            <apexchart
              :options="chartOptions"
              :series="series"
              :labels="['Apple', 'Mango', 'Banana', 'Papaya', 'Orange']"
            ></apexchart>
          </article>
          <div class="coins">
            <div v-for="item in coins" :key="item" class="coin">
              <div
                class="coin__color"
                :style="`background:${item.color}`"
              ></div>
              <p class="coin__title">{{item.title}}</p>
              <p class="coin__price">{{item.price}}</p>
            </div>
          </div>
        </article>

        <article class="dasboard__main__data">
          <h2>Transacciones recientes</h2>
          <div>
            <div v-for="item in data" class="item">
              <div class="item__box">
                <img :src="`src/assets/icons/${item.img}.svg`" alt="" />
                <div>
                  <p class="item__title">{{ item.title }}</p>
                  <p class="item__text">{{ item.text }}</p>
                </div>
              </div>
              <p class="item__price">$0.00</p>
            </div>
          </div>
        </article>
      </article>
    </section>

    <!-- <aside class="aside">
      <article class="aside__card">
        <div class="aside__card__img">
          <img src="@/assets/icons/newWallet.png" alt="" />
        </div>
        <div class="aside__card__text">
          <p class="aside__card__text__title-card">
            {{ $t("dashborad.balance") }}
          </p>
          <p class="aside__card__text__price">
            $
            {{ coinFormat(sumUsd) }}
          </p>
        </div>
      </article>
      <article class="aside__chart">
        <h3>{{ $t("dashborad.stadistics") }}</h3>
        <article class="aside__chart__price">
          <article class="aside__chart__price__tab">
            <div class="aside__chart__price__tab__contain">
              <img src="/assets/icons/hand-coins-currency-color.svg" alt="" />
            </div>
            <div class="aside__chart__price__tab__name">
              <p>{{ $t("dashborad.clients") }}</p>
              <h5>100+</h5>
            </div>
          </article>
          <article class="aside__chart__price__tab">
            <div class="aside__chart__price__tab__contain">
              <img src="/assets/icons/hand-coins-currency.svg" alt="" />
            </div>
            <div class="aside__chart__price__tab__name">
              <p>{{ $t("dashborad.transactions") }}</p>
              <h5>$2M</h5>
            </div>
          </article>
        </article>
        <article>
          <apexchart
            type="line"
            :options="options"
            :series="series2"
          ></apexchart>
        </article>
      </article>
      <article class="aside__list">
        <h3>{{ $t("dashborad.Recentclients") }}</h3>
        <article class="aside__list__tab" v-for="x in 5" :key="x">
          <div class="aside__list__tab__contain">
            <img src="/assets/icons/hand-coins-currency-black.svg" alt="" />
          </div>
          <div class="aside__list__tab__name">
            <p>{{ $t("dashborad.trade") }}</p>
            <h5>$0.00</h5>
          </div>
        </article>
      </article>
    </aside> -->
  </section>
</template>

<script>
import Header from "@/components/Header.vue";
import VueApexCharts from "vue3-apexcharts";
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  components: { Header, apexchart: VueApexCharts },
  setup() {
    const coins = [
      { color: "#007BD1", title: "BITCOIN", price: "$0.00M" },
      { color: "#7500D1", title: "KODEXPAY", price: "$0.00M" },
      { color: "#D100BC", title: "TETHER", price: "$0.00M" },
      { color: "#09A12A", title: "ETHERIUM", price: "$0.00M" },
      { color: "#0D4C26", title: "BITCOIN CASH", price: "$0.00M" },
      { color: "#D13200", title: "BINANCE", price: "$0.00M" },
    ];
    const data = [
      { img: "btcIcon", title: "Bitcoin", text: "BTC" },
      { img: "kodexIcon", title: "KodexPay", text: "KXP" },
      { img: "theterIcon", title: "Theter", text: "USDT" },
      { img: "cashIcon", title: "Bitcoin cash", text: "BCH" },
      { img: "bnbIcon", title: "Binance", text: "BNB" },
      { img: "kodexIcon", title: "KodexPay", text: "KXP" },
      { img: "etheriumIcon", title: "Ethereium", text: "ETH" },
      { img: "etheriumIcon", title: "Ethereium", text: "ETH" },
    ];
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
        show: false,
        fontFamily: "Kanit",
        fontWeight: 400,
        formatter: function (seriesName, opts) {
          return [
            seriesName,
            " - ",
            ` <span class="apex-bold"> ${
              opts.w.globals.series[opts.seriesIndex]
            }M </span>`,
          ];
        },
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
      data,
      coins,
    };
  },
  created() {
    this.getWallets();
  },
  methods: {
    ...mapActions("wallet", ["getWallets", "getTransactions"]),
  },
  computed: {
    ...mapGetters("wallet", ["sumUsd"]),
  },
};
</script>

<style lang="scss" >
.coins {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  .coin {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
    background: linear-gradient(0deg, #f5fafd, #f5fafd),
      linear-gradient(0deg, rgba(0, 123, 209, 0.04), rgba(0, 123, 209, 0.04)),
      #ffffff;
    border: 1px solid #ececee;
    border-radius: 9px;
    &__title {
      font-size: 14px;
      font-weight: 300;
      line-height: 24px;
      text-align: center;
    }
    &__price {
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
      text-align: center;
    }
    &__color{
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }
  }
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid #ececee;
  gap: 8px;
  padding-bottom: 8px;
  &__box {
    display: flex;
    gap: 16px;
  }
  &__title {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    color: #040e2c;
  }
  &__text {
    font-size: 12px;
    font-weight: 300;
    line-height: 16px;
    color: #647188;
  }
  &__price {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    color: #040e2c;
  }
}

.dasboard {
  &__main {
    display: flex;
    flex-direction: column;
    gap: 24px;
    &__data {
      padding: 24px;
      border-radius: 8px;
      background: white;
      border: 1px solid #ececee;
      border-radius: 16px;
      display: flex;
      flex-direction: column;
      gap: 24px;

      h2 {
        color: #132d7c;
        font-size: 26px;
      }

      .vue-apexcharts {
        max-height: 500px;
      }

      &-chart {
        width: 310px;
        margin: 0 auto;

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
  .apexcharts-legend-series {
    display: flex;
    align-items: center;
  }
  .apexcharts-legend-text {
    .apex-bold {
      font-weight: 500;
    }
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
</style>