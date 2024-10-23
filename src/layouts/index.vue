<template>
  <a-space direction="vertical" :style="{ width: '100%' }" :size="[0, 48]">
    <a-layout>
      <a-layout-header :style="headerStyle"> <Header></Header></a-layout-header>
      <a-layout-content :style="contentStyle">
        <router-view v-slot="{ Component, route }">
          <component :is="Component" :key="route" />
        </router-view>
      </a-layout-content>
      <a-layout-footer :style="footerStyle"><Footer></Footer></a-layout-footer>
    </a-layout>
  </a-space>
</template>

<script setup lang="ts">
import Header from './Header/index.vue';
import Footer from './Footer/index.vue';

import type { CSSProperties } from 'vue';
const headerStyle: CSSProperties = {
  textAlign: 'center',
  // color: '#fff',
  height: 'max-content',
  paddingInline: '0px',
  // lineHeight: '64px'
  backgroundColor: '#fff'
};

const contentStyle: CSSProperties = {
  minHeight: '280px'
  // padding: '24px'
  // background: '#fff'
};

const footerStyle: CSSProperties = {
  textAlign: 'center',
  // color: '#fff',
  height: 'max-content',
  backgroundColor: '#000000',
  padding: 'unset',
  color: '#fff'
};
</script>
