import axios from 'axios';
import { apiCall } from 'src/apiCall/apiCall';
import Vue from 'vue';

export default {
  namespaced: true,
  state: {
    config: {}
  },
  actions: {
    async setConfig(_, router) {
      const { data } = await axios.get('https://api.bubble.casa/config');
      _.commit('SET_CONFIG', data)

      Vue.prototype.$apiCall = apiCall(data, router);
    }
  },
  mutations: {
    SET_CONFIG(state, payload) {
      state.config = payload;
    }
  },
  getters: {
    config: (state) => state.config
  }
};
