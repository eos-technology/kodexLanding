<template>
  <section class="header">
    <h2>{{ $route.name }}</h2>
    <article class="header__container">
      <article class="header__container-tab">
        <img src="/src/assets/icons/24-circle.svg" alt="" />
      </article>
      <article class="header__container-tab">
        <img src="/src/assets/icons/bell-not.svg" alt="" />
      </article>
      <article class="header__container-tab">
        <img src="/src/assets/icons/avatar.png" class="avatar" alt="" />
        <div>
          <p>UserName</p>
          <h5>VERIFIED</h5>
        </div>
      </article>
    </article>
  </section>
</template>

<script>
export default {};
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
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__container {
    display: flex;
    &-tab {
      display: flex;
      align-items: center;
      margin-right: 15px;
      padding: 16px;
      border-radius: 12px;
      background: #f6f8fa;
      img {
        width: 20px;
        height: 20px;
        &.avatar {
          width: 40px;
          height: 40px;
          margin-right: 15px;
        }
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
</style>