import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [],
    selectedBook: {}
  },
  mutations: {
    addBooks(state, books) {
      state.books = books;
    },
    selectBook(state, book) {
      state.selectedBook = book;
    }
  },
  actions: {
    async getBooks(ctx) {
      const response = await fetch('./assets/childrensbooks.json');
      const data = await response.json();
      ctx.commit('addBooks', data.books);
      console.log('Childrens books', data);
    }
  }
});