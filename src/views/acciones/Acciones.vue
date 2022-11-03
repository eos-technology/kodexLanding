<template>
  <section class="acciones">
    <ToggleButton v-model:show="show"></ToggleButton>
    <section class="acciones__card" v-if="show">
      <article class="acciones__card__img">
        <img src="/src/assets/images/tron.png" alt="" />
      </article>
      <article class="acciones__card__text">
        <h2>Nodo Tron</h2>
        <h3>TRX</h3>
        <div>
          <p>Inversión miníma</p>
          <p>1,000.00 KP</p>
        </div>
        <div>
          <p>Porcentaje mensual</p>
          <p>0,3%</p>
        </div>
        <div>
          <p>Plazo máximo</p>
          <p>6 Meses</p>
        </div>
        <div>
          <p>Fecha de retiros</p>
          <p>05 de cada mes</p>
        </div>
        <h5>Fondeado</h5>
        <article class="acciones__card__text__progress">
          <b-progress
            :value="valueProgress"
            :max="100"
            animated
            variant="Primary"
          ></b-progress>
          <span>{{ valueProgress }}%</span>
        </article>
        <div>
          <p>Recaudo total</p>
          <p>$0.00</p>
        </div>
        <div>
          <p>Participantes disponibles</p>
          <p>20/100</p>
        </div>
        <div>
          <p>Mes</p>
          <p>0/6</p>
        </div>
        <BaseButton
          label="Invertir ahora"
          @click="$router.push({ path: '/acciones/deposit' })"
        ></BaseButton>
      </article>
    </section>
    <section class="acciones__card" v-if="show">
      <article class="acciones__card__img">
        <img src="/src/assets/images/eth.png" alt="" />
      </article>
      <article class="acciones__card__text">
        <h2>Nodo Etherium</h2>
        <h3>ETH</h3>
        <div>
          <p>Inversión miníma</p>
          <p>1,000.00 KP</p>
        </div>
        <div>
          <p>Porcentaje mensual</p>
          <p>0,3%</p>
        </div>
        <div>
          <p>Plazo máximo</p>
          <p>6 Meses</p>
        </div>
        <div>
          <p>Fecha de retiros</p>
          <p>05 de cada mes</p>
        </div>
        <h5>Fondeado</h5>
        <article class="acciones__card__text__progress">
          <b-progress
            :value="valueProgress"
            :max="100"
            animated
            variant="Primary"
          ></b-progress>
          <span>{{ valueProgress }}%</span>
        </article>
        <div>
          <p>Recaudo total</p>
          <p>$0.00</p>
        </div>
        <div>
          <p>Participantes disponibles</p>
          <p>20/100</p>
        </div>
        <div>
          <p>Mes</p>
          <p>0/6</p>
        </div>
        <BaseButton
          label="Invertir ahora"
          @click="$router.push({ path: '/acciones/deposit' })"
        ></BaseButton>
      </article>
    </section>
    <section class="acciones__card" v-if="show">
      <article class="acciones__card__img">
        <img src="/src/assets/images/binance.png" alt="" />
      </article>
      <article class="acciones__card__text">
        <h2>Nodo Binance</h2>
        <h3>BNB</h3>
        <div>
          <p>Inversión miníma</p>
          <p>1,000.00 KP</p>
        </div>
        <div>
          <p>Porcentaje mensual</p>
          <p>0,3%</p>
        </div>
        <div>
          <p>Plazo máximo</p>
          <p>6 Meses</p>
        </div>
        <div>
          <p>Fecha de retiros</p>
          <p>05 de cada mes</p>
        </div>
        <h5>Fondeado</h5>
        <article class="acciones__card__text__progress">
          <b-progress
            :value="valueProgress"
            :max="100"
            animated
            variant="Primary"
          ></b-progress>
          <span>{{ valueProgress }}%</span>
        </article>
        <div>
          <p>Recaudo total</p>
          <p>$0.00</p>
        </div>
        <div>
          <p>Participantes disponibles</p>
          <p>20/100</p>
        </div>
        <div>
          <p>Mes</p>
          <p>0/6</p>
        </div>
        <BaseButton
          label="Invertir ahora"
          @click="$router.push({ path: '/acciones/deposit' })"
        ></BaseButton>
      </article>
    </section>
    <article class="acciones__container">
      <section class="acciones__card acciones__move" v-if="!show">
        <section class="acciones__move__img">
          <article class="acciones__card__img me-3">
            <img src="/src/assets/images/tron.png" alt="" />
          </article>
          <article>
            <h2>Nodo Tron</h2>
            <h3>TRX</h3>
          </article>
        </section>
        <section class="acciones__move__data"> 
          <h5>Periodo de tiempo</h5>
          <p>6 Meses</p>
          <h5>Porcentaje mensual</h5>
          <p>0,3%</p>
        </section>
        <article class="acciones__card__text">
          <h4>Estado del programa</h4>
          <div>
            <p>Total tokens stakes</p>
            <p>0.00</p>
          </div>
          <div>
            <p>Stake total</p>
            <p>0.00</p>
          </div>
          <div>
            <p>Minimo stake</p>
            <p>0.00</p>
          </div>
          <BaseButton
            label="Retirar"
            @click="$router.push({ path: '/acciones/withdraw' })"
          ></BaseButton>
        </article>
      </section>
      <section class="acciones__card acciones__move" v-if="!show">
        <section class="acciones__move__img">
          <article class="acciones__card__img me-3">
            <img src="/src/assets/images/eth.png" alt="" />
          </article>
          <article>
            <h2>Nodo Etherium</h2>
            <h3>ETH</h3>
          </article>
        </section>
        <section class="acciones__move__data"> 
          <h5>Periodo de tiempo</h5>
          <p>6 Meses</p>
          <h5>Porcentaje mensual</h5>
          <p>0,3%</p>
        </section>
        <article class="acciones__card__text">
          <h4>Estado del programa</h4>
          <div>
            <p>Total tokens stakes</p>
            <p>0.00</p>
          </div>
          <div>
            <p>Stake total</p>
            <p>0.00</p>
          </div>
          <div>
            <p>Minimo stake</p>
            <p>0.00</p>
          </div>
          <BaseButton
            label="Retirar"
            @click="$router.push({ path: '/acciones/withdraw' })"
          ></BaseButton>
        </article>
      </section>
      <section class="acciones__card acciones__move" v-if="!show">
        <section class="acciones__move__img">
          <article class="acciones__card__img me-3">
            <img src="/src/assets/images/binance.png" alt="" />
          </article>
          <article>
            <h2>Nodo Binance</h2>
            <h3>BNB</h3>
          </article>
        </section>
        <section class="acciones__move__data"> 
          <h5>Periodo de tiempo</h5>
          <p>6 Meses</p>
          <h5>Porcentaje mensual</h5>
          <p>0,3%</p>
        </section>
        <article class="acciones__card__text">
          <h4>Estado del programa</h4>
          <div>
            <p>Total tokens stakes</p>
            <p>0.00</p>
          </div>
          <div>
            <p>Stake total</p>
            <p>0.00</p>
          </div>
          <div>
            <p>Minimo stake</p>
            <p>0.00</p>
          </div>
          <BaseButton
            label="Retirar"
            @click="$router.push({ path: '/acciones/withdraw' })"
          ></BaseButton>
        </article>
      </section>
    </article>
  </section>
