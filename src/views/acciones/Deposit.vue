<template>
  <GoBack class="mb-0"></GoBack>
  <section class="newWallet">
    <h2 class="titleh3">Wallet</h2>
    <section class="newWallet__container">
      <div class="payment">
        <div class="payment__num"><p>1</p></div>
        <h4 class="titleh4">Seleccionar Wallet</h4>
      </div>
      <InputSearch placeholder="Buscar método de pago" />
      <article class="newWallet__container__select">
        <article class="newWallet__container__select__contain">
          <SelectCoinToken
            :coins="coins"
            :defaultCoin="coin"
            @setCoin="selectAsset"
          ></SelectCoinToken>
        </article>
        <article class="newWallet__container__balance__contain__actions">
          <BaseButton label="Cancel" class="transparent"></BaseButton>
          <BaseButton label="Confirm" @click="onSubmit"> </BaseButton>
        </article>
      </article>
    </section>

    <section class="newWallet__container">
      <div class="payment">
        <div class="payment__num"><p>2</p></div>
        <h4 class="titleh4">Especificar la suma</h4>
      </div>

      <article class="balance">
        <div class="balance__box">
          <p class="balance__title">Wallet Balance</p>
          <p class="balance__price">$0.00</p>
        </div>
        <div class="label">
          <label class="label__text" for="wallet">
            <span class="label__span">*</span> Nombre de la wallet</label
          >
          <BaseInput id="wallet" label="Nombre" />
        </div>
        <article class="newWallet__container__balance__contain__actions">
          <BaseButton label="Cancel" class="transparent"></BaseButton>
          <BaseButton label="Crear Wallet" @click="onSubmit"> </BaseButton>
        </article>
      </article>
    </section>
  </section>

  <PopUpSuccess
    title="Wallet creada con éxito"
    img="check"
    :showPopUp="showPopUp"
  ></PopUpSuccess>
</template>

<script>
import GoBack from "@/components/form/GoBack.vue";
import BaseInput from "@/components/form/BaseInput.vue";
import BaseButton from "@/components/form/BaseButton.vue";
import SelectCoinToken from "@/components/base/SelectCoinToken.vue";
import PopUpSuccess from "@/components/base/PopUpSuccess.vue";
import InputSearch from "@/components/form/InputSearch.vue";
import Copy from "@/components/base/Copy.vue";

import { mapActions, mapState } from "vuex";
export default {
  components: {
    GoBack,
    BaseInput,
    BaseButton,
    SelectCoinToken,
    PopUpSuccess,
    InputSearch,
    Copy,
  },
  data() {
    return {
      assets: [
        {
          id: "usdt",
          icon: "https://i.ibb.co/N9GSBx7/usdt.png",
          name: "USDT (TRC20)",
        },
      ],
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
    };
  },
  created() {
    this.getCoins();
  },
  methods: {
    ...mapActions("cart", ["storeCart", "getCoins"]),
    onSubmit() {
      this.storeCart(this.form).then((response) => {
        this.$router.push({ name: "Cart", params: { id: response } });
      });
    },
    selectAsset(asset) {
      this.form.payment_method = asset;
    },
  },
  computed: {
    ...mapState("cart", ["coins"]),
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

.balance {
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 24px;
  background: #ffffff;
  border: 1px solid #ececee;
  border-radius: 16px;
  &__box {
    padding: 16px;
    background: #f6f8fa;
    border-radius: 16px;
  }
  &__title {
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    text-align: left;
    color: $secondary-color;
  }
  &__price {
    font-size: 22px;
    font-weight: 400;
    line-height: 32px;
    text-align: left;
    color: #040e2c;
  }
}
</style>