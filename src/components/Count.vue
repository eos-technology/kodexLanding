<template>
  <section id="MainCount">
    <Countdown
      deadline="2023-01-25"
      mainColor="#000"
      mainFlipBackgroundColor="#fff"
      secondFlipBackgroundColor="#fff"
      secondFlipColor="#000"
    />
  </section>
</template>

<script>
import { Countdown } from "vue3-flip-countdown";

export default {
  components: { Countdown },
};
</script>

<style lang="scss">
#MainCount {
  .flip-clock {
    display: flex;
    justify-content: space-between;
  }
  .flip-card {
    font-size: 26px;
    font-weight: 400;
  }
  .flip-clock__piece {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100px;
    height: 100px;
    border-radius: 16px;
    background: white;
    .flip-clock__slot {
      font-size: 14px;
    }
    > div {
      display: flex;
      justify-content: center;
    }
    .flip-card__bottom {
      border: none;
    }
  }
}
</style>