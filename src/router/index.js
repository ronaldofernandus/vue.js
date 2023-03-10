import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Foods from "../views/Foods.vue";
import FoodDetail from "../views/FoodDetail.vue";
import Keranjang from "../views/Keranjang.vue";

import Result from "../views/Result.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/foods",
    name: "foods-item",
    component: Foods,
  },
  {
    path: "/foods/:id",
    name: "FoodDetail",
    component: FoodDetail,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Keranjang,
  },

  {
    path: "/result",
    name: "Results-cart",
    component: Result,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
