import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
 
  {
    path: "/details/:id",
    name: "details",
    component: () => import("../components/game/Details"),
    props:true
  },
  //r404
  {
    path:'/:catchAll(.*)',
    name:'NotFound',
    component: () => import("../views/404"),

  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
