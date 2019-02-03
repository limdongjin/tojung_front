import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    product: {},
    products: {}
  },
  getters: {
    product: state => state.product,
    products: state => state.products
  },
  mutations: {
    SET_PRODUCT: (state, product) => {
      state.product = product;
    },
    SET_PRODUCTS: (state, products) => {
      state.products = products;
    }
  },
  actions: {
    SET_PRODUCT: async (context, name) => {
      const baseURI = "https://tojung.me";
      await axios
        .get(`${baseURI}/api/product/1`, {
          headers: {
            "Access-Control-Allow-Origin": "*"
          }
        })
        .then(res => {
          context.commit("SET_PRODUCT", res.data.product);
        });
    },
    SET_PRODUCTS: async (context, name) => {
      const baseURI = "https://tojung.me";
      await axios
        .get(`${baseURI}/api/product`, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,POST,OPTIONS"
          }
        })
        .then(res => {
          context.commit("SET_PRODUCTS", res.data.products);
        });
    }
  }
});
