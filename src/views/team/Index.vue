<template>
  <Header></Header>
  <section class="team">
    <section class="team__title">
      <BtnBack></BtnBack>
      <InputSearch placeholder="Buscar"></InputSearch>
    </section>
    <section class="team__container">
      <article class="team__container__lead">
        <TeamCard></TeamCard>
      </article>
      <article class="team__container__workers first">
        <TeamCard class="worker"></TeamCard>
        <TeamCard class="worker"></TeamCard>
      </article>
      <article class="team__container__workers">
        <TeamCard class="worker"></TeamCard>
        <TeamCard class="worker"></TeamCard>
        <TeamCard class="worker"></TeamCard>
        <TeamCard class="worker"></TeamCard>
      </article>
      <article class="team__container__workers">
        <TeamCard class="worker"></TeamCard>
        <TeamCard class="worker"></TeamCard>
        <TeamCard class="worker"></TeamCard>
        <TeamCard class="worker"></TeamCard>
        <TeamCard class="worker"></TeamCard>
        <TeamCard class="worker"></TeamCard>
        <TeamCard class="worker"></TeamCard>
        <TeamCard class="worker"></TeamCard>
      </article>
    </section>
  </section>
</template>

<script>
import Header from '@/components/Header.vue';
import BtnBack from '@/components/form/BtnBack.vue';
import InputSearch from '@/components/form/InputSearch.vue';
import TeamCard from './TeamCard.vue';
export default {
  components:{ Header, BtnBack, InputSearch, TeamCard }
}
</script>

<style lang="scss" scoped>
.team{
  margin-top: 30px;
  padding: 40px;
  border-radius: 8px;
  background: white;
  &__title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    input{
      max-width: 300px;
    }
  }
  &__container{
    margin-top: 40px;
    &__lead{
      display: flex;
      justify-content: center;
    }
    &__workers{
      &.first{
        justify-content: space-around;
      }
      margin-top: 60px;
      padding-bottom: 20px;
      display: flex;
      justify-content: space-between;
      overflow-x: scroll;
      @include scroll
    }
  }
}
</style>