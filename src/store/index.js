import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    }
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios("https://fakestoreapi.com/products", {
        method: "GET"
      })
        .then(products => {
          console.log(products.data);
          commit("SET_PRODUCTS_TO_STATE", products.data);
          return products;
        })
        .catch(error => {
          console.log(error);
          return error;
        });
    }
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    }
  }
});
