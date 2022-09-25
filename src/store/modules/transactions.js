import axios from 'axios'

export default {
  namespaced: true,
  state: {
    total: 0,
    chart: [],
    transactions: [],
    categories: []
  },
  getters: {},
  mutations: {
    GET_TRANSACTIONS (state, data) {
        state.transactions = data.transactions ? data.transactions : []
        state.total = data.total ? data.total : []
        state.chart = data.chart
    },
    GET_CATEGORIES (state, data) {
      state.categories = data
    }
  },
  actions: {
    async getTransactions (context, payload) {
        const response = await axios.get(`/api/v1/commissions/transactions-admin/${payload.category}/${payload.from}/${payload.to}/${payload.page}/${payload.username}`,)
        context.commit('GET_TRANSACTIONS', response.data)
        return response.data
    },
    async downloadFile (context, payload) {
      const response = await axios.get(`/api/v1/commissions/transactions-admin/download/${payload.category}/${payload.from}/${payload.to}/${payload.page}/${payload.username}`,)
      return response.data
    },
    async getCategories (context, payload) {
      const response = await axios.get(`/api/v1/commissions/categories`,)
      context.commit('GET_CATEGORIES', response.data)
      return response.data
  },
  }
}
