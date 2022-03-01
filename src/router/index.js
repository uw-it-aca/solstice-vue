import { createWebHistory, createRouter } from "vue-router";

//import Home from "../pages/index.vue";
//import MyApp from "../examples/my-app/home.vue";
//import SupportTools from "../examples/support-tools/home.vue";
import routes from "~pages";

/*
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/support",
    name: "Support",
    component: SupportTools,
    pathToRegexpOptions: { strict: true },
  },
  {
    path: "/myapp",
    name: "MyApp",
    component: MyApp,
    pathToRegexpOptions: { strict: true },
  },
];
*/

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
