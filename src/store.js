import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    product: {},
    products: {},
    product_option: {},
    token: "",
    user: {}
  },
  getters: {
    product: state => state.product,
    products: state => state.products,
    product_option: state => state.product_option,
    token: state => state.token,
    user: state => state.user
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user;
    },
    SET_PRODUCT: (state, product) => {
      state.product = product;
    },
    SET_PRODUCTS: (state, products) => {
      state.products = products;
    },
    SET_PRODUCT_OPTION: (state, product_option) => {
      state.product_option = product_option;
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    }
  },
  actions: {
    SET_USER: (context, name) => {
      const baseURI = "https://api.tojung.me";
      let getCookie = function(cookieName) {
        var name = cookieName + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == " ") {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      };
      let headers = {
        "Content-Type": "application/json",
        "X-USER-TOKEN": getCookie("token")
      };
      axios
        .get(`${baseURI}/api/check_user`, {
          headers: headers
        })
        .then(res => {
          context.commit("SET_USER", res.data.user);
          context.commit("SET_TOKEN", getCookie("token"));
        })
        .catch(e => {
          context.commit("SET_USER", {});
          context.commit("SET_TOKEN", "");
        });
    },
    SET_TOKEN: async (context, token) => {
      context.commit("SET_TOKEN", token);
    },
    SET_PRODUCT: async (context, path) => {
      const baseURI = "https://api.tojung.me";

      let getCookie = await function(cookieName) {
        var name = cookieName + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == " ") {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      };
      let headers = await {
        "Content-Type": "application/json",
        "X-USER-TOKEN": getCookie("token")
      };
      await context.commit("SET_TOKEN", getCookie("token"));
      // console.log(headers);
      await axios
        .get(`${baseURI}/api/${path}`, {
          headers: headers
        })
        .then(res => {
          context.commit("SET_PRODUCT", res.data.product);
        })
        .catch(e => console.log(e));
    },
    SET_PRODUCTS: async (context, name) => {
      const baseURI = "https://api.tojung.me";

      let getCookie = await function(cookieName) {
        var name = cookieName + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == " ") {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      };
      await context.commit("SET_TOKEN", getCookie("token"));
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
      const baseURI = "https://api.tojung.me";

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
    },
    SET_PRODUCTS_SEARCH_RESULT: async (context, path) => {
      const baseURI = "https://api.tojung.me";

      await axios
        .get(`${baseURI}/api/${path}`, {
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            "Access-Control-Allow-Origin": "*"
          }
        })
        .then(res => {
          context.commit("SET_PRODUCTS_SEARCH_RESULT", res.data.product_option);
        })
        .catch(e => console.log(e));
    }
  }
});
