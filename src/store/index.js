import { createStore } from 'vuex'

import auth from './modules/auth'
import interceptors from './modules/interceptors'
import membership from './modules/membership'
import wallet from './modules/wallet'
import chat from './modules/chat'
import cart from './modules/cart'
import user from './modules/user'
import staking from './modules/staking'
import comission from './modules/comission'
import dashboard from './modules/dashboard'
import support from './modules/support'
import transactions from './modules/transactions'
import payment from './modules/payment'
import signal from './modules/signal'
import academy from './modules/academy'
import section from './modules/section'
import lesson from './modules/lesson'
import copy from './modules/copy'
import range from './modules/range'
import withdraw from './modules/withdraw'

import vuexPersistence from '../plugins/vue-persistence'

export default createStore({
  state: {
    appName: 'GainUp Wallet',
    loading: false,
    theme: 'dark',
    sideRegister: 'left'
  },
  mutations: {
    CHANGE_THEME (state, data) {
      state.theme = state.theme == 'dark' ? 'light' : 'dark'
    },
    CHANGE_SIDE (state, data) {
      state.sideRegister = data
    }
  },
  actions: {
    changeTheme(context) {
      context.commit('CHANGE_THEME')
    },
    changeSide(context, data) {
      context.commit('CHANGE_SIDE', data)
    }
  },
  modules: {
    auth,
    interceptors,
    membership,
    wallet,
    chat,
    cart,
    user,
    staking,
    comission,
    dashboard,
    support,
    transactions,
    payment,
    signal,
    academy,
    section,
    lesson,
    copy,
    range,
    withdraw
  },
  plugins: [vuexPersistence.plugin]
})
