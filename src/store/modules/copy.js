import axios from 'axios'

export default {
  namespaced: true,
  state: {
    copies: [],
    copy: null,
    plans: []
  },
  getters: {},
  mutations: {
    SET_COPIS (state, data) {
        state.copies.unshift(data)
    },
    GET_COPIES (state, data) {
      state.copies = data
    },
    GET_COPY (state, data) {
        state.copy = data
    },
    GET_PLANS (state, data) {
      state.plans = data
    }
  },
  actions: {
    async getCopies (context, category) {
        const response = await axios.get(`/api/v1/copy/${category}`)
        context.commit('GET_COPY', response.data)
        return response.data
    },
    async getCopiesAdmin (context, payload) {
      const response = await axios.get(`/api/v1/copy/admin/${payload.username}/${payload.type}/${payload.page}`)
      context.commit('GET_COPIES', response.data)
      return response.data
  },
    async storeCopy (context, data) {
        console.log({data})
        const response = await axios.post('/api/v1/copy', data)
        context.commit('GET_COPY', response.data)
        return response.data
    },
    async updateCopy (context, payload) {
        const response = await axios.post(`/api/v1/copy/update/${payload.id}`, payload.data)
        context.commit('GET_COPY', response.data)
        return response.data
    },
    async destroyCopy (context, id) {
        const response = await axios.get(`/api/v1/copy/delete/${id}`)
        context.commit('REMOVE_COPI', id)
        return response.data.meta
    },
    async getPlans (context) {
      const response = await axios.get(`/api/v1/copy-plans`)
      context.commit('GET_PLANS', response.data)
      return response.data
    },
    async searchActive (context, plan) {
      const response = await axios.get(`/api/v1/copy-plans/check/${plan}`)
      return response.data
    }
  }
}
