<template>
  <Header></Header>
  <section class="dasboard">
    <section class="dasboard__main">
      <article class="dasboard__main__img">
        <h2>Kodex Pay</h2>
        <p class="dasboard__main__text">Mauris vel nibh cursus, congue quam tincidunt, placerat ex. Praesent imperdiet sem vitae tellus commodo, sed ultricies lorem porttitor. Suspendisse sodales mi dignissim venenatis feugiat. Ut faucibus est eget velit fringilla cursus vitae id metus. Curabitur dui dui, pulvinar in aliquam non, mollis commodo elit. Vestibulum placerat tincidunt lacus, eget imperdiet felis suscipit sed. Suspendisse sit amet congue urna. Proin scelerisque libero in nisi luctus pellentesque</p>
        <img src="/src/assets/icons/imgMain.png" alt="" />
      </article>
      <article class="dasboard__main__data">
        <h2>Most used payment methods</h2>
        <article class="dasboard__main__data-chart">
          <apexchart
            :options="chartOptions"
            :series="series"
            :labels="['Apple', 'Mango', 'Banana', 'Papaya', 'Orange']"
          ></apexchart>
        </article>
      </article>
    </section>
    <aside class="aside">
      <article class="aside__card">
        <div class="aside__card__img">
          <img src="/assets/icons/bank.svg" alt="" />
        </div>
        <div class="aside__card__text">
          <p class="aside__card__text__title-card">Wallet Balance</p>
          <p class="aside__card__text__price">$0.00</p>
        </div>
      </article>
      <article class="aside__chart">
        <h3>KodexPay Stats</h3>
        <article class="aside__chart__price">
          <article class="aside__chart__price__tab">
            <div class="aside__chart__price__tab__contain">
              <img
                src="/assets/icons/hand-coins-currency-color.svg"
                alt=""
              />
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
          <apexchart
            type="line"
            :options="options"
            :series="series2"
          ></apexchart>
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
      labels: ["Bitcoin", "Eleven", "Lightcoin", "Etherium", "BitcoinCash"],
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
                show: true,
                fontFamily: "Roboto",
                offsetY: 20,
              },
              value: {
                show: false,
                fontSize: "25px",
                fontFamily: "Roboto",
                fontWeight: 500,
                color: "#DEE6EF",
                offsetY: -15,
                formatter: function (val) {
                  return val;
                },
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
};
</script>

<style lang="scss" scoped>
.dasboard {
  display: grid;
  grid-template-columns: 70% 1fr;
  grid-gap: 25px;
  margin-top: 30px;
  @media (max-width: 100px) {
    grid-template-columns: 2fr 1fr;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
  &__main {
    &__text{
      margin-bottom: 16px;
    }
    &__img {
      padding: 16px;
      border-radius: 8px;
      background: white;
      h2 {
        margin-bottom: 15px;
      }
      h3 {
        margin-bottom: 15px;
        font-size: 14px;
        font-weight: 300;
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
        margin-bottom: 15px;
      }
      .vue-apexcharts {
        max-height: 500px;
      }
      &-chart {
        width: 450px;
        @media (max-width: 700px){
        width: 100%;

        }
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
</style>