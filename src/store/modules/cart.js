import axios from 'axios'

export default {
  namespaced: true,
  state: {
    carts: [],
    chart: null,
    transactions: [],
    coins: [],
    cart: null
  },
  getters: {},
  mutations: {
    SET_CARTS (state, data) {
        state.carts.unshift(data)
    },
    GET_CARTS (state, data) {
      console.log(data)
      state.carts = data.purchases.data
      state.chart = data.chart
    },
    GET_COINS (state, data) {
        state.coins = data
    },
    GET_CART (state, data) {
      state.cart = data
  },
    UPDATE_CART (state, data) {
        let objIndex = state.carts.findIndex((obj => obj.id == data.id));
        state.carts[objIndex] = data
    },
    REMOVE_CART (state, id) {
        const indexOfObject = state.carts.findIndex(object => {
           return object.id === id;
        });
        state.carts.splice(indexOfObject)
    },
    GET_TRANSACTIONS (state, data) {
      state.transactions = data
    },
    DELETE_CART (state, data) {
      state.cart = null
    }
  },
  actions: {
    async getCoins (context) {
      const response = await axios.get('/api/v1/cart/tokens')
      context.commit('GET_COINS', response.data)
      return response.data
    },
    async getCarts (context) {
      const response = await axios.get('/api/v1/cart')
      context.commit('GET_CARTS', response.data)
      return response.data
    },
    async getCart (context, id) {
      const response = await axios.get(`/api/v1/cart/get/${id}`)
      context.commit('GET_CART', response.data)
      return response.data
    },
    async storeCart (context, data) {
      const response = await axios.post('/api/v1/cart', data)
      context.commit('SET_CARTS', response.data)
      return response.data
    },
    async checkPayment (context, id) {
      const response = await axios.get(`/api/v1/cart/check/${id}`)
      console.log(response)
      return response.data
    },
    async destroyCart (context, id) {
      const response = await axios.get(`/api/v1/cart/delete/${id}`)
      context.commit('DELETE_CART', response.data)
      return response.data
    },
    async getTransactions (context, payload) {
      const response = await axios.get(`/api/v1/cart/transactions/${payload.category}/${payload.from}/${payload.to}/${payload.page}`)
      context.commit('GET_TRANSACTIONS', response.data)
      return response.data
    },
    async getTotalsAdmin (context, payload) {
      const response = await axios.get(`/api/v1/cart/admin/${payload.type}`)
      return response.data
    },
    async getCartsAdmin (context, payload) {
      const response = await axios.get(`/api/v1/cart/purchases/${payload.type}/${payload.username}/${payload.page}`)
      context.commit('GET_CARTS', response.data)
      return response.data.purchases.meta
    },
    async downloadFile (context, payload) {
      const response = await axios.get(`/api/v1/cart/purchases-download/${payload.type}/${payload.username}/${payload.page}`)
      return response.data
    },
  }
}
