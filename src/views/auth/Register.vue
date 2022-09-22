<template>
  <section class="RegisterContainer">
    <label for=""><span>*</span> Nombre completo</label>
    <BaseInput placeholder="Ariel Camacho"></BaseInput>
    <label for=""><span>*</span> Email</label>
    <BaseInput placeholder="example@mail.com"></BaseInput>
    <label for=""><span>*</span> Celular</label>
    <FlagInput v-model="form.phone"></FlagInput>
    <label for=""><span>*</span> Contraseña</label>
    <InputPass placeholder="Password" v-model="form.pass"></InputPass>
    <BaseButton label="Button" @click="$router.push(({ path: '/dashboard' }))"></BaseButton>
    <div>
      <router-link to="/about">Olvide mi clave</router-link>
    </div>
  </section>
  
</template>

<script>
import BaseInput from "@/components/form/BaseInput.vue";
import InputPass from "@/components/form/InputPass.vue";
import { ref } from "@vue/reactivity";
import BaseButton from "../../components/form/BaseButton.vue";
import FlagInput from '@/components/form/FlagInput.vue';

export default {
  components: { BaseInput, InputPass, BaseButton, FlagInput },
  setup() {
    const form = ref({});
    return {
      form,
    };
  },
};
</script>

<style lang="scss" scoped>
.RegisterContainer {
  padding: 32px;
  text-align: start;
  label {
    display: block;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 10px;
    color: #0f215c;
    span {
      color: #ff4e78;
    }
  }
  input {
    margin-bottom: 25px;
  }
  a {
    color: #0f2460;
    font-size: 16px;
    font-weight: 500;
    &:hover {
      text-decoration: none;
    }
  }
  > div {
    text-align: center;
  }
}
</style>