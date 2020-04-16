import Vue from "vue";
import VueRouter from "vue-router";
import Basic from "../views/Basic.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Basic",
    component: Basic,
  },
  {
    path: "/intermediate",
    name: "Intermediate",
    component: () => import("../views/Intermediate.vue"),
  },
  {
    path: "/advanced",
    name: "Advanced",
    component: () => import("../views/Advanced.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
