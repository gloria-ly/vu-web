<script setup lang="ts">
import { ref } from 'vue';
import { CommonStore } from '@/store/modules/common';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const commonStore = CommonStore();
const sd = 111;
commonStore.setUserInfo('修改userInfo');
</script>

<template>
  <h1>{{ commonStore.userInfo + $t('menu.userManage') }}</h1>
  <a-button type="primary">1231231</a-button>
  <a-date-picker />
  <a-form>
    <a-form-item> <a-input></a-input> </a-form-item>
  </a-form>
</template>

<style scoped></style>
