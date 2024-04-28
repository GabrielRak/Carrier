import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Sign_in from "../views/Sign_in.vue";
import Sign_up from "../views/Sign_up.vue";
import Parcels from "../views/Parcels.vue";
import Send from "../views/Send.vue";
import Profile from "../views/Profile.vue";
import Carrer from "../views/Carrer.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/login",
      name: "Sign_in",
      component: Sign_in,
    },
    {
      path: "/register",
      name: "Register",
      component: Sign_up,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/parcels",
      name: "parcels",
      component: Parcels,
      meta: { requiresAuth: true },
    },
    {
      path: "/send",
      name: "send",
      component: Send,
      meta: { requiresAuth: true },
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      meta: { requiresAuth: true },
    },
    {
      path: "/carrer",
      name: "carrer",
      component: Carrer,
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach((to, form, next) => {
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !store.state.auth.authorized
  ) {
    next({ name: "Sign_in" });
  } else {
    next();
  }
});

export default router;
