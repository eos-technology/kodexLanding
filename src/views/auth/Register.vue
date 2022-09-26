<template>
  <section class="RegisterContainer">
    <label for=""><span>*</span> Referral by</label>
    <BaseInput v-model="form.user_parent" placeholder="Ariel Camacho"></BaseInput>
    <label for=""><span>*</span> Full names</label>
    <BaseInput v-model="form.names" placeholder="Ariel Camacho"></BaseInput>
    <label for=""><span>*</span> Username</label>
    <BaseInput v-model="form.username" placeholder="ArielCamacho"></BaseInput>
    <label for=""><span>*</span> Email</label>
    <BaseInput v-model="form.email" placeholder="example@mail.com"></BaseInput>
    <!-- <label for=""><span>*</span> Celular</label>
    <FlagInput v-model="form.phone"></FlagInput> -->
    <label for=""><span>*</span> Password</label>
    <InputPass v-model="form.password" placeholder="Password"></InputPass>
    <BaseButton label="SignUp" @click="onSubmit()"></BaseButton>
    <div>
      <router-link to="/recover">Forgot my password</router-link>
    </div>
  </section>
  
</template>

<script>
import BaseInput from "@/components/form/BaseInput.vue";
import InputPass from "@/components/form/InputPass.vue";
import { ref } from "@vue/reactivity";
import BaseButton from "../../components/form/BaseButton.vue";
import FlagInput from '@/components/form/FlagInput.vue';
import { mapActions } from 'vuex';

export default {
  components: { BaseInput, InputPass, BaseButton, FlagInput },
  props: ['username'],
  data () {
    return {
      form: {
        names: null,
        username: null,
        phone: null,
        email: null,
        password: null,
        user_parent: null
      }
    }
  },
  created () {
    if(this.username) {
      this.form.user_parent = this.username
    }
  },
  methods: {
    ...mapActions('auth',['register']),
    onSubmit() {
      this.register(this.form).then(() => {
        openNotification()
        this.$emit('ready')
      })
    }
  }
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