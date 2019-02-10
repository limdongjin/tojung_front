import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Policy from "@/views/Policy";
import Privacy from "@/views/Privacy";
import Brand from "@/views/Brand";
import Search from "@/views/Search";
import Product from "@/views/Product";
import ProductOption from "@/views/ProductOption";
import Registration from "@/views/Registration";
import Login from "@/views/Login";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      childre: [
        {
          path: "/product/:id",
          name: "product",
          component: Product
        }
      ]
    },
    {
      path: "/home/policy",
      name: "policy",
      component: Policy
    },
    {
      path: "/home/privacy",
      name: "privacy",
      component: Privacy
    },
    {
      path: "/home/brand",
      name: "brand",
      component: Brand
    },
    {
      path: "/home/search",
      name: "search",
      component: Search
    },
    {
      path: "/product/:id",
      name: "product",
      component: Product
    },
    {
      path: "/product_option/:id",
      name: "product_option",
      component: ProductOption
    },
    {
      path: "/users/sign_up",
      name: "Registration",
      component: Registration
    },
    {
      path: "/users/sign_in",
      name: "Login",
      component: Login
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
