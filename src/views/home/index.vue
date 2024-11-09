<template>
  <Carousel :list="topList" />
  <a-flex class="top-1" justify="center" align="center">
    <a-typography-text class="font-title-22 text-white-color"> Together We Can</a-typography-text>
    <div class="button-1 font-title-14 cursor-pointer" @click="goToPage('promotions')">
      OUR OFFERS
    </div>
  </a-flex>
  <a-row class="top-2" :gutter="[10, 24]">
    <a-col
      v-for="item in top1List"
      :key="item.key"
      :md="12"
      :sm="12"
      :xs="24"
      :lg="24 / top1List.length"
    >
      <a-flex align="center" vertical class="content">
        <div class="icon-wrapper" @click="goToPage(item.name)">
          <img :src="item.url" />
        </div>
        <a-typography-text class="font-title-22" @click="goToPage(item.name)">{{
          item.title
        }}</a-typography-text>
      </a-flex>
    </a-col>
  </a-row>
  <div class="top-3">
    <a-row class="content" justify="center">
      <a-col :lg="18" :md="24">
        <a-row :gutter="[0, 24]">
          <a-col
            class="item"
            v-for="item in top2List"
            :key="item.key"
            :md="24 / top2List.length"
            :sm="24"
            :xs="24"
          >
            <a-card hoverable style="height: 100%">
              <div class="title mt-2">
                <a-typography-text class="font-title-22">{{ item.title }}</a-typography-text>
              </div>
              <div class="price font-title-40">{{ item.price }}<sup>VT</sup></div>
              <div class="description">
                <div v-for="leaf in item.description">
                  <a-typography-text v-if="leaf" class="font-title-22">{{
                    leaf
                  }}</a-typography-text>
                  <div v-else style="color: #fff">
                    {{ '-' }}
                  </div>
                </div>
              </div>
              <div class="button-2 font-title-14 cursor-pointer" @click="goToPage(item.name)">
                GET STARTED
              </div>
            </a-card>
          </a-col>
        </a-row>
        <div class="button-3 font-title-18 cursor-pointer mt-3" @click="goToPage('home-bundle')">
          browse more plans
        </div>
      </a-col>
    </a-row>
  </div>
  <div class="top-4">
    <div class="content-carousel">
      <a-row class="content">
        <a-col :lg="12" :md="24" :sm="24">
          <Carousel>
            <template v-for="item in top3ContentList">
              <div class="show-content">
                <div>
                  <a-typography-text class="font-title-40 text-white-color">{{
                    item.title
                  }}</a-typography-text>
                </div>
                <div v-for="leaf in item.content" class="typography">
                  <a-typography-text
                    class="font-title-14 text-white-color mt-2"
                    v-if="leaf.type === 'sub'"
                    >{{ leaf.content }}
                  </a-typography-text>
                  <a-typography-text
                    class="font-title-18 text-white-color mt-2"
                    v-if="leaf.type === 'normal'"
                  >
                    {{ leaf.content }}</a-typography-text
                  >
                </div>
                <div
                  class="button-4 font-title-18 cursor-pointer mt-3"
                  @click="goToPage(item.name)"
                >
                  Read More
                </div>
              </div>
            </template>
          </Carousel>
        </a-col>
      </a-row>
    </div>
    <a-row>
      <a-col :lg="12" :md="24" :sm="24" :offset="screens.lg ? 12 : 0">
        <Carousel :list="top3List" :dots="false" img-class="max-height" />
      </a-col>
    </a-row>
  </div>
  <div class="top-5">
    <a-row class="content" justify="center">
      <a-col :span="24" class="font-title-40 m-3"
        >What <span class="text-color-red">can we help</span> you with?</a-col
      >
      <a-col :lg="20" :md="24">
        <a-row :gutter="[0, 24]" justify="center">
          <a-col
            class="item"
            v-for="item in top4List"
            :key="item.key"
            :lg="4"
            :md="8"
            :sm="12"
            :xs="24"
            @click="item.path ? (route.path = item.path) : goToPage(item.name)"
          >
            <a-card hoverable style="height: 100%">
              <img :src="item.url" />
              <div class="title mt-2">
                <a-typography-text class="font-title-18">{{ item.title }}</a-typography-text>
              </div>
            </a-card>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </div>
  <img :src="middleImg4" width="100%" />
  <div class="top-6">
    <a-row class="content" justify="center">
      <a-col :span="24" class="font-title-40 m-3">
        Our <span class="text-color-red">Best Deal</span>
      </a-col>
      <a-col :lg="20" :md="24" class="m-3">
        <Swiper :list="top5List" :slidesPer="screens.lg ? 3 : screens.md ? 2 : 1"> </Swiper>
      </a-col>
    </a-row>
  </div>
  <Carousel :list="top6List" img-class="max-height" />
  <div class="top-7">
    <a-row justify="center">
      <a-col :lg="18" :md="22" :sm="22" :xs="20" class="m-3">
        <a-row :gutter="[24, 24]">
          <a-col v-for="item in top7List" :md="8" :sm="24">
            <img :src="item.url" />
            <div v-for="leaf in item.content" class="mt-1">
              <a-typography-text v-if="leaf.type === 'title'" class="text-bold-500 font-title-22">{{
                leaf.content
              }}</a-typography-text>
              <a-typography-text v-if="leaf.type === 'content'" class="font-title-14">{{
                leaf.content
              }}</a-typography-text>
            </div>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </div>
  <hr />
  <div class="top-8">
    <a-row class="content" justify="center">
      <a-col :span="24" class="font-title-40 m-3"
        >How <span class="text-color-red">Can We Help?</span></a-col
      >
      <a-col :lg="20" :md="24">
        <a-row :gutter="[24, 24]" justify="center">
          <a-col :md="10" :sm="20" :xs="20">
            <div class="back p-3 text-align-left">
              <div>
                <img :src="bottomImg7" style="max-width: 80px" />
                <a-typography-text class="font-title-30">BECOME OUR CUSTOMER</a-typography-text>
              </div>
              <a-input-search enter-button="CALL ME" />
              <div>
                <a-typography-text class="font-title-14"
                  >By clicking "Call me" you agree to be contacted by the merchant
                  offer.</a-typography-text
                >
              </div>
            </div>
          </a-col>
          <a-col :md="5" :sm="20" :xs="20">
            <div class="back p-3">
              <img :src="bottomImg8" />
              <div>
                <a-typography-text class="font-title-30">Visit Our Store</a-typography-text>
              </div>
              <div>
                <a-typography-text class="font-title-14">Find nearest store</a-typography-text>
              </div>
            </div>
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
import { Grid } from 'ant-design-vue';
import Carousel from '@/components/Carousel/index.vue';
import Swiper from '@/components/Swiper/index.vue';
import headerImg from '@/assets/image/slider-94.jpg';
import headerImg1 from '@/assets/image/slider-95.jpg';
import headerImg2 from '@/assets/image/slider-96.png';
import headerImg3 from '@/assets/image/slider-97.jpg';
import topImg1 from '@/assets/image/mobile_prepaid.jpg';
import topImg2 from '@/assets/image/mobile_postpaid.jpg';
import topImg3 from '@/assets/image/broadbrand.jpg';
import middleImg1 from '@/assets/image/docs-67.jpg';
import middleImg2 from '@/assets/image/docs-67.jpg';
import middleImg3 from '@/assets/image/about_image.jpg';
import middleImg4 from '@/assets/image/home_testimonial_photo.jpg';
import serviceImg1 from '@/assets/image/service-1.png';
import serviceImg2 from '@/assets/image/service-2.png';
import serviceImg3 from '@/assets/image/service-3.png';
import serviceImg4 from '@/assets/image/service-4.png';
import serviceImg5 from '@/assets/image/service-7.png';
import serviceImg6 from '@/assets/image/service-8.png';
import serviceImg7 from '@/assets/image/service-9.png';
import serviceImg8 from '@/assets/image/service-10.png';
import serviceImg9 from '@/assets/image/service-11.png';
import dealImg1 from '@/assets/image/docs-86.png';
import dealImg2 from '@/assets/image/docs-87.png';
import dealImg3 from '@/assets/image/docs-88.png';
import bottomImg1 from '@/assets/image/docs-54.jpg';
import bottomImg2 from '@/assets/image/docs-55.jpg';
import bottomImg3 from '@/assets/image/docs-91.jpg';
import bottomImg4 from '@/assets/image/docs-48.png';
import bottomImg5 from '@/assets/image/docs-49.png';
import bottomImg6 from '@/assets/image/docs-50.png';
import bottomImg7 from '@/assets/image/phone_color-eeeeee.gif';
import bottomImg8 from '@/assets/image/location.png';
const useBreakpoint = Grid.useBreakpoint;
const screens = useBreakpoint();
const { t } = useI18n();
const router = useRouter();
const route = useRoute();
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
    description: ['', '', '', ''],
    name: 'student-pack'
  },
  {
    key: '2',
    title: 'SIM Only Offer',
    price: '3000',
    description: ['Voice, SMS, Data', 'International Calls', 'Free Device', '24 months contract'],
    name: 'mobile-postpaid-plans'
  },
  {
    key: '3',
    title: 'Business bundle',
    price: '8695',
    description: ['Unlimited Internet', 'Fixed Voice', 'MiFi Data', 'Mobile Postpaid'],
    name: 'business-bundle'
  }
];

