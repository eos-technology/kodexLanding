<template>
  <button>{{label}}</button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
  },
}
</script>

<style lang="scss" scoped>
  button{
    display: block;
    width: 100%;
    margin: 25px 0;
    padding: 10px;
    border-radius: 8px;
    background: black;
    color: white;
    font-weight: 600;
    border: none;
    font-size: 14px;
    cursor: pointer;
    transition: all 1s;
    &:hover{
      background: rgba(0, 0, 0, 0.829);
      transition: all 1s;
    }
  }
</style>