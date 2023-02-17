import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/update",
      name: "update",
      component: () => import("../views/UpdateContestView.vue"),
    },
    {
      path: "/events-list",
      name: "events-list",
      component: () => import("../views/EventsListView.vue"),
    },
  ],
});

export default router;
