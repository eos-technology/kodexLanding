<template>
  <article class="timeLine" ref="table" :style="`--tableWidth: ${tableWidth}px;`">
    <article
      class="timeLine-dot"
      :class="x <= q ? 'active' : ''"
      v-for="x in 4"
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
  // width: 760px;
  width: calc(var(--tableWidth) - (240px));
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  @media(max-width: 900px){
    width: 100%;
  }
  &-dot {
    text-align: center;
    .btnDot {
      position: relative;
      width: 50px;
      height: 50px;
      border: 4px solid rgb(177, 177, 177);
      opacity: 0.5;
      border-radius: 100%;
      @media (max-width:500px) {
        width: 14px;
        height: 14px;
        border: 1px solid rgb(177, 177, 177);
      }
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        right: 110%;
        transform: translate(0%, -50%);
        width: calc(((( var(--tableWidth) - 240px) - (50px * 3)) / 3) * 0.5);
        height: 1px;
        background: black;
        opacity: 0.5;
        z-index: 4;
        @media(max-width: 900px){
          width: calc(((( var(--tableWidth)) - (15px * 3)) / 3) * 0.5);
        }
      }
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 110%;
        transform: translate(0%, -50%);
        width: calc(((( var(--tableWidth) - 240px) - (50px * 3)) / 3) * 0.5);
        height: 1px;
        background: black;
        opacity: 0.5;
        z-index: 5;
        @media(max-width: 900px){
          width: calc(((( var(--tableWidth)) - (15px * 3)) / 3) * 0.5);
        }
      }
    }
    &.active {
      .btnDot {
        border: 4px solid #132D7C;
        opacity: 1;
        @media (max-width:500px) {
        border: 1px solid #132D7C;
      }
        .btnDot__contain {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 15px;
          height: 15px;
          border-radius: 100%;
          background: #132D7C;
        }
        &::after {
          height: 2px;
          opacity: 1;
          background: #132D7C;
        }
        &::before {
          opacity: 1;
          height: 2px;
          background: #132D7C;
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