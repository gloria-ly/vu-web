<template>
  <div v-if="screens.lg" class="desktop-menu">
    <a-flex class="desktop-menu">
      <a-image :src="fav" height="64px" />
      <a-menu v-model:selectedKeys="selectedKeys" mode="horizontal" :style="{ width: '80%' }">
        <a-menu-item v-for="item in menu" :key="item.key">
          <a-typography-text class="font-title-1">{{ item.title.toUpperCase() }}</a-typography-text>
        </a-menu-item>
      </a-menu>
    </a-flex>
    <a-flex wrap="wrap" class="child-menu">
      <!-- <a-flex> -->
      <div
        v-if="childMenu && childMenu.length > 0"
        v-for="(item, index) in childMenu"
        :key="item.key"
        :style="{ ...baseStyle }"
      >
        <a-dropdown overlayClassName="menu-dropdown">
          <a-typography-text @click.prevent class="cursor-pointer font-title-2">{{
            item.name.toUpperCase()
          }}</a-typography-text>
          <template #overlay>
            <a-flex gap="large" justify="flex-start">
              <a-flex
                :vertical="true"
                v-if="item.child && item.child.length > 0"
                v-for="itemMenu in item.child"
              >
                <a-typography-title :level="5">{{
                  itemMenu.title.toUpperCase()
                }}</a-typography-title>
                <a-typography-text
                  v-if="itemMenu.child && itemMenu.child.length > 0"
                  v-for="leaf in itemMenu.child"
                  class="cursor-pointer"
                >
                  {{ leaf.title.toUpperCase() }}
                </a-typography-text>
              </a-flex>
            </a-flex>
          </template>
        </a-dropdown>
      </div>
      <!-- </a-flex> -->
    </a-flex>
  </div>

  <div v-else>
    <a-flex justify="space-between" class="mobile-menu">
      <a-image :src="fav" height="64px" />
      <CloseOutlined v-if="iconShow" @click="openChange(false)" />
      <MenuOutlined v-else @click="openChange(true)" />
      <a-menu class="mobile-menu-background" v-if="iconShow" mode="inline" @click="handleClick">
        <template v-for="item in menu">
          <a-menu-item :key="item.key" :name="item.name" v-if="item.menu && item.menu.length === 0">
            {{ item.title.toUpperCase() }}
          </a-menu-item>
          <a-sub-menu
            :key="item.name"
            v-if="item.menu && item.menu.length > 0"
            @title-click="handleSubMenuClick"
            :title="item.title.toUpperCase()"
          >
            <template v-for="itemMenu in item.menu">
              <a-menu-item v-if="!itemMenu.child" :key="itemMenu.key" :name="itemMenu.name">
                {{ itemMenu.title.toUpperCase() }}
              </a-menu-item>
              <a-sub-menu
                v-else="itemMenu.child"
                :key="itemMenu.name"
                @title-click="handleSubMenuClick"
                :title="itemMenu.title.toUpperCase()"
              >
                <a-menu-item v-for="leaf in itemMenu.child" :key="leaf.key" :name="leaf.name">
                  {{ leaf.title.toUpperCase() }}
                </a-menu-item>
              </a-sub-menu>
            </template>
          </a-sub-menu>
        </template>
      </a-menu>
    </a-flex>
  </div>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue';
