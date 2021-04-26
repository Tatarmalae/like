import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    LikeID: [],
  },
  mutations: {
    ADD_LIKE(state, id) {
      state.LikeID = id;
    },
    REMOVE_LIKE(state, id) {
      state.LikeID = id;
    },
  },
  actions: {
    ADD_LIKE({ commit }, id) {
      commit('REMOVE_LIKE', id);
      if (id > 0) {
        commit('ADD_LIKE', id);
      }
    },
    REMOVE_LIKE({ commit }, id) {
      commit('REMOVE_LIKE', id);
    },
  },
  getters: {
    LikeID: (state) => state.LikeID,
  },
});
