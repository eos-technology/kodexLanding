<template>
  <article class="btnBack" @click="$router.push({ path: back })">
    <div>
      <img src="/assets/iconBase/arrow.svg" alt="" />
    </div>
    <p>Go Back</p>
  </article>
</template>

<script>
export default {
  props: {
    back: {
      Type: String,
      default: "/",
    },
  },
};
</script>

<style lang="scss" scoped>
.btnBack {
  display: flex;
  align-items: center;
  cursor: pointer;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 10px;
    border-radius: 100%;
    background: #f6f8fa;
    margin-right: 10px;
  }
  p {
    font-size: 16px;
    font-weight: 400;
  }
}
</style>