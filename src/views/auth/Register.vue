<template>
  <section class="RegisterContainer">
    <label for=""><span>*</span> {{ $t("app.fullname") }}</label>
    <BaseInput v-model="form.names" placeholder="Ariel Camacho"></BaseInput>
    <label for=""><span>*</span> Email</label>
    <BaseInput v-model="form.email" placeholder="example@mail.com"></BaseInput>
    <label for=""><span>*</span> {{$t('app.cellphone')}}</label>
    <FlagInput v-model="form.phone"></FlagInput>
    <label for=""><span>*</span> {{ $t("app.pass") }}</label>
    <InputPass
      v-model="form.password"
      :placeholder="$t('app.pass')"
    ></InputPass>
    <div class="form-check mt-4 check">
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
      />
      <label class="form-check-label" for="flexCheckDefault">
        <p class="check__text">
          {{$t('app.terms')}}
          <a href="#" class="check__link"
            >{{$t('app.conditions')}}</a
          >
        </p>
      </label>
    </div>
    <BaseButton :label="$t('app.signin')" @click="onSubmit()"></BaseButton>
    <div>
      <router-link to="/recover">{{ $t("app.forPass") }}</router-link>
    </div>
  </section>
</template>

<script>
import BaseInput from "@/components/form/BaseInput.vue";
import InputPass from "@/components/form/InputPass.vue";
import { ref } from "@vue/reactivity";
import BaseButton from "../../components/form/BaseButton.vue";
import FlagInput from "@/components/form/FlagInput.vue";
import { mapActions } from "vuex";

export default {
  components: { BaseInput, InputPass, BaseButton, FlagInput },
  props: ["username"],
  data() {
    return {
      form: {
        names: null,
        username: null,
        phone: null,
        email: null,
        password: null,
        user_parent: null,
      },
    };
  },
  created() {
    if (this.username) {
      this.form.user_parent = this.username;
    }
  },
  methods: {
    ...mapActions("auth", ["register"]),
    onSubmit() {
      this.register(this.form).then(() => {
        openNotification();
        this.$emit("ready");
      });
    },
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

.check {
  display: flex;
  align-items: center;
  gap: 8px;
  .check__text {
    font-size: 14px;
    font-weight: 300;
    line-height: 24px;
    text-align: left;
  }
  .check__link {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: #007bd1;
  }
}

</style>