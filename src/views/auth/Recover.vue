<template>
  <section class="recover">
    <GoBack />
    <h2 class="titleh2">{{ $t("app.recover") }}</h2>
    <p class="sp mb-4">
      {{ $t("app.recoverText") }}
    </p>
    <label for=""><span>*</span> Email</label>
    <BaseInput v-model="form.email" placeholder="example@mail.com"></BaseInput>
    <BaseButton @click="onSubmit" :label="$t('app.send')"></BaseButton>
  </section>
</template>
<script>
import BaseInput from "@/components/form/BaseInput.vue";
import InputPass from "@/components/form/InputPass.vue";
import { ref } from "@vue/reactivity";
import BaseButton from "../../components/form/BaseButton.vue";
import Login from "./Login.vue";
import Register from "./Register.vue";
import { mapActions } from "vuex";
import GoBack from "@/components/form/GoBack.vue";
export default {
  components: { BaseInput, InputPass, BaseButton, Login, Register, GoBack },
  data() {
    return {
      form: {
        email: null,
      },
      loading: false,
    };
  },
  methods: {
    ...mapActions("auth", ["resetPassword"]),
    onSubmit() {
      this.resetPassword(this.form).then((response) => {
        openNotification(
          "Verifica tu correo para recuperar la contraseña",
          null
        );
        this.$router.push({
          name: "Login",
        });
      });
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  font-weight: 500;
  font-size: 36px;
  color: #000;
  margin-bottom: 15px;
}
.recover {
  padding: 32px;
  label {
    display: block;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 10px;
    color: #0f215c;
    text-align: start;
    span {
      color: #ff4e78;
    }
  }
}
</style>