<template>
  <div>
    <label :class="label ? '' : 'opacity'" class="label"
      ><span class="span">* </span>{{ label }}</label
    >
    <select
      name="select"
      :value="modelValue || options[0]"
      v-bind="{
        ...$attrs,
        onChange: ($event) => {
          $emit('update:modelValue', $event.target.value);
        },
      }"
    >
      <option v-for="option in options" :value="option" :key="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  props: {
    modelValue: {
      type: [String, Number],
    },
    label: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    return {};
  },
};
</script>
<style lang="scss">
.label {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  margin-bottom: 10px;
  color: #000626;
  &.opacity {
    display: none;
  }
}

.span {
  color: #ff4e78;
}
select {
  width: 100%;
  padding: 10px;
  border-radius: 12px;
  color: #000626;
  background-color: rgba(51, 106, 179, 0.05);
  border: none;
  outline: none;
  &::placeholder {
    font-weight: 300;
    color: #000626;
  }
  /*     background-image: url("/src/assets/img/icons/Arrow.svg");
    background-position: 98% center;
    background-repeat: none; */
  option {
    color: black;
  }
}
</style>