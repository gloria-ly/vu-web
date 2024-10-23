<template>
  <Carousel :list="topList" :autoplay="false" />
  <a-flex class="top-1" justify="center" align="center">
    <a-typography-text class="font-title-1 text-white-color"> Together We Can</a-typography-text>
    <div class="button-1 font-title-3 cursor-pointer" @click="goToPage('promotions')">
      OUR OFFERS
    </div>
  </a-flex>
  <a-row class="top-2" :gutter="[10, 24]">
    <a-col
      v-for="item in top1List"
      :key="item.id"
      :md="12"
      :sm="12"
      :xs="24"
      :lg="24 / top1List.length"
    >
      <a-flex align="center" vertical class="content">
        <div class="icon-wrapper" @click="goToPage(item.name)">
          <img :src="item.url" />
        </div>
        <a-typography-text class="font-title-1" @click="goToPage(item.name)">{{
          item.title
        }}</a-typography-text>
      </a-flex>
    </a-col>
  </a-row>
  <div class="top-3">
    <a-row class="content" align="center">
      <a-col :lg="18" :md="24">
        <a-row :gutter="[0, 24]">
          <a-col
            class="item"
            v-for="item in top2List"
            :key="item.id"
            :md="24 / top2List.length"
            :sm="24"
            :xs="24"
          >
            <a-card hoverable>
              <div>
                {{ item.title }}
              </div>
              <div>
                {{ item.price }}
              </div>
              <div>
                {{ item.description }}
              </div>
            </a-card>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { CommonStore } from '@/store/modules/common';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

import Carousel from '@/components/Carousel/index.vue';
import headerImg from '@/assets/image/slider-94.jpg';
import headerImg1 from '@/assets/image/slider-95.jpg';
import headerImg2 from '@/assets/image/slider-96.png';
import headerImg3 from '@/assets/image/slider-97.jpg';
import topImg1 from '@/assets/image/mobile_prepaid.jpg';
import topImg2 from '@/assets/image/mobile_postpaid.jpg';
import topImg3 from '@/assets/image/broadbrand.jpg';

const { t } = useI18n();
const router = useRouter();
// const commonStore = CommonStore();
// const sd = 111;
// commonStore.setUserInfo('修改userInfo');
const topList = [
  {
    key: '1',
    url: headerImg
  },
  {
    key: '2',
    url: headerImg1
  },
  {
    key: '3',
    url: headerImg2
  },
  {
    key: '4',
    url: headerImg3
  }
];

const top1List = [
  {
    key: '1',
    url: topImg1,
    title: 'Subscribe to Data Plan',
    name: 'wao-data'
  },
  {
    key: '2',
    url: topImg2,
    title: 'Subscribe to All In Wan',
    name: 'all-in-wan'
  },
  {
    key: '3',
    url: topImg3,
    title: 'Sign up Internet',
    name: 'lte-plans'
  },
  {
    key: '4',
    url: topImg1,
    title: 'Help & Support',
    name: 'contact'
  }
];

const top2List = [
  {
    key: '1',
    title: 'Student Plan',
    price: '3500',

    name: 'student-pack'
  },
  {
    key: '2',
    title: 'SIM Only Offer',
    price: '3000',
    description: 'Voice, SMS, Data International Calls Free Device 24 months contract',
    name: 'mobile-postpaid-plans'
  },
  {
    key: '3',
    title: 'Business bundle',
    price: '8695',
    description: 'Unlimited Internet Fixed Voice MiFi Data Mobile Postpaid',
    name: 'business-bundle'
  }
];

const goToPage = (name: any) => {
  router.push({
    name
    // query: {
    //   keyword: 'Vue'
    // }
  });
};
</script>
<style lang="css" scoped>
.top-1 {
  padding: 20px;

  background: #e60000;
  .button-1 {
    border-radius: 3px;
    color: #e60000;
    font-weight: bold;
    padding: 10px;
    margin-left: 20px;
    text-transform: uppercase;
    background-color: #fff;
    border: solid 1px #fff;
    &:hover {
      background-color: #e60000 !important;
      color: #fff !important;
      box-shadow: 0px 5px 5px rgba(15, 17, 21, 0.2);
      border: solid 1px #e60000;
    }
  }
}
.top-2 {
  font-weight: bold;
  height: max-content;
  padding: 40px 100px;
  background-color: #fff;
  .content {
    cursor: pointer;
    .icon-wrapper {
      border-radius: 50%;
      box-shadow: 0 2px 6px rgba(15, 17, 21, 0.25);
      width: 85px;
      height: 85px;
      margin-bottom: 15px;
      transform: translateY(0px);
      transition: all 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);
      &:hover {
        box-shadow: 0 15px 25px rgba(15, 17, 21, 0.15);
        transform: translateY(-5px);
      }
      img {
        width: 100%;
        border-radius: 50%;
      }
    }
  }
}
.top-3 {
  margin: 40px 0px;
  background-color: #f5f5f5;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  .ant-card-hoverable:hover {
    border-color: #e60000;
  }
  .item {
    padding-right: 15px;
    padding-left: 15px;
  }
}
@media only screen and (max-width: 768px) {
  .top-3 {
    .content {
      max-width: 900px;
    }
  }
}

@media only screen and (max-width: 576px) {
  .top-3 {
    .content {
      max-width: 540px;
    }
  }
}
</style>
