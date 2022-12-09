<template>
  <go-back class="m-0" />
  <section class="withdraw">
    <section class="withdraw__container">
      <h3 class="titleh3">{{ $t("wallet.draw.draw") }}</h3>
      <article class="withdraw__container__select">
        <img src="@/assets/icons/btcWhite.svg" alt="" />
        <div>
          <p>Bitcoin Wallet Balance</p>
          <p>$0.00</p>
        </div>
      </article>
      <article class="withdraw__container__balance">
        <article class="withdraw__container__balance__contain">
          <label for=""><span>*</span> {{ $t("wallet.draw.amount") }}</label>
          <BaseInput v-model="form.quantity" placeholder="$0.0"></BaseInput>
          <p>{{ $t("wallet.draw.tranfer") }}</p>
          <label for=""
            ><span>*</span> {{ $t("wallet.draw.destination") }}</label
          >
          <BaseInput
            v-model="form.to"
            :placeholder="$t('wallet.draw.wallet')"
          ></BaseInput>
          <article class="withdraw__container__balance__contain__actions mt-4">
            <BaseButton
              :label="`${$t('cancel')}`"
              class="transparent"
            ></BaseButton>
            <BaseButton
              :disabled="
                form.wallet_id == null ||
                form.quantity == null ||
                form.to == null
              "
              :label="`${$t('send')}`"
              @click="sendData"
            ></BaseButton>
          </article>
        </article>
      </article>
    </section>
  </section>
  <PopUpSuccess
    :title="$t('wallet.draw.popup')"
    img="check"
    :showPopUp="showPopUp"
  ></PopUpSuccess>
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
    gap: 24px;
    &__select {
      display: flex;
      gap: 16px;
      background: #f6f8fa;
      border-radius: 8px;
      padding: 16px;
      h4 {
        color: #647188;
        font-size: 16px;
        font-weight: 300;
        margin-bottom: 20px;
      }
      &__contain {
        display: flex;
      }
    }
    &__balance {
      h4 {
        color: #647188;
        font-size: 16px;
        font-weight: 300;
        margin-bottom: 10px;
      }
      h3 {
        font-size: 18px;
        color: black;
        margin-bottom: 20px;
      }
      &__contain {
        label {
          display: block;
          font-size: 16px;
          font-weight: 400;
          margin-bottom: 10px;
          color: #000;
          span {
            color: #ff4e78;
          }
        }
        p {
          font-size: 14px;
          color: #647188;
          margin-bottom: 20px;
        }
        &__actions {
          display: flex;
          justify-content: end;
          button {
            width: auto;
            &:first-of-type {
              margin-right: 20px;
            }
          }
        }
      }
    }
  }
}
</style>