<template>
  <section class="perfil">
    <article class="perfil__menu">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li
          class="nav-item"
          role="presentation"
          v-for="(element, index) in tabsComissions"
          :key="index"
        >
          <div
            class="nav-link"
            :class="index == 0 ? 'active' : ''"
            :id="`${element.name}-tab`"
            data-bs-toggle="tab"
            :data-bs-target="`#${element.name}-tab-pane`"
            type="button"
            role="tab"
            :aria-controls="`${element.name}-tab-pane`"
            aria-selected="true"
          >
            <div class="nav-link-container">
              <span class="nav-link-span">{{ $t(`profile.tabs.${element.title}`) }}</span>
            </div>
          </div>
        </li>
      </ul>
    </article>
    <article class="perfil__content">
      <div
        class="tab-content"
        id="myTabContent"
        v-for="(element, index) in tabsComissions"
        :key="index"
      >
        <div
          class="tab-pane fade show"
          :class="index == 0 ? 'active' : ''"
          :id="`${element.name}-tab-pane`"
          role="tabpanel"
          :aria-labelledby="`${element.name}-tab`"
          tabindex="0"
        >
          <div>
            <div
              class="nav-link"
              :class="index == 0 ? 'active' : ''"
              :id="`${element.name}-tab`"
              data-bs-toggle="tab"
              :data-bs-target="`#${element.name}-tab-pane`"
              type="button"
              role="tab"
              :aria-controls="`${element.name}-tab-pane`"
              aria-selected="true"
            >
              <component :is="element.component"></component>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import Datos from "./Datos.vue";
import Security from "./Security.vue";
import ValidationVue from "./Validation.vue";
import { ref } from "@vue/reactivity";
import Auth from "./Auth.vue";
export default {
  components: { Auth },
  setup() {
    const tabsComissions = [
      {
        name: "data",
        title: "info",
        component: Datos,
        icon: "user-edit",
      },
      {
        name: "security",
        title: "security",
        component: Security,
        icon: "lock-key",
      },
      {
        name: "validation",
        title: "verifi",
        component: ValidationVue,
        icon: "checklist",
      },
      {
        name: "uthentication",
        title: "aut",
        component: Auth,
        icon: "checklist",
      },
    ];
    const showMenu = ref(false);
    const onShow = () => {
      showMenu.value = !showMenu.value;
    };
    return {
      tabsComissions,
      onShow,
      showMenu,
    };
  },
};
</script>
<style lang="scss" scoped>
.perfil {
  padding: 24px;
  border-radius: 24px;
  border: 1px solid #ECECEE;
  background: white;
  font-size: 14px;
  @media (max-width: 576px) {
    margin: 8px auto;
    padding: 24px;
  }

  &__menu {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ececee;
    @media (max-width: 576px) {
      width: 100%;
    }
    .nav {
      border: none;
      @media (max-width: 576px) {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .nav-link {
        margin-right: 15px;
        color: #647188;
        font-weight: 500;
        transition: all 0.5;
        background: transparent;
        border: none;
        font-family: Kanit;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        text-align: center;
        &-span {
        }
      }

      .nav-link.active {
        background: linear-gradient(0deg, #132d7c, #132d7c),
          linear-gradient(180deg, #0f215c 0%, #007bd1 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        border-bottom: 2px solid #132d7c;
      }
    }
  }

  &__content {
    &__container {
      display: grid;
      grid-template-columns: 40% 1fr;
      grid-gap: 30px;
      padding: 30px;
      border-radius: 25px;
      background-color: white;

      &--total {
        position: relative;
        display: flex;
        justify-content: space-between;
        background-color: #022a4a;
        padding: 50px 30px;
        border-radius: 25px;

        &::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 1px;
          height: calc(100% - 60px);
          background-color: #eef3fe;
          transform: translate(-50%, -50%);
        }

        p {
          font-size: 14px;
          color: #eef3fe;
          font-family: "Roboto", sans-serif;
          font-weight: 300;
          margin-bottom: 5px;
        }

        h3 {
          display: flex;
          align-items: center;
          font-size: 26px;
          color: #fcfcfd;
          font-family: "Roboto", sans-serif;
          font-weight: 700;
          margin-bottom: 5px;

          span {
            display: inline-block;
            padding: 5px;
            background: rgb(0, 117, 255);
            background: linear-gradient(
              90deg,
              rgba(0, 117, 255, 1) 0%,
              rgba(62, 255, 209, 0.77) 100%
            );
            border-radius: 5px;
            font-size: 12px;
            font-weight: 500;
            margin-left: 10px;
          }
        }
      }

      &--credit {
        position: relative;
        background-color: #022a4a;
        padding: 25px;
        border-radius: 25px;

        &-title {
          display: flex;
          justify-content: space-between;
          color: white;
          font-size: 22px;
          margin-bottom: 15px;

          h2 {
            font-family: "Roboto", sans-serif;
            font-weight: 300;
          }

          h3 {
            font-family: "Roboto", sans-serif;
            font-weight: 700;
            background: -webkit-linear-gradient(
              90deg,
              rgba(0, 117, 255, 1) 0%,
              rgba(62, 255, 209, 0.77) 40%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }

        &-cards {
          display: flex;
          justify-content: space-between;

          &__card {
            width: 150px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 15px;
            align-items: center;
            padding: 12px;
            border-radius: 15px;
            background-color: rgba(0, 110, 177, 0.35);
            color: white;

            h3 {
              font-size: 12px;
              font-family: "Roboto", sans-serif;
              font-weight: 300;
            }

            p {
              font-size: 18px;
              font-family: "Roboto", sans-serif;
              font-weight: 500;
            }

            &-icon {
              width: 32px;
              margin: 0 auto;
              padding: 8px;
              border-radius: 12px;
              background: rgb(0, 117, 255);
              background: linear-gradient(
                90deg,
                rgba(0, 117, 255, 1) 0%,
                rgba(62, 255, 209, 0.77) 100%
              );

              img {
                margin: 0 auto;
              }
            }
          }
        }
      }
    }
  }
}

.dropdown-item:active,
.dropdown-item:focus,
.dropdown-item:hover {
  background-color: transparent;
  color: #3d5cc7;
}
</style>