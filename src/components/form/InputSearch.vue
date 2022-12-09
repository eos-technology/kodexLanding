<template>
  <base-input
    :value="modelValue"
    v-bind="$attrs"
    @input="$emit('update:modelValue', $event.target.value)"
  ></base-input>
</template>

<script>
import BaseInput from "./BaseInput.vue";
export default {
  components: { BaseInput },
  props: {
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  padding-left: 40px;
  max-width: 300px;
  background-image: url("/assets/iconBase/Search.svg");
  background-repeat: no-repeat;
  background-position: 1% center;
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  text-align: left;
  color: $secondary-color;
}
</style>