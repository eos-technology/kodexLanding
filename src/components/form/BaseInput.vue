<template>
  <input
    :value="modelValue"
    :placeholder="label"
    v-bind="$attrs"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
  input{
    width: 100%;
    padding: 14px;
    border-radius: 8px;
    color: #000626;
    background-color: #F6F8FA;
    border: none;
    outline: none;
    font-size: 14px;
    &::placeholder{
      font-weight: 300;
      color: #7F8894;
    }
  }
</style>