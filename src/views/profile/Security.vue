<template>
  <div class="data">
    <h2 class="data--Title">Change password</h2>
    <div class="info">
      <div class="grid">
        <div class="grid--item">
          <label for="currentPass" class="grid--title"
            ><span class="grid--span">*</span>New password</label
          >
          <BaseInput
            class="grid--btn"
            type="password"
            placeholder="********"
            id="currentPass"
            v-model="form.password"
          />
        </div>
        <div class="grid--item">
          <label for="newPass" class="grid--title"
            ><span class="grid--span">*</span>Current password</label
          >
          <BaseInput
            class="grid--btn"
            type="password"
            placeholder="********"
            id="newPass"
            v-model="form.password"
          />
        </div>
        <div class="grid--item">
          <label for="Pass" class="grid--title"
            ><span class="grid--span">*</span>Confirm new password</label
          >
          <BaseInput
            class="grid--btn"
            type="password"
            placeholder="********"
            id="Pass"
            v-model="r_password"
          />
        </div>
      </div>
      <div v-if="message">
        {{ message }}
      </div>
      <section class="data__actions">
        <BaseButton label="Cancel" class="transparent"></BaseButton>
        <BaseButton label="Save" @click="onSubmit"></BaseButton>
      </section>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import BaseInput from "@/components/form/BaseInput.vue";
import BaseButton from "@/components/form/BaseButton.vue";
export default {
  components: { BaseInput, BaseButton },
  data() {
    return {
      loading: false,
      r_password: null,
      r_pin: null,
      form: {
        id: null,
        password: null,
        pin: null,
      },
      message: null,
    };
  },
  methods: {
    ...mapActions("interceptors", ["setError"]),
    ...mapActions("auth", ["password"]),
    onSubmit() {
      this.loading = true;
      this.form.id = this.user.id;

      this.password(this.form).then(() => {
        openNotification();
        this.loading = false;
      });
    },
    validateAuth() {
      this.$router.push({ name: "Dashboard" });
    },
  },
  computed: {
    ...mapState("auth", ["user"]),
  },
  watch: {
    r_password: function (val) {
      if (val != this.form.password) {
        this.message = "Password do not match";
      } else {
        this.message = null;
      }
    },
    r_pin: function (val) {
      if (val != this.form.pin) {
        this.message = "Pin do not match";
      } else {
        this.message = null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.data {
  cursor: default;
  font-size: 14px;
  @media (max-width: 576px) {
    margin: 8px auto;
    width: 100%;
  }
  &--Title {
    margin-top: 48px;
    margin-bottom: 24px;
    font-size: 26px;
    font-weight: 400;
    line-height: 32px;
    text-align: left;
  }

  .info {
    &--title {
      font-size: 16px;
      font-weight: 500;
      line-height: 32px;
      margin-top: 32px;
      margin-bottom: 8px;
      color: #000;
    }

    &--p {
      font-size: 14px;
      font-weight: 300;
      line-height: 32px;
      color: #000;
      margin-bottom: 24px;
    }
  }

  .grid {
    display: grid;
    grid-template-columns: auto;

    &--item {
      display: flex;
      flex-direction: column;
    }

    &--span {
      font-weight: 500;
      color: #d00573;
      font-size: 16px;
      line-height: 24px;
      margin-right: 5px;
    }

    &--title {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #000;
      margin-bottom: 8px;
    }

    &--btn {
      height: 48px;
      background: rgba(51, 106, 179, 0.05);
      border-radius: 16px;
      padding: 12px 16px;
      gap: 8px;
      margin-bottom: 24px;
      color: #000;
    }
  }

  .pass {
    text-align: center;
    text-decoration: underline;
    margin-top: 64px;
    margin-bottom: 24px;

    a {
      color: #000;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
    }
  }

  .btnF {
    display: flex;
    justify-content: flex-end;
    @media (max-width: 576px) {
      flex-direction: column;
      align-items: center;
    }

    &--C {
      border-radius: 16px;
      height: 48px;
      width: 200px;
      padding: 12px 27px;
      font-weight: 500;
      margin-right: 20px;
      border: none;
    }

    &--G {
      background-color: #000;
      border-radius: 16px;
      width: 200px;
      height: 48px;
      padding: 12px 27px;
      font-weight: 500;
      color: white;
    }
  }
  &__actions {
    display: flex;
    justify-content: end;
    button {
      width: auto;
      margin-left: 20px;
    }
  }
}
</style>