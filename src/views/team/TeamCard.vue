<template>
  <article class="TeamCard" @click="$emit('search', user.username)">
    <img :src="apiUrl + '/uploads/users/' + user.image" alt="" />
    <div class="text-center">
      <h2>{{ user.names }}</h2>
      <div class="subtitle">{{ user.username }}</div>
    </div>
  </article>
</template>
<script>
export default {
  props: ['user']
}
</script>
<style lang="scss" scoped>
.TeamCard {

  width: 200px;
  min-width: 200px;
  position: relative;
  padding: 40px 20px 20px 20px;
  background-color: white;
  border-radius: 15px;
  border-top: 5px solid #000;
  text-align: center;
  background: #F6F8FA;
  img {
    width: 60px;
    margin: 0 auto;
    position: absolute;
    z-index: 4;
    top: -30%;
    left: 50%;
    transform: translate(-50%, 0);
    background: #d7eafb;
    border-radius: 100%;
    border: 3px solid #fff;
  }
  h2 {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    color: #000;
    font-size: 16px;
  }
  .subtitle {
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    color: #647188;
    font-size: 12px;
  }
  &.worker{
    display: flex;
    align-items: center;
    padding: 20px;
    border-top: none;
    border-left: 5px solid #000;
    margin-right: 20px;
    img{
      margin: 0 5px;
      width: 40px;
      position: static;
      transform: none;
    }
    >div{
      text-align: start;
    }
  }
}
</style>