<template>
  <Header />
  <GoBack class="mb-0"></GoBack>
  <div class="accordion" role="tablist">
    <h2 class="titleh3">{{ $t('token.purchase.buyToken') }} (KXP)</h2>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block @click="visibleSelect = !visibleSelect"
          ><div class="payment">
            <div class="payment__num"><p>1</p></div>
            <h4 class="titleh4">{{ $t('token.purchase.paymentMethod') }}</h4>
          </div></b-button
        >
      </b-card-header>
      <b-collapse
        id="accordion-1"
        v-model="visibleSelect"
        accordion="my-accordion"
        role="tabpanel"
      >
        <b-card-body>
          <section class="newWallet__container">
            <article class="newWallet__container__select">
              <article class="newWallet__container__select__contain">
                <SelectCoinToken
                  :coins="coins"
                  :defaultCoin="coin"
                  @setCoin="selectAsset"
                ></SelectCoinToken>
              </article>
              <article class="newWallet__container__balance__contain__actions">
                <BaseButton :label="$t('token.purchase.cancel')" class="transparent"></BaseButton>
                <BaseButton
                  :disabled="form.payment_method == null && cart != null"
                  :label="$t('token.purchase.continue')"
                  @click="onSubmit()"
                >
                </BaseButton>
              </article>
            </article>
          </section>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button
          block
          @click="visiblePay = !visiblePay"
          variant="info"
          :disabled="cart == null"
          ><div class="payment">
            <div class="payment__num"><p>2</p></div>
            <h4 class="titleh4">{{ $t('token.purchase.makePay') }}</h4>
          </div></b-button
        >
      </b-card-header>
      <b-collapse v-model="visiblePay" accordion="my-accordion" role="tabpanel">
        <b-card-body v-if="cart != null">
          <section class="qr">
            <section class="d-flex gap-4">
              <qrcode-vue :value="cart.wallet" size="200" level="M" />

              <section class="qr__info w-100">
                <article class="qr__header d-flex flex-column gap-2">
                  <!-- <div class="d-flex justify-content-between">
                    <p class="qr__header--text">{{$t('cart.status')}}</p>
                    <div class="d-flex gap-2 align-items-center">
                      <div
                        style="
                          width: 8px;
                          height: 8px;
                          background: #ffab1b;
                          border-radius: 50%;
                        "
                        class="qr__info__box"
                      ></div>
                      <p class="qr__header--textB">Waiting for money</p>
                    </div>
                  </div> -->

                  <!-- <div class="d-flex justify-content-between">
                <p class="qr__header--text">{{$t('cart.count')}}</p>
                <p class="qr__header--textB">00:00</p>
              </div> -->

                  <p class="qr__header--text">
                    {{$t('cart.verifi')}}
                  </p>
                </article>

                <article class="qr__main">
                  <div class="d-flex gap-3">
                    <img src="@/assets/icons/tetherWhite.svg" alt="" />
                    <div>
                      <p class="qr__main--text">USD</p>
                      <p class="qr__main--price">$3.00</p>
                    </div>
                  </div>

                  <img src="@/assets/icons/arrow.svg" alt="" />

                  <div class="d-flex gap-3">
                    <div>
                      <p class="qr__main--text text-end">KXP</p>
                      <p class="qr__main--price text-end">$1.00</p>
                    </div>
                    <img src="@/assets/icons/kodexWhite.svg" alt="" />
                  </div>
                </article>

                <article class="qr__footer">
                  <p class="qr__footer--title">{{ $t('cart.address') }}</p>
                  <Copy v-if="cart" :text="cart.wallet"></Copy>
                  <p class="sp text-start">
                   {{ $t('cart.trans') }}
                  </p>
                </article>
                <section class="text-center">
                  {{ message }}
                </section>
              </section>
            </section>

            <article class="newWallet__container__balance__contain__actions">
              <BaseButton
                :label="$t('token.purchase.cancel')"
                :disabled="cart == null"
                class="transparent"
                @click="cancelPayment()"
              ></BaseButton>
              <BaseButton
                :disabled="cart == null"
                :label="$t('token.purchase.confirmPay')"
                @click="confirmPayment()"
              >
              </BaseButton>
            </article>
          </section>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>

  <PopUpSuccess
    title="Wallet creada con éxito"
    img="check"
    :showPopUp="showPopUp"
  ></PopUpSuccess>
