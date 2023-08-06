import {
  Router,
  RouterOptions,
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  RouteComponent,
} from "vue-router";

const HomePage: RouteComponent = () => import("@/pages/HomePage.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: HomePage,
  },
];

const option: RouterOptions = {
  routes,
  history: createWebHistory(),
};

const router: Router = createRouter(option);

export default router;
