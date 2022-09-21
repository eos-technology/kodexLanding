<template>
  <section class="selectCoin">
    <div
      class="selectCoin__coin"
      v-for="coin in coins"
      :key="coin.name"
      @click="selectCoin(coin.name)"
      :class="coinSelected == coin.name ? 'active' : ''"
    >
      <img src="/src/assets/icons/Crypto.svg" alt="" />
      <p>{{ coin.name }}</p>
    </div>
  </section>
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
  props: {
    coins: {
      typeof: Array,
      default: [
        { name: "btc" },
        { name: "usdt" },
        { name: "trx" },
        { name: "USDT" },
      ],
    },
    defaultCoin: {
      typeof : String
    }
  },
  setup(props, {emit}) {
    const coinSelected = ref("btc");
    const selectCoin = (coin) => {

      coinSelected.value = coin;
      emit("setCoin", coinSelected.value)
    };
    return {
      coinSelected,
      selectCoin,
    };
  },
};
</script>

<style lang="scss" scoped>
.selectCoin{
  display: flex;
  flex-wrap: wrap;
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
</style>