<template>
  <section class="token">
    <section class="token__main">
      <article class="token__main__img">
        <article class="token__main__img__r">
          <img class="token__img" src="/src/assets/icons/img-nbg.png" alt="" />
          <h2>{{ $t("token.learn") }}</h2>
          <p>{{ $t("token.wait") }}</p>
          <div class="token__social">
            <Social />
          </div>
          <div class="token__buttons">
            <a
              class="sBtn token__btn"
              href="https://kodexpay.com/whitepaper"
              target="_blank"
            >
              {{ $t("token.whitepapper") }}
            </a>
            <a
              href="https://bscscan.com/address/0x02a655942Dbb886c77bb22B270060c561300B0E2"
              target="_blank"
              class="oBtn token__btn"
            >
              {{ $t("token.contract") }}
            </a>
            <a
              class="oBtn token__btn"
              href="https://support.kodexpay.com/faq"
              target="_blank"
            >
              {{ $t("token.faq") }}
            </a>
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
                {{ $t("token.oportunity") }}
                <span class="token__bold">KodexPay</span>
                {{ $t("token.price") }}
                <span class="token__bold">$3.0 USD</span>
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
              <span>$0.00</span> {{ $t("token.sold") }}
              <span class="token__main__img__l__sold-bold">20000</span>
            </h4>
          </article>
          <article>
            <BaseButton
              :disabled="false"
              @click="$router.push({ name: 'Purchase-Token' })"
              :label="`${$t('token.buy')} KXP`"
            ></BaseButton>
          </article>
        </article>
      </article>

      <article class="token__main__img">
        <article class="token__main__img__l align">
          <div class="align__left">
            <h2 class="align__left-title">KodexPay</h2>
            <p class="align__left-text">{{ $t("token.liquidity") }}</p>
            <p class="align__left-text">{{ $t("token.volume") }} 24h</p>
            <p class="align__left-text">{{ $t("token.transactions") }} 24h</p>
            <p class="align__left-text">{{ $t("token.burned") }} $KXP</p>
            <p class="align__left-text">{{ $t("token.updated") }}</p>
          </div>

          <div class="align__right">
            <h2 class="align__right-title">$3.0 KXP</h2>
            <p class="align__right-text">$70.000.000</p>
            <p class="align__right-text">200.000,00</p>
            <p class="align__right-text">50.000</p>
            <p class="align__right-text">$0.00</p>
            <p class="align__right-text">2709/2022 00:00:00</p>
          </div>
        </article>

        <article class="token__main__img__r">
          <Distribution
            class="mb-4"
            :labels="[
              `${$t('token.distribution.public')}`,
              `${$t('token.distribution.funders')}`,
              `${$t('token.distribution.preSale')}`,
              `${$t('token.distribution.advisor')}`,
              `${$t('token.distribution.team')}`,
            ]"
          />
          <div class="row">
            <div class="col-12 col-md-6">
              <h2 class="text-left">{{ $t("token.totalToken") }} KXP</h2>
            </div>
            <div class="col-12 col-md-6">
              <h2 class="text-right">$70.000.000</h2>
            </div>
          </div>
        </article>
      </article>

      <TimeLine></TimeLine>
      <article class="token__main__quarter">
        <article class="token__main__quarter__card">
          <div><img src="@/assets/icons/kodexColor.svg" alt="" /></div>
          <h3>{{ $t("token.timeline.research") }}</h3>
          <p>{{ $t("token.timeline.researchDesc") }}</p>
          <h3>{{ $t("token.timeline.concept") }}</h3>
          <p>
            {{ $t("token.timeline.conceptDesc") }}
          </p>
          <h3>{{ $t("token.timeline.prepration") }}</h3>
          <p>
            {{ $t("token.timeline.preparationDesc") }}
          </p>
          <h3>{{ $t("token.timeline.recruit") }}</h3>
          <p>{{ $t("token.timeline.recruitDesc") }}</p>
        </article>

        <article class="token__main__quarter__card">
          <div><img src="@/assets/icons/kodexColor.svg" alt="" /></div>
          <h3>{{ $t("token.timeline.token") }}</h3>
          <p>
            {{ $t("token.timeline.tokenDesc") }}
          </p>
          <h3>{{ $t("token.timeline.implementations") }}</h3>
          <p>
            {{ $t("token.timeline.implementationsDesc") }}
          </p>
          <h3>{{ $t("token.timeline.development") }}</h3>
          <p>{{ $t("token.timeline.developmentDesc") }}</p>
          <h3>{{ $t("token.timeline.uptrading") }}</h3>
          <p>
            {{ $t("token.timeline.uptradingDesc") }}
          </p>
        </article>

        <article class="token__main__quarter__card">
          <div><img src="@/assets/icons/kodexColor.svg" alt="" /></div>
          <h3>{{ $t("token.timeline.kodex") }}</h3>
          <p>{{ $t("token.timeline.kodexDesc") }}</p>
          <h3>{{ $t("token.timeline.presenting") }}</h3>
          <p>
            {{ $t("token.timeline.presentingDesc") }}
          </p>
          <h3>{{ $t("token.timeline.development") }}</h3>
          <p>{{ $t("token.timeline.developmentDesc") }}</p>
        </article>

        <article class="token__main__quarter__card">
          <div><img src="@/assets/icons/kodexColor.svg" alt="" /></div>
          <h3>{{ $t("token.timeline.tournaments") }}</h3>
          <p>
            {{ $t("token.timeline.tournamentsDesc") }}
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
.text-right {
  text-align: right !important;
}
a {
  text-decoration: none;
  padding-top: 15px !important;
}
.token {
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
    @media (max-width: 500px) {
      width: 100%;
      flex-direction: column;
    }
  }
  &__btn {
    width: 100%;
    &:not(:last-child) {
      margin-right: 12px;
    }
    @media (max-width: 500px) {
      width: 100%;
    }
    &.sBtn {
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 !important;
    }
    &.oBtn {
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 !important;
      border: 1px solid #132d7c;
      color: #132d7c;
    }
  }
  &__kodex {
    display: block;
    margin: 0 auto;
    margin-bottom: 12px;
    @media (max-width: 500px) {
      width: 100%;
    }
  }
  &__main {
    padding:24px;
    border-radius: 8px;
    background: #fff;
    border: 1px solid #ececee;
    border-radius: 16px;
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
          color: #647188;
        }
        h2 {
          font-size: 26px;
          font-weight: 500;
          line-height: 32px;
          text-align: center;
          color: #132d7c;
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
      @media (max-width: 500px) {
        flex-direction: column;
      }
      &__card {
        min-width: 200px;
        width: 24%;
        padding: 25px;
        border-radius: 25px;
        background: #f6f8fa;
        @media (max-width: 500px) {
          width: 100%;
          margin-bottom: 20px;
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
          font-size: 14px;
          font-weight: 400;
          line-height: 24px;
          text-align: left;
          color: black;
        }
        p {
          font-size: 14px;
          font-weight: 300;
          line-height: 24px;
          letter-spacing: 0px;
          color: #647188;
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
      color: #647188;
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
      color: #000;
    }
  }
}
</style>