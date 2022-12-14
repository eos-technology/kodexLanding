import { createRouter, createWebHashHistory } from "vue-router";
import store from '../store'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/App.vue'),
    children: [
      {
        path: 'profile',
        name: 'Profile',
        component: () => import('@/views/profile/Index.vue'),
      },
      {
        path: 'team',
        name: 'Team',
        component: () => import('@/views/team/Index.vue'),
      },
      {
        path: '',
        name:'Dashboard',
        component: () => import ('@/views/dashboard/Index.vue')
      },
      {
        path: 'cart/:id/payment',
        name:'Cart',
        component: () => import ('@/views/cart/Index.vue'),
        props: true
      },
      {
        path: 'token',
        name:'Tokens',
        component: () => import ('@/views/tokens/Index.vue')
      },
      {
        path: 'token/purchase',
        name:'Purchase-Token',
        component: () => import ('@/views/tokens/Purchase.vue')
      },
      {
        path: 'comissions',
        name:'comissions',
        component: () => import ('@/views/comission/Index.vue')
      },
      {
        path: 'commissions/withdraw',
        name:'comissionWithDraw',
        component: () => import ('@/views/comission/WithDraw.vue')
      },
      {
        path: '/wallet',
        name:'Wallet',
        component: () => import ('@/views/wallet/Index.vue'),
        children: [
          {
            path: '',
            name:'Wallet',
            component: () => import ('@/views/wallet/Wallet.vue')
          },
          {
            path: '/wallet/withdraw/:address',
            name:'Withdraw',
            component: () => import ('@/views/wallet/WithDraw.vue'),
            props: true
          },
          {
            path: '/wallet/new',
            name:'NewWallet',
            component: () => import ('@/views/wallet/AddWallet.vue')
          },
          {
            path: '/wallet/deposit/:address',
            name:'DepositWallet',
            component: () => import ('@/views/wallet/Deposit.vue'),
            props: true
          },
        ]
      },
      {
        path: '/liquidity',
        name:'Liquidity-Router',
        component: () => import ('@/views/acciones/Index.vue'),
        children: [
          {
            path: '',
            name:'Liquidity',
            component: () => import ('@/views/acciones/Acciones.vue')
          },
          {
            path: '/liquidity/withdraw',
            name:'Comisiones',
            component: () => import ('@/views/acciones/WithDraw.vue')
          },
          {
            path: '/liquidity/:id/deposit',
            name:'Deposit-Liquidity',
            component: () => import ('@/views/acciones/Deposit.vue'),
            props: true
          },
        ]
      },
    ],
  },
  {
    path: '/auth',
    component: () => import('@/layouts/Auth.vue'),
    children: [
      {
        path: 'login',
        name:'Login',
        component: () => import ('@/views/auth/Index.vue')
      },
      {
        path: 'verification',
        name:'Verification',
        component: () => import ('@/views/auth/Verification.vue')
      },
      {
        path: 'recover',
        name:'Recover',
        component: () => import ('@/views/auth/Recover.vue')
      },
      {
        path: 'register/:username?',
        name:'Register',
        component: () => import ('@/views/auth/Register.vue'),
        props: true
      },
      {
        path: 'newpass/:id/:hash',
        name:'NewPass',
        component: () => import ('@/views/auth/NewPass.vue'),
        props: true
      },

    ],
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = store.state.auth.user

  const publicPages = ['Login', 'Verification', 'Recover', 'NewPass', 'Register']

  const authRequired = !publicPages.includes(to.name)

  if (authRequired && loggedIn === null) {
    next({
      name: 'Login',
      replace: true
    })
  } else {
    next()
  }
})

export default router;
