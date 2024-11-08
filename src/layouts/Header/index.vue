<template>
  <div v-if="screens.lg" class="desktop-menu">
    <a-flex class="desktop-menu">
      <a-image :src="fav" height="64px" />
      <a-menu
        v-model:selectedKeys="selectedKeys"
        mode="horizontal"
        :style="{ width: '80%' }"
        @click="handleClick"
      >
        <a-menu-item v-for="item in menu" :key="item.key" :name="item.name">
          <a-typography-text class="font-title-22">{{
            item.title.toUpperCase()
          }}</a-typography-text>
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
          <a-typography-text
            @click="!item.child && goToPage(item.name)"
            class="cursor-pointer font-title-18"
            >{{ item.name.toUpperCase() }}</a-typography-text
          >
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
                  @click="goToPage(leaf.name)"
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
import { menu } from '@/utils/logics.ts';
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

const goToPage = (name: any) => {
  console.log(name, '==============>gotopage');
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