const top3List = [
  {
    key: '1',
    url: middleImg1
  },
  {
    key: '2',
    url: middleImg2
  },
  {
    key: '3',
    url: middleImg3
  }
];

const top3ContentList = [
  {
    key: '1',
    title: 'ABOUT US',
    name: 'about-us',
    content: [
      {
        type: 'sub',
        content:
          "Telecom Vanuatu Limited established in 1978 and is Vanuatu's first provider for Landline, GSM, Fibre Internet and 4G+ (Mobile Internet)."
      },
      {
        type: 'normal',
        content:
          'At Vodafone Vanuatu, we are committed to help our customers and partners discover new experiences and possibilities in the ever changing technological world.'
      }
    ]
  },
  {
    key: '2',
    title: 'Community Services',
    name: 'community-services',
    content: [
      {
        type: 'normal',
        content:
          'Community development is one of the main passion of Vodafone Vanuatu. We are committed to promote Healthier communities through sports, youth engagement activities and health consciousness programs.'
      }
    ]
  },
  {
    key: '3',
    title: 'Our Network',
    name: 'our-network',
    content: [
      {
        type: 'normal',
        content: 'Need help with our network?'
      },
      {
        type: 'normal',
        content: 'You have come to the right place.'
      }
    ]
  }
];

const top4List = [
  {
    key: '1',
    url: serviceImg1,
    title: 'Billing and Payments',
    path: 'https://gptoweb.vodafone.com.vu/portal/secureShowCustomer.do'
  },
  {
    key: '2',
    url: serviceImg2,
    title: 'Tariffs and Services',
    name: 'rates'
  },
  {
    key: '3',
    url: serviceImg3,
    title: 'Internet and Data',
    name: 'mobile-wao-data'
  },
  {
    key: '4',
    url: serviceImg4,
    title: 'Phones, tablets and devices',
    name: 'handsets'
  },
  {
    key: '5',
    url: serviceImg5,
    title: 'Visitor SIM',
    name: 'visitor-pack'
  },
  {
    key: '6',
    url: serviceImg6,
    title: 'Connect to 4G',
    name: 'our-network'
  },
  {
    key: '7',
    url: serviceImg7,
    title: 'Recharge',
    name: 'rates'
  },
  {
    key: '8',
    url: serviceImg8,
    title: 'Shop',
    name: 'store-locator'
  },
  {
    key: '9',
    url: serviceImg9,
    title: 'Instructions and settings',
    name: 'rates'
  }
];

