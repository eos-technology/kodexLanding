<template>
  <section class="selectCoin">
    <div
      class="selectCoin__coin"
      v-for="asset in coins"
      :key="asset.token"
      @click="selectCoin(asset.token)"
      :class="coinSelected == asset.token ? 'active' : ''"
    >
      <img style="max-width:50px" :src="asset.logo" alt="" />
      <p>{{ asset.name }}</p>
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  @media (max-width:1060px) {
    grid-template-columns: repeat(3, 1fr);
    
  }
  @media (max-width:900px) {
    grid-template-columns: repeat(2, 1fr);
    
  }
  @media (max-width:750px) {
    grid-template-columns: 1fr;
    
  }
&__coin {
  text-align: center;
  border-radius: 8px;
  background: #f6f8fa;
  padding: 16px 35px;
  cursor: pointer;
  img {
    margin-bottom: 10px;
  }
  p {
    text-align: center;
    font-size: 16px;
  }
  &.active {
    background: linear-gradient(0deg, #0F215C, #0F215C), #040E2C;
    color: white;
  }
}
}
</style>