<template>
  <!-- <section class="loginToggle">
    <a :class="active ? 'active': ''" @click="active = true">{{$t('app.login')}}</a>
    <a :class="!active ? 'active': ''" @click="active = false">
    {{$t('app.register')}}</a>
  </section> -->
  <article class="header">
    <div class="header__box">
      <h2 class="titleh2">{{ $t("app.welcome") }}</h2>
      <p class="sp">{{ $t("app.welcomeMsg") }}</p>
    </div>
    <Login v-if="active"></Login>
    <!-- <Register
      :username="username"
      v-if="!active"
      @ready="active = true"
    ></Register> -->
  </article>
</template>
<script>
import BaseInput from "@/components/form/BaseInput.vue";
import InputPass from "@/components/form/InputPass.vue";
import { ref } from "@vue/reactivity";
import BaseButton from "../../components/form/BaseButton.vue";
import Login from "./Login.vue";
import Register from "./Register.vue";
export default {
  components: { BaseInput, InputPass, BaseButton, Login, Register },
  props: ["register", "username"],
  data() {
    return {
      active: true,
    };
  },
  created() {
    if (this.register) {
      this.active = false;
    }
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;
  gap: 24px;
  &__box{
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}
</style>