const top5List = [
  {
    key: '1',
    url: dealImg1,
    content: [
      { type: 'sub', content: 'Best Deal On' },
      { type: 'title', content: 'DEVICES' },
      { type: 'name', content: 'Samsung Galaxy J2Core' },
      { type: 'button', content: 'VIEW MORE' }
    ],
    name: 'handsets'
  },
  {
    key: '2',
    url: dealImg2,
    content: [
      { type: 'sub', content: 'Best Deal On' },
      { type: 'title', content: 'Tablets' },
      { type: 'name', content: 'Samsung Galaxy TabA' },
      { type: 'button', content: 'VIEW MORE' }
    ],
    name: 'tablets'
  },
  {
    key: '3',
    url: dealImg3,
    content: [
      { type: 'sub', content: 'Best Deal On' },
      { type: 'title', content: 'Accessories' },
      { type: 'name', content: 'Power Bank' },
      { type: 'button', content: 'VIEW MORE' }
    ],
    name: 'accessories'
  },
  {
    key: '4',
    url: dealImg1,
    content: [
      { type: 'sub', content: 'Best Deal On' },
      { type: 'title', content: 'DEVICES' },
      { type: 'name', content: 'Samsung Galaxy J2Core' },
      { type: 'button', content: 'VIEW MORE' }
    ],
    name: 'handsets'
  },
  {
    key: '5',
    url: dealImg2,
    content: [
      { type: 'sub', content: 'Best Deal On' },
      { type: 'title', content: 'Tablets' },
      { type: 'name', content: 'Samsung Galaxy TabA' },
      { type: 'button', content: 'VIEW MORE' }
    ],
    name: 'tablets'
  },
  {
    key: '6',
    url: dealImg3,
    content: [
      { type: 'sub', content: 'Best Deal On' },
      { type: 'title', content: 'Accessories' },
      { type: 'name', content: 'Power Bank' },
      { type: 'button', content: 'VIEW MORE' }
    ],
    name: 'accessories'
  }
];

const top6List = [
  {
    key: '1',
    url: bottomImg1
  },
  {
    key: '2',
    url: bottomImg2
  },
  {
    key: '3',
    url: bottomImg3
  }
];

