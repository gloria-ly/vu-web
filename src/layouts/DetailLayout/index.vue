<template>
  <a-space direction="vertical" :style="{ width: '100%' }" :size="[0, 48]">
    detaillayoutPage
    <router-view v-slot="{ Component, route }">
      <component :is="Component" :key="route" />
    </router-view>
  </a-space>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue';
const headerStyle: CSSProperties = {
  textAlign: 'center',
  // color: '#fff',
  height: 'max-content',
  paddingInline: '0px',
  // lineHeight: '64px'
  backgroundColor: '#fff',
  position: 'sticky',
  top: 0,
  zIndex: 100
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
