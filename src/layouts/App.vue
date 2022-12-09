<template>
  <div class="content">
    <header-phone class="menu__header"
      ><img
        @click="activeBar = true"
        class="menu__left-icon"
        src="@/assets/icons/menu.svg"
        alt=""
    /></header-phone>
    <section class="appLayout">
      <article>
        <section class="appLayout__sideBar" :class="activeBar ? 'active' : ''">
          <article>
            <div class="appLayout__sideBar-close">
              <img
                class="mb-5"
                src="@/assets/icons/kodex.svg"
                style="max-width: 100%"
                alt=""
              />
              <img
                class="appLayout__close"
                src="/src/assets/images/cerrar.jpg"
                alt=""
                id="close"
                @click="activeBar = false"
              />
            </div>

            <h3 style="color: #647188">profile</h3>

            <article class="profile">
              <div class="profile__btn">
                <div class="profile__box">
                  <img
                    style="width: 40px; height: 40px"
                    src="@/assets/images/user.png"
                    alt=""
                  />
                  <div>
                    <p class="profile--title">CAMILO</p>
                    <p class="profile--text">VERIFIED</p>
                  </div>
                </div>
                <img src="@/assets/images/arrow-right.svg" alt="" />
              </div>

              <div class="profile__btns">
                <div class="profile__btns--box profile__btns--box-blue">
                  <img src="@/assets/icons/money.svg" alt="" />
                  <div>
                    <p class="profile__btns--title">BUY KXP</p>
                    <p class="profile__btns--text">$0.05</p>
                  </div>
                </div>
                <div class="profile__btns--box">
                  <img
                    style="width: 16px"
                    src="@/assets/icons/link.svg"
                    alt=""
                  />
                  <p class="profile__btns--title">REFERIDOS</p>
                </div>
              </div>
            </article>

            <h3 style="color: #647188">overview</h3>
            <article class="appLayout__sideBar__container">
              <div
                class="tabsContainer"
                v-for="element in tabs"
                :class="getActiveTab(element)"
                :key="element.name"
                @click="
                  () => {
                    $router.push({ path: `${element.path}` });
                    activeBar = false;
                  }
                "
              >
                <img :src="`/assets/icons/black/${element.icon}.svg`" alt="" />
                <h4>{{ element.name }}</h4>
              </div>
            </article>
          </article>
          <div class="logout">
            <p class="logout__text">Cerrar sesión</p>
            <img class="logout__img" src="@/assets/icons/log.svg" alt="" />
          </div>
        </section>
      </article>
      <section class="sectionApp">
        <router-view></router-view>
      </section>
    </section>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { computed } from "vue";
import { mapActions } from "vuex";
import HeaderPhone from "../components/HeaderPhone.vue";
export default {
  setup() {
    const activeBar = ref(false);
    const tabs = [
      { name: "Dashboard", icon: "dash", path: "/" },
      { name: "Token", icon: "token", path: "/token" },
      { name: "Wallet", icon: "wallet", path: "/wallet" },
      { name: "Comissions", icon: "comissions", path: "/comissions" },
      { name: "Team", icon: "red", path: "/team" },
      { name: "Liquidity", icon: "actions", path: "/liquidity" },
      { name: "Profile", icon: "profile", path: "/profile" },
    ];
    const route = useRoute();
    console.log(`output->`, route);
    const activeTab = ref(false);
    const getActiveTab = (element) => {
      return route.name
        .toLocaleLowerCase()
        .includes(element.name.toLocaleLowerCase())
        ? "active"
        : "";
    };
    // const getUrlColor = (element) => {
    //   return route.name
    //     .toLocaleLowerCase()
    //     .includes(element.name.toLocaleLowerCase())
    //     ? "white"
    //     : "black";
    // };
    return {
      tabs,
      activeTab,
      activeBar,
      getActiveTab,
      // getUrlColor,
    };
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    ...mapActions("auth", ["getUserInfo"]),
  },
  components: { HeaderPhone },
};
</script>

