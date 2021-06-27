import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    },
  },
  {
    path: "/class",
    name: "Class",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/Class.vue");
    },
  },
  {
    path: "/style",
    name: "Style",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/Style.vue");
    },
  },
  {
    path: "/compute",
    name: "Computed",
    component: function () {
      return import( "../views/计算属性/compute.vue");
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
