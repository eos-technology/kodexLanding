<template>
  <article class="btnBack" @click="$router.go(-1)">
    <div>
      <img src="/assets/iconBase/arrow.svg" alt="">
    </div>
    <p>Go Back</p>
  </article>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.btnBack{
  display: flex;
  align-items: center;
  cursor: pointer;
  div{
    display: flex;
  align-items: center;
  justify-content: center;
    width: 32px;
    height: 32px;
    padding: 10px;
    border-radius: 100%;
    background: #F6F8FA;
    margin-right: 10px;
  }
  p{
    font-size: 16px;
    font-weight: 400;
  }
}
</style>