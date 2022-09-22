<template>
  <section class="wallet">
    <section class="wallet__balance">
      <article class="wallet__balance__total">
        <p>Total balance</p>
        <h2>$ 7,610.00</h2>
        <p>BTC 0.0003213</p>
        <article class="wallet__balance__total__actions">
          <div
            v-for="e in balanceActions"
            :key="e.name"
            @click="$router.push({ path: `/wallet/${e.route}` })"
          >
            <img :src="`src/assets/icons/${e.icon}.svg`" alt="" />
            <p>{{ e.name }}</p>
          </div>
        </article>
      </article>
      <article class="wallet__balance__cards">
        <article class="wallet__balance__cards__container">
          <CardCoin v-for="x in 5" :key="x"></CardCoin>
        </article>
      </article>
    </section>
    <section class="wallet__table">
      <article class="wallet__table__title">
        <h2>Movimientos</h2>
        <InputSearch placeholder="Buscar"></InputSearch>
      </article>
      <article class="wallet__table__container">
        <article class="wallet__table__table">
          <article class="wallet__table__table-header">
            <p>ID</p>
            <p>NAME</p>
            <p>TIME</p>
            <p>FROM</p>
            <p>TO</p>
            <p>QUANTITY</p>
          </article>
          <article
            class="wallet__table__table-row"
            v-for="element in 5"
            :key="element"
          >
            <p>0</p>
            <div>
              <img src="/src/assets/icons/Bitcoin.png" alt="" />
              <div>
                <h4>Bitcoin</h4>
                <p>0xbnas8sas0fasdj1a5slkasd4k1</p>
              </div>
            </div>
            <p>06/07/2022 18:21</p>
            <p>From</p>
            <p>To</p>
            <p class="row-status succes">$0.00</p>
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
import CardCoin from "../../components/CardCoin.vue";
import InputSearch from "../../components/form/InputSearch.vue";
import { ref } from "@vue/reactivity";

export default {
  components: { CardCoin, InputSearch },
  setup() {
    const currentPage = ref(1);
    const rows = ref(50);
    const perPage = ref(5);
    const balanceActions = [
      { icon: "Money-Withdraw", name: "Retirar", route: "withdraw" },
      { icon: "Money-Deposit", name: "Depositar", route: "deposit" },
      { icon: "create", name: "Create", route: "new" },
      { icon: "trash-delete", name: "Delete" },
    ];
    return {
      balanceActions,
      currentPage,
      rows,
      perPage,
    };
  },
};
</script>

<style lang="scss">
.wallet {
  margin-top: 30px;
  padding: 40px;
  border-radius: 8px;
  background: white;
  &__balance {
    padding: 25px;
    background: #f6f8fa;
    display: grid;
    grid-template-columns: 30% 1fr;
    grid-gap: 40px;
    border-radius: 24px;
    @media (max-width: 700px) {
      grid-template-columns: 1fr;
    }
    &__total {
      margin-bottom: 20px;
      text-align: center;
      p {
        font-weight: 300;
        color: #647188;
        &:last-of-type {
          font-size: 12px;
        }
      }
      h2 {
        color: #000000;
        font-size: 40px;
      }
      &__actions {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        @media (max-width: 700px) {
          flex-wrap: wrap;
        }
        div {
          width: 65px;
          height: 65px;
          border-radius: 8px;
          padding: 8px 16px;
          background: white;
          cursor: pointer;
          @media (max-width: 700px) {
            margin-bottom: 15px;
          }
          img {
            width: 24px;
          }
        }
      }
    }
    &__cards {
      overflow: hidden;
      &__container {
        display: flex;
        overflow-x: scroll;
        padding-bottom: 20px;
        @include scroll;
        .walletCard {
          margin-right: 20px;
        }
      }
    }
  }
  &__table {
    &__container {
      overflow: hidden;
    }
    margin-top: 20px;
    &__title {
      display: flex;
      justify-content: space-between;
      @media (max-width: 700px) {
        flex-wrap: wrap;
      }
      input {
        max-width: 300px;
        @media (max-width: 700px) {
          margin-top: 15px;
        }
      }
    }
    @include Table(5);
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
</style>