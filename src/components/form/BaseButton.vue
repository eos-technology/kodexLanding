<template>
  <button :disabled="$store.state.loading == true || disabled == true">
    <span v-if="$store.state.loading == false">
      {{label}}
    </span>
    <span v-else>
      {{ loadingTx }}
    </span>
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    loadingTx: {
      default: 'Loading'
    },
    disabled: {
      default: false
    }
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
    background: linear-gradient(0deg, #132D7C, #132D7C), linear-gradient(180deg, #0F215C 0%, #007BD1 100%), #194EF0;
    color: white;
    font-weight: 600;
    border: none;
    font-size: 14px;
    cursor: pointer;
    transition: all 1s;
    &:hover{
      background: rgba(19, 45, 124, 0.89);
      transition: all 1s;
    }
    &.transparent{
      background: none;
      color: black;
    }
  }
  button:disabled,
  button[disabled]{
    opacity: .7;
  }
  button:disabled:hover,
  button[disabled]:hover {
    cursor: not-allowed;
  }
</style>