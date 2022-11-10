import Vue from "vue";
import VueRouter from "vue-router";
import BoardList from "../views/BoardList.vue";
import BoardWrite from "../views/BoardWrite.vue";
import BoardView from "../views/BoardView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: BoardList,
  },
  {
    path: "/write",
    name: "write",
    component: BoardWrite,
  },
  {
    path: "/view",
    name: "view",
    component: BoardView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
