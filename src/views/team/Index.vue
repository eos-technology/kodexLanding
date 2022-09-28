<template>
  <Header></Header>
  <section class="team">
    <section class="team__title">
      <BtnBack></BtnBack>
      <InputSearch
        v-model="search"
        v-on:keyup.enter="searchUser(search)"
        placeholder="Search by username"
      ></InputSearch>
    </section>
    <section class="team__container" v-if="team.users">
      <article class="team__container__lead">
        <TeamCard @search="searchUser" :user="team"></TeamCard>
      </article>
      <section v-if="team.users" class="vacio">
        <img
          src="src\assets\images\vacio\vacioWallet.png"
          alt=""
          v-if="!transactions"
        />
        <h5>You still have no transactions</h5>
      </section>
      <article class="team__container__workers first">
        <TeamCard
          @search="searchUser"
          class="worker"
          :user="user"
          v-for="user in team.users"
          :key="user.id"
        />
      </article>
    </section>
  </section>
</template>

<script>
import Header from "@/components/Header.vue";
import BtnBack from "@/components/form/BtnBack.vue";
import InputSearch from "@/components/form/InputSearch.vue";
import TeamCard from "./TeamCard.vue";
import { mapActions, mapState } from "vuex";
export default {
  components: { Header, BtnBack, InputSearch, TeamCard },
  created() {
    this.getData(this.user.username);
  },
  data() {
    return {
      search: null,
    };
  },
  methods: {
    ...mapActions("user", ["getTeamUnilevel"]),
    getData(username) {
      this.getTeamUnilevel(username);
    },
    searchUser(data) {
      console.log("HOLA", data);
      this.getData(data);
    },
  },
  computed: {
    ...mapState("auth", ["user"]),
    ...mapState("user", ["team"]),
  },
};
</script>

<style lang="scss" scoped>
.team {
  margin-top: 30px;
  padding: 40px;
  border-radius: 8px;
  background: white;
  &__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
      max-width: 300px;
    }
  }
  &__container {
    margin-top: 40px;
    &__lead {
      display: flex;
      justify-content: center;
    }
    &__workers {
      &.first {
        justify-content: space-around;
      }
      margin-top: 60px;
      padding-bottom: 20px;
      display: flex;
      justify-content: space-between;
      overflow-x: scroll;
      @include scroll;
    }
  }
}
</style>