<template>
  <div>
    <Header />
      <GoBack class="mb-0"></GoBack>
      <div class="accordion" role="tablist" v-if="uniqueAssets.length > 0">
        <h2 class="titleh3">{{ $t('wallet.wallet.create') }}</h2>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-1
              ><div class="payment">
                <div class="payment__num"><p>1</p></div>
                <h4 class="titleh4">{{ $t('wallet.new.select') }}</h4>
              </div></b-button
            >
          </b-card-header>
          <b-collapse
            id="accordion-1"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <section class="newWallet__container">
          <article class="newWallet__container__select">
            <article class="newWallet__container__select__contain">
              <SelectCoinToken
                :coins="uniqueAssets"
                :defaultCoin="coin"
                @setCoin="selectAsset"
              ></SelectCoinToken>
            </article>
            <article class="newWallet__container__balance__contain__actions">
              <BaseButton
                :label="$t('token.purchase.continue')"
                @click="walletName = true"
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
            <b-button block @click="walletName = !walletName" variant="info"
              ><div class="payment">
            <div class="payment__num"><p>2</p></div>
            <h4 class="titleh4">{{ $t('wallet.new.wallet') }}</h4>
          </div></b-button
            >
          </b-card-header>
          <b-collapse v-model="walletName" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <article class="balance">
            <div class="balance__box">
              <p class="balance__title">{{ $t('wallet.new.balance') }}</p>
              <p class="balance__price">$0.00</p>
            </div>
            <div class="label">
              <label class="label__text" for="wallet">
                <span class="label__span">*</span> {{ $t('wallet.new.name') }}</label
              >
              <BaseInput id="wallet" v-model="form.name" label="KXP" />
            </div>
            <article class="newWallet__container__balance__contain__actions">
              <BaseButton :label="$t('token.purchase.cancel')" class="transparent"></BaseButton>
              <BaseButton
                :label="$t('wallet.wallet.create')"
                @click="onSubmit"
              >
              </BaseButton>
            </article>
          </article>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
      <NoWallet v-else />

      <PopUpSuccess
        title="Wallet creada con ??xito"
        img="check"
        :showPopUp="showPopUp"
      ></PopUpSuccess>
  </div>
</template>

<script>
import GoBack from "@/components/form/GoBack.vue";
import BaseInput from "@/components/form/BaseInput.vue";
import BaseButton from "@/components/form/BaseButton.vue";
import SelectCoinToken from "@/components/base/SelectCoinToken.vue";
import PopUpSuccess from "@/components/base/PopUpSuccess.vue";
import InputSearch from "@/components/form/InputSearch.vue";
import Copy from "@/components/base/Copy.vue";
import NoWallet from './NoWallet.vue'

import { mapActions, mapGetters, mapState } from "vuex";
export default {
  components: {
    GoBack,
    BaseInput,
    BaseButton,
    SelectCoinToken,
    PopUpSuccess,
    InputSearch,
    Copy,
    NoWallet
  },
  data() {
    return {
      form: {
        currency_id: null,
        name: null
      },
      showPopUp: false,
      walletName: false
    };
  },
  created() {
    this.getAssets();
  },
  methods: {
    ...mapActions("wallet", ["getAssets", "storeWallet"]),
    onSubmit() {
      this.storeWallet(this.form).then((response) => {
        this.$router.push({ name: "Wallet" });
      });
    },
    selectAsset(asset) {

      let token = this.uniqueAssets.findIndex(el => el.token == asset)
      this.form.currency_id = this.uniqueAssets[token].id;
    },
  },
  computed: {
    ...mapState("cart", ["coins"]),
    ...mapGetters('wallet', ['uniqueAssets'])
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

.accordion{
  padding: 24px;
  background: #fff;
  border: 1px solid #ECECEE;
border-radius: 24px;
}
</style>