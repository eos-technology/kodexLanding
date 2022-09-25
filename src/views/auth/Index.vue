<template>
  <section class="loginToggle">
    <a :class="active ? 'active': ''" @click="active = true">Login</a>
    <a :class="!active ? 'active': ''" @click="active = false">Registrar</a>
  </section>
  <h2>Bienvenidos</h2>
  <Login v-if="active"></Login>
  <Register :username="username" v-if="!active" @ready="active = true"></Register>
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
    props: ['register', 'username'],
    data () {
      return {
        active: true
      }
    },
    created () {
      if(this.register) {
        this.active = false
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
.loginToggle{
  display: flex;
  padding: 32px;
  @media (max-width: 700px){
padding-top: 10px;
    }
  a{
    display: block;
    width: 50%;
    padding: 20px;
    color: #647188;
    border-bottom: 1px solid #647188;
    font-size: 16px;
    cursor: pointer;
    text-decoration: none;
    &.active{
      font-weight: 400;
      color: #000;
      border-bottom: 3px solid #000;
    }
  }
}

</style>