<template>
  <h2>New password</h2>
  <p>
    The password must cointain: 1 capital letter, 1 number, 1 special character, minimum characters
  </p>
  <section class="recover">
    <label for=""><span>*</span> New password</label>
    <InputPass v-model="form.password"></InputPass>
    <label for=""><span>*</span> Confirm password</label>
    <InputPass v-model="r_password"></InputPass>
    <div class="text" v-if="message">
      {{message}}
    </div>
    <BaseButton :disabled="message != null" @click="onSubmit" label="Recover my password"></BaseButton>
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
  props: ['id', 'hash'],
  data () {
      return {
          form: {
              id: null,
              password: null
          },
          r_password: null,
          loading: false,
          message: null
      }
  },
  created (){
      this.form.id = this.id
  },
  methods: {
    ...mapActions('interceptors', ['setError']),
    ...mapActions('auth', ['passwordReset']),
    onSubmit () {
        this.loading = true
        this.passwordReset(this.form).then(response => {
            this.loading = false
            openNotification('Password changed, please signIn')
            this.$router.push({
                name: 'Signin'
            })
        })
        this.loading = false
    },
  },
  watch: {
    r_password: function (val) {
      if(val != this.form.password) {
          this.message = 'Passwords not match'
      } else {
          this.message = null
      }
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
  .InputPass{
    margin-bottom: 20px;
  }
}
</style>