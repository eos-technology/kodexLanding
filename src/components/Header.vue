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
      <article class="header__container-tab avatar" @click="show = !show" v-if="user">
        <img src="/assets/icons/avatar.png"  alt="" />
        <div>
          <p>{{ user.username }}</p>
          <h5>VERIFIED</h5>
        </div>        
        <div class="dropdown">
          <div id="myDropdown" class="dropdown-content" :class="show ? 'show' : ''">
            <a @click="$router.push({ path: `/profile` })" href="#"
              >Profile</a
            >
            <hr>
            <a href="#"
              ><img
                class="dropdown__imgMenu"
                src="@/assets/icons/logout.svg"
              />Logout</a
            >
          </div>
        </div>
      </article>
    </article>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { ref } from "vue";
export default {
  setup() {
  const show = ref(false);

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
      show
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
  text-decoration: none;
  border-radius: 8px;
  display: block;
  color: black;
}

.dropdown a:hover {
  color:#0F215C;
}

.show {
  display: block;
}
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
        > img {
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
.dropdown {
  position: relative;
  display: inline-block;
  &__imgMenu {
    margin-right: 10px;
    &.avatar{
    }
  }
}.active {
  background: linear-gradient(180deg, #0d1c4e 0%, #000406 100%);
  &__text > h5, p{
    color: $white;
    margin-left: 12px;
    line-height: 14px;
  }
}
</style>