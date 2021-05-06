import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MyApp from "../views/my-app/home.vue";
import SupportHome from "../views/support-tools/home.vue";
import SupportPulse from "../views/support-tools/pulse.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    }
  },
  {
    path: "/support/",
    name: "Support",
    component: SupportHome,
  },
  {
    path: "/support/pulse",
    name: "Social Pulse",
    component: SupportPulse,
  },
  {
    path: "/myapp",
    name: "MyApp",
    component: MyApp
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
