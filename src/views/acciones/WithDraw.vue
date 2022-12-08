<template>
  <section class="withdraw">
    <BtnBack></BtnBack>
    <section class="withdraw__container">
      <h3>{{$t('withdraw.title')}}</h3>
      <article class="withdraw__container__select">
        <h4>{{$t('withdraw.select')}}</h4>
        <article class="withdraw__container__select__contain">
          <SelectCoin :coins="coins" :defaultCoin="coin" @setCoin="(e) => coin = e"></SelectCoin>
        </article>
      </article>
      <article class="withdraw__container__balance">
        <h4>{{$t('withdraw.balance')}}</h4>
        <h3>$0.00</h3>
        <article class="withdraw__container__balance__contain">
          <label for=""><span>*</span> {{$t('withdraw.amount')}}</label>
          <BaseInput placeholder="$0.0"></BaseInput>
          <p>{{$t('withdraw.tranfer')}}</p>
          <label for=""><span>*</span> {{$t('withdraw.destination')}}</label>
          <BaseInput :placeholder="`${$t('withdraw.wallet')}`"></BaseInput>
          <article class="withdraw__container__balance__contain__actions">
              <BaseButton :label="`${$t('cancel')}`" class="transparent"></BaseButton>
              <BaseButton :label="`${$t('save')}`" @click="sendData"></BaseButton>
          </article>  
        </article>
      </article>
    </section>
  </section>
  <PopUpSuccess title="Envio realizado con éxito" img="check" :showPopUp="showPopUp"></PopUpSuccess>
  
</template>

<script>
import BtnBack from "@/components/form/BtnBack.vue";
import BaseInput from "@/components/form/BaseInput.vue";
import BaseButton from "@/components/form/BaseButton.vue";
import SelectCoin from "@/components/base/SelectCoin.vue";
import { ref } from '@vue/reactivity';
import PopUpSuccess from "@/components/base/PopUpSuccess.vue";
export default {
  components: { BtnBack, BaseInput, BaseButton, SelectCoin, PopUpSuccess },
  setup() {
    const coins = [
      { name: "KXP" },
      { name: "usdt" },
      { name: "trx" },
      { name: "USDT" },
    ];
    const showPopUp =  ref(false)
    const coin = ref("coin")
    const sendData = () => {
      showPopUp.value = true
    }
    return {
      coins,
      coin,
      showPopUp,
      sendData
    };
  },
};
</script>

<style lang="scss" scoped>
.withdraw {
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