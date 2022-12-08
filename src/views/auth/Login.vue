<template>
  <section class="login">
    <div class="label">
      <label class="label__text" for=""
        ><span class="label__span">*</span> {{ $t("app.mail") }}</label
      >
      <BaseInput
        placeholder="example@mail.com"
        v-model="form.email"
      ></BaseInput>
    </div>
    <div class="label">
      <label class="label__text" for=""
        ><span class="label__span">*</span> {{ $t("app.pass") }}</label
      >
      <InputPass
        :placeholder="$t('app.pass')"
        v-model="form.password"
      ></InputPass>
    </div>

    <article class="remember">
      <label class="checkBox" for="cbox"
        ><input type="checkbox" id="cbox" value="check" />{{
          $t("app.remember")
        }}</label
      >
      <router-link to="/recover" class="link link--right" href="">{{ $t("app.forPass") }}</router-link>
    </article>

    <article class="captcha"></article>

    <BaseButton @click="onSumbit()" :label="$t('app.login')"/>

    <p class="sp">Or</p>

    <BaseButton class="outline" :label="$t('app.signin')" ></BaseButton>
  </section>
</template>

<script>
import BaseInput from "@/components/form/BaseInput.vue";
import InputPass from "@/components/form/InputPass.vue";
import { ref } from "@vue/reactivity";
import BaseButton from "../../components/form/BaseButton.vue";
import { mapActions } from "vuex";
export default {
  components: { BaseInput, InputPass, BaseButton },
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    ...mapActions("auth", ["login"]),
    onSumbit() {
      this.login(this.form).then((response) => {
        this.$router.push({
          name: "Dashboard",
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.remember {
  display: flex;
  justify-content: space-between;
}

.captcha {
  height: 74px;
  background: #fafafa;
  border: 1px solid #d6d6d6;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
}
</style>