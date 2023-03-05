import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "../stores/user";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: () => import("../views/PageNotFound.vue"),
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
      meta: {
        title: "About",
      },
    },
    {
      path: "/events",
      name: "events-list",
      component: () => import("../views/EventsListView.vue"),
      meta: {
        requiresAuth: true,
        title: "Events",
      },
    },
    {
      path: "/venue",
      name: "venue",
      component: () => import("../views/VenueDetailsView.vue"),
      meta: {
        title: "Venue Details",
      },
    },
    {
      path: "/signin",
      name: "signin",
      component: () => import("../views/SignInView.vue"),
      meta: {
        title: "Sign In",
      },
    },
    {
      path: "/update/:contestId",
      name: "update",
      component: () => import("../views/UpdateContestView.vue"),
      meta: {
        requiresAuth: true,
        title: "Update Event",
      },
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("../views/AdminView.vue"),
      meta: {
        requiresAuth: true,
        requiresAdmin: true,
        title: "Admin Panel",
      },
    },
    {
      path: "/addevent",
      name: "addevent",
      component: () => import("../views/AddEventView.vue"),
      meta: {
        requiresAuth: true,
        requiresAdmin: true,
        title: "Add Event",
      },
    },
    {
      path: "/editevent/:eventId",
      name: "editevent",
      component: () => import("../views/EditEventView.vue"),
      meta: {
        requiresAuth: true,
        requiresAdmin: true,
        title: "Edit Event",
      },
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../views/SignUpView.vue"),
      meta: {
        requiresAuth: true,
        requiresAdmin: true,
        title: "Sign Up",
      },
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

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = `${to.meta.title} | Planke`;
  } else {
    document.title = "Planke | The Scoreboard App";
  }
});

export default router;
