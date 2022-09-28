<template>
  <div class="menu">
    <div class="menu__left">
      <slot></slot>
      <img src="@/assets/icons/kodexColorComplete.svg" alt="" />
    </div>
    <div class="menu__right">
      <div class="menu__right-bg">
        <img
          class="menu__right-icon menu__right-icon-c"
          src="@/assets/icons/copy.svg"
          alt=""
        />
      </div>
      <div class="menu__right-bg">
        <img class="menu__right-icon" src="@/assets/icons/support.svg" alt="" />
      </div>
      <div class="dropdown">
        <img
          @click="show = !show"
          class="dropbtn"
          src="@/assets/icons/Avatar.svg"
          alt=""
        />
  
        <div id="myDropdown" class="dropdown-content" :class="show ? 'show' : ''">
          <a @click="$router.push({ path: `/profile` })" href="#"
            ><img
              class="dropdown__imgMenu"
              alt=""
            />Profile</a
          >
          <hr>
          <a href="#"
            ><img
              class="dropdown__imgMenu"
              src="@/assets/icons/logout.svg"
            />Logout</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const show = ref(false);
</script>

<style lang="scss" scoped>
.dropbtn {
  cursor: pointer;
}

.dropbtn:hover,
.dropbtn:focus {
}

.dropdown {
  position: relative;
  display: inline-block;
  &__imgMenu {
    margin-right: 10px;
  }
}

.dropdown-content {
  position: absolute;
  right: 0;
  width: 190px;
  display: none;
  color: black;
  background-color: $white;
  border-radius: 12px;
  margin-top: 12px;
  overflow: auto;
  z-index: 1;
  padding: 10px;
  &.show {
    display: block;
  }
}

.dropdown-content a {
  text-decoration: none;
  border-radius: 8px;
  display: block;
  color: black;
}

.dropdown a:hover {
  color:#0F215C;
}

.show {
  display: block;
}
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
    &-icon {
      margin-right: 12px;
    }
  }
  &__right {
    display: flex;
    &-bg {
      background-color: #f8f8fa;
      margin-right: 12px;
      border-radius: 12px;
    }
    &-icon {
      padding: 12px;
    }
  }
}
</style>