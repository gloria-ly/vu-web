<template>
  <a-row>
    <a-col :md="{ span: 10, offset: 7 }" :sm="10" :xs="20"><CardOne /> </a-col>
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
// const commonStore = CommonStore();
// const sd = 111;
// commonStore.setUserInfo('修改userInfo');
</script>
<style lang="css" scoped></style>
