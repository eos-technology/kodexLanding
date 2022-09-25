import axios from 'axios'

export default {
  namespaced: true,
  state: {
    stats: null,
    memberships: [],
    directs: [],
    legs: [],
    mosts: [],
    actives: []
  },
  getters: {},
  mutations: {
    GET_STATS (state, data) {
      state.stats = data
    },
    GET_DIRECT (state, data) {
      state.directs = data
    },
    GET_LEGS (state, data) {
        state.legs = data
    },
    GET_MOST (state, data) {
        state.mosts = data
    },
    GET_ACTIVES (state, data) {
        state.actives = data
    }
  },
  actions: {
    async getStats (context) {
        const response = await axios.get('/api/v1/dashboard/stats')
        context.commit('GET_STATS', response.data)
        return response.data
    },
    async getDirectReferrals (context) {
        const response = await axios.get('/api/v1/dashboard/direct-referrals')
        context.commit('GET_DIRECT', response.data)
        return response.data
    },
    async getLegs (context) {
        const response = await axios.get('/api/v1/dashboard/legs')
        context.commit('GET_LEGS', response.data)
        return response.data
    },
    async getMostRef (context) {
        const response = await axios.get('/api/v1/dashboard/mostRefs')
        context.commit('GET_MOST', response.data)
        return response.data
    },
    async getActives (context) {
        const response = await axios.get('/api/v1/dashboard/active-member')
        context.commit('GET_ACTIVES', response.data)
        return response.data
    },
  }
}
