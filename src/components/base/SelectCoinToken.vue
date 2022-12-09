<template>
  <section class="selectCoin">
    <div
      class="selectCoin__coin"
      v-for="asset in coins"
      :key="asset.token"
      @click="selectCoin(asset.token)"
      :class="coinSelected == asset.token ? 'active' : ''"
    >
      <img style="max-width: 50px" :src="asset.logo" alt="" />
      <div class="coin">
        <p class="coin__title">{{ asset.name }}</p>
        <p class="coin__text text-start">NAME</p>
      </div>
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
      typeof: String,
    },
  },
  setup(props, { emit }) {
    const coinSelected = ref("btc");
    const selectCoin = (coin) => {
      coinSelected.value = coin;
      emit("setCoin", coinSelected.value);
    };
    return {
      coinSelected,
      selectCoin,
    };
  },
};
</script>

<style lang="scss" scoped>
.selectCoin {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  @media (max-width: 1060px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
  &__coin {
    display: flex;
    align-items: center;
    gap: 16px;
    background: #f6f8fa;
    padding: 16px;
    border: 1px solid #ececee;
    border-radius: 16px;
    cursor: pointer;
    p {
      text-align: center;
      font-size: 16px;
    }
    &.active {
      background: linear-gradient(0deg, #0f215c, #0f215c), #040e2c;
      color: white;
    }
  }
}

.coin{
  &__title{
font-size: 14px;
font-weight: 400;
line-height: 24px;
text-align: left;
  }
  &__text{
font-size: 12px;
font-weight: 300;
line-height: 16px;
letter-spacing: 0px;
text-align: left;
color: $secondary-color;
  }
}
</style>