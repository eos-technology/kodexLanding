<template>
  <section class="auth">
    <h2 class="auth--Title">{{$t('auth.title')}}</h2>
    <section class="auth__container">
      <article class="auth__container__text">
        <p>
          {{$t('auth.desc')}}
        </p>
        <p>{{$t('auth.have')}}</p>
        <div>
          <img src="/assets/images/apple.jpg" alt="" />
          <img src="/assets/images/andrioid.jpg" alt="" />
        </div>
        <p class="grey">
          {{$t('auth.android')}}
        </p>
        <p>
          {{$t('auth.enable')}}
        </p>
      </article>
      <article class="auth__container__qr">
        <div class="auth__container__qr--img">
          <img src="/assets/images/qr.png" alt="">
        </div>
        <h4>{{$t('auth.key')}}</h4>
        <Copy text="JFSWQMTFGJ4G6Z3EIY2FQTDRGFCHQWLJ"></Copy>
        <h5>{{$t('auth.google')}}</h5>
        <BaseInput :placeholder="`${$t('auth.google')}`"></BaseInput>
      </article>
    </section>
    <section class="auth__actions">
      <BaseButton :label="`${$t('cancel')}`" class="transparent"></BaseButton>
      <BaseButton :label="`${$t('save')} token`"></BaseButton>
    </section>
  </section>
</template>

<script>
import BaseInput from "@/components/form/BaseInput.vue";

import { ref } from "@vue/reactivity";
import Copy from "@/components/base/Copy.vue";
import BaseButton from "@/components/form/BaseButton.vue";
export default {
  components: {
    BaseInput,
    Copy,
    BaseButton
},
  setup() {
    const showSuccesUser = ref(false);
    return {
      showSuccesUser,
    };
  },
};
</script>


<style lang="scss" scoped>
.auth {
  cursor: default;
  &--Title {
    margin-top: 48px;
    margin-bottom: 24px;
    font-size: 26px;
    font-weight: 400;
    line-height: 32px;
    text-align: left;
  }
  &__container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    @media (max-width: 700px){
      grid-template-columns: 1fr ;
    }
    &__text{
      p{
        &.grey{
          color: #647188;
        }
        margin-bottom: 25px;
      }
      div{
        display: flex;
        margin-bottom: 25px;
        @media (max-width: 700px){
          flex-wrap: wrap;
        }
        img{
          margin-right: 20px;
          @media (max-width: 700px){
            margin-bottom: 20px;
          }
        }
      }
    }
    &__qr{
      display: flex;
      flex-direction: column;
      &--img{
        padding: 20px;
        margin: 0 auto;
        margin-bottom: 25px;
        border-radius: 8px;
        background: #F6F8FA;
        img{
          margin: 0 auto;
        }
      }
      .copy{
        margin-bottom: 25px;
      }
      h4{
        font-weight: 300;
        font-size: 16px;
        color: #647188;
        margin-bottom: 10px;
      }
      h5{
        margin-bottom: 10px;
        font-size: 16px;
      }
    }
  }
  &__actions{
    display: flex;
    justify-content: end;
    button{
      width: auto;
      margin-left: 20px;
    }
  }
}
</style>