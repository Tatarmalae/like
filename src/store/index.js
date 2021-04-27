import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favourites: [],
  },
  mutations: {
    ADD_LIKE(state, id) {
      state.favourites.push(id);
    },
    REMOVE_LIKE(state, id) {
      let index = state.favourites.findIndex((fav) => fav === id);
      state.favourites.splice(index, 1);
    },
  },
  actions: {
    TOGGLE_LIKE({ commit }, payload) {
      if (payload.flag) {
        commit('ADD_LIKE', payload.id);
      } else {
        commit('REMOVE_LIKE', payload.id);
      }
    },
  },
  getters: {
    favourites: (state) => state.favourites,
  },
});
