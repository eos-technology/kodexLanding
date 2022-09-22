<template>
  <section class="acciones">
    <ToggleButton v-model:show="show"></ToggleButton>
    <section class="acciones__card" v-if="show">
      <article class="acciones__card__img">
        <img src="src/assets/images/btc.jpg" alt="" />
      </article>
      <article class="acciones__card__text">
        <h2>Bitcoin</h2>
        <h3>BTC</h3>
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
              variant="dark"
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
        <BaseButton label="Invertir ahora" @click="$router.push(({ path: '/acciones/deposit' }))"></BaseButton>
      </article>
    </section>
    <article class="acciones__container">
      <section class="acciones__card acciones__move" v-if="!show">
        <article class="acciones__card__img">
          <img src="src/assets/images/btc.jpg" alt="" />
        </article>
        <article class="acciones__card__text">
          <h2>Bitcoin</h2>
          <h3>BTC</h3>
          <h5>Fondeado</h5>
          <article class="acciones__card__text__progress">
              <b-progress
                :value="valueProgress"
                :max="100"
                animated
                variant="dark"
              ></b-progress>
              <span>{{ valueProgress }}%</span>
            </article>
          <div>
            <p>Inversión</p>
            <p>1,000.00 KP</p>
          </div>
          <div>
            <p>Porcentaje mensual</p>
            <p>0,3%</p>
          </div>
          <div>
            <p>Fecha de retiros</p>
            <p>05 de cada mes</p>
          </div>
          <div>
            <p>Retorno de inversión</p>
            <p>$0.00</p>
          </div>
          <div>
            <p>Mes</p>
            <p>0/6</p>
          </div>
          <BaseButton label="Retirar" @click="$router.push(({ path: '/acciones/withdraw' }))"></BaseButton>
        </article>
      </section>
    </article>
  </section>
</template>

<script>
import Header from "@/components/Header.vue";
import { ref } from '@vue/reactivity';
import BaseButton from "@/components/form/BaseButton.vue";
import ToggleButton from "@/components/base/ToggleButton.vue";

export default {
  components: { Header, BaseButton, ToggleButton },
  setup() {
    const show = ref(false)
    const valueProgress = ref(45);
    return {
      valueProgress,
      show
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
  &__card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    &__img {
      img {
        width: 100%;
        height: 100%;
      }
    }
    &__text {
      h2 {
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
  &__container{
    display: flex;
    justify-content: space-between;
  }
  &__move{
    grid-template-columns: 1fr;
    max-width: 350px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .toggleButton{
    max-width: 300px;
    margin: 20px auto;
  }
}
</style>