import fav from '@/assets/brand_logo_02.png';
import { Grid, MenuProps } from 'ant-design-vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const useBreakpoint = Grid.useBreakpoint;
const screens = useBreakpoint();
const selectedKeys = ref<string[]>(['1']);
const iconShow = ref<boolean>(false);
const baseStyle: CSSProperties = {
  padding: '0px 20px',
  // height: '24px',
  lineHeight: '50px',
  height: '50px'
};
const menu = [
  {
    key: '1',
    name: 'home',
    title: 'home',
    menu: []
  },
  {
    key: '2',
    title: 'personal',
    name: 'personal',
    menu: [
      {
        key: '2-1',
        title: 'mobile',
        name: 'mobile',
        child: [
          {
            key: '2-1-1',
            title: 'mobile prepaid',
            name: 'mobile-prepaid',
            child: [
              {
                key: '2-1-1-1',
                title: 'prepaid roaming',
                name: 'prepaid-roaming'
              },
              {
                key: '2-1-1-2',
                title: 'rates',
                name: 'rates'
              },
              {
                key: '2-1-1-3',
                title: 'all in wan',
                name: 'all-in-wan'
              },
              {
                key: '2-1-1-4',
                title: 'wao data',
                name: 'wao-data'
              },
              {
                key: '2-1-1-5',
                title: 'wao! tok & sms',
                name: 'wao-tok-sms'
              },
              {
                key: '2-1-1-6',
                title: 'WAO! Mifi',
                name: 'wao-mifi'
              },
              {
                key: '2-1-1-7',
                title: 'Tourist SIM',
                name: 'tourist-sim'
              }
            ]
          },
          {
            key: '2-1-2',
            title: 'Mobile Post-paid',
            name: 'mobile-post-paid',
            child: [
              {
                key: '2-1-2-1',
                title: 'roaming',
                name: 'roaming'
              },
              {
                key: '2-1-2-2',
                title: 'Mobile Postpaid Plans',
                name: 'mobile-postpaid-plans'
              }
            ]
          },
          {
            key: '2-1-3',
            title: 'services',
            name: 'services',
            child: [
              {
                key: '2-1-3-1',
                title: 'VAS Services',
                name: 'vas-services'
              },
              {
                key: '2-1-3-2',
                title: 'Voice Mail',
                name: 'voice-mail'
              },
              {
                key: '2-1-3-3',
                title: 'BESFREN',
                name: 'besfren'
              },
              {
                key: '2-1-3-4',
                name: 'm2yu',
                title: 'M2YU'
              }
            ]
          },
          {
            key: '2-1-4',
            title: 'Phones & Devices',
            name: 'phones-devices',
            child: [
              {
                key: '2-1-4-1',
                title: 'Smartphone',
                name: 'smartphone'
              },
              {
                key: '2-1-4-2',
                title: 'Tablets',
                name: 'tablets'
              },
              {
                key: '2-1-4-3',
                title: 'FAQ',
                name: 'faq'
              },
              {
                key: '2-1-4-4',
                title: 'Accessories',
                name: 'accessories'
              }
            ]
          },
          {
            key: '2-1-5',
            name: 'eSim',
            title: 'esim',
            child: [
              {
                key: '2-1-5-1',
                name: 'esim-info',
                title: 'eSIM Info'
              },
              {
                key: '2-1-5-2',
                title: 'mobile-postpaid-plans',
                name: 'Mobile Postpaid Plans'
              }
            ]
          }
        ]
      },
      {
        key: '2-2',
        name: 'broadband',
        title: 'broadband',
        child: [
          {
            key: '2-2-1',
            name: 'mobile',
            title: 'Mobile',
            child: [
              {
                key: '2-2-1-1',
                title: 'lte-plans',
                name: 'LTE Plans'
              },
              {
                key: '2-2-1-2',
                name: '3G-plans',
                title: '3G+ PLANS'
              },
              {
                key: '2-2-1-3',
                title: 'Student Pack',
                name: 'student-pack'
              }
            ]
          },
          {
            key: '2-2-2',
            name: 'fixed',
            title: 'Fixed',
            child: [
              {
                key: '2-2-2-1',
                title: 'UNLIMITED PLANS',
                name: 'unlimited-plans'
              }
            ]
          },
          {
            key: '2-2-3',
            name: 'services',
            title: 'SERVICES',
            child: [
              {
                key: '2-2-3-1',
                title: 'EMAIL SETTING',
                name: 'email-setting'
              },
              {
                key: '2-2-3-2',
                title: 'WEBMAIL',
                name: 'web-mail'
              },
              {
                key: '2-2-3-3',
                title: 'SPEEDTEST',
                name: 'speed-test'
              }
            ]
          }
        ]
      },
      {
        key: '2-3',
        name: 'landline',
        title: 'landline',
        child: [
          {
            key: '2-3-1',
            title: 'Home Plans',
            name: 'home-plans',
            child: [
              {
                key: '2-3-1-1',
                title: 'Home Plans',
                name: 'home-plans'
              }
            ]
          }
        ]
      },
      {
        key: '2-4',
        name: 'bundle',
        title: 'BUNDLE',
        child: [
          {
            key: '2-4-1',
            title: 'Home Bundle',
            name: 'home-bundle',
            child: [
              {
                key: '2-4-1-1',
                title: 'Home Bundle',
                name: 'home-bundle'
              }
            ]
          }
        ]
      },
      {
        key: '2-5',
        name: 'm-vatu',
        title: 'MVATU',
        path: '',
        child: [
          {
            key: '2-5-1',
            title: 'M-VATU',
            name: 'm-vatu',
            child: [
              {
                key: '2-5-1-1',
                title: 'M-VATU',
                name: 'm-vatu'
              }
            ]
          },
          {
            key: '2-5-2',
            title: 'INTERNATIONAL MONEY TRANSFER',
            name: 'international money transfer',
            child: [
              {
                key: '2-5-2-1',
                title: 'INTERNATIONAL MONEY TRANSFER',
                name: 'international money transfer'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    key: '3',
    name: 'business',
    title: 'BUSINESS',
    menu: [
      {
        key: '3-1',
        name: 'broadband',
        title: 'Broadband',
        child: [
          {
            key: '3-1-1',
            title: 'Mobile',
            name: 'mobile',
            child: [
              {
                key: '3-1-1-1',
                title: 'Business LTE Plans',
                name: 'business-lte-plans'
              }
            ]
          },
          {
            key: '3-1-2',
            name: 'fixed',
            title: 'Fixed',
            child: [
              {
                key: '3-1-2-1',
                title: 'UNLIMITED SOLUTIONS',
                name: 'unlimited-solutions'
              }
            ]
          },
          {
            key: '3-1-3',
            name: 'Satellite',
            title: 'Satellite',
            child: [
              {
                key: '3-1-3-1',
                title: 'V-SAT',
                name: 'v-sat'
              }
            ]
          }
        ]
      },
      {
        key: '3-2',
        name: 'fixed-landline',
        title: 'FIXED LANDLINE',
        child: [
          {
            key: '3-2-1',
            title: 'Business Plans',
            name: 'business-plans',
            child: [
              {
                key: '3-2-1-1',
                title: 'Fixed Landline Business',
                name: 'fixed-landline-business'
              }
            ]
          }
        ]
      },
      {
        key: '3-3',
        name: 'bundle',
        title: 'BUNDLE',
        child: [
          {
            key: '3-3-1',
            name: 'business-bundle',
            title: 'Business Bundle',
            child: [
              {
                key: '3-3-1-1',
                name: 'business-bundle',
                title: 'Business Bundle'
              }
            ]
          }
        ]
      },
      {
        key: '3-4',
        name: 'enterprise',
        title: 'Enterprise',
        child: [
          {
            key: '3-4-1',
            name: 'enterprise',
            title: 'Enterprise',
            child: [
              {
                key: '3-4-1-1',
                title: 'PABX',
                name: 'pabx'
              },
              {
                key: '3-4-1-2',
                title: 'IPLC',
                name: 'iplc'
              },
              {
                key: '3-4-1-3',
                title: 'FIBRE WAN',
                name: 'fiber-wan'
              },
              {
                key: '3-4-1-4',
                title: 'Domain Name',
                name: 'domain-name'
              },
              {
                key: '3-4-1-5',
                title: 'Mail',
                name: 'mail'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    key: '4',
    name: 'about-vodafone',
    title: 'ABOUT VODAFONE',
    menu: [
      {
        key: '4-1',
        name: 'community-services',
        title: 'Community Services'
      },
      {
        key: '4-2',
        name: 'our-network',
        title: 'Our Network'
      },
      {
        key: '4-3',
        name: 'about-us',
        title: 'About Us'
      },
      {
        key: '4-4',
        name: 'promotions',
        title: 'Promotions'
      },
      {
        key: '4-5',
        name: 'general-terms-and-conditions',
        title: 'General Terms and Conditions'
      },
      {
        key: '4-6',
        name: 'my-vodafone-app-general-terms-and-conditions',
        title: 'My Vodafone App General Terms and Conditions'
      },
      {
        key: '4-7',
        name: 'my-vodafone-app-privacy-and-policy',
        title: 'My Vodafone App Privacy and Policy'
      }
    ]
  },
  {
    key: '5',
    name: 'careers',
    title: 'CAREERS',
    menu: []
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

const openChange = (open: any) => {
  iconShow.value = open;
  console.log(open, '===============>open');
};

const childMenu = computed(() => {
  const list = menu.find((item) => item.key === selectedKeys.value[0])?.menu;
  return list;
});

const handleClick: MenuProps['onClick'] = (event) => {
  console.log('click', event.item.name);
  if (event.item.name) {
    goToPage(event.item.name);
  }
};

const handleSubMenuClick = (e: any, key: any) => {
  if (e.target.innerText) {
    // goToPage(key);
  }
  console.log(e, key, `Clicked on submenu ${key}`);
};
</script>

<style lang="css" scoped>
.desktop-menu {
  padding: 2px 0px;
  .ant-typography {
    line-height: unset;
  }
  .child-menu {
    height: max-content;
    background: #ffffff;
    margin: 0px 132px;
  }
  .ant-menu-horizontal {
    border-bottom: unset;
  }
}
.mobile-menu {
  height: 64px;
  font-size: 24px;
  color: #e60000;
  padding: 0px 20px;
  .mobile-menu-background {
    background-color: #fff;
    box-shadow:
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05);
    max-height: 500px;
    height: max-content;
    overflow-y: auto;
    z-index: 9999;
    position: absolute;
    top: 64px;
    text-align: left;
    left: 0px;
  }
}
</style>
