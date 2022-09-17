<template>
  <article class="walletCard">
    <h2>Juan Lizcano</h2>
    <p>Eleven (Elv)</p>
    <h3>**** **** **** 1923</h3>
    <div class="walletCard-balance">
      <p>USDT: $1,000.00</p>
      <p>USD: $1,000.00</p>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    card: Object,
  },
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.walletCard {
  min-width: 290px;
  padding: 25px;
  border-radius: 25px;
  color: white;
  background-image: url("@/assets/images/WalletFull.png");
  background-position: center;
  background-size: cover;
  h2 {
    font-size: 20px;
    margin-bottom: 2px;
  }
  p {
    font-weight: 300;
    font-size: 16px;
  }
  h3 {
    font-size: 26px;
    margin-bottom: 15px;
  }
  &-balance {
    p {
      margin-bottom: 0;
    }
  }
}
</style>
