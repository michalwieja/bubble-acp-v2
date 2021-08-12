const redirectToLoginPage = (vm) => {
  if (vm.$route.meta.no_auth) {
    return;
  }
  vm.$router.push({ name: 'login' });
};

export default {
  namespaced: true,
  state: {
    session: {}
  },
  mutations: {
    SET_USER_SESSION(state, payload) {
      state.session = payload;
    }
  },
  actions: {
    async login(_, vm) {
      const res = await vm.$apiCall('auth', 'login', vm.body);
      if (res.success) {
        _.commit('SET_USER_SESSION', res);
        vm.$router.push({ path: '/nodes' });
      }
      if (res.error) return;
    },
    async logout(_, vm) {
      const res = await vm.$apiCall('auth', 'logout');
      _.commit('SET_USER_SESSION', {});
      vm.$router.push({ name: 'login' });
    },
    async getSession(_, vm) {
      const res = await vm.$apiCall('auth', 'me');
      if (res.session && res.session.user_id) {
        _.commit('SET_USER_SESSION', res.session);
      } else {
        redirectToLoginPage(vm);
      }
    }
  },
  getters: {
    session: (state) => state.session

  }
};
