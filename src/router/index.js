import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/home.vue";
import MyApp from "../examples/my-app/home.vue";
import SupportTools from "../examples/support-tools/home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/support/",
    name: "Support",
    component: SupportTools,
  },
  {
    path: "/myapp/",
    name: "MyApp",
    component: MyApp
  },
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