</template>

<script>
import Header from "@/components/Header.vue";
import { ref } from "@vue/reactivity";
import BaseButton from "@/components/form/BaseButton.vue";
import ToggleButton from "@/components/base/ToggleButton.vue";

export default {
  components: { Header, BaseButton, ToggleButton },
  setup() {
    const show = ref(true);
    const valueProgress = ref(45);
    return {
      valueProgress,
      show,
    };
  },
};
</script>

<style lang="scss" scoped>
.acciones {
  margin-top: 30px;
  padding: 40px;
  border-radius: 8px;
  background: white;
  @media (max-width: 1000px){
    padding: 40px 20px;
  }
  &__card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    background: #F6F8FA;
    margin-bottom: 20px;
    padding: 25px;
    @media (max-width: 1000px) {
      grid-template-columns: 1fr;
    }
    &__img {
      max-height: 450px;
      background: #FFFFFF;
      border-radius: 8px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &__text {
      h2 {
      }
      button {
        margin-bottom: 0;
      }
      h3 {
        color: #647188;
        font-size: 14px;
        font-weight: 300;
        margin-bottom: 10px;
      }
      div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        p {
          font-size: 14px;
          font-weight: 300;
          &:last-of-type {
            font-weight: 400;
          }
        }
      }
      h5 {
        margin-bottom: 10px;
      }
      &__progress {
        display: grid;
        align-items: center;
        grid-template-columns: 1fr 30px;
        grid-gap: 20px;
        margin-top: 20px;
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
  &__container {
    display: flex;
    justify-content: space-between;
  }
  &__move {
    grid-template-columns: 1fr;
    width: 350px;
    margin-right: 20px;
    margin-bottom: 20px;
    padding: 25px;
    border-radius: 16px;
    background: #F6F8FA;
    h4{
      font-size: 16px;
      margin-bottom: 10px;
    }
    &__img {
      display: flex;
      margin-right: 20px;
      img {
        width: 80px;
        object-fit: cover;
      }
      h2,
      h3 {
        font-size: 20px;
      }
      h3 {
        font-weight: 300;
      }
    }
    &__data{
      border-bottom: 1px solid #EBEBEB;
      padding-bottom: 10px;
      h5{
        font-weight: 300;
        font-size: 14px;
        margin-bottom: 5px;
      }
      p{
        color: #132D7C;
      }
    }
  }
  .toggleButton {
    max-width: 300px;
    margin: 20px auto;
  }
}
</style>