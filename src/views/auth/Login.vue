<template>
  <section class="loginContainer">
    <label for=""><span>*</span> {{$t('app.mail')}}</label>
    <BaseInput placeholder="example@mail.com" v-model="form.email"></BaseInput>
    <label for=""><span>*</span> {{$t('app.pass')}}</label>
    <InputPass :placeholder="$t('app.pass')" v-model="form.password"></InputPass>
    <BaseButton :label="$t('app.signin')" @click="onSumbit()"></BaseButton>
    <div>
      <router-link to="/recover">{{$t('app.forPass')}}</router-link>
    </div>
  </section>
</template>

<script>
  
import BaseInput from '@/components/form/BaseInput.vue';
import InputPass from '@/components/form/InputPass.vue';
import { ref } from '@vue/reactivity';
import BaseButton from '../../components/form/BaseButton.vue';
import { mapActions } from 'vuex';
export default {
    components: { BaseInput, InputPass, BaseButton },
    data () {
      return {
        form: {
          email: null,
          password: null
        }
      }
    },
    methods: {
      ...mapActions('auth', ['login']),
      onSumbit() {
        this.login(this.form).then(response => {
          console.log("RESPONSE")
          this.$router.push({
            name: 'Dashboard'
          })
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
.loginContainer{
  padding: 32px;
  text-align: start;
  label{
    display: block;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 10px;
    color: #0F215C;
    span{
      color: #FF4E78;
    }
  }
  input{
    margin-bottom: 25px;
    
  }
  a{
    color: #0F2460;
    font-size: 16px;
    font-weight: 500;
    &:hover{
      text-decoration: none;
    }
  }
  > div{
    text-align: center;
  }
}
</style>