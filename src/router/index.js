import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/App.vue'),
    children: [
      {
        path: '',
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
        name:'Commissions',
        component: () => import ('@/views/commissions/Index.vue')
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
            name:'Deposit',
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
            component: () => import ('@/views/acciones/acciones.vue')
          },
          {
            path: '/acciones/withdraw',
            name:'Withdraw',
            component: () => import ('@/views/acciones/WithDraw.vue')
          },
          {
            path: '/acciones/deposit',
            name:'Deposit',
            component: () => import ('@/views/acciones/Deposit.vue')
          },
        ]
      },
    ],
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
