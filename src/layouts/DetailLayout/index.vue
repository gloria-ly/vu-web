<template>
  <a-space direction="vertical" :style="{ width: '100%' }" :size="[0, 48]">
    <div style="position: relative">
      <img :src="route.meta.img" style="width: 100%" />
      <a-flex gap="middle" vertical class="breadcrumb-position">
        <a-typography-text class="font-title-30 breadcrumb">{{
          breadcrumbData[breadcrumbData.length - 1]
        }}</a-typography-text>
        <a-breadcrumb>
          <a-breadcrumb-item v-for="item in breadcrumbData" :onclick="goToPage(item)">
            <a-typography-text class="font-title-22 breadcrumb">{{ item }}</a-typography-text>
          </a-breadcrumb-item>
        </a-breadcrumb>
      </a-flex>
    </div>

    <router-view v-slot="{ Component, route }">
      <component :is="Component" :key="route" />
    </router-view>
  </a-space>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue';

const route = useRoute();
const router = useRouter();
const breadcrumbData = route.path.split('/').filter((item) => item !== '');
console.log(route, breadcrumbData, '==============>route');

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
:deep(.ant-breadcrumb .ant-breadcrumb-separator) {
  color: #fff;
}
.breadcrumb-position {
  position: absolute;
  bottom: 20%;
  width: 100%;

  display: flex;
  align-items: center;
}
.breadcrumb {
  cursor: pointer;
  color: #fff;
  &:hover {
    color: #e60000;
  }
}
</style>
