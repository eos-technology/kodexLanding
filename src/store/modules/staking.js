import axios from 'axios'

export default {
  namespaced: true,
  state: {
    stakings: []
  },
  getters: {},
  mutations: {
    SET_STAGE (state, data) {
        state.stakings.unshift(data)
    },
    GET_STAGE (state, data) {
      state.stakings = data
    },
    GET_PAYMENTS (state, data) {
      state.stakings = data
    },
    UPDATE_STAGE (state, data) {
        let objIndex = state.stakings.findIndex((obj => obj.id == data.id));
        state.stakings[objIndex] = data
    },
    REMOVE_STAGE (state, id) {
        const indexOfObject = state.stakings.findIndex(object => {
           return object.id === id;
        });
        state.stakings.splice(indexOfObject)
    }
  },
  actions: {
    async getStakings (context, id) {
        const response = await axios.get(`https://elvwalletapi.com/api/v1/back/staking/${id}`)
        context.commit('GET_STAGE', response.data)
        return response.data
    },
    async storeStaking (context, data) {
        const response = await axios.post('/api/v1/staking', data)
        context.commit('SET_STAGE', response.data)
        return response.data
    },
    async loadStakings (context, payload) {
      const response = await axios.get(`/api/v1/staking/payments/${payload.from}/${payload.to}`)
      context.commit('GET_PAYMENTS', response.data)
      return response.data
    },
    async confirmPayment (context, data) {
      const response = await axios.post('/api/v1/staking/payments/save-payment', data)
      return response.data
    },
    async resetStakings (context) {
      context.commit('GET_PAYMENTS', [])
    },
  }
}
