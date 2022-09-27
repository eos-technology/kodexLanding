<template>
  <section class="newWallet">
    <BtnBack></BtnBack>
    <section class="newWallet__container">
      <h3>Payment method</h3>
      <article class="newWallet__container__select">
        <h4>Select payment method</h4>
        <article class="newWallet__container__select__contain">
          <SelectCoin :coins="assets" :defaultCoin="coin" @setCoin="selectAsset"></SelectCoin>
        </article>
        <article class="newWallet__container__balance__contain__actions">
              <BaseButton label="Cancel" class="transparent"></BaseButton>
              <BaseButton :disabled="form.payment_method == null" label="Continue to payment"  @click="onSubmit"> </BaseButton>
          </article>
      </article>
    </section>
  </section>
  <PopUpSuccess title="Wallet creada con éxito" img="check" :showPopUp="showPopUp"></PopUpSuccess>
</template>

<script>
import BtnBack from "@/components/form/BtnBack.vue";
import BaseInput from "@/components/form/BaseInput.vue";
import BaseButton from "@/components/form/BaseButton.vue";
import SelectCoin from "@/components/base/SelectCoin.vue";
import PopUpSuccess from "@/components/base/PopUpSuccess.vue";

import { mapActions, mapState } from 'vuex';
export default {
  components: { BtnBack, BaseInput, BaseButton, SelectCoin, PopUpSuccess },
  data () {
    return {
        assets: [
            {
                id: 'usdt',
                icon: 'https://i.ibb.co/N9GSBx7/usdt.png',
                name: 'USDT (TRC20)'
            }
        ],
        form: {
            title: 'Token Purchase',
            price: null,
            model: 'Tokens',
            model_id: null,
            payment_method: null,
            currency_id: null,
            name: null
        },
        showPopUp: false
    }
  },
  created () {
  },
  methods: {
        ...mapActions('cart', ['storeCart']),
        onSubmit () {
            this.storeCart(this.form).then(response => {
                this.$router.push({ name: 'Cart', params: { id: response } })
            })
        },
        selectAsset(asset) {
          this.form.payment_method = asset
        }
    }
};
</script>

<style lang="scss" scoped>
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
        &__actions{
          display: flex;
          justify-content: end;
          button{
            width: auto;
            &:first-of-type{
              margin-right: 20px;
            }
          }
        }
      }
    }
  }
}
</style>