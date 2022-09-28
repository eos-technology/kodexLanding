<template>
  <article class="toggleButton">
    <button :class="show ? 'active' : ''" @click="$emit('update:show', !show)">
      Detalles
    </button>
    <button :class="!show ? 'active' : ''" @click="$emit('update:show', !show)">
      Movimiento
    </button>
  </article>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  props: {
    show: {
      type: Boolean,
      default: true,
      required: true
    }
  },
  setup() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
.toggleButton {
  display: flex;
  margin: 20px 0;
  padding: 5px;
  border-radius: 100px;
  background: #f5f5f5;
  button {
    width: 50%;
    padding: 15px;
    border-radius: 100px;
    text-align: center;
    color: white;
    font-weight: 300;
    border: none;
    outline: none;
    color:  #0F215C;
    font-size: 14px;
    background: transparent;
    &.active {
      box-shadow: 0px 2px rgba(16, 24, 40, 0.1);
      font-weight: 600;
      background: white;
    }
  }
}
</style>