import axios from 'axios'

export default {
  namespaced: true,
  state: {
    team: [],
    users: []
  },
  getters: {},
  mutations: {
    GET_TEAM (state, data) {
      state.team = data
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
    async getTeamBinary (context, username) {
      const response = await axios.get(`/api/v1/user/team/binary/${username}`)
      context.commit('GET_TEAM', response.data)
      return response.data
    },
    async getTeamUnilevel (context, username) {
      const response = await axios.get(`/api/v1/user/team/unilevel/${username}`)
      context.commit('GET_TEAM', response.data)
      return response.data
    },
    async getIdUser (context, id) {
      const response = await axios.get(`/api/v1/user/username/${id}`)
      return response.data
    },
    async getTeamCounter (context) {
      const response = await axios.get(`/api/v1/user/team/counter`)
      return response.data
    },
    async setLinked (context, data) {
      const response = await axios.post(`/api/v1/user/linkAccount`, data)
      return response.data
    },
    async getUsers (context, payload) {
      const response = await axios.get(`/api/v1/user/admin/${payload.username}/${payload.page}`)
      context.commit('GET_USERS', response.data.data)
      return response.data.meta
    },
    async checkRange (context) {
      const response = await axios.get(`/api/v1/user/checkRange`)
      return response.data
    },
  }
}
