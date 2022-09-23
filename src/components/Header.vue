<template>
  <section class="header">
    <h2>{{ $route.name }}</h2>
    <article class="header__container">
      <article class="header__container-tab copy" @click="copyURL('TJXoCK3EMxGWPqi2niklfBF7y0865kCrT')">
        <img src="/src/assets/icons/24-circle.svg" alt="" />
        <h5>Copiar link de referido</h5>
      </article>
      <article class="header__container-tab">
        <img src="/src/assets/icons/24-circle.svg" alt="" />
      </article>
      <article class="header__container-tab">
        <img src="/src/assets/icons/bell-not.svg" alt="" />
      </article>
      <article class="header__container-tab avatar">
        <img src="/src/assets/icons/avatar.png"  alt="" />
        <div>
          <p>UserName</p>
          <h5>VERIFIED</h5>
        </div>
      </article>
    </article>
  </section>
</template>

<script>
export default {
  setup() {
    const copyURL = async (mytext) => {
      try {
        await navigator.clipboard.writeText(mytext);
        alert("Copied");
      } catch ($e) {
        alert("Cannot copy");
      }
    };
    return {
      copyURL,
    };
  },
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
  @media (max-width: 700px) {
    justify-content: center;
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
    @media (max-width: 700px){
      
      align-items: center;
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
      &.copy{
        h5{
          margin-left: 10px;
          font-weight: 400;
        }
      }
      @media (max-width: 700px){
        width: 40px;
        height: 40px;
      }
      &.avatar{
        width: auto;
        height: auto;
        img{
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
</style>