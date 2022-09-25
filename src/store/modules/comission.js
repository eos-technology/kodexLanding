import axios from 'axios'

export default {
  namespaced: true,
  state: {
    comissions: [],
    payments: []
  },
  getters: {},
  mutations: {
    GET_COMISSIONS_ADMIN (state, data) {
      state.comissions = data
    },
    GET_COMISSIONS (state, data) {
      state.comissions = data
    },
    GET_TRANSACTIONS (state, data) {
        state.transactions = data
    },
    UPDATE_MEMBERSHIP (state, data) {
        let objIndex = state.comissions.findIndex((obj => obj.id == data.id));
        state.comissions[objIndex] = data
    },
    REMOVE_MEMBERSHIP (state, id) {
        const indexOfObject = state.comissions.findIndex(object => {
           return object.id === id;
        });
        state.comissions.splice(indexOfObject)
    }
  },
  actions: {
    async getComissions (context) {
        const response = await axios.get('/api/v1/commissions')
        context.commit('GET_COMISSIONS', response.data)
        return response.data.meta
    },
    async getComissionsByUser (context, username) {
        const response = await axios.get(`/api/v1/commissions/user/${username}`)
        context.commit('GET_COMISSIONS', response.data)
        return response.data.meta
    },
    async getTransactions (context, payload) {
        const response = await axios.get(`/api/v1/commissions/transactions/${payload.type}/${payload.date}/${payload.page}`,)
        context.commit('GET_TRANSACTIONS', response.data)
        return response.data
    },
    async swapComissions (context, data) {
        const response = await axios.post('/api/v1/commissions/swap', data)
        return response.data
    },
    async sendCredits (context, data) {
        const response = await axios.post('/api/v1/commissions/send', data)
        return response.data
    },
    async getComissionsAdmin (context,payload) {
      const response = await axios.get(`/api/v1/commissions/admin/${payload.page}/${payload.username}`,)
      context.commit('GET_COMISSIONS_ADMIN', response.data.data)
      return response.data.meta
    },
  }
}
