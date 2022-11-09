<template>
  <section class="newWallet">
    <GoBack />
    <section class="newWallet__container">
      <h2 class="newWallet__container-title">Recibir</h2>
      <article class="newWallet__container__select">
        <h4>Select wallet</h4>
        <article class="newWallet__container__select__contain">
          <div class="newWallet__container__select__contain-qr">
            <qrcode-vue :value="address" size="180" level="M" />
          </div>
          <div class="newWallet__container__select__contain-copy">
            <div class="coin">
              <img class="coin__img" src="@/assets/icons/tether.svg" alt="" />
              <p class="coin__text">Tether USDT</p>
            </div>
            <h4>Wallet address</h4>
            <Copy :text="address" class="w-100"></Copy>
            <p>
              La transacción se ha creado con éxito, complete el pago para
              enviar los tokens entre 1 a 24 horas
            </p>
          </div>
        </article>
        <article class="newWallet__container__select__actions">
          <BaseButton label="Cancelar" class="transparent"></BaseButton>
          <BaseButton label="Verificar pago"></BaseButton>
        </article>
      </article>
    </section>
  </section>
</template>

<script>
import GoBack from "@/components/form/GoBack.vue";
import BaseInput from "@/components/form/BaseInput.vue";
import BaseButton from "@/components/form/BaseButton.vue";
import SelectCoin from "@/components/base/SelectCoin.vue";
import QrcodeVue from "qrcode.vue";
import { ref } from "@vue/reactivity";
import Copy from "@/components/base/Copy.vue";
export default {
  props: ["address"],
  components: { QrcodeVue, GoBack, BaseInput, BaseButton, SelectCoin, Copy },
  setup() {
    const coins = [
      { name: "btc" },
      { name: "usdt" },
      { name: "trx" },
      { name: "USDT" },
    ];
    const coin = ref("coin");
    return {
      coins,
      coin,
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
  @media (max-width: 500px) {
          padding: 20px;
        }
  &__container {
    max-width: 750px;
    margin: 0 auto;
    h3 {
      margin-bottom: 20px;
    }
    &-title {
      font-size: 26px;
      font-weight: 500;
      line-height: 32px;
      text-align: left;
      color: #132d7c;
      margin: 24px 0px;
    }
    &__select {
      margin-bottom: 20px;
      padding: 25px;
      border-radius: 8px;
      border: 1px solid #ececee;
      @media (max-width: 500px) {
        padding: 12px;
      }
      h4 {
        color: #647188;
        font-size: 16px;
        font-weight: 300;
        margin-bottom: 20px;
      }
      &__contain {
        display: flex;
        align-items: center;
        gap: 24px;
        @media (max-width: 1200px) {
          display: grid;
          grid-template-columns: 1fr;
          justify-items: center;
        }
        &-qr {
          padding: 15px;
          border-radius: 8px;
          background: #f6f8fa;
          img {
            width: 100%;
          }
        }
        &-copy {
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
          .copy {
            @media (max-width: 700px) {
              max-width: 230px;
              width: 100%;
            }
          }
        }
      }
      &__actions {
        display: flex;
        justify-content: flex-end;
        button {
          width: 110px;
          margin-left: 15px;
          @media (max-width: 700px) {
            font-size: 12px;
          }
        }
      }
    }
  }
}

.coin {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
  &__img {
    padding: 8px;
    background: #f6f8fa;
    border-radius: 8px;
  }
  &__text {
    font-size: 14px;
    font-weight: 300;
    line-height: 24px;
    text-align: left;
    margin: 0 !important;
  }
}
</style>