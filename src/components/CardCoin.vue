<template>
  <article
    class="walletCard"
    :id="wallet.currency"
    :class="isActive == wallet.id ? '' : 'inactive'"
  >
    <h2>{{ wallet.name }}</h2>
    <p>{{ wallet.asset.name }} ({{ wallet.asset.currency }})</p>
    <h3 class="address">{{ wallet.address }}</h3>
    <div class="row">
      <div class="col-6 walletCard-balance">
        <p>USDT: ${{ coinFormat(wallet.balance_usd) }}</p>
        <p>{{ wallet.asset.currency }}: ${{ coinFormat(wallet.balance) }}</p>
      </div>
      <div class="col-6 text-right">
        <img style="max-width: 50px" :src="wallet.asset.icon" alt="" />
      </div>
    </div>
  </article>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    wallet: Object,
    isActive: {
      default: null,
    },
  },
  setup() {
    return {};
  },
  methods: {
    ...mapActions("wallet", ["getBalance"]),
  },
  watch: {
    isActive: function (val) {
      if (val == this.wallet.id) {
        this.getBalance({
          address: this.wallet.address,
          currency: this.wallet.currency,
        }).then((response) => {
          this.wallet.balance = response[0];
          this.wallet.balance_usd = response[1];
          this.bsc = response[2];
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.inactive {
  opacity: 0.5;
}
.text-right {
  text-align: right;
}
.address {
  width: 230px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.walletCard:hover {
  cursor: pointer;
}
.walletCard {
  min-width: 250px;
  padding: 25px;
  border-radius: 25px;
  color: white;
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
#usdt {
  background: url("/images/wallets/usdt.png") !important;
  background-size: cover !important;
  background-repeat: no-repeat;
}

#bsc,
#bnb {
  background: url("/images/wallets/bsc.png") !important;
  background-size: cover !important;
  background-repeat: no-repeat;
}
#btc {
  background: url("/images/wallets/bitcoin.png") !important;
  background-size: cover !important;
  background-repeat: no-repeat;
}
#kxp {
  background: url("/images/wallets/kxp.png") !important;
  background-size: cover !important;
  background-repeat: no-repeat;
}
</style>
