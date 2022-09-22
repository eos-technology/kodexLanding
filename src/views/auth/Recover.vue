<template>
  <h2>Recuperar contraseña</h2>
  <p>
    Ingrese su dirección de correo electrónico a continuación y le enviaremos
    instrucciones para configurar una nueva
  </p>
  <section class="recover">
    <label for=""><span>*</span> Email</label>
    <BaseInput placeholder="example@mail.com"></BaseInput>
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
}
</style>