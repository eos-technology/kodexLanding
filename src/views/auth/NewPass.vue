<template>
  <h2>Nueva contraseña</h2>
  <p>
    The password must cointain: 1 capital letter, 1 number, 1 special character, minimum characters
  </p>
  <section class="recover">
    <label for=""><span>*</span> Nueva contraseña</label>
    <InputPass></InputPass>
    <label for=""><span>*</span> Nueva contraseña</label>
    <InputPass></InputPass>
    <BaseButton label="Enviar"></BaseButton>
  </section>
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
  setup() {
    const form = ref({});
    const active = ref(true);
    return {
      form,
      active,
    };
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
p {
  font-size: 14px;
  color: #647188;
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
  .InputPass{
    margin-bottom: 20px;
  }
}
</style>