<template>
  <section class="selectCoin">
    <div
      class="selectCoin__coin"
      v-for="asset in coins"
      :key="asset.id"
      @click="selectCoin(asset.id)"
      :class="coinSelected == asset.id ? 'active' : ''"
    >
      <img style="max-width:50px" :src="asset.icon" alt="" />
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
    background: linear-gradient(0deg, #0F215C, #0F215C), #040E2C;
    color: white;
  }
}
}
</style>