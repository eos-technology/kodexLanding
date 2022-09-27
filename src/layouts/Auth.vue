<template>
  <section class="authLayout">
    <article class="authLayout__img">
      <img src="/assets/images/login.jpg" alt="">
    </article>
    <article class="authLayout__contain">
        <img src="/assets/images/KodexPay.png" alt="">
        <router-view />
    </article>
  </section>
    
</template>

<script>

export default {
};
</script>

<style lang="scss" scoped>
  .authLayout{
    min-height: 100vh;
    height: 100%;
    overflow: hidden;
    display: grid;
    grid-template-columns: 60% 40%;
    @media (max-width: 700px){
      grid-template-columns: 1fr;
    }
    &__img{
      @media (max-width: 700px){
      display: none;
    }
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &__contain{
      padding-top: 80px;
      text-align: center;
      background-color: white;
      @media (max-width: 700px){
      padding-top: 20px;
    }
      img{
        max-width: 200px;
        margin: 0 auto;
      }
    }
  }
</style>


