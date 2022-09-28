<template>
  <div class="menu">
    <div class="menu__left">
      <slot></slot>
      <img src="@/assets/icons/kodexColorComplete.svg" alt="" />
    </div>
    <div class="menu__right">
      <img class="menu__right-icon menu__right-icon-c" src="@/assets/icons/copy.svg" alt="" />
      <img class="menu__right-icon" src="@/assets/icons/support.svg" alt="" />
      <img src="@/assets/icons/avatar.png" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  background-color: $white;
  padding: 24px 16px;
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  &__left {
    &-icon{
      margin-right: 12px;
    }
  }
  &__right {
    &-icon {
      padding: 12px;
      border-radius: 12px;
      background-color: #f8f8fa;
      margin-right: 12px;
    }
  }
}
</style>