const top7List = [
  {
    key: '1',
    url: bottomImg4,
    content: [
      { type: 'title', content: 'M-VATU' },
      {
        type: 'content',
        content:
          'Vodafone Mobile Money Transfer Service. Send & Withdraw Cash, Buy Credit, Bill Payment on the go. Easy & convenient.'
      }
    ]
  },
  {
    key: '2',
    url: bottomImg5,
    content: [
      { type: 'title', content: 'COMMUNITY ENGAGEMENT' },
      {
        type: 'content',
        content:
          'We are committed to the communities in Vanuatu. Addressing Sports, Music, Youth engagement, health to build stronger and healthier communities.'
      }
    ]
  },
  {
    key: '3',
    url: bottomImg6,
    content: [
      { type: 'title', content: 'OUR VALUES' },
      {
        type: 'content',
        content:
          'Our core values rest on Innovation, Customer Excellence, Creativity, Professionalism, Quality of service and lead the market by being highly competitive.'
      }
    ]
  }
];

onMounted(() => {
  console.log(route, route.meta, route.meta.img);
});

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
    .price {
      color: #e60000;
    }
    .button-2 {
      background-color: #e60000;
      color: #fff;
    }
  }
  .item {
    padding-right: 15px;
    padding-left: 15px;
    .title {
      padding-bottom: 15px;
      margin-bottom: 20px;
      text-transform: uppercase;
      position: relative;
      &::before {
        content: '';
        width: 50px;
        height: 2px;
        display: inline-block;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        background-color: #e60000;
      }
    }
    .price {
      display: inline-block;
    }
    .description {
      margin: 20px 10px;
    }
    .button-2 {
      border-radius: 3px;
      color: #e60000;
      padding: 10px 20px;
      text-transform: uppercase;
      background-color: #fff;
      border: solid 1px #e60000;
      display: inline-block;
      &:hover {
        background-color: #e60000;
        color: #fff;
        box-shadow: 0px 5px 5px rgba(15, 17, 21, 0.2);
      }
    }
  }
  .button-3 {
    border-radius: 3px;
    color: #e60000;
    padding: 10px 20px;
    text-transform: uppercase;
    background-color: #fff;
    border: solid 1px #e60000;
    display: inline-block;
    &:hover {
      background-color: #e60000;
      color: #fff;
      box-shadow: 0px 5px 5px rgba(15, 17, 21, 0.2);
    }
  }
}
.top-4 {
  position: relative;
  height: 100%;
  .content-carousel {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0);
    z-index: 6;
    &::before {
      content: '';
      position: absolute;
      left: -150px;
      top: 0;
      bottom: 0;
      right: calc(50% - 150px);
      z-index: 2;
      transform: skew(-20deg);
      background: #e60000;
    }
    .content {
      position: relative;
      z-index: 7;
      margin: 3rem;
      .max-height {
        max-height: 450px;
      }
      :deep(.slick-dots) {
        position: relative;
        justify-content: left;
        /* left: 0; */
        bottom: -25px;
      }
      .show-content {
        text-align: left;
        .typography {
          margin-top: 20px;
        }
      }
      .button-4 {
        border-radius: 3px;
        color: #fff;
        padding: 10px 20px;
        text-transform: uppercase;
        background-color: #e60000;
        border: solid 1px #fff;
        display: inline-block;
        &:hover {
          box-shadow: 0px 5px 5px rgba(15, 17, 21, 0.2);
        }
      }
    }
  }
}
.top-5 {
  margin: 40px 0px;
  background-color: #f5f5f5;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  .item {
    padding-right: 15px;
    padding-left: 15px;
    .title {
      padding-bottom: 15px;
      margin-bottom: 20px;
      text-transform: uppercase;
      position: relative;
      &::before {
        content: '';
        width: 50px;
        height: 2px;
        display: inline-block;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        background-color: #e60000;
      }
    }
  }
}
.top-6 {
  position: relative;
  z-index: 0;
  background: #fff;
  &::before {
    content: '';
    position: absolute;
    left: 15%;
    right: 15%;
    top: 40%;
    padding-top: 2%;
    background-color: rgba(1, 35, 50, 0.075);
    box-shadow: 0 0 150px rgba(50, 65, 70, 1);
    border-radius: 50%;
    z-index: 1;
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 56%;
    top: 0;
    background-color: #fff;
    z-index: 2;
  }
  .content {
    position: relative;
    z-index: 3;
  }
}
hr {
  max-width: 1440px;
}
.top-8 {
  margin-bottom: 3rem;
  .back {
    background: #eeeeee;
    vertical-align: top;
    border-radius: 5px;
  }
}
@media only screen and (max-width: 991px) {
  .top-4 {
    display: flex;
    flex-direction: column-reverse;
    .content-carousel {
      position: relative;
      &::before {
        left: 0;
        right: 0;
        transform: skew(0deg);
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .top-3 {
    .content {
      max-width: 900px;
    }
    .item {
      .button-2 {
        padding: 8px 12px;
      }
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
