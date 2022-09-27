<template>
  <section class="newWallet">
    <BtnBack></BtnBack>
    <section class="newWallet__container">
      <h3>Recibir</h3>
      <article class="newWallet__container__select">
        <h4>Seleccione Wallet</h4>
        <article class="newWallet__container__select__contain">
          <div class="newWallet__container__select__contain-qr">
            <img src="/assets/icons/qr.png" alt="">
          </div>
          <div class="newWallet__container__select__contain-copy">
            <h4>Dirección de wallet</h4>
            <Copy></Copy>
            <p>La transacción se ha creado con éxito, complete el pago para enviar los tokens entre 1 a 24 horas</p>
          </div>
        </article>
      </article>
    </section>
  </section>
</template>

<script>
import BtnBack from "@/components/form/BtnBack.vue";
import BaseInput from "@/components/form/BaseInput.vue";
import BaseButton from "@/components/form/BaseButton.vue";
import SelectCoin from "@/components/base/SelectCoin.vue";
import { ref } from '@vue/reactivity';
import Copy from "@/components/base/Copy.vue";
export default {
  components: { BtnBack, BaseInput, BaseButton, SelectCoin, Copy },
  setup() {
    const coins = [
      { name: "btc" },
      { name: "usdt" },
      { name: "trx" },
      { name: "USDT" },
    ];
    const coin = ref("coin")
    return {
      coins,
      coin
    };
  },
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