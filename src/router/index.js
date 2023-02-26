import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "../stores/user";
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
      path: "/update/:contestId",
      name: "update",
      component: () => import("../views/UpdateContestView.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/events",
      name: "events-list",
      component: () => import("../views/EventsListView.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/venue",
      name: "venue",
      component: () => import("../views/VenueDetailsView.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("../views/AdminView.vue"),
      meta: {
        requiresAuth: true,
        requiresAdmin: true,
      },
    },
    {
      path: "/addevent",
      name: "addevent",
      component: () => import("../views/AddEventView.vue"),
      meta: {
        requiresAuth: true,
        requiresAdmin: true,
      },
    },
    {
      path: "/editevent/:eventId",
      name: "editevent",
      component: () => import("../views/EditEventView.vue"),
      meta: {
        requiresAuth: true,
        requiresAdmin: true,
      },
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../views/SignUpView.vue"),
      meta: {
        requiresAuth: true,
        requiresAdmin: true,
      },
    },
    {
      path: "/signin",
      name: "signin",
      component: () => import("../views/SignInView.vue"),
    },
  ],
});

// Navigation Guard
router.beforeEach((to, _, next) => {
  const userStore = useUserStore();
  if (to.meta.requiresAuth) {
    if (userStore.isAuthenticated) {
      next();
    } else {
      next({ name: "signin" });
    }
  } else {
    next();
  }
});

router.beforeEach((to, _, next) => {
  const userStore = useUserStore();
  if (to.meta.requiresAdmin) {
    if (userStore.user.user_role == "admin") {
      next();
    } else {
      next({ name: "events-list" });
    }
  } else {
    next();
  }
});

export default router;
