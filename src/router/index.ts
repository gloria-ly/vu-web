import type { App } from 'vue';
import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { asyncLayoutImport, asyncViewImport } from '@/router/helper/asyncComponentImport';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Home',
      public: false
    },
    component: asyncLayoutImport('index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '主页'
        },
        component: asyncViewImport('home.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from) => {
  //条件
  // if(pass){
  // console.log('pass')
  //   // 不再使用next()放行
  // }else{
  //     return false
  // }
});

export default router;
