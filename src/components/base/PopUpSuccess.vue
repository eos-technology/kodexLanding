<template>
  <section class="popUpBillsSucces" v-if="showPopUp">
    <section class="popUpBillsSucces__container">
      <article class="popUpBillsSucces__container__title">
        <img :src="`/assets/iconBase/${img}.png`" alt="" />
        <h3>{{ title }}</h3>
      </article>
    </section>
    <section class="popUpBillsSucces__layer" @click="showPopUp = false"></section>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    img: {
      type: [String, Number],
      default: "",
    },
    showPopUp: {
      type: Boolean,
      default: false,
    }
  },
  setup(){
    return{

    }
  }
};
</script>

<style lang="scss" scoped>
.popUpBillsSucces {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  &__container {
    position: relative;
    z-index: 8;
    max-width: 700px;
    padding: 30px;
    background-color: white;
    border-radius: 16px;
    font-family: $main-font;
    &__title {
      text-align: center;
      h3 {
        margin-bottom: 0;
        font-size: 30px;
        font-weight: 600;
        color: #0d1520;
      }
      img {
        margin-bottom: 15px;
      }
    }
  }
  &__layer {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 4;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: rgb(0, 6, 38, 0.8);
  }
}
</style>