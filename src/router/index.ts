import {
  Router,
  RouterOptions,
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  RouteComponent,
} from "vue-router";

import { start, done } from "@/utils/nprogress";

const HomePage: RouteComponent = () => import("@/pages/HomePage.vue");
const NotFound: RouteComponent = () => import("@/pages/NotFound.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const option: RouterOptions = {
  routes,
  history: createWebHistory(),
};

const router: Router = createRouter(option);

router.beforeEach(() => {
  start();
});

router.afterEach(() => {
  done();
});

export default router;
