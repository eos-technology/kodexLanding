<template>
  <section class="appLayout">
    <section class="appLayout__sideBar">
      <h1>PayKodex</h1>
      <article class="appLayout__sideBar__container">
        <h3>overview</h3>
        <div class="tabsContainer" :class="$route.path == element.path ? 'active' : '' " v-for="element in tabs" :key="element.name" @click="$router.push({ path: element.path })">
          <img :src="`/src/assets/icons/${$route.path == element.path ? 'white' : 'black'}/${element.icon}.svg`" alt="">
          <h4>{{element.name}}</h4>
        </div>
      </article>
    </section>
    <section class="sectionApp">
      <router-view></router-view>
    </section>
  </section>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRoute } from 'vue-router'
export default {
  setup(){
    const tabs = [
      {name: 'Dashboard', icon: 'dash' , path: '/'},
      {name: 'Token', icon: 'token' , path: '/token'},
      {name: 'Wallet', icon: 'wallet' , path: '/wallet'},
      {name: 'Comissions', icon: 'comissions' , path: '/commissions'},
      {name: 'Red', icon: 'red' , path: '/red'},
      {name: 'Acciones', icon: 'actions' , path: '/acciones'},
      {name: 'Profile', icon: 'profile' , path: '/profile'},
    ]
    const route = useRoute()
    const activeTab = ref(false)
    return{
      tabs,
      activeTab,
    }
  }
}
</script>

<style lang="scss" scoped>
  .appLayout{
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-gap: 30px;
    min-height: 100vh;
    padding-right: 30px;
    padding-bottom: 30px;
    background: #f7f8fa;
    &__sideBar{
      padding: 40px;
      background-color: white;
      text-align: center;
      h1{
        color: black;
        font-family: 'Kanit', sans-serif;
        font-weight: 500;
        margin-bottom: 60px;
      }
      &__container{
        text-align: start;
        h3{
          font-size: 15px;
          font-family: 'Jost', sans-serif;
          margin-bottom: 15px;
        }
        .tabsContainer{
          margin-bottom: 20px;
          padding: 14px;
          border-radius: 10px;
          background: #F6F8FA;
          text-align: center;
          cursor: pointer;
          h4{
            font-size: 14px;
            font-weight: 300;
          }
          &.active{
            background: #000000;
            h4{
              color: white;
            }
          }
        }
      }
    }
  }
  .sectionApp{
    width: 100%;
    overflow: hidden;
  }
</style>