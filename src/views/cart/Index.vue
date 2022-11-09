<template>
  <section class="newWallet">
    <GoBack />
    <section class="newWallet__container">
      <h3>Make payment</h3>
      <section class="newWallet__container__pay" v-if="cart">
        <article class="newWallet__container__pay-qr">
          <qrcode-vue :value="cart.wallet" size="200" level="M" />
        </article>
        <article class="newWallet__container__pay-data">
          <div>
            <p>Status</p>
            <p class="warning">Waiting for money</p>
          </div>
          <div>
            <p>Countdown</p>
            <p>00:00</p>
          </div>
          <div>
            <p>Verificaremos el pago de manera automatica una vez realizado la transacción.</p>
            <p></p>
          </div>
        </article>
      </section>
      <section class="newWallet__container__change" v-if="cart">
        <section class="">
          <div class="exchangeCoins">
            <div class="exchangeCoins__one">
              <img src="/assets/images/kodex.png" />
              <div style="margin-left: 10px">
                <div class="coin-name">KXP</div>
                <div class="coin-price">1.00</div>
              </div>
            </div>
            <div class="exchangeCoins__arrow">
              <img src="/assets/images/value.png" />
            </div>
            <div class="exchangeCoins__to">
              <div style="margin-right: 10px">
                <div class="coin-name">USDT</div>
                <div class="coin-price">$0.5</div>
              </div>
              <img src="/assets/images/usdt.png" />
            </div>
          </div>
          <h5>Dirección de wallet</h5>
          <Copy v-if="cart" :text="cart.wallet"></Copy>
          <p>
            The transaction has been created successfully, complete the
            payment to send the tokens between 1 to 24 hours
          </p>
        </section>
        <section class="text-center">
          {{ message }}
        </section>
        <section class="newWallet__container__change-actions">
          <BaseButton @click="cancelPayment" label="Cancel" class="transparent"></BaseButton>
          <BaseButton label="Verify payment" loadingTx="Verifying payment" @click="confirmPayment" />
        </section>
      </section>
    </section>
  </section>
</template>


<script>
import QrcodeVue from "qrcode.vue";
import GoBack from "@/components/form/GoBack.vue";
import BaseInput from "@/components/form/BaseInput.vue";
import BaseButton from "@/components/form/BaseButton.vue";
import SelectCoin from "@/components/base/SelectCoin.vue";
import Copy from "@/components/base/Copy.vue";

import { mapActions, mapState } from "vuex";
export default {
  props: ["id"],
  components: {
    QrcodeVue,
    GoBack,
    BaseInput,
    BaseButton,
    SelectCoin,
    Copy,
  },
  data() {
    return {
      loading: false,
      message: null,
      polling: null,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    ...mapActions("auth", ["getUserInfo"]),
    ...mapActions("cart", ["getCart", "checkPayment", "destroyCart"]),
    getData() {
      this.loading = true;
      this.getCart(this.id).then(() => {
        this.loading = false;
      });
    },
    cancelPayment() {
      this.loading = true;
      this.destroyCart(this.id).then(() => {
        openNotification("Compra cancelada");
        this.loading = false;
        this.$router.push({ name: "Tokens" });
      });
    },
    confirmPayment() {
      this.loading = true;
      this.checkPayment(this.id).then((response) => {
        this.message = response;
        this.loading = false;
        if (response == "success") {
          this.getUserInfo();
          openNotification(
            "Purchase made successfully",
            "The tokens will be sent to your wallet as soon as possible"
          );
          this.getData();
          this.$router.push({ name: "Tokens" });
        }
      });
    },
  },
  computed: {
    ...mapState("cart", ["cart"]),
  },
};
</script>

<style lang="scss" scoped>
.coin-name {
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #647188;
}

.coin-price {
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: right;
}

.text-right {
  text-align: right;
}

.newWallet {
  margin-top: 30px;
  padding: 40px;
  border-radius: 8px;
  background: white;

  &__container {
    max-width: 750px;
    margin: 0 auto;
    
    h3 {
      margin-bottom: 20px;
      color:#132D7C;
    }

    &__select {
      margin-bottom: 20px;
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
        align-items: center;

        @media (max-width: 1200px) {
          flex-direction: column;
        }

        &-qr {
          margin-right: 20px;
          padding: 15px;
          border-radius: 8px;
          background: #f6f8fa;

          img {
            width: 100%;
          }
        }

        &-copy {
          width: 100%;

          h4 {
            font-weight: 400;
            font-size: 16px;
            color: #0f215c;
          }

          p {
            margin-top: 15px;
            font-size: 12px;
            color: #647188;
          }

          @media (max-width: 1200px) {}
        }
      }
    }

    &__pay {
      display: flex;
      padding: 25px;
      border-radius: 8px;
      border: 1px solid #ececee;

      &-qr {
        margin-right: 20px;
        max-width: 120px;

        canvas {
          width: 100% !important;
          height: auto !important;
        }
      }

      &-data {
        >div {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
          color: #647188;

          p {
            &.warning {
              position: relative;

              &::before {
                content: '';
                position: absolute;
                width: 8px;
                height: 8px;
                background-color: #FFAB1B;
                border-radius: 100%;
                left: -12px;
                top: 50%;
                transform: translate(0%, -50%);
              }
            }

            &:last-of-type {
              color: #040E2C;
              font-weight: 400;
            }
          }
        }
      }
    }

    &__change {
      padding: 25px;
      border-radius: 8px;
      border: 1px solid #ececee;
      margin-top: 20px;
      h5{
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 10px;
        color: #000
      }
      p{
        font-size: 12px;
        color: #647188;
      }
      &-actions{
        display: flex;
        justify-content: flex-end;
        button{
          width: auto;
          margin-left: 15px;
        }
      }
    }
  }

  .exchangeCoins {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    &__one {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        margin-right: 10px;
      }
    }

    &__arrow {
      padding: 0;
      padding-top: 0 !important;
      margin: 20px;
    }

    &__to {
      display: flex;
      justify-content: center;
      direction: rtl;
      align-items: center;

      img {
        margin-right: 10px;
      }
    }
  }
}
</style>