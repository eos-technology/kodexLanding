<template>
  <input
    :value="modelValue"
    :placeholder="label"
    v-bind="$attrs"
    :disabled="disabled"
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
    disabled: {
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  width: 100%;
  padding: 14px;
  color: #000626;
  background: #F6F8FA;
border-radius: 8px;
  border: none;
  border-radius: 12px;
  outline: none;
  font-size: 14px;
  &::placeholder {
    font-weight: 300;
    color: #7f8894;
  }
}
</style>