import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    product: {},
    products: {},
    product_option: {}
  },
  getters: {
    product: state => state.product,
    products: state => state.products,
    product_option: state => state.product_option
  },
  mutations: {
    SET_PRODUCT: (state, product) => {
      state.product = product;
    },
    SET_PRODUCTS: (state, products) => {
      state.products = products;
    },
    SET_PRODUCT_OPTION: (state, product_option) =>{
      state.product_option = product_option
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
    },
    SET_PRODUCT_OPTION: async (context, path) => {
      const baseURI = "https://tojung.me";
      await axios
        .get(`${baseURI}/api/${path}`, {
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            "Access-Control-Allow-Origin": "*"
          }
        })
        .then(res => {
          context.commit("SET_PRODUCT_OPTION", res.data.product_option);
        })
        .catch(e => console.log(e));
    }
  }
});
