<script setup lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import en from 'ant-design-vue/es/locale/en_US';

const lang = zhCN;
</script>

<template>
  <a-config-provider
    :locale="lang"
    :theme="{
      token: {
        colorPrimary: '#e60000'
      }
    }"
  >
    <router-view></router-view>
  </a-config-provider>
</template>

<style scoped></style>
