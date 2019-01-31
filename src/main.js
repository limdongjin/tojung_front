import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "bootstrap";

// import plugins individually - require exports-loader
import "bootstrap/js/dist/modal";
import "bootstrap/js/dist/tooltip";
import "bootstrap/js/dist/carousel";
import "bootstrap/scss/bootstrap.scss";
import "expose-loader?$!expose-loader?jQuery!jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick.min.js";
import "vue-popperjs/dist/vue-popper.css";
import "vue-popperjs/dist/vue-popper.min.js";
import "@/assets/regacy.scss";
// import Regacy from "@/assets/regacy.js";

// global.$ = $;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
