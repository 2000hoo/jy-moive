import Vue from 'vue';
import VueRouter from 'vue-router';

// 导入路由模块
import centerRouter from '@/router/routes/center';
import cinemaRouter from "@/router/routes/cinemas";
import filmRouter from "@/router/routes/films";

Vue.use(VueRouter)

const routes = [
  // 注册路由模板
  filmRouter,
  cinemaRouter,
  centerRouter,
  {
    path: "/",
    redirect: "/films",
  }
];

const router = new VueRouter({
  mode: 'history',
  // 前缀暂时可以不使用
  // base: process.env.BASE_URL,
  routes,
})

export default router
