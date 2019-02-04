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
    SET_PRODUCT: async (context, path) => {
      const baseURI = "https://tojung.me";
      await axios
        .get(`${baseURI}/api/${path}`, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(res => {
          context.commit("SET_PRODUCT", res.data.product);
        })
        .catch(e => console.log(e));
    },
    SET_PRODUCTS: async (context, name) => {
      const baseURI = "https://tojung.me";
      await axios
        .get(`${baseURI}/api/product`, {
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            "Access-Control-Allow-Origin": "*"
          }
        })
        .then(res => {
          context.commit("SET_PRODUCTS", res.data.products);
        })
        .catch(e => console.log(e));
    }
  }
});
