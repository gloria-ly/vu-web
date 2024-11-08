import type { App } from 'vue';
import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { asyncLayoutImport, asyncViewImport } from '@/router/helper/asyncComponentImport';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    redirect: '/home',
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
          title: 'home',
          img: '/src/assets/image/slider-94.jpg'
        },
        component: asyncViewImport('home/index.vue')
      },
      {
        path: '/personal',
        name: 'personal',
        meta: {
          title: 'personal'
        },
        component: asyncLayoutImport('DetailLayout/index.vue'),
        children: [
          {
            path: '/personal/prepaid-roaming',
            name: 'prepaid-roaming',
            meta: {
              title: 'prepaid-roaming',
              img: '/src/assets/image/slider-94.jpg'
            },
            component: asyncViewImport('personal/prepaidRoaming/index.vue')
          }
        ]
      },
      {
        path: '/business',
        name: 'business',
        meta: {
          title: 'business'
        },
        component: asyncViewImport('business/index.vue')
      },
      {
        path: '/about-vodafone',
        name: 'about-vodafone',
        meta: {
          title: 'about-vodafone'
        },
        component: asyncViewImport('about-vodafone/index.vue')
      },
      {
        path: '/careers',
        name: 'careers',
        meta: {
          title: 'careers'
        },
        component: asyncViewImport('careers/index.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
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
