<template>
  <div v-if="screens.lg" class="desktop-menu">
    <a-flex class="desktop-menu">
      <a-image :src="fav" />
      <a-menu v-model:selectedKeys="selectedKeys" mode="horizontal" :style="{ width: '80%' }">
        <a-menu-item v-for="item in menu" :key="item.key">
          <a-typography-text class="font-title-1">{{ item.menuTitle }}</a-typography-text>
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
                  itemMenu.name.toUpperCase()
                }}</a-typography-title>
                <a-typography-text
                  v-if="itemMenu.child && itemMenu.child.length > 0"
                  v-for="leaf in itemMenu.child"
                  class="cursor-pointer"
                >
                  {{ leaf.name.toUpperCase() }}
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
    <a-flex justify="flex-end" class="mobile-menu">
      <a-dropdown
        :trigger="['click']"
        overlayClassName="mobile-menu-dropdown"
        @openChange="openChange"
      >
        <CloseOutlined v-if="iconShow" />
        <MenuOutlined v-else />
        <template #overlay>
          <a-menu mode="inline" @click="handleClick" :open-keys="openKeys">
            <a-sub-menu
              v-for="item in menu"
              :key="item.key"
              :title="item.menuTitle"
              @title-click="handleSubMenuClick"
            ></a-sub-menu>
            <!-- @title-click="handleSubMenuClick" -->
          </a-menu>
        </template>
      </a-dropdown>
    </a-flex>
  </div>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue';
import fav from '@/assets/logo.png';
import { Grid, MenuProps } from 'ant-design-vue';

