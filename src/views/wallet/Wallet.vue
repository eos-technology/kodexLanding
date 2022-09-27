<template>
  <section class="wallet">
    <article class="wallet__balance__cards">
      <article class="wallet__balance__cards__container">
        <div class="wallet__drag" @click="$router.push({ name: `NewWallet` })">
          <img src="@/assets/icons/wallet.svg" alt="" />
          <p class="wallet__drag-text"><b>Create</b> new <b>wallet</b></p>
        </div>
        <CardCoin
          :isActive="walletActive.id"
          @click="walletActive = wallet"
          :wallet="wallet"
          v-for="wallet in wallets"
          :key="wallet.id"
        />
      </article>
    </article>
    <section class="wallet__balance">
      <article class="wallet__balance__total">
        <div>
          <p>Total balance</p>
          <h2 style="text-transform:uppercase">
            {{ walletActive.asset ? walletActive.asset.currency : "" }}
            {{ walletActive.balance ? coinFormat(walletActive.balance) : 0 }}
          </h2>
          <p>
            $
            {{
              walletActive.balance_usd
                ? coinFormat(walletActive.balance_usd)
                : 0
            }}
          </p>
        </div>
        <article class="wallet__balance__total__actions">
          <div
            @click="$router.push({ name: `Withdraw` })"
          >
            <img :src="`/assets/icons/Money-Withdraw.svg`" alt="" />
            <p>Withdraw</p>
          </div>
          <div
            @click="
              $router.push({
                name: `DepositWallet`,
                params: {
                  address: walletActive.address ? walletActive.address : '',
                },
              })
            "
          >
            <img :src="`/assets/icons/Money-Deposit.svg`" alt="" />
            <p>Deposit</p>
          </div>
        </article>
      </article>
      <section class="wallet__table">
        <article class="wallet__table__title">
          <h2>Transactions</h2>
        </article>
        <article class="wallet__table__container">
        <article class="wallet__table__table">
          <article class="wallet__table__table-header noId">
            <p>Hash</p>
            <p>Time</p>
            <p>from</p>
            <p>To</p>
            <p>Quantity</p>
          </article>
          <article
            class="wallet__table__table-row  noId"
            v-for="trx in transactions"
            :key="trx.id"
          >
            <p>{{ trx.txHash }}</p>
            <p>{{ trx.time }}</p>
            <p>{{ trx.from }}</p>
            <p>{{ trx.to }}</p>
            <p>{{ trx.value }}</p>
          </article>
        </article>
      </article>
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
        ></b-pagination>
      </section>
    </section>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CardCoin from "../../components/CardCoin.vue";
import InputSearch from "../../components/form/InputSearch.vue";

export default {
  components: { CardCoin, InputSearch },
  data() {
    return {
      fields: [
        {
          key: "id",
          label: "Id",
        },
        {
          key: "hash",
          label: "Hash",
        },
        {
          key: "time",
          label: "Time",
        },
        {
          key: "from",
          label: "From",
        },
        {
          key: "to",
          label: "To",
        },
        {
          key: "quantity",
          label: "Quantity",
        },
      ],
      balanceActions: [
        { icon: "Money-Withdraw", name: "Retirar", route: "withdraw" },
        { icon: "Money-Deposit", name: "Depositar", route: "deposit" },
        { icon: "create", name: "Create", route: "new" },
        /* { icon: "trash-delete", name: "Delete" }, */
      ],
      walletActive: {
        id: null,
      },
    };
  },
  created() {
    this.getData();
  },
  methods: {
    ...mapActions("wallet", ["getWallets", "getTransactions"]),
    getData() {
      this.loading = true;
      this.getWallets().then(() => {
        this.loading = false;
      });
    },
    selectWallet(data) {
      this.cardActive = data;
    },
    selectedWallet(wallet) {
      this.walletActive = wallet;
    },
  },
  computed: {
    ...mapState("wallet", ["wallets", "transactions"]),
  },
  watch: {
    "walletActive.address": function () {
      this.getTransactions({
        address: this.walletActive.address,
        currency: this.walletActive.currency,
      });
    },
  },
};
</script>

<style lang="scss">
/* .ultralimited{
  width: 50%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.limited{
  width: 80%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
} */
.suspensive{
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 300px;
}
.wallet {
  margin-top: 30px;
  padding: 40px;
  border-radius: 8px;
  background: white;
  display: grid;
  grid-template-columns: 35% 1fr;
  grid-gap: 20px;
  @media (max-width: 1300px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
  &__drag {
    border: 2px dashed #007bd1;
    margin-bottom: 20px;
    border-radius: 25px;
    padding: 40px 16px;
    text-align: center;
    &-text {
      margin-top: 24px;
      text-align: center;
      font-size: 16px;
      font-weight: 300;
      line-height: 24px;
      color: #007bd1;
    }
  }
  &__balance {
    padding: 25px;
    grid-gap: 40px;
    border-radius: 24px;
    overflow: hidden;
    @media (max-width: 1200px) {
    }
    &__total {
      display: grid;
      padding: 25px;
      border-radius: 24px;
      height: 150px;
      background: #f6f8fa;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
      margin-bottom: 20px;
      text-align: center;
      @media (max-width: 1300px) {
        height: auto;
        grid-template-columns: 1fr;
      }
      > div {
        text-align: center;
      }
      p {
        text-align: center;
        font-weight: 300;
        color: #647188;
        &:last-of-type {
          font-size: 12px;
        }
      }
      h2 {
        color: #0f215c;
        font-size: 40px;
      }
      &__actions {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        @media (max-width: 700px) {
          flex-wrap: wrap;
        }
        div {
          width: 95px;
          height: 65px;
          border-radius: 8px;
          padding: 8px 16px;
          background: white;
          cursor: pointer;
          margin-right: 10px;
          @media (max-width: 700px) {
            margin-bottom: 15px;
          }
          img {
            width: 24px;
          }
        }
      }
    }
    &__cards {
      max-height: calc(100vh - 200px);
      overflow: hidden;
      max-width: 400px;
      &__container {
        height: 100%;
        overflow: scroll;
        padding: 20px;
        @include scroll;
        .walletCard {
          margin-bottom: 20px;
        }
      }
    }
  }
  &__table {
    &__container {
    }
    overflow: hidden;
    margin-top: 20px;
    &__title {
      display: flex;
      justify-content: space-between;
      @media (max-width: 700px) {
        flex-wrap: wrap;
      }
      input {
        max-width: 300px;
        @media (max-width: 700px) {
          margin-top: 15px;
        }
      }
    }
    @include Table(5);
  }
  .pagination {
    margin-top: 20px;
    justify-content: center !important;

    .page-item {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      .page-link {
        display: inline-block;
        width: 40px;
        height: 40px;
        border: none;
        border-radius: 100%;
        color: #0f215c;
        &:focus {
          box-shadow: none;
        }
      }
      &.active > .page-link {
        color: white;
        background: #0f215c;
      }
    }
  }
}
</style>