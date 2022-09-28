<template>
  <section class="newWallet">
    <BtnBack></BtnBack>
    <section class="newWallet__container">
      <h3>Deposit</h3>
      <article class="newWallet__container__select">
        <h4>Select wallet</h4>
        <article class="newWallet__container__select__contain">
          <div class="newWallet__container__select__contain-qr">
            <qrcode-vue :value="address" size="200" level="M"/>
          </div>
          <div class="newWallet__container__select__contain-copy">
            <h4>Wallet address</h4>
            <Copy :text="address"></Copy>
            <p>Take into account when making shipments the network rate please.</p>
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
import QrcodeVue from 'qrcode.vue'
import { ref } from '@vue/reactivity';
import Copy from "@/components/base/Copy.vue";
export default {
  props: ['address'],
  components: { QrcodeVue, BtnBack, BaseInput, BaseButton, SelectCoin, Copy },
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
        @media (max-width: 1200px){
          display: grid;
          justify-items: center;
          overflow: hidden;
        }
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
          .copy{
            @media (max-width: 700px){
              width: 200px;
            }
          }
        }
      }
    }

  }
}
</style>