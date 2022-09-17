<template>
  <section class="withdraw">
    <BtnBack></BtnBack>
    <section class="withdraw__container">
      <h3>Retirar dinero</h3>
      <article class="withdraw__container__select">
        <h4>Seleccione Wallet</h4>
        <article class="withdraw__container__select__contain">
          <div
            class="withdraw__container__select__contain__coin"
            v-for="coin in coins"
            :key="coin.name"
            @click="selectCoin(coin.name)"
            :class="coinSelected == coin.name ? 'active' : ''"
          >
            <img src="/src/assets/icons/Crypto.svg" alt="" />
            <p>{{ coin.name }}</p>
          </div>
        </article>
      </article>
    </section>
  </section>
</template>

<script>
import BtnBack from "@/components/form/BtnBack.vue";
import { ref } from '@vue/reactivity';
export default {
  components: { BtnBack },
  setup() {
    const coins = [{ name: "btc" }, { name: "usdt" }, { name: "trx" }, { name: 'USDT' }];
    const coinSelected =  ref("btc")
    const selectCoin = (coin) => {
      coinSelected.value = coin;
    };
    return {
      coins,
      coinSelected,
      selectCoin,
    };
  },
};
</script>

<style lang="scss" scoped>
.withdraw {
  margin-top: 30px;
  padding: 40px;
  border-radius: 8px;
  background: white;
  &__container {
    max-width: 750px;
    margin: 0 auto;
    h3 {
      margin-bottom: 20px;
    }
    &__select {
      padding: 25px;
      border-radius: 8px;
      border: 1px solid #ececee;
      h4 {
        color: #647188;
        font-size: 16px;
        font-weight: 300;
        margin-bottom: 20px;
      }
      &__contain {
        display: flex;
        &__coin {
          border-radius: 8px;
          background: #f6f8fa;
          text-align: center;
          padding: 16px 35px;
          margin-right: 20px;
          cursor: pointer;
          img {
            margin-bottom: 10px;
          }
          p {
            font-size: 16px;
          }
          &.active {
            background: #000000;
            color: white;
          }
        }
      }
    }
  }
}
</style>