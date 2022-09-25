import axios from 'axios'

export default {
  namespaced: true,
  state: {
    active: null,
    historial: [],
    ranges: []
  },
  getters: {},
  mutations: {
    GET_ACTIVE (state, data) {
        state.active = data
    },
    GET_ALL (state, data) {
      state.ranges = data
    },
    GET_HISTORIAL (state, data) {
      state.historial = data
    },
    GET_ADMIN (state, data) {
        state.historial = data.history
        state.active = data.active
    }
  },
  actions: {
    async getActives (context) {
        const response = await axios.get('/api/v1/range/active')
        context.commit('GET_ACTIVE', response.data)
        return response.data
    },
    async getActivesAll (context) {
      const response = await axios.get('/api/v1/range/all')
      context.commit('GET_ALL', response.data)
      return response.data
    },
    async getRangeAdmin (context, payload) {
        const response = await axios.get(`/api/v1/range/filter/${payload.username}`)
        context.commit('GET_ADMIN', response.data)
        return response.data
    },
    async getHistorial (context) {
      const response = await axios.get('/api/v1/range')
      context.commit('GET_HISTORIAL', response.data)
      return response.data
    }
  }
}
