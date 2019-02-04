import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Policy from "@/views/Policy";
import Privacy from "@/views/Privacy";
import Brand from "@/views/Brand";
import Search from "@/views/Search";
import Product from "@/views/Product";

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
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
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
    }
  ]
});
