<template>
  <Header></Header>
  <section class="token">
    <section class="token__main">
      <article class="token__main__img">
        <article class="token__main__img__r">
          <img class="token__img" src="/src/assets/icons/img-nbg.png" alt="" />
          <h2>Learn more about KodexPay</h2>
          <p>We can't wait to show you what we have prepared</p>
          <div class="token__social">
            <Social />
          </div>
          <div class="token__buttons">
            <button class="sBtn token__btn">Whitepapper</button>
            <button class="oBtn token__btn">Contract</button>
            <button class="oBtn token__btn">FAQ</button>
          </div>
        </article>
        <article class="token__main__img__l">
          <article class="token__main__img__l__title">
            <div class="token__main__img__l__title-logo">
              <img
                class="token__kodex"
                src="@/assets/icons/logoKodex.svg"
                alt=""
              />
            </div>
            <div class="token__main__img__l__title-text">
              <p>
                Opportunity to acquire
                <span class="token__bold">KodexPay</span> for a price of
                <span class="token__bold">$0.05 USD</span>
              </p>
            </div>
          </article>
          <article class="token__main__img__l__count">
            <Count></Count>
          </article>
          <div class="text-center mt-3">
            <h2><b>1 KXP</b> = <b>0.5 USD</b></h2>
          </div>
          <article class="token__main__img__l__progress">
            <b-progress
              :value="valueProgress"
              :max="100"
              animated
              variant="primary"
            ></b-progress>
            <span>{{ valueProgress }}%</span>
          </article>
          <article class="token__main__img__l__sold">
            <h4>
              <span>$0.00</span> Sold out of
              <span class="token__main__img__l__sold-bold">20000</span>
            </h4>
          </article>
          <article>
            <BaseButton
              @click="$router.push({ name: 'Purchase-Token' })"
              label="Buy KXP"
            ></BaseButton>
          </article>
        </article>
      </article>
      <Distribution class="mb-4" />
      <p>Opportunity to acquire</p>
      <h2>Token KodexPay</h2>
      <TimeLine></TimeLine>
      <article class="token__main__quarter">
        <article class="token__main__quarter__card" v-for="x in 6" :key="x">
          <div>PK</div>
          <ul>
            <li>Texto</li>
            <li>Texto</li>
            <li>Texto</li>
            <li>Texto</li>
          </ul>
        </article>
      </article>
    </section>
  </section>
</template>

<script>
import Header from "@/components/Header.vue";
import Count from "@/components/Count.vue";
import { ref } from "@vue/reactivity";
import BaseButton from "../../components/form/BaseButton.vue";
import TimeLine from "../../components/TimeLine.vue";
import Distribution from "./Distribution.vue";
import Social from "@/components/base/Social.vue";
export default {
  components: { Header, Count, BaseButton, TimeLine, Distribution, Social },
  setup() {
    const valueProgress = ref(2);
    return {
      valueProgress,
    };
  },
};
</script>

<style lang="scss" scoped>
.token {
  display: grid;
  margin-top: 30px;
  &__img {
    margin-bottom: 16px;
  }
  &__social {
    margin: 16px 0;
    display: flex;
    justify-content: space-between;
  }
  &__buttons {
    display: flex;
    justify-content: space-between;
    row-gap: 16px;
  }
  &__btn {
    width: 30%;
  }
  &__kodex {
    display: block;
    margin: 0 auto;
    margin-bottom: 12px;
  }
  &__main {
    padding: 40px;
    border-radius: 8px;
    background: white;
    &__img {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
      &__r {
        text-align: center;
        padding: 30px;
        background: #f6f8fa;
        border-radius: 16px;
        img {
          width: 100%;
        }
        p {
          font-size: 14px;
          font-weight: 300;
          line-height: 24px;
          text-align: center;
          color: $secondary-color;
        }
        h2 {
          font-size: 26px;
          font-weight: 500;
          line-height: 32px;
          text-align: center;
        }
      }
      &__l {
        padding: 30px;
        background: #f6f8fa;
        border-radius: 16px;
        &__title {
          margin-bottom: 20px;
          &-logo {
          }
          &-text {
            p {
              font-weight: 300;
              font-size: 22px;
              line-height: 32px;
              color: $secondary-color;
              text-align: center;
            }
            span{
              font-weight: 500;
              font-size: 26px;
              color: $primary-color;
            }
          }
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
        &__sold {
          margin-top: 20px;
          h4 {
            font-size: 14px;
            font-weight: 300;
          }
          &-bold {
            font-weight: 400;
          }
        }
      }
    }
    &__quarter {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      &__card {
        min-width: 200px;
        padding: 25px;
        border-radius: 25px;
        background: #f6f8fa;
        div {
          display: flex;
          align-items: center;
          width: 60px;
          height: 60px;
          margin: 0 auto;
          margin-bottom: 15px;
          padding: 16px;
          border-radius: 24px;
          background: white;
          font-size: 26px;
          font-weight: 500;
        }
        li {
          list-style: circle;
          font-size: 14px;
          margin-bottom: 5px;
        }
      }
    }
  }
}
</style>