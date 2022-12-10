<template>
  <section class="header">
    <h2 style="color: #132d7c; text-transform: capitalize" class="title">
      {{ $route.name }}
    </h2>

    <article class="header__container" v-if="user && user.username">
      <article class="lang">
        <div class="lang__box__select">
          <img :src="`src/assets/svg/${lang}.svg`" alt="" />
          <select
            class="lang__box-lang lang__text"
            name="lang"
            id="lang"
            v-model="lang"
            @change="handleChange($event)"
          >
            <option class="lang__text" value="en">EN</option>
            <option class="lang__text" value="es">ES</option>
          </select>
        </div>
      </article>

      <a
        href="https://support.kodexpay.com"
        target="_blank"
        style="text-decoration: none; color: black"
      >
        <article class="header__container-tab support">
          <img src="/src/assets/icons/support.svg" alt="" />
          <h5>{{ $t("header.sup") }}</h5>
        </article>
      </a>

      <article
        class="header__container-tab active"
        @click="$router.push({ name: 'Purchase-Token' })"
      >
        <img src="/src/assets/icons/money.svg" alt="" />
        <div class="active__text">
          <h5 class="text-uppercase">{{ $t("token.buy") }} KXP</h5>
          <p class="header__container-tab-p">$3.0 USD</p>
        </div>
      </article>

      <article class="header__container-tab green">
        <img src="@/assets/icons/walletcoin.svg" alt="" />
        <div>
          <p class="green__title">WALLET</p>
          <p class="green__text">$0.00</p>
        </div>
      </article>

      <!-- <article
        class="header__container-tab copy"
        @click="
          copyURL(
            `https://my.kodexpay.com/#/auth/login/register/${user.username}`
          )
        "
      >
        <img src="/assets/icons/copy.svg" alt="" />
        <h5>{{$t('header.copy')}}</h5>
      </article> -->

      <!-- <article class="header__container-tab">
        <img src="/assets/icons/bell-not.svg" alt="" />
      </article> -->
      <!-- <article
        class="header__container-tab avatar"
        @click="show = !show"
        v-if="user"
      >
        <img src="/assets/icons/avatar.png" alt="" />
        <div>
          <p>{{ user.username }}</p>
          <h5>{{$t('header.verify')}}</h5>
        </div>
        <div class="dropdown">
          <div
            id="myDropdown"
            class="dropdown-content"
            :class="show ? 'show' : ''"
          >
            <a @click="$router.push({ path: `/profile`})">Profile</a>
            <hr />
            <a href="#" @click="close()"
              ><img
                class="dropdown__imgMenu"
                src="@/assets/icons/logout.svg"
              />{{$t('header.out')}}</a
            >
          </div>
        </div>
      </article> -->
    </article>
  </section>
</template>



<script>
import { mapActions, mapState } from "vuex";
import { ref } from "vue";

export default {
  data() {
    return {
      showClose: false,
      lang: 'en',
    };
  },
  methods: {
    ...mapActions("auth", ["logout", 'chageLang']),
    handleChange(event) {
      let form = { lang: event.target.value };
      this.chageLang(form).then(() => {
        window.location.reload();
      });
    },
    close() {
      this.logout().then(() => {
        this.$router.push({ name: "Login" });
      });
    },
  },
  created() {
    this.lang = this.user && this.user.lang ? this.user.lang : "en";
  },
  computed: {
    ...mapState("auth", ["user"]),
  },
};
</script>

<style lang="scss" scoped>
.dropbtn {
  position: relative;
  cursor: pointer;
}

.dropbtn:hover,
.dropbtn:focus {
}

.dropdown-content {
  position: absolute;
  top: 15px;
  right: 0;
  width: 190px;
  display: none;
  color: black;
  background-color: $white;
  border-radius: 12px;
  margin-top: 12px;
  overflow: auto;
  z-index: 1;
  padding: 10px;
  &.show {
    display: block;
  }
}

.dropdown-content a {
  font-size: 15px;
  height: 100%;
  text-decoration: none;
  border-radius: 8px;
  display: block;
  color: black;
  padding: 10px;
  &:hover {
    background-color: #f6f8fa;
  }
}
hr {
  margin: 10px;
}

.dropdown a:hover {
  color: #0f215c;
}

.show {
  display: block;
}
.header {
  height: 78px;
  display: flex;
  justify-content: space-between;
  padding: 16px 0px;
  @media (max-width: 700px) {
    display: none !important;
  }
  @media (max-width: 900px) {
    display: block;
    max-height: 100%;
    flex-wrap: wrap;
  }
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 700px) {
      margin-bottom: 20px;
    }
  }
  &__container {
    display: flex;
    gap: 8px;
    &-tab {
      display: flex;
      align-items: center;
      padding: 8px 16px;
      border-radius: 12px;
      gap: 8px;
      height: 100%;
      cursor: pointer;
      &-p {
        font-size: 10px;
        font-weight: 300;
        line-height: 14px;
        text-align: left;
      }
      @media (max-width: 700px) {
        margin-right: 0px;
      }
      &.copy {
        height: auto;
        h5 {
          margin-left: 10px;
          font-weight: 400;
        }
      }
      @media (max-width: 700px) {
        height: 80px;
        width: 100%;
        margin-bottom: 12px;
      }
      &.avatar {
        height: auto;
        > img {
          width: 40px;
          height: 40px;
        }
      }
      img {
        width: 20px;
        height: 20px;
      }
      h5 {
        font-size: 10px;
        font-weight: 400;
      }
    }
  }
}
.dropdown {
  position: relative;
  display: inline-block;
  &__imgMenu {
    margin-right: 10px;
    &.avatar {
    }
  }
}
.active {
  background: linear-gradient(180deg, #0d1c4e 0%, #000406 100%);
  &__text > h5,
  p {
    color: $white;
    line-height: 14px;
  }
}

.support {
  background: #ffffff;
  border: 1px solid #ececee;
}

.green {
  background: #0ec564;
  &__title {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: #040e2c;
  }
  &__text {
    font-size: 10px;
    font-weight: 300;
    line-height: 14px;
    color: #040e2c;
  }
}

.title {
  display: grid;
  margin-right: 16px;
}

.lang {
  &__text {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: left;
    color: #040E2C;
  }
  &__subtitle {
    text-transform: capitalize;
  }
  &__box {
    display: flex;
    gap: 16px;
    align-items: center;
    &__select {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 16px;
      background: #fff;
      border: 1px solid #ececee;
      border-radius: 12px;
    }
    &-lang {
      border: none;
      outline: none;
      background: transparent;
    }
  }
  &__user {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
    background: #f6f8fa;
    border-radius: 8px;
    &-img {
      background-color: black;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      padding: 4px;
    }
  }
}
</style>