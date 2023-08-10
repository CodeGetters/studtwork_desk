import {
  Router,
  RouterOptions,
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  RouteComponent,
} from "vue-router";

import { start, done } from "@/utils/nprogress";

// 不必要的懒加载
import HomePage from "@/pages/HomePage.vue";
import IndexLay from "@/layout/IndexLay.vue";
const BlogPage: RouteComponent = () => import("@/pages/BlogPage.vue");
const ProjectPage: RouteComponent = () => import("@/pages/ProjectPage.vue");
const DemoPage: RouteComponent = () => import("@/pages/DemoPage.vue");
const ViewArticle: RouteComponent = () => import("@/pages/ViewArticle.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: IndexLay,
    redirect: "/home",
    children: [
      { path: "/home", component: HomePage },
      { path: "/blog", component: BlogPage },
      { path: "/project", component: ProjectPage },
      { path: "/demo", component: DemoPage },
      { path: "/viewArticle", component: ViewArticle },
    ],
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
