<template>
  <div class="copy" @click="copyURL(text)">
    <p>{{ text }}</p>
    <img src="/assets/iconBase/paste.svg" alt="">
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    text: {
      default: ''
    }
  },
  setup() {
    const copyURL = async (mytext) => {
      try {
        await navigator.clipboard.writeText(mytext);
        openNotification('Copied successfully')
      } catch ($e) {
        openNotification('Sorry, we cant copy this now')
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
  background: #F6F8FA;
  cursor: pointer;
  border-radius: 12px;
  i {
    margin-left: 10px;
    font-size: 20px;
  }
  img{
    margin-left: 20px;
  }
  p{
    @media (max-width: 700px){
      width: 50%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}
</style>