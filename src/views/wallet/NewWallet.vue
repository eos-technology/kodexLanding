<template>
  <section class="newWallet">
    <BtnBack></BtnBack>
    <section class="newWallet__container">
      <h3>Añadir wallet</h3>
      <article class="newWallet__container__select">
        <h4>Seleccione Wallet</h4>
        <article class="newWallet__container__select__contain">
          <SelectCoin :coins="uniqueAssets" :defaultCoin="coin" @setCoin="selectAsset"></SelectCoin>
        </article>
      </article>
      <article class="newWallet__container__balance">
        <h4>Wallet Balance</h4>
        <h3>$0.00</h3>
        <article class="newWallet__container__balance__contain">
          <label for=""><span>*</span> Nombre de la Wallet</label>
          <BaseInput v-model="form.name" placeholder="Nombre"></BaseInput>
          <article class="newWallet__container__balance__contain__actions">
              <BaseButton label="Cancelar" class="transparent"></BaseButton>
              <BaseButton :disabled="form.name == null || form.currency_id == null" label="Crear wallet"  @click="onSubmit"> </BaseButton>
          </article>
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

import { ref } from '@vue/reactivity';
import { mapActions, mapGetters, mapState } from 'vuex';
export default {
  components: { BtnBack, BaseInput, BaseButton, SelectCoin, PopUpSuccess },
  data () {
    return {
      form: {
        currency_id: null,
        name: null
      },
      showPopUp: false
    }
  },
  created () {
    this.getData()
  },
  methods: {
        ...mapActions('wallet', ['getAssets', 'storeWallet']),
        getData () {
          this.getAssets()
        },
        onSubmit () {
          this.storeWallet(this.form).then(() => {
              this.showPopUp = true
          })
        },
        selectAsset(asset) {
          console.log("HOA", asset)
          this.form.currency_id = asset
        }
    },
    computed: {
      ...mapState('wallet', ['assets']),
      ...mapGetters('wallet', ['uniqueAssets'])
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