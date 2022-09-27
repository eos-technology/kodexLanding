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

      <article class="token__main__img">
        <article class="token__main__img__l align">
          <div class="align__left">
            <h2 class="align__left-title">KodexPay</h2>
            <p class="align__left-text">Total liquidity</p>
            <p class="align__left-text">Volume 24h</p>
            <p class="align__left-text">Transactions 24th</p>
            <p class="align__left-text">Burned $KXP</p>
            <p class="align__left-text">Updated</p>
          </div>

          <div class="align__right">
            <h2 class="align__right-title">$0.05 KXP</h2>
            <p class="align__right-text">00/00/0000</p>
            <p class="align__right-text">00:00</p>
            <p class="align__right-text">00:00</p>
            <p class="align__right-text">$0.00</p>
            <p class="align__right-text">00/00/0000 00:00:00</p>
          </div>
        </article>

        <article class="token__main__img__r">
          <Distribution class="mb-4" />
          <h2>Total Tokens KXP</h2>
        </article>
      </article>

      <TimeLine></TimeLine>
      <article class="token__main__quarter">
        <article class="token__main__quarter__card">
          <div><img src="@/assets/icons/kodexColor.svg" alt="" /></div>
          <h3>RESEARCH</h3>
          <p>Research of Market and Analysis Concept of ICO Utility token</p>
          <h3>THE CONCEPT</h3>
          <p>
            Technical Research and Background Recruit Core Team White Paper
            Concept.
          </p>
          <h3>PREPARATION</h3>
          <p>
            Infrastructure preparation Project development plan Marketing
            Campaign Promotions focus.
          </p>
          <h3>RECRUIT ADVISORS</h3>
          <p>Recruit Advisors Marketing Campaign Promotions focus.</p>
        </article>

        <article class="token__main__quarter__card">
          <div><img src="@/assets/icons/kodexColor.svg" alt="" /></div>
          <h3>TOKEN LAUNCH</h3>
          <p>
            Token launch by enabled community listing in pancakeswap and
            differents exchanges.
          </p>
          <h3>IMPLEMENTATIONS</h3>
          <p>
            Direct Implementation of KXP token within the payments
            infrastructures
          </p>
          <h3>DEVELOPMENT</h3>
          <p>Research & Development movil platform for KXP</p>
          <h3>UPDRADING ARCHITECTURES</h3>
          <p>
            Tools development for upgrading the current Architectures to Mobile
            Platforms
          </p>
        </article>

        <article class="token__main__quarter__card">
          <div><img src="@/assets/icons/kodexColor.svg" alt="" /></div>
          <h3>KODEX PAYMENT</h3>
          <p>Building a Safer Gaming Economy by means of KXP</p>
          <h3>PRESENTING PLATFORM</h3>
          <p>
            Presenting an easy to use platform where KODEX PAYMENTS achievement
            can be easily tokenized and traded and all acquire rewards by
            payments.
          </p>
          <h3>DEVELOPMENT</h3>
          <p>Research & Development movil platform for KXP</p>
        </article>

        <article class="token__main__quarter__card">
          <div><img src="@/assets/icons/kodexColor.svg" alt="" /></div>
          <h3>TOURNAMENTS AND EXPO</h3>
          <p>
            Launch the tournaments in the platform and Planning, focusing and
            announcing one of the biggest ATRX Gaming decentralized
            Expo/Conference.
          </p>
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
  margin-top: 30px;
  &__img {
    margin-bottom: 16px;
  }
  &__social {
    margin: 16px 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
  }
  &__buttons {
    display: flex;
    justify-content: space-between;
    row-gap: 16px;
    @media (max-width:500px) {
      width: 100%;
      flex-direction: column;
    }
  }
  &__btn {
    width: 100%;
    &:not(:last-child){
      margin-right: 12px;
    }
    @media (max-width:500px) {
      width: 100%;
    }
  }
  &__kodex {
    display: block;
    margin: 0 auto;
    margin-bottom: 12px;
    @media (max-width:500px) {
      width: 100%;
    }
  }
  &__main {
    padding: 40px;
    border-radius: 8px;
    background: white;
    @media (max-width:500px) {
      padding: 10px;
    }
    &__img {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
      margin-bottom: 48px;
      @media (max-width: 1200px) {
        grid-template-columns: 1fr;
      }
      &__r {
        text-align: center;
        padding: 30px;
        background: #f6f8fa;
        border-radius: 16px;
        @media (max-width: 800px) {
          padding: 10px;
        }
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
            span {
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
      @media (max-width:500px) {
        flex-direction: column;
      }
      &__card {
        min-width: 200px;
        width: 24%;
        padding: 25px;
        border-radius: 25px;
        background: #f6f8fa;
        @media (max-width:500px) {
        width: 100%;
      }
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
        h3 {
          font-family: Kanit;
          font-size: 18px;
          font-weight: 400;
          line-height: 24px;
          text-align: left;
        }
        p {
          font-size: 14px;
          font-weight: 300;
          line-height: 24px;
          letter-spacing: 0px;
          text-align: left;
        }
      }
    }
  }
}

.align {
  display: flex;
  justify-content: space-between;
  &__left {
    &-title {
      font-family: Kanit;
      font-size: 20px;
      font-weight: 500;
      line-height: 24px;
      text-align: left;
      margin-bottom: 24px;
    }
    &-text {
      font-family: Kanit;
      font-size: 14px;
      font-weight: 300;
      line-height: 24px;
      text-align: left;
    }
  }
  &__right {
    &-title {
      font-family: Kanit;
      font-size: 20px;
      font-weight: 500;
      line-height: 24px;
      text-align: right;
      color: #007bd1;
      text-align: end;
      margin-bottom: 24px;
    }
    &-text {
      font-family: Kanit;
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
      text-align: end;
    }
  }
}
</style>