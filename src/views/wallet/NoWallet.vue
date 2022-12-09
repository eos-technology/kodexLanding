<template>
  <section class="withdraw">
    <section class="withdraw__container">
      <img
        style="width: 212px; margin: 0 auto"
        src="@/assets/icons/noWallet.svg"
        alt=""
      />
      <div>
        <h3 class="titleh3">{{ $t('wallet.noCreate.noCreate') }}</h3>
        <p class="pp">{{ $t('wallet.noCreate.noText') }}</p>
      </div>

      <BaseButton @click="$router.push({ path: '/wallet' })" style="width:fit-content" :label="$t('wallet.noCreate.backToStart')" />
    </section>
  </section>
</template>

<script>
import GoBack from "@/components/form/GoBack.vue";
import BaseInput from "@/components/form/BaseInput.vue";
import BaseButton from "@/components/form/BaseButton.vue";
import SelectCoin from "@/components/base/SelectCoin.vue";
import { ref } from "@vue/reactivity";
import PopUpSuccess from "@/components/base/PopUpSuccess.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { BaseInput, BaseButton, SelectCoin, PopUpSuccess, GoBack },
  setup() {
    const coins = [
      { name: "btc" },
      { name: "usdt" },
      { name: "trx" },
      { name: "USDT" },
    ];
    const showPopUp = ref(false);
    const coin = ref("coin");
    const sendData = () => {
      showPopUp.value = true;
    };
    return {
      coins,
      coin,
      showPopUp,
      sendData,
    };
  },
  data() {
    return {
      form: {
        wallet_id: null,
        quantity: null,
        to: null,
      },
    };
  },
  created() {
    this.getWallets();
  },
  methods: {
    ...mapActions("wallet", ["getWallets", "sendTransaction"]),
    selectWallet(asset) {
      this.form.wallet_id = asset;
    },
    onsubmit() {
      this.sendTransaction(this.form).then(() => {
        openNotification("Withdraw success");
        this.$router.push({ name: "Wallet" });
      });
    },
  },
  computed: {
    ...mapGetters("wallet", ["withdrawals"]),
  },
};
</script>

<style lang="scss" scoped>
.withdraw {
  padding: 24px;
  border-radius: 24px;
  background: white;
  width: 65%;
  margin: 0 auto;
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
}
</style>