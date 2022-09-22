<template>
  <vue-tel-input
    v-model="modelValue"
    v-bind="bindProps"
    @input="$emit('update:modelValue', $event.target.value)"
  ></vue-tel-input>
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
  components: {},
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
  setup() {
    const phone = ref("0123456789");
    const bindProps = {
      defaultCountry: "CO",
      placeholder: "Enter a phone number",
      required: false,
      preferredCountries: ["CO", "BR"],
      name: "telephone",
      dropdownOptions: {
        disabledDialCode: true,
        showFlags: true,
      },
      inputOptions: {
        showDialCode: true,
      },
    };
    return {
      phone,
      bindProps,
    };
  },
};
</script>
<style lang="scss">
.vue-tel-input {
  background: none;
  margin-bottom: 15px;
  border: none;
  outline: none;
  box-shadow: none !important;
  font-size: 14px;
  > div {
    border-radius: 8px;
    padding: 14px;
    margin-right: 20px;
    background-color: #f6f8fa;
  }
  input {
    border-radius: 8px;

    padding: 14px;
    background-color: #f6f8fa;
  }
}
</style>