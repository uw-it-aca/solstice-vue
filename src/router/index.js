import { createWebHistory, createRouter } from "vue-router";

import Home from "../pages/index.vue";
import Topbar from "../pages/topbar/index.vue";
import Sidebar from "../pages/sidebar/index.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/topbar",
    name: "Topbar",
    component: Topbar,
    pathToRegexpOptions: { strict: true },
  },
  {
    path: "/sidebar",
    name: "Sidebar",
    component: Sidebar,
    pathToRegexpOptions: { strict: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
