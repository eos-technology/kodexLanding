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
      <section class="appLayout__sideBar" :class="activeBar ? 'active' : ''">
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

        <h3 style="color: #647188">overview</h3>
        <article class="appLayout__sideBar__container">

          <div
            class="tabsContainer"

            :class="$route.path === '/' ? 'active' : $route.path.includes(element.path) ? 'active' : ''"
            v-for="element in tabs"
            :key="element.name"
            @click="
              () => {
                $router.push({ path: `/${element?.path ? element.path : ''}` });
                activeBar = false;
              }
            "
          >
            <img
              :src="`/assets/icons/${
                $route.path.includes(element.path) ? 'white' : 'black'
              }/${element.icon}.svg`"
              alt=""
            />
            <h4>{{ element.name }}</h4>
          </div>
        </article>
      </section>
      <section class="sectionApp">
        <router-view></router-view>
      </section>
    </section>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { mapActions } from "vuex";
import HeaderPhone from "../components/HeaderPhone.vue";
export default {
  setup() {
    const activeBar = ref(false);
    const tabs = [
      { name: "Dashboard", icon: "dash"  },
      { name: "Token", icon: "token", path: "token" },
      { name: "Wallet", icon: "wallet", path: "wallet" },
      { name: "Comissions", icon: "comissions", path: "commissions" },
      { name: "Team", icon: "red", path: "team" },
      { name: "Liquidity", icon: "actions", path: "actions" },
      { name: "Profile", icon: "profile", path: "profile" },
    ];
    const route = useRoute();
    const activeTab = ref(false);
    return {
      tabs,
      activeTab,
      activeBar,
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
  background-color: #f7f8fa;
}
.appLayout {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-gap: 30px;
  min-height: 100vh;
  height: 100%;
  padding-right: 30px;
  background: #f7f8fa;
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
    padding: 40px;
    background: linear-gradient(0deg, #0f215c, #0f215c), #040e2c;
    text-align: center;
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
      text-align: start;
      @media (max-width: 700px) {
      }
      .tabsContainer {
        margin-bottom: 20px;
        padding: 14px;
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.03);
        color: white;
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
          font-size: 14px;
          font-weight: 300;
          line-height: 16px;
          color: $white;
        }
        &.active {
          background: white;
          h4 {
            color: #132d7c;
          }
        }
      }
    }
  }
}
.sectionApp {
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
</style>