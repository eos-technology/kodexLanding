import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/dashboard',
    component: () => import('@/layouts/App.vue'),
    children: [
      {
        path: '/profile',
        name: 'Profile',
        component: () => import('@/views/profile/Index.vue'),
      },
      {
        path: '/dashboard',
        name:'Dashboard',
        component: () => import ('@/views/dashboard/Index.vue')
      },
      {
        path: '/token',
        name:'Tokens',
        component: () => import ('@/views/tokens/Index.vue')
      },
      {
        path: '/commissions',
        name:'comission',
        component: () => import ('@/views/comission/Index.vue')
      },
      {
        path: '/commissions/withdraw',
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
            path: '/wallet/withdraw',
            name:'Withdraw',
            component: () => import ('@/views/wallet/WithDraw.vue')
          },
          {
            path: '/wallet/new',
            name:'NewWallet',
            component: () => import ('@/views/wallet/NewWallet.vue')
          },
          {
            path: '/wallet/deposit',
            name:'DepositWallet',
            component: () => import ('@/views/wallet/Deposit.vue')
          },
        ]
      },
      {
        path: '/acciones',
        name:'Acciones',
        component: () => import ('@/views/acciones/Index.vue'),
        children: [
          {
            path: '',
            name:'Acciones',
            component: () => import ('@/views/acciones/Acciones.vue')
          },
          {
            path: '/acciones/withdraw',
            name:'Withdraw Actions',
            component: () => import ('@/views/acciones/WithDraw.vue')
          },
          {
            path: '/acciones/deposit',
            name:'Deposit Actions',
            component: () => import ('@/views/acciones/Deposit.vue')
          },
        ]
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/Auth.vue'),
    children: [
      {
        path: '/',
        name:'Login',
        component: () => import ('@/views/auth/Index.vue')
      },
      {
        path: '/verification',
        name:'Verification',
        component: () => import ('@/views/auth/Verification.vue')
      },
      {
        path: '/recover',
        name:'Recover',
        component: () => import ('@/views/auth/Recover.vue')
      },
      {
        path: '/newpass',
        name:'NewPass',
        component: () => import ('@/views/auth/NewPass.vue')
      },

    ],
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
