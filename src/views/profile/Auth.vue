<template>
  <section class="auth">
    <h2 class="auth--Title">Two-factor Authentication</h2>
    <section class="auth__container">
      <article class="auth__container__text">
        <p>
          Two factor authentication provides extra protection for your account
          by requiring a special code. Note: You are only activating two factor
          authentication for the main password.
        </p>
        <p>Have a smart phone? Use Google Authenticator!</p>
        <div>
          <img src="@/assets/images/apple.jpg" alt="" />
          <img src="@/assets/images/andrioid.jpg" alt="" />
        </div>
        <p class="grey">
          Android, Google Play and the Google Play logo are trademarks of Google
          Inc. Apple and the Apple logo are trademarks of Apple Inc., registered
          in the U.S. and other countries. App Store is a service mark of Apple
          Inc.
        </p>
        <p>
          To enable two factor authentication, scan the QR code on the right
          using Google Authenticator. When you have successfully scanned the QR
          code, enter the token from Google Authenticator into the "verify
          token" field. We make sure you can generate tokens correctly before
          enabling two factor auth.
        </p>
      </article>
      <article class="auth__container__qr">
        <div class="auth__container__qr--img">
          <img src="@/assets/images/qr.png" alt="">
        </div>
        <h4>Secret Key</h4>
        <Copy></Copy>
        <h5>Google authenticator Token</h5>
        <BaseInput placeholder="Google authenticator Token"></BaseInput>
      </article>
    </section>
    <section class="auth__actions">
      <BaseButton label="Cancel" class="transparent"></BaseButton>
      <BaseButton label="Verificar token"></BaseButton>
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
  &--Title {
    font-size: 26px;
    font-weight: 700;
    line-height: 32px;
    margin-top: 32px;
    margin-bottom: 24px;
    color: #000;
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