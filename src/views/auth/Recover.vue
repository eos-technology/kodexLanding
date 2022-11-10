<template>
  <section class="recover">
    <h2>Recover password</h2>
    <p>
      Enter your email address below and we'll <br> send you instructions to set up a new one
    </p>
    <label for=""><span>*</span> Email</label>
    <BaseInput v-model="form.email" placeholder="example@mail.com"></BaseInput>
    <BaseButton @click="onSubmit" label="Send Email"></BaseButton>
  </section>
</template>
<script>
import BaseInput from "@/components/form/BaseInput.vue";
import InputPass from "@/components/form/InputPass.vue";
import { ref } from "@vue/reactivity";
import BaseButton from "../../components/form/BaseButton.vue";
import Login from "./Login.vue";
import Register from "./Register.vue";
import { mapActions } from 'vuex';
export default {
  components: { BaseInput, InputPass, BaseButton, Login, Register },
  data () {
      return {
          form: {
            email: null
          },
          loading: false
      }
  },
  methods: {
      ...mapActions('auth', ['resetPassword']),
      onSubmit () {
        this.resetPassword(this.form).then(response => {
            openNotification('Verifica tu correo para recuperar la contraseña', null)
            this.$router.push({
                name: 'Login'
            })
        })
        this.loading = false
      }
  }
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