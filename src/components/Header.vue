<template>
  <section class="header">
    <h2 style="color:#132D7C; text-transform: capitalize">{{ $route.name }}</h2>
    <article class="header__container" v-if="user && user.username">
      <article class="header__container-tab active" @click="$router.push({ name: 'Purchase-Token' })">
        <img src="/src/assets/icons/money.svg" alt="" />
        <div class="active__text">
          <h5>BUY KXP</h5>
          <p>$0.5 USD</p>
        </div>
      </article>
      <article class="header__container-tab copy" @click="copyURL(`https://my.kodexpay.com/#/auth/login/register/${user.username}`)">
        <img src="/assets/icons/copy.svg" alt="" />
        <h5>COPY LINK</h5>
      </article>
        <a href="https://support.kodexpay.com" target="_blank" style="text-decoration:none; color:black">
      <article
        class="header__container-tab copy"
      >
          <img src="/src/assets/icons/support.svg" alt="" />
          <h5>SUPPORT</h5>
      </article>
        </a>
      <!-- <article class="header__container-tab">
        <img src="/assets/icons/bell-not.svg" alt="" />
      </article> -->
      <article class="header__container-tab avatar" @click="showClose = !showClose" v-if="user">
        <img src="/assets/icons/avatar.png"  alt="" />
        <div>
          <p>{{ user.username }}</p>
          <h5>VERIFIED</h5>
        </div>
        <div @click="close" v-if="showClose == true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 12H3" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.94702 16C5.42002 18.961 8.46802 21 12 21C16.971 21 21 16.971 21 12C21 7.029 16.971 3 12 3C8.46802 3 5.42002 5.039 3.94702 8" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 9L15 12L12 15" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </article>
    </article>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  setup() {
    const copyURL = async (mytext) => {
      try {
        await navigator.clipboard.writeText(mytext);
        openNotification('Copiado exitosamente')
      } catch ($e) {
        openNotification('En estos momentos no es posible copiar')
      }
    };
    return {
      copyURL,
    };
  },
  data () {
    return {
      showClose: false
    }
  },
  methods: {
    ...mapActions('auth', ['logout']),
    close () {
      this.logout().then(() =>{
        this.$router.push({ name: 'Login' })
      })
    },
  },
  computed: {
    ...mapState('auth', ['user'])
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  max-height: 80px;
  margin-top: 20px;
  padding: 16px;
  border-radius: 16px;
  background: white;
  @media (max-width:700px) {
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
    @media (max-width: 800px) {
      align-items: center;
      width: 100%;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 12px;
    }
    a{
      @media (max-width: 700px){
        width: 100%;
      }
    }
    &-tab {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 15px;
      padding: 16px;
      border-radius: 12px;
      background: #f6f8fa;
      cursor: pointer;
      @media (max-width:700px) {
        margin-right: 0px;
      }
      &.copy {
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
        img {
          width: 40px;
          height: 40px;
          margin-right: 15px;
        }
      }
      img {
        width: 20px;
        height: 20px;
      }
      p {
        color: #647188;
        font-size: 12px;
        font-weight: 300;
      }
      h5 {
        font-size: 10px;
        font-weight: 400;
      }
    }
  }
}

.active {
  background: linear-gradient(180deg, #0d1c4e 0%, #000406 100%);
  &__text > h5, p{
    color: $white;
    margin-left: 12px;
    line-height: 14px;
  }
}
</style>