<style lang="scss" scoped>
.menu__left-icon {
  margin-right: 12px;
  cursor: pointer;
}
.content {
  background-image: url("@/assets/images/bg.png");
  background-repeat: repeat;
  background-size: contain;
  min-height: 100vh;
}
.appLayout {
  display: grid;
  grid-template-columns: 248px 1fr;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  padding: 24px;
  gap: 24px;
  &__close {
    cursor: pointer;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    padding: 10px;
  }
  &__logo {
    margin-bottom: 60px;
  }
  &__sideBar {
    padding: 24px 16px;
    background: linear-gradient(0deg, #051030, #051030),
      linear-gradient(0deg, rgba(4, 14, 44, 0.9), rgba(4, 14, 44, 0.9)), #0f215c;
    border-radius: 24px;
    text-align: center;
    width: 248px;
    height: calc(100vh - 48px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    @media (max-width: 700px) {
      overflow: hidden;
      position: absolute;
      min-height: 100vh;
      height: 100%;
      top: -200vh;
      left: 0;
      width: 100vw;
      z-index: 5;
      transition: all 0.5s;
    }
    &-close {
      @media (max-width: 700px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 50px;
      }
      @media (max-height: 700px) {
        margin-bottom: 5px;
      }
    }
    #close {
      // position: absolute;
      // top: 10px;
      // left: 90%;
      width: 30px;
      height: 30px;
      border-radius: 12px;
      @media (min-width: 700px) {
        display: none;
      }
    }
    &.active {
      top: 0;
      position: fixed;
      min-height: 100%;
      @media (max-height: 700px) {
      }
    }
    h1 {
      color: white;
      font-family: "Kanit", sans-serif;
      font-weight: 500;
      margin-bottom: 60px;
    }
    h3 {
      text-align: start;
      font-size: 15px;
      font-family: "Jost", sans-serif;
      margin-bottom: 15px;
      color: $secondary-color;
      text-transform: uppercase;
    }
    &__container {
      display: flex;
      flex-direction: column;
      gap: 8px;
      @media (max-width: 700px) {
      }
      .tabsContainer {
        display: flex;
        align-items: center;
        padding: 8px;
        gap: 8px;
        color: #fcfcfc;
        text-align: center;
        cursor: pointer;
        @media (max-width: 700px) {
          min-width: 100px;
          margin-bottom: 15px;
        }
        @media (max-height: 800px) {
          margin-bottom: 10px;
          padding: 7px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.03);
          color: white;
          text-align: center;
          cursor: pointer;
        }
        h4 {
          font-size: 12px;
          font-weight: 300;
          line-height: 16px;
          color: $white;
        }
        &.active {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          h4 {
            color: #fff;
            color: #fff;
          }
        }
      }
    }
  }
}
.sectionApp {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  overflow: hidden;
}

.menu__header {
  position: sticky;
  z-index: 1;
  @media (min-width: 700px) {
    display: none;
  }
}

.profile {
  display: flex;
  flex-direction: column;
  gap: 12px;

  &__btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    cursor: pointer;
  }
  &__box {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  &--title {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: #fff;
  }
  &--text {
    font-size: 10px;
    font-weight: 300;
    line-height: 14px;
    letter-spacing: 0px;
    text-align: left;
    color: #fff;
  }
  &__btns {
    display: flex;
    gap: 8px;
    justify-content: space-between;
    margin-bottom: 24px;
    &--box {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      color: #fff;
      cursor: pointer;
      &-blue {
        background: linear-gradient(0deg, #007bd1, #007bd1), #194ef0;
      }
    }
    &--title {
      font-size: 10px;
      font-weight: 400;
      line-height: 14px;
    }
    &--text {
      font-size: 10px;
      font-weight: 300;
      line-height: 14px;
    }
  }
}

.logout {
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  cursor: pointer;
  bottom: 0;
  &__text {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: #fff;
    text-transform: uppercase;
  }
}
</style>