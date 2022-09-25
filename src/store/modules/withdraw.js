import axios from 'axios'

export default {
  namespaced: true,
  state: {
    invoices: [],
    users: []
  },
  getters: {},
  mutations: {
    GET_INVOICES (state, data) {
      state.invoices = data
    },
    GET_USERS (state, data) {
      state.users = data
    },
    UPDATE_SIGNAL (state, data) {
        let objIndex = state.signals.findIndex((obj => obj.id == data.id));
        state.signals[objIndex] = data
    },
    REMOVE_SIGNAL (state, id) {
        const indexOfObject = state.signals.findIndex(object => {
           return object.id === id;
        });
        state.signals.splice(indexOfObject)
    }
  },
  actions: {
    async getInvoices (context, payload) {
      const response = await axios.get(`/api/v1/invoice/admin/${payload.username}/${payload.page}/${payload.from}/${payload.to}/${payload.status}`)
      context.commit('GET_INVOICES', response.data)
      return response.data
    },
    async getTotalPay (context, username) {
      const response = await axios.get(`/api/v1/invoice/total`)
      return response.data
    },
    async approveManual (context, data) {
      const response = await axios.post(`/api/v1/invoice/approve-manual`, data)
      return response.data
    },
    async automaticPayment (context, data) {
        const response = await axios.post(`/api/v1/invoice/approve-automatic`, data)
        return response.data
    }
  }
}
