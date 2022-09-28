<template>
  <div class="card">
    <div class="card__header">
      <img class="card__header__img" src="@/assets/icons/btc.svg" alt="" />
      <h3 class="card__header__title">Bitcoin</h3>
    </div>
    <p class="card__header__text">0xbnas8sas0fasdj1a5slkasd4k1</p>
    <div class="card__info">
      <div class="card__info-left">
        <p class="card__header__text-price">$0.00</p>
        <p>To</p>
      </div>
      <div class="card__info-right">
        <p>06/07/2022 18:21</p>
        <p>From</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background-color: #f6f8fa;
  border-radius: 16px;
  border: 0;
  padding: 24px;
  &__header {
    display: flex;
    margin-bottom: 8px;
    &__img {
      margin-right: 8px;
    }
    &__text {
      font-size: 14px;
      font-weight: 300;
      line-height: 24px;
      text-align: left;
      color: $secondary-color;
      &-price {
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
        color: #0ec564;
      }
    }
    &__title {
      font-size: 20px;
      font-weight: 500;
      line-height: 24px;
      text-align: left;
    }
  }
  &__info {
    display: flex;
    justify-content: space-between;
    &-right > p {
      text-align: right;
    }
  }
}
</style>