const useBreakpoint = Grid.useBreakpoint;
const screens = useBreakpoint();
const selectedKeys = ref<number[]>([1]);
const openKeys = ref<number[]>([]);
const iconShow = ref<boolean>(false);
const baseStyle: CSSProperties = {
  padding: '0px 20px',
  // height: '24px',
  lineHeight: '50px',
  height: '50px'
};
const menu = [
  {
    key: 1,
    menuTitle: 'HOME',
    menu: []
  },
  {
    key: 2,
    menuTitle: 'PERSONAL',
    menu: [
      {
        key: 1,
        name: 'Mobile',
        path: '',
        child: [
          {
            key: 1,
            name: 'Mobile Prepaid',
            child: [
              {
                key: 1,
                name: 'Prepaid Roaming'
              },
              {
                key: 2,
                name: 'Rates'
              },
              {
                key: 3,
                name: 'ALL in WAN'
              },
              {
                key: 4,
                name: 'WAO Data'
              },
              {
                key: 5,
                name: 'WAO! Tok & SMS'
              },
              {
                key: 6,
                name: 'WAO! Mifi'
              },
              {
                key: 7,
                name: 'Tourist SIM'
              }
            ]
          },
          {
            key: 2,
            name: 'Mobile Post-paid',
            child: [
              {
                key: 1,
                name: 'Roaming'
              },
              {
                key: 2,
                name: 'Mobile Postpaid Plans'
              }
            ]
          },
          {
            key: 3,
            name: 'Services',
            child: [
              {
                key: 1,
                name: 'VAS Services'
              },
              {
                key: 2,
                name: 'Voice Mail'
              },
              {
                key: 3,
                name: 'BESFREN'
              },
              {
                key: 4,
                name: 'M2YU'
              }
            ]
          },
          {
            key: 4,
            name: 'Phones & Devices',
            child: [
              {
                key: 1,
                name: 'Smartphone'
              },
              {
                key: 2,
                name: 'Tablets'
              },
              {
                key: 3,
                name: 'FAQ'
              },
              {
                key: 4,
                name: 'Accessories'
              }
            ]
          },
          {
            key: 5,
            name: 'eSim',
            child: [
              {
                key: 1,
                name: 'eSIM Info'
              },
              {
                key: 2,
                name: 'Mobile Postpaid Plans'
              }
            ]
          }
        ]
      },
      {
        key: 2,
        name: 'Broadband',
        path: '',
        child: [
          {
            key: 1,
            name: 'Mobile',
            child: [
              {
                key: 1,
                name: 'LTE Plans'
              },
              {
                key: 2,
                name: '3G+ PLANS'
              },
              {
                key: 3,
                name: 'Student Pack'
              }
            ]
          },
          {
            key: 2,
            name: 'Fixed',
            child: [
              {
                key: 1,
                name: 'UNLIMITED PLANS'
              }
            ]
          },
          {
            key: 3,
            name: 'SERVICES',
            child: [
              {
                key: 1,
                name: 'EMAIL SETTING'
              },
              {
                key: 2,
                name: 'WEBMAIL'
              },
              {
                key: 3,
                name: 'SPEEDTEST'
              }
            ]
          }
        ]
      },
      {
        key: 3,
        name: 'Landline',
        path: '',
        child: [
          {
            key: 1,
            name: 'Home Plans',
            child: [
              {
                key: 1,
                name: 'Home Plans'
              }
            ]
          }
        ]
      },
      {
        key: 4,
        name: 'BUNDLE',
        path: '',
        child: [
          {
            key: 1,
            name: 'Home Bundle',
            child: [
              {
                key: 1,
                name: 'Home Bundle'
              }
            ]
          }
        ]
      },
      {
        key: 5,
        name: 'MVATU',
        path: '',
        child: [
          {
            key: 1,
            name: 'M-VATU',
            child: [
              {
                key: 1,
                name: 'M-VATU'
              }
            ]
          },
          {
            key: 2,
            name: 'INTERNATIONAL MONEY TRANSFER',
            child: [
              {
                key: 2,
                name: 'INTERNATIONAL MONEY TRANSFER'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    key: 3,
    menuTitle: 'BUSINESS',
    menu: [
      {
        key: 1,
        name: 'Broadband',
        path: '',
        child: [
          {
            key: 1,
            name: 'Mobile',
            child: [
              {
                key: 1,
                name: 'Business LTE Plans'
              }
            ]
          },
          {
            key: 2,
            name: 'Fixed',
            child: [
              {
                key: 1,
                name: 'UNLIMITED SOLUTIONS'
              }
            ]
          },
          {
            key: 3,
            name: 'Satellite',
            child: [
              {
                key: 1,
                name: 'V-SAT'
              }
            ]
          }
        ]
      },
      {
        key: 2,
        name: 'FIXED LANDLINE',
        path: '',
        child: [
          {
            key: 1,
            name: 'Business Plans',
            child: [
              {
                key: 1,
                name: 'Fixed Landline Business'
              }
            ]
          }
        ]
      },
      {
        key: 3,
        name: 'BUNDLE',
        path: '',
        child: [
          {
            key: 1,
            name: 'Business Bundle',
            child: [
              {
                key: 1,
                name: 'Business Bundle'
              }
            ]
          }
        ]
      },
      {
        key: 4,
        name: 'Enterprise',
        path: '',
        child: [
          {
            key: 1,
            name: 'Enterprise',
            child: [
              {
                key: 1,
                name: 'PABX'
              },
              {
                key: 2,
                name: 'IPLC'
              },
              {
                key: 3,
                name: 'FIBRE WAN'
              },
              {
                key: 4,
                name: 'Domain Name'
              },
              {
                key: 5,
                name: 'Mail'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    key: 4,
    menuTitle: 'ABOUT VODAFONE',
    menu: [
      {
        key: 1,
        name: 'Community Services',
        path: ''
      },
      {
        key: 2,
        name: 'Our Network',
        path: ''
      },
      {
        key: 3,
        name: 'About Us',
        path: ''
      },
      {
        key: 4,
        name: 'Promotions',
        path: ''
      },
      {
        key: 5,
        name: 'General Terms and Conditions',
        path: ''
      },
      {
        key: 6,
        name: 'My Vodafone App General Terms and Conditions',
        path: ''
      },
      {
        key: 7,
        name: 'My Vodafone App Privacy and Policy',
        path: ''
      }
    ]
  },
  {
    key: 5,
    menuTitle: 'CAREERS',
    menu: []
  }
];

const openChange = (open: any) => {
  iconShow.value = open;

  console.log(open, '===============>open');
};

const childMenu = computed(() => {
  const list = menu.find((item) => item.key === selectedKeys.value[0])?.menu;
  return list;
});

const handleClick: MenuProps['onClick'] = (e) => {
  console.log('click', e);
};

const handleSubMenuClick = (e: any, key: any) => {
  // const latestOpenKey = Number(keys.find((key) => openKeys.value.indexOf(key) === -1));
  // if ([1, 2, 3, 4, 5].indexOf(latestOpenKey) === -1) {
  //   openKeys.value = keys;
  // } else {
  //   openKeys.value = latestOpenKey ? [latestOpenKey] : [];
  // }
  // console.log(keys, '===========>openKeys.value');
  console.log(key, `Clicked on submenu ${key}`);
};

const handleSubMenuItemClick: MenuProps['onClick'] = ({ key }) => {
  console.log(`Clicked on submenu item ${key}`);
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
}
</style>
