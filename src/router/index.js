import * as VueRouter from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../view/home.vue"),
  },
  {
    path: "/stake",
    name: "stake",
    component: () => import("../view/stake.vue"),
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

export default router;
