<template>
  <section class="newWallet">
    <BtnBack></BtnBack>
    <section class="newWallet__container">
      <h3>Realizar pago</h3>
      <article class="newWallet__container__select">
        <h4>Envía la cantidad que desees a esta wallet</h4>
        <article class="newWallet__container__select__contain">
          <div class="newWallet__container__select__contain-qr">
            <qrcode-vue :value="cart.wallet" size="200" level="M"/>
          </div>
          <div class="newWallet__container__select__contain-copy">
            <h4>Dirección de wallet</h4>
            <Copy :text="cart.wallet"></Copy>
            <div class="row mt-2">
                <div class="col-6">
                    <h3>Valor</h3>
                </div>
                <div class="col-6 text-right">
                    1 KXP = 0.5 USD
                </div>
            </div>
            <p>La transacción se ha creado con éxito, complete el pago para enviar los tokens entre 1 a 24 horas</p>
          </div>
        </article>
        <div class="text-center">
            {{
                message
            }}
        </div>
        <BaseButton label="Verificar pago" loadingTx="Verificando pago" @click="confirmPayment" />
        <BaseButton @click="cancelPayment" label="Cancelar" class="transparent"></BaseButton>
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
                    openNotification('Compra realizada exitosamente', 'Los tokens serán enviados a tu billetera en la mayor brevedad')
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