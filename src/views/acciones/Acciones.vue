<template>
  <section class="acciones">
    <ToggleButton v-model:show="show"></ToggleButton>
    
    <div v-if="show">
    <section class="acciones__card" v-for="node in nodes" :key="node.id">
      <article class="acciones__card__img">
        <img :src="node.image" alt="" />
      </article>
      <article class="acciones__card__text">
        <h2>{{$t('liquidity.node')}} {{ node.name }}</h2>
        <h3>{{ node.network }}</h3>
        <div>
          <p>{{$t('liquidity.investment')}}</p>
          <p>{{ coinFormat(node.invest) }} KXP</p>
        </div>
        <div>
          <p>{{$t('liquidity.percent')}}</p>
          <p>{{ node.percentage }}%</p>
        </div>
        <div>
          <p>{{$t('liquidity.term')}}</p>
          <p>{{ node.maximum }} {{$t('liquidity.months')}}</p>
        </div>
        <div>
          <p>{{$t('liquidity.date')}}</p>
          <p>{{ node.withdraw }} {{$t('liquidity.eachMonth')}}</p>
        </div>
        <h5>{{$t('liquidity.anchor')}}</h5>
        <article class="acciones__card__text__progress">
          <b-progress
            :value="calcProgress(node.objetive, node.total)"
            :max="100"
            animated
            variant="Primary"
          ></b-progress>
          <span>{{ calcProgress(node.objetive, node.total) }}%</span>
        </article>
        <div>
          <p>{{$t('liquidity.collection')}}</p>
          <p>${{ node.total }}</p>
        </div>
        <!-- <div>
          <p>{{$t('liquidity.participants')}}</p>
          <p>{{ node.users }}/100</p>
        </div> -->
        <!-- <div>
          <p>{{$t('liquidity.month')}}</p>
          <p>0/6</p>
        </div> -->
        <BaseButton
          :label="`${$t('liquidity.conect')}`"
          @click="$router.push({ name: 'Deposit-Liquidity', params: { id: node.id } })"
        ></BaseButton>
      </article>
    </section>
    </div>

    <article class="acciones__container" v-if="!show">
      <section class="acciones__card acciones__move" v-for="active in actives" :key="active.id">
        <section class="acciones__move__img">
          <article class="acciones__card__img me-3">
            <img :src="active.node.image" alt="" />
          </article>
          <article>
            <h2>{{$t('liquidity.node')}} {{ active.node.name }}</h2>
            <h3>{{ active.node.network }}</h3>
          </article>
        </section>
        <section class="acciones__move__data"> 
          <h5>{{$t('liquidity.time')}}</h5>
          <p>{{ active.node.maximum }} {{$t('liquidity.months')}}</p>
          <h5>{{$t('liquidity.percent')}}</h5>
          <p>{{ active.node.percentage }}%</p>
        </section>
        <article class="acciones__card__text">
          <h4>{{$t('liquidity.status')}}</h4>
          <div>
            <p>{{$t('liquidity.total')}}</p>
            <p>{{ coinFormat(active.balance) }}</p>
          </div>
          <div>
            <p>{{$t('liquidity.stake')}}</p>
            <p>{{ coinFormat(active.earns) }}</p>
          </div>
          <div>
            <p>{{$t('liquidity.minimun')}}</p>
            <p>{{ coinFormat(active.total_earns) }}</p>
          </div>
          <BaseButton
            :disabled="true"
            :label="`${$t('liquidity.withdraw')}`"
            @click="$router.push({ path: '/liquidity/withdraw' })"
          ></BaseButton>
        </article>
      </section>
    </article>
  </section>
</template>

<script>
import Header from "@/components/Header.vue";
import BaseButton from "@/components/form/BaseButton.vue";
import ToggleButton from "@/components/base/ToggleButton.vue";
import { mapActions, mapState } from 'vuex';
export default {
  components: {
    Header,
    BaseButton,
    ToggleButton
  },
  data () {
    return {
      show: true
    }
  },
  created () {
    this.getNodesActives()
    this.getActiveNodes()
  },
  methods: {
    ...mapActions('liquidity', ['getNodesActives', 'getActiveNodes']),
    calcProgress (total, value) {
      let percentage = (value * (100) ) / total

      return percentage
    }
  },
  computed: {
    ...mapState('liquidity', ['nodes', 'actives'])
  }
}
</script>

<style lang="scss" scoped>
.acciones {
  padding: 24px;
  border: 1px solid #ECECEE;
  border-radius: 24px;
  background: white;
  @media (max-width: 1000px){
    padding: 40px 20px;
  }
  &__card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    background: #F6F8FA;
    margin-bottom: 20px;
    padding: 25px;
    @media (max-width: 1000px) {
      grid-template-columns: 1fr;
    }
    &__img {
      max-height: 450px;
      background: #FFFFFF;
      border-radius: 8px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &__text {
      h2 {
      }
      button {
        margin-bottom: 0;
      }
      h3 {
        color: #647188;
        font-size: 14px;
        font-weight: 300;
        margin-bottom: 10px;
      }
      div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        p {
          font-size: 14px;
          font-weight: 300;
          &:last-of-type {
            font-weight: 400;
          }
        }
      }
      h5 {
        margin-bottom: 10px;
      }
      &__progress {
        display: grid;
        align-items: center;
        grid-template-columns: 1fr 30px;
        grid-gap: 20px;
        margin-top: 20px;
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
  &__container {
    display: flex;
    justify-content: space-between;
  }
  &__move {
    grid-template-columns: 1fr;
    width: 350px;
    margin-right: 20px;
    margin-bottom: 20px;
    padding: 25px;
    border-radius: 16px;
    background: #F6F8FA;
    h4{
      font-size: 16px;
      margin-bottom: 10px;
    }
    &__img {
      display: flex;
      margin-right: 20px;
      img {
        width: 80px;
        object-fit: cover;
      }
      h2,
      h3 {
        font-size: 20px;
      }
      h3 {
        font-weight: 300;
      }
    }
    &__data{
      border-bottom: 1px solid #EBEBEB;
      padding-bottom: 10px;
      h5{
        font-weight: 300;
        font-size: 14px;
        margin-bottom: 5px;
      }
      p{
        color: #132D7C;
      }
    }
  }
  .toggleButton {
    max-width: 300px;
    margin: 0px auto 24px;
  }
}
</style>