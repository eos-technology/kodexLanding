<template>
  <button :disabled="$store.state.loading == true || disabled == true">
    <span v-if="$store.state.loading == false">
      {{ label }}
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
      default: "Loading",
    },
    disabled: {
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  display: block;
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  background: linear-gradient(0deg, #132d7c, #132d7c),
    linear-gradient(180deg, #0f215c 0%, #007bd1 100%), #194ef0;
  color: white;
  font-weight: 600;
  border: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  cursor: pointer;
  transition: all 1s;
  color: white;
  &:hover {
    background: rgba(19, 45, 124, 0.89);
    transition: all 1s;
  }
  &.transparent {
    border:1px solid $btn-outline;
    color: $primary-color;
    background: #fff;
    background: none;
    color: black;
  }
  &.outline {
    border:1px solid $btn-outline;
    color: $primary-color;
    background: #fff;
    &:hover {
      background: rgba(19, 45, 124, 0.89);
      transition: all 1s;
      color: white;
    }
  }
}
button:disabled,
button[disabled] {
  opacity: 0.7;
}
button:disabled:hover,
button[disabled]:hover {
  cursor: not-allowed;
}
</style>