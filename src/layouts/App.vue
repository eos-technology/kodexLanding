<template>
  <section class="appLayout">
    <section class="appLayout__sideBar">
      <img class="mb-5" src="/assets/images/KodexMini.png" style="max-width:100%" alt="">
      <h3 style="color:#647188">overview</h3>
      <article class="appLayout__sideBar__container">
        <div
          class="tabsContainer"
          :class="$route.path == element.path ? 'active' : ''"
          v-for="element in tabs"
          :key="element.name"
          @click="$router.push({ path: element.path })"
        >
          <img
            :src="`/assets/icons/${
              $route.path == element.path ? 'white' : 'black'
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
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
export default {
  setup() {
    const tabs = [
      { name: "Dashboard", icon: "dash", path: "/" },
      { name: "Token", icon: "token", path: "/token" },
      { name: "Wallet", icon: "wallet", path: "/wallet" },
      { name: "Comissions", icon: "comissions", path: "/commissions" },
      { name: "Red", icon: "red", path: "/team" },
      { name: "Staking", icon: "actions", path: "/acciones" },
      { name: "Profile", icon: "profile", path: "/profile" },
    ];
    const route = useRoute();
    const activeTab = ref(false);
    return {
      tabs,
      activeTab,
    };
  },
};
</script>

<style lang="scss" scoped>
.appLayout {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-gap: 30px;
  min-height: 100vh;
  padding-right: 30px;
  padding-bottom: 30px;
  background: #f7f8fa;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    padding: 10px;
  }
  &__sideBar {
    padding: 40px;
    background: linear-gradient(0deg, #0F215C, #0F215C), #040E2C;
    text-align: center;
    @media (max-width: 700px) {
      overflow: hidden;
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
    }
    &__container {
      text-align: start;
      @media (max-width: 700px) {
        display: flex;
        overflow: scroll;
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
        margin-bottom: 0;
        margin-right: 20px;
      }
        h4 {
          font-size: 14px;
          font-weight: 300;
        }
        &.active {
          background: white;
          h4 {
            color: #132D7C;
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
</style>