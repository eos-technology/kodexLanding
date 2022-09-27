<template>
  <section class="newWallet">
    <BtnBack></BtnBack>
    <section class="newWallet__container">
      <h3>Make payment</h3>
      <article class="newWallet__container__select" v-if="cart">
        <h4>Send the amount you want to this wallet</h4>
        <article class="newWallet__container__select__contain">
          <div class="newWallet__container__select__contain-qr">
            <qrcode-vue :value="cart.wallet" size="200" level="M"/>
          </div>
          <div class="newWallet__container__select__contain-copy">
            <h4>Wallet address</h4>
            <Copy v-if="cart" :text="cart.wallet"></Copy>
            <div class="row mt-2">
                <div class="col-4 d-flex">
                    <img src="/assets/images/kodex.png" />
                    <div style="margin-left:10px">
                      <div class="coin-name">KXP</div>
                      <div class="coin-price">$1.00</div>
                    </div>
                </div>
                <div class="col-4 text-center pt-2">
                  <img src="/assets/images/value.png" />
                </div>
                <div class="col-4 text-right d-flex">
                    <div style="margin-right:10px">
                      <div class="coin-name">KXP</div>
                      <div class="coin-price">$0.5</div>
                    </div>
                    <img src="/assets/images/usdt.png" />
                </div>
            </div>
            <p>The transaction has been created successfully, complete the payment to send the tokens between 1 to 24 hours</p>
          </div>
        </article>
        <div class="text-center">
            {{
                message
            }}
        </div>
        <BaseButton label="Verify payment" loadingTx="Verifying payment" @click="confirmPayment" />
        <BaseButton @click="cancelPayment" label="Cancel" class="transparent"></BaseButton>
      </article>
    </section>
  </section>
</template>


<script>
import QrcodeVue from 'qrcode.vue'
import BtnBack from "@/components/form/BtnBack.vue";
import BaseInput from "@/components/form/BaseInput.vue";
import BaseButton from "@/components/form/BaseButton.vue";
import SelectCoin from "@/components/base/SelectCoin.vue";
import Copy from "@/components/base/Copy.vue";

import { mapActions, mapState } from 'vuex'
export default {
    props: ['id'],
    components: {
        QrcodeVue,
        BtnBack, BaseInput, BaseButton, SelectCoin, Copy
    },
    data () {
        return {
            loading: false,
            message: null,
            polling: null
        }
    },
    created () {
        this.getData()
    },
    methods: {
        ...mapActions('auth', ['getUserInfo']),
        ...mapActions('cart', ['getCart', 'checkPayment', 'destroyCart']),
        getData () {
            this.loading = true
            this.getCart(this.id).then(() => {
                this.loading = false
            })
        },
        cancelPayment () {
            this.loading = true
            this.destroyCart(this.id).then(() => {
                openNotification('Compra cancelada')
                this.loading = false
                this.$router.push({ name: 'Tokens' })
            })
        },
        confirmPayment () {
            this.loading = true
            this.checkPayment(this.id).then(response => {
                this.message = response
                this.loading = false
                if(response == 'success') {
                    this.getUserInfo()
                    openNotification('Purchase made successfully', 'The tokens will be sent to your wallet as soon as possible')
                    this.getData()
                    this.$router.push({ name: 'Tokens' })
                }
            })
        }
    },
    computed: {
        ...mapState('cart', ['cart'])
    }
}
</script>

<style lang="scss" scoped>
.coin-name{
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #647188;
}
.coin-price{
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: right;
}
.text-right{
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
        &-qr{
          margin-right: 20px;
          padding: 15px;
          border-radius: 8px;
          background: #F6F8FA;
          img{
            width: 100%;
          }
        }
        &-copy{
          h4{
            font-weight: 400;
            font-size: 16px;
            color:  #0F215C;
          }
          p{
            margin-top: 15px;
            font-size: 12px;
            color: #647188;
          }
        }
      }
    }

  }
}
</style>