<template>
  <a-row style="margin-bottom: 60px">
    <a-col
      :md="{ span: 10, offset: 7 }"
      :sm="{ span: 16, offset: 4 }"
      :xs="{ span: 20, offset: 2 }"
    >
      <CardOne :content="content" :buttonText="buttonText" :title="title" />
    </a-col>
  </a-row>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { Grid } from 'ant-design-vue';
import CardOne from '@/views/components/CardOne/index.vue';
const useBreakpoint = Grid.useBreakpoint;
const screens = useBreakpoint();
const { t } = useI18n();
const router = useRouter();
const content = reactive([
  {
    title: 'Call to Vanuatu',
    content: '82vt/min'
  },
  {
    title: 'National call',
    content: '66vt/min'
  },
  {
    title: 'SMS to Vanuatu',
    content: '21vt/SMS'
  }
]);
const buttonText = 'Info 081111 | Terms and Conditions apply';
const title = 'Roaming via Optus Australia & Spark New Zealand at an affordable rate!';
// const commonStore = CommonStore();
// const sd = 111;
// commonStore.setUserInfo('修改userInfo');
</script>
<style lang="css" scoped></style>
