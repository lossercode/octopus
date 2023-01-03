import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Home,
      name: "home",
    },
    {
      path: "/space/",
      redirect: "/space/myworks",
      component: () => import("../views/Space/index.vue"),
      name: "space",
      children: [
        {
          path: "myworks",
          name: "myworks",
          component: () => import("../views/Space/myworks.vue"),
        },
        {
          path: "new",
          name: "new",
          component: () => import("../views/Space/new.vue"),
        },
      ],
    },
  ],
});

export default router;
