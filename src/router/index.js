import { createRouter, createWebHistory } from "vue-router";

import { LoginCallback } from "@okta/okta-vue";
import HomeView from "@/views/Home.vue";

export default createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/login/callback",
      component: LoginCallback,
    },
  ],
});
