<template>
  <div class="data">
    <div class="frame">
      <img
        class="frame--avatar"
        :src="apiUrl + '/uploads/users/' + user.image"
        alt=""
      />
      <button class="frame--upButton">{{$t('profile.img')}}</button>
    </div>
    <div class="info">
      <h2 class="info--title">{{$t('profile.title')}}</h2>
      <div class="grid">
        <div class="grid--item">
          <label for="name" class="grid--title"
            >{{$t('profile.name')}}</label
          >
          <BaseInput
            class="grid--btn"
            type="text"
            :placeholder="`${$t('profile.img')}`"
            id="name"
            v-model="user.names"
          />
        </div>
        <div class="grid--itemD">
          <label for="phone" class="grid--title"
            >{{$t('profile.lastName')}}</label
          >
          <BaseInput
            class="grid--btn"
            type="text"
            :placeholder="`${$t('profile.img')}`"
            id="phone"
            v-model="user.phone"
          />
        </div>
        <div class="grid--item">
          <label for="user" class="grid--title"
            >{{$t('profile.user')}}</label
          >
          <BaseInput
            class="grid--btn"
            type="text"
            :placeholder="`${$t('profile.user')}`"
            id="user"
            :disabled="true"
            v-model="user.username"
          />
        </div>
        <div class="grid--itemD">
          <label for="email" class="grid--title"
            ><span class="grid--span">*</span>{{$t('profile.phone')}}</label
          >
          <flag-input/>
        </div>
      </div>
      <section class="data__actions">
        <BaseButton :label="`${$t('cancel')}`" class="transparent"></BaseButton>
        <BaseButton :label="`${$t('save')}`" @click="onSubmit"></BaseButton>
      </section>
    </div>
  </div>
</template>
<script>
import BaseInput from "@/components/form/BaseInput.vue";
import BaseButton from "@/components/form/BaseButton.vue";
import { mapActions, mapState } from "vuex";
import FlagInput from '@/components/form/FlagInput.vue';

export default {
  components: { BaseInput, BaseButton, FlagInput },
  created() {
    this.getUserInfo();
  },
  methods: {
    ...mapActions("auth", ["getUserInfo", "updateUser"]),
    changeFiles() {
      this.user.image = this.$refs.image.files[0];
    },
    onSubmit() {
      const formData = new FormData();
      formData.append("id", this.user.id);
      formData.append("username", this.user.username);
      formData.append("image", this.user.image);
      formData.append("names", this.user.names);
      formData.append("email", this.user.email);
      formData.append("phone", this.user.phone);

      this.updateUser({ data: formData, id: this.user.id }).then(() => {
        this.getUserInfo();
        openNotification();
        this.loading = false;
      });
    },
  },
  computed: {
    ...mapState("auth", ["user"]),
  },
};
</script>

<style lang="scss" scoped>
.data {
  cursor: default;
  .frame {
    margin: 48px 0;
    display: flex;
    align-items: center;
    @media (max-width: 576px) {
      flex-direction: column;
      gap: 20px;
    }

    &--avatar {
      background: #dcd7fb;
      border-radius: 100%;
      border: 3px solid #000;
      max-width: 100px;
    }

    &--upButton {
      padding: 8px 16px;
      height: 40px;
      margin-left: 20px;
      border: 1px solid #132d7c;
      background-color: transparent;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      text-align: center;
    }

    &--deleteButton {
      background-image: url("/assets/images/trash.svg");
      background-position: 5% center;
      background-repeat: no-repeat;
      outline: none;
      padding: 4px 30px;
      height: 40px;
      margin-left: 20px;
      border-radius: 12px;
      font-weight: 500;
    }
  }

  .info {
    &--title {
      font-size: 26px;
      font-weight: 400;
      line-height: 32px;
      text-align: left;
      margin-bottom: 24px;
      @media (max-width: 576px) {
        width: 90%;
      }
    }
  }

  .grid {
    display: grid;
    grid-template-columns: auto auto;
    @media (max-width: 910px) {
      grid-template-columns: auto;
      width: 100%;
    }
    @media (max-width: 576px) {
      width: 100%;
    }

    &--item {
      display: flex;
      flex-direction: column;
      margin-right: 10px;
      @media (max-width: 910px) {
        margin-right: 0;
        width: 100%;
        margin: 0 auto;
      }
    }

    &--itemD {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      @media (max-width: 910px) {
        margin-left: 0;
        width: 100%;
        margin: 0 auto;
      }
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
      background: #eef0f1;
      border-radius: 16px;
      margin-bottom: 20px;
      color: #000;
      padding: 14px;
      width: 100%;
      font-size: 14px;
      border: none;
      outline: none;
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
      border: none;
      border-radius: 16px;
      height: 48px;
      width: 200px;
      padding: 12px 27px;
      font-weight: 500;
      margin-right: 20px;
    }

    &--G {
      border: none;
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