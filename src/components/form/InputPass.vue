<template>
  <div class="InputPass">
    <BaseInput
      :value="modelValue"
      :placeholder="label"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"
      :type="show"
    ></BaseInput>
    <img src="/assets/images/EyeVisible.svg" alt="" @click="showpass" />
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import BaseInput from "./BaseInput.vue";
export default {
  components: { BaseInput },
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
  setup(){
    const show =  ref("password")
    const showpass = () => {
      const type = {
        "text" : "password",
        "password" : "text"
      }
      show.value = type[show.value]
    }
    return{
      show,
      showpass
    }
  }
};
</script>

<style lang="scss" scoped>
.InputPass {
  position: relative;
  img {
    position: absolute;
    top: 50%;
    left: 95%;
    transform: translate(-95%, -50%);
    cursor: pointer;
  }
}
</style>