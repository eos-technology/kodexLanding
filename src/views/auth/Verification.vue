<template>
  <h2>Código Verificación</h2>
  <p>Check your email for a validation code and enter here</p>
  <section class="verification">
    <section class="verification__otp"> 
      <BaseInput type="number" maxlength="1" />
      <BaseInput type="number" maxlength="1" />
      <BaseInput type="number" maxlength="1" />
      <BaseInput type="number" maxlength="1" />
    </section>
    <BaseButton label="Check code" @click="$router.push(({ path: '/dashboard' }))"></BaseButton>
    <div>
      <router-link to="/">Reenviar code</router-link>
    </div>
  </section>
</template>
<script>
import BaseInput from '@/components/form/BaseInput.vue';
import InputPass from '@/components/form/InputPass.vue';
import { ref } from '@vue/reactivity';
import BaseButton from '../../components/form/BaseButton.vue';
import Login from './Login.vue';
import Register from './Register.vue';
  export default {
    components: { BaseInput, InputPass, BaseButton, Login, Register },
    setup(){
      const form = ref({})
      const active = ref(true)
      return{
        form,
        active
      }
    }
  }
</script>

<style lang="scss" scoped>
h2{
  font-weight: 500;
  font-size: 36px;
  color: #000;
  margin-bottom: 15px;
}
p{
  font-size: 14px;
  color: #647188;
}
.verification{
  padding: 32px;
  &__otp{
    display: flex;
    input{
      margin-right: 20px;
      &::-webkit-outer-spin-button{
        -webkit-appearance: none;
      }
      &::-webkit-inner-spin-button{
        -webkit-appearance: none;
      }
    }
  }
  a{
    font-weight: 500;
    color: #0F2460;
  }
}

</style>