</template>

<script>
import QrcodeVue from "qrcode.vue";
import Header from "@/components/Header.vue";
import GoBack from "@/components/form/GoBack.vue";
import BaseButton from "@/components/form/BaseButton.vue";
import SelectCoinToken from "@/components/base/SelectCoinToken.vue";
import PopUpSuccess from "@/components/base/PopUpSuccess.vue";
import InputSearch from "@/components/form/InputSearch.vue";
import Copy from "@/components/base/Copy.vue";

import { mapActions, mapState } from "vuex";
export default {
  components: {
    QrcodeVue,
    GoBack,
    BaseButton,
    SelectCoinToken,
    PopUpSuccess,
    Header,
    InputSearch,
    Copy,
  },
  data() {
    return {
      visiblePay: false,
      visibleSelect: true,
      form: {
        title: "Token Purchase",
        price: null,
        model: "Tokens",
        model_id: null,
        payment_method: null,
        currency_id: null,
        name: null,
      },
      showPopUp: false,
      loading: false,
      message: null
    };
  },
  created() {
    this.getCoins();
    if(this.cart != null) {
      this.visibleSelect = false
      this.visiblePay = true
    }
  },
  methods: {
    ...mapActions("cart", ["storeCart", "getCoins", 'getCart', 'checkPayment', 'destroyCart']),
    onSubmit() {
      this.storeCart(this.form).then((response) => {
        this.getDataPayment(response)
      });
    },
    selectAsset(asset) {
      this.form.payment_method = asset;
    },
    getDataPayment(id) {
      this.loading = true;
      this.getCart(id).then(() => {
        this.loading = false;
        this.visibleSelect = false
        this.visiblePay = true
      });
    },
    cancelPayment() {
      this.loading = true;
      this.destroyCart(this.cart.id).then(() => {
        openNotification("Compra cancelada");
        this.loading = false;
        this.$router.push({ name: "Tokens" });
      });
    },
    confirmPayment() {
      this.loading = true;
      this.checkPayment(this.cart.id).then((response) => {
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
    ...mapState("cart", ["coins", 'cart']),
  },
};
</script>

<style lang="scss" scoped>
.newWallet {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  border: 1px solid #ececee;
  border-radius: 24px;
  background: white;
  @media (max-width: 900px) {
    padding: 20px;
  }
  &__container {
    display: flex;
    flex-direction: column;
    padding: 24px;
    gap: 24px;
    background: linear-gradient(0deg, #f5fafd, #f5fafd),
      linear-gradient(0deg, rgba(0, 123, 209, 0.04), rgba(0, 123, 209, 0.04)),
      #ffffff;
    border: 1px solid #ececee;
    border-radius: 16px;
    h3 {
      margin-bottom: 20px;
    }
    &__select {
      &__contain {
        display: grid;
      }
    }
    &__balance {
      padding: 25px;
      border-radius: 8px;
      border: 1px solid #ececee;
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

.payment {
  display: flex;
  align-items: center;
  gap: 16px;
  &__num {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px;
    gap: 10px;
    width: 40px;
    height: 40px;
    background: linear-gradient(180deg, #0d1c4e 0%, #000406 100%);
    border: 1px solid #ececee;
    border-radius: 100px;
    p {
      color: #fff;
      font-size: 20px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0px;
      text-align: center;
    }
  }
}

.qr {
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 24px;
  background: #ffffff;
  border: 1px solid #ececee;
  border-radius: 16px;
  &__header {
    &--text {
      font-size: 16px;
      font-weight: 300;
      line-height: 24px;
      text-align: left;
      color: $secondary-color;
    }
    &--textB {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      color: #040e2c;
    }
  }
  &__info {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  &__main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    gap: 24px;
    background: #f6f8fa;
    border: 1px solid #ececee;
    border-radius: 16px;
    &--text {
      font-size: 14px;
      font-weight: 300;
      line-height: 24px;
      color: $secondary-color;
    }
    &--price {
      font-size: 18px;
      font-weight: 400;
      line-height: 24px;
      color: #040e2c;
    }
  }
  &__footer {
    &--title {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0px;
      text-align: left;
      color: #040e2c;
    }
  }
}

.accordion {
  padding: 24px;
  background: #fff;
  border: 1px solid #ececee;
  border-radius: 24px;
}
</style>
