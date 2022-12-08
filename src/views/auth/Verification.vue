<template>
  <section class="verification">
    <GoBack />
    <h2 class="titleh2">Código Verificación</h2>
    <p class="sp">Check your email for a validation code and enter here</p>
    <section class="verification">
      <section class="verification__otp">
        <BaseInput type="number" maxlength="1" />
        <BaseInput type="number" maxlength="1" />
        <BaseInput type="number" maxlength="1" />
        <BaseInput type="number" maxlength="1" />
      </section>
      <BaseButton
        label="Check code"
        @click="$router.push({ path: '/dashboard' })"
      ></BaseButton>

      <router-link class="link verification__link" to="/"
        >Reenviar code</router-link
      >
    </section>
  </section>
</template>
<script setup>
import GoBack from "@/components/form/GoBack.vue";
import BaseInput from "@/components/form/BaseInput.vue";
import InputPass from "@/components/form/InputPass.vue";
import { ref } from "@vue/reactivity";
import BaseButton from "../../components/form/BaseButton.vue";
import Login from "./Login.vue";
import Register from "./Register.vue";

const form = ref({});
const active = ref(true);
</script>

<style lang="scss" scoped>
p {
  font-size: 14px;
  color: #647188;
}
.verification {
  display: flex;
  flex-direction: column;
  gap: 24px;
  &__otp {
    display: flex;
    input {
      margin-right: 20px;
      &::-webkit-outer-spin-button {
        -webkit-appearance: none;
      }
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
    }
  }
  &__link {
    text-align: center;
  }
}
</style>