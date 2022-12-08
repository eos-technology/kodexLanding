<template>
  <article class="btnBack" @click="$router.back()">
    <div>
      <img src="@/assets/icons/back.svg" alt="" />
    </div>
    <p>{{ $t("app.back") }}</p>
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
  margin-bottom: 32px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 10px;
    border-radius: 100%;
  }
  p {
    font-size: 14px;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: center;
  }
}
</style>