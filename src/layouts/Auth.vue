<template>
  <section class="auth">
    <img class="auth__img" src="@/assets/images/logoKodex.svg" alt="">
    <article class="auth__content">
      
      <router-view />
    </article>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.auth {
  display: flex;
  flex-direction: column;
  gap: 46px;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("../assets/images/fondo.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  &__content {
    display: flex;
    flex-direction: column;
    padding: 32px 24px;
    gap: 24px;
    background: #ffffff;
    border-radius: 16px;
    max-width: 400px;
  }
}
</style>


