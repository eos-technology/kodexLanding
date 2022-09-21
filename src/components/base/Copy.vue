<template>
  <div class="copy" @click="copyURL('TJXoCK3EMxGWPqi2niklfBF7y0865kCrT')">
    TJXoCK3EMxGWPqi2niklfBF7y0865kCrT
    <img src="@/assets/iconBase/paste.svg" alt="">
  </div>
</template>
<script>
export default {
  components: {},
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
.copy {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  font-size: 12px;
  text-align: center;
  padding: 8px;
  color: black;
  border: 1px dashed #000;
  background-color: transparent;
  cursor: pointer;
  border-radius: 12px;
  i {
    margin-left: 10px;
    font-size: 20px;
  }
  img{
    margin-left: 20px;
  }
}
</style>