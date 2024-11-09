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
        redirect: '/personal/prepaid-roaming',
        component: asyncLayoutImport('DetailLayout/index.vue'),
        children: [
          {
            path: '/personal/prepaid-roaming',
            name: 'prepaid-roaming',
            meta: {
              title: 'prepaid-roaming',
              img: '/src/assets/image/personal/prepaid-roaming.jpg'
            },
            component: asyncViewImport('personal/prepaidRoaming/index.vue')
          },
          {
            path: '/personal/rates',
            name: 'rates',
            meta: {
              title: 'rates',
              img: '/src/assets/image/personal/rates.jpg'
            },
            component: asyncViewImport('personal/rates/index.vue')
          }
        ]
      },
      {
        path: '/business',
        name: 'business',
        meta: {
          title: 'business'
        },
        redirect: '/business/business-lte-plans',
        component: asyncLayoutImport('DetailLayout/index.vue'),
        children: [
          {
            path: '/business/business-lte-plans',
            name: 'business-lte-plans',
            meta: {
              title: 'business-lte-plans',
              img: '/src/assets/image/business/business-lte-plans.jpg'
            },
            component: asyncViewImport('business/businessLtePlans/index.vue')
          }
        ]
      },
      {
        path: '/about-vodafone',
        name: 'about-vodafone',
        meta: {
          title: 'about-vodafone'
        },
        redirect: '/about-vodafone/community-services',
        component: asyncLayoutImport('DetailLayout/index.vue'),
        children: [
          {
            path: '/about-vodafone/community-services',
            name: 'community-services',
            meta: {
              title: 'community-services',
              img: '/src/assets/image/about/community-services.jpg'
            },
            component: asyncViewImport('about-vodafone/communityServices/index.vue')
          }
        ]
      },
      {
        path: '/careers',
        name: 'careers',
        meta: {
          title: 'careers'
        },
        component: asyncLayoutImport('DetailLayout/index.vue'),
        children: [
          {
            path: '/careers',
            name: 'careers',
            meta: {
              title: 'careers',
              img: '/src/assets/image/careers/careers.jpg'
            },
            component: asyncViewImport('careers/index.vue')
          }
        ]
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
