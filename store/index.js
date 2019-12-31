import consola from 'consola';

export const state = () => ({
  newTitles: [],
});

export const mutations = {
  SET_NEW_TITLES(state, newTitles) {
    state.newTitles = newTitles;
  },
};

export const actions = {
  async FETCH_BOOK_TITLES({ commit }, titleFromUser) {
    try {
      consola.ready({
        message: `titleFromUser in store action: ${titleFromUser}`,
        badge: true,
      });
      const { data } = await this.$axios.$post('/title', titleFromUser);
      commit('newTitles', data);
    } catch {
      consola.error({
        message: 'Something went wrong',
        badge: true,
      });
    }
  },
};
