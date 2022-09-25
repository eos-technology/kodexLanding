import axios from 'axios'

export default {
  namespaced: true,
  state: {
    payments: []
  },
  getters: {},
  mutations: {
    GET_PAYMENTS (state, data) {
      state.payments = data
    }
  },
  actions: {
    async checkForAvailables (context, data) {
        const response = await axios.post('/api/v1/payments', data)
        context.commit('GET_PAYMENTS', response.data)
        return response.data
    },
    async confirmPayment (context, data) {
        const response = await axios.post('/api/v1/payments/confirmation', data)
        return response.data
    }
  }
}
