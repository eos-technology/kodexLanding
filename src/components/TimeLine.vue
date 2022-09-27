<template>
  <article class="timeLine" ref="table">
    <article
      class="timeLine-dot"
      :class="x <= q ? 'active' : ''"
      :style="`--tableWidth: ${tableWidth}px;`"
      v-for="x in 6"
      :key="x"
    >
      <div class="btnDot">
        <div class="btnDot__contain"></div>
      </div>
      <p>Q{{ x }}</p>
    </article>
  </article>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import { ref } from "@vue/reactivity";

export default {
  setup() {
    const q = 3;
    const table = ref(null);
    const tableWidth = ref();
    onMounted(() => {
      console.log(table.value.clientWidth);
      tableWidth.value = table.value.clientWidth;
    });
    return {
      table,
      tableWidth,
      q,
    };
  },
};
</script>

<style lang="scss" scoped>
.timeLine {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  &-dot {
    text-align: center;
    .btnDot {
      position: relative;
      width: 50px;
      height: 50px;
      border: 4px solid black;
      border-radius: 100%;
      @media (max-width:500px) {
        width: 14px;
        height: 14px;
        border: 1px solid black;
      }
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        right: 110%;
        transform: translate(0%, -50%);
        width: calc(((var(--tableWidth) - (50px * 5)) / 4) * 0.5);
        height: 1px;
        background: black;
        opacity: 0.5;
      }
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 110%;
        transform: translate(0%, -50%);
        width: calc(((var(--tableWidth) - (50px * 5)) / 4) * 0.5);
        height: 1px;
        background: black;
        opacity: 0.5;
      }
    }
    &.active {
      .btnDot {
        .btnDot__contain {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 15px;
          height: 15px;
          border-radius: 100%;
          background: black;
        }
        &::after {
          opacity: 1;
        }
        &::before {
          opacity: 1;
        }
      }
    }
    &:first-child {
      .btnDot {
        &::after {
          content: none;
        }
      }
    }
    &:last-child {
      .btnDot {
        &::before {
          content: none;
        }
      }
    }
    p {
      font-weight: 500;
    }
  }
}
</style>