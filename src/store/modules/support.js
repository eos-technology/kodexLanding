import axios from 'axios'

export default {
  namespaced: true,
  state: {
    supports: []
  },
  getters: {},
  mutations: {
    SET_SUPPORT (state, data) {
        state.supports.unshift(data)
    },
    GET_SUPPORT (state, data) {
      state.supports = data
    },
    UPDATE_SUPPORT (state, data) {
        let objIndex = state.supports.findIndex((obj => obj.id == data.id));
        state.supports[objIndex] = data
    },
    REMOVE_SUPPORT (state, id) {
        const indexOfObject = state.supports.findIndex(object => {
           return object.id === id;
        });
        state.supports.splice(indexOfObject)
    }
  },
  actions: {
    async getSupports (context) {
        const response = await axios.get('/api/v1/support')
        context.commit('GET_SUPPORT', response.data)
        return response.data.meta
    },
    async storeSupport (context, data) {
        const response = await axios.post('/api/v1/support', data)
        context.commit('SET_SUPPORT', response.data)
        return response.data
    },
    async updateSupport (context, payload) {
        const response = await axios.post(`/api/v1/support/update/${payload.id}`, payload.data)
        context.commit('UPDATE_SUPPORT', response.data)
        return response.data
    },
    async destroySupport (context, id) {
        const response = await axios.get(`/api/v1/support/delete/${id}`)
        context.commit('REMOVE_SUPPORT', id)
        return response.data.meta
    },
    async getMembershipsActive (context) {
      const response = await axios.get('/api/v1/support/active')
      context.commit('GET_SUPPORT', response.data)
      return response.data.meta
  },
  }
}
