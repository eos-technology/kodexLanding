import axios from 'axios'

export default {
  namespaced: true,
  state: {
    nodes: [],
    actives: []
  },
  getters: {},
  mutations: {
    SET_NODES (state, data) {
        state.nodes = data
    },
    SET_ACTIVES (state, data) {
        state.actives = data
    }
  },
  actions: {
    async getNodesActives (context) {
      const response = await axios.get('/api/v1/liquidity')
      context.commit('SET_NODES', response.data)
      return response.data
    },
    async getActiveNodes (context) {
        const response = await axios.get('/api/v1/liquidity/active')
        context.commit('SET_ACTIVES', response.data)
        return response.data
      },